import Post from "../modals/Posts.js";
import cloudinary from "../conflig/cloudinary.js";

// export const createPost = async (req, res) => {
//   try {
//     const currentUser = req.user._id;
//     const { title, content } = req.body;

//     let imageUrl = null;

//     if (req.file) {
//       const encodedImage = `data:${req.file.mimetype};base64,${req.file.buffer.toString(
//         "base64"
//       )}`;

//       const result = await cloudinary.uploader.upload(encodedImage, {
//         folder: "posts",
//         transformation: [{ width: 500, height: 500, crop: "limit" }],
//       });

//       imageUrl = result.secure_url;
//     }

//     const post = await Post.create({
//       title,
//       content,
//       image: imageUrl,
//       author: currentUser,
//     });

//     res.status(201).json(post);
//   } catch (error) {
//     console.error("error creating post", error);
//     res.status(500).json({ message: error.message });
//   }
// };


export const createPost = async (req, res) => {
  try {
    const currentUser = req.user._id;
    const { title, content } = req.body;
    let result = null;

    if (req.file) {
      // Upload using stream instead of base64
      result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: 'posts',
            transformation: { width: 500, height: 500, crop: 'limit' }
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        stream.end(req.file.buffer); // send multer buffer
      });
    }

    const post = new Post({
      title,
      content,
      image: result?.secure_url || null, // use secure_url
      author: currentUser,
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error("error creating post", error);
    res.status(400).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate({ path: "author", select: "firstName" })
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req,res,next)=>{
   
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if(!post) return res.status(400).send("not found");

    res.status(200).json({
      message:'Post deleted successfully'
    })
  } catch (error) {
    
  }
}    


export const updatePost = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "posts",
            transformation: { width: 500, height: 500, crop: "limit" },
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });

      post.image = result.secure_url;
    }

    await post.save();

    res.status(200).json({
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

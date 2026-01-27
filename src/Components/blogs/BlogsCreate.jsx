import React, { useState } from "react";
import { setTitle, setContent } from "../../PostSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCreatePostMutation } from "../rudex/postApi";

const BlogsCreate = () => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.posts.title);
  const content = useSelector((state) => state.posts.content);

  // ✅ image must be FILE, not base64
  const [image, setImage] = useState(null);

  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // store FILE
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image); // MUST match multer field
    }

    try {
      await createPost(formData).unwrap();
      console.log("Post created successfully ✅");
      alert('Post created successfully ')
    } catch (error) {
      console.error("Create post failed ❌", error);
      alert('Create post failed')
    }
  };

  return (
    <div className="flex justify-center my-5">
      <div className="font-body font-medium capitalize">
        <h1 className="font-bold py-5 text-3xl">
          add new blogs or new post
        </h1>

        <form className="flex flex-col">
          <input
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            type="text"
            placeholder="Title..."
            className="py-3 px-3 my-5 outline-none border-2 text-black border-gray-400 rounded-lg"
          />

          <textarea
            value={content}
            onChange={(e) => dispatch(setContent(e.target.value))}
            rows={5}
            placeholder="Content..."
            className="px-3 my-5 text-black outline-none border-2 border-gray-400 rounded-lg"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          <button
            onClick={handleAdd}
            disabled={isLoading}
            className="bg-primary rounded-lg py-3 mt-2 text-white capitalize font-semibold text-2xl"
          >
            {isLoading ? "Adding..." : "Add Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogsCreate;

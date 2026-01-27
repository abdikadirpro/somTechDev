import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetPostByIdQuery, useUpdatePostMutation } from "../rudex/postApi";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading } = useGetPostByIdQuery(id);
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (isLoading) return <p className="text-center">Loading...</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      await updatePost({ id, formData }).unwrap();
      navigate("/posts");
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Update Post</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-3 text-black"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 mb-3 text-black"
        rows="5"
      />

      {post.image && (
        <img
          src={post.image}
          alt="current"
          className="w-full h-40 object-cover mb-3"
        />
      )}

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-3"
      />

      <button
        disabled={isUpdating}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isUpdating ? "Updating..." : "Update"}
      </button>
    </form>
  );
};

export default UpdatePost;

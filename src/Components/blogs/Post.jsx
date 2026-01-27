import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../rudex/postApi"; // correct path

const Post = () => {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  if (isLoading) return <p className="text-center my-10">Loading posts...</p>;
  if (isError) return <p className="text-center my-10 text-red-500">Failed to load posts</p>;

  return (
    <section className="w-full font-body font-medium my-10 px-4 sm:px-6 md:px-12 flex flex-wrap gap-6">
      {posts.map((post) => (
        <div
          key={post._id}
          className="rounded-lg shadow-lg overflow-hidden flex flex-col bg-white dark:bg-gray-800 transition hover:shadow-xl
                     w-full sm:w-[80%] md:w-[45%] lg:w-[30%]"
        >
          {post.image && <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />}

          <h1 className="font-semibold capitalize py-3 text-xl text-gray-800 dark:text-white text-center underline">
            {post.title}
          </h1>

          <p className="font-light text-gray-600 dark:text-gray-300 px-4 text-sm">
            {post.content?.length > 120 ? post.content.slice(0, 120) + "..." : post.content}
          </p>

          <div className="flex justify-end items-center pr-4 pb-4 gap-1 mt-auto">
            <Link
              to={`/posts/${post._id}`}
              className="capitalize text-primary font-medium hover:underline"
            >
              read more
            </Link>
            <IoIosArrowRoundForward className="text-primary text-lg" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Post;

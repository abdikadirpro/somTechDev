import { IoIosArrowRoundForward } from "react-icons/io"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Post = () => {
  const posts = useSelector((state) => state.posts.Posts)

  return (
    <section className='w-full font-body font-medium my-10 mx-10 flex flex-row gap-10 flex-wrap'>
      {posts.map((post, index) => (
        <div
          key={index}
          className='rounded-lg shadow-xl w-[25%] h-96 justify-center text-center overflow-hidden'
        >
          <img
            src={post.image}
            alt=""
            className='w-full h-44 object-cover rounded-tl-lg rounded-tr-lg'
          />

          <h1 className='font-semibold capitalize py-3 underline text-xl'>
            {post.title}
          </h1>

          <p className='font-light text-start px-4'>
            {post.content}
          </p>

          <div className='flex justify-end items-center pr-5 pb-4'>
            <Link className='capitalize text-primary'>read more</Link>
            <IoIosArrowRoundForward className='pb-2 text-primary size-10' />
          </div>
        </div>
      ))}
    </section>
  )
}
export default Post
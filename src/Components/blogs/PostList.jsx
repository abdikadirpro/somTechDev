import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../../PostSlice'
const PostList = () => {
    const dispatch =useDispatch();
    const posts=useSelector((state)=>state.posts.Posts)
  return (
    <div className='bg-gray-white capitalize font-medium py-10 px-10 font-body '>
     <h1 className='flex justify-center align-middle text-gray-900 font-bold text-4xl'> Manage all lists....</h1>
     {
        posts.map((post,index)=>(
            <div key={index}
            className='flex flex-col text-gray-900 rounded-lg shadow-lg gap-5 my-10 px-5 w-[70%] ml-[10%] '
            >
                
                {/* <img src={post.image} className='rounded-full w-16 h-16'
                /> */}
                <h1 className='text-3xl font-bold'>{post.title}</h1>
                <p className='font-light text-2xl'>{post.content}</p>
                <div className='felx justify-end text-end p-2 capitalize gap3'>
                    <button onClick={()=>dispatch(deletePost(index))} className='px-5 capitalize text-2xl bg-red-400 text-white rounded-lg p-1'>delet</button>
                    <button className='bg-green-500 capitalize p-1 text-white m-3 rounded-lg text-2xl'>update</button>
                </div>
        </div>
        ))
     }
    </div>
  )
}

export default PostList
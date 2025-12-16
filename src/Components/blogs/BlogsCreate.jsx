import React from 'react'
import { setTitle,setContent,setImage,setAdd} from '../../PostSlice'
import { useDispatch,useSelector } from 'react-redux'
const BlogsCreate = () => {
    const dispatch=useDispatch()
    const title=useSelector((state)=>state.posts.title)
    const content=useSelector((state)=>state.posts.content)
    const image=useSelector((state)=>state.posts.image)
   
    // console.log(content)
    // console.log(title)
    // console.log(image)
   
 const handleImage = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()

  reader.onloadend = () => {
    dispatch(setImage(reader.result)) // base64 string
  }

  reader.readAsDataURL(file)
}


const handelAdd=(e)=>{
  e.preventDefault()
  dispatch(setAdd())
  console.log("data succefully aded")
}


  return (
    <div className=' flex justify-center my-5 '>
        <div className='font-body font-medium capitalize'>
        <h1 className='font-bold py-5 text-3xl'>add new blogs or new post</h1>
        <form 
        className='flex flex-col'>
            <input
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
               type="text"  placeholder='Title...' className='py-3 px-3 my-5 outline-none border-2  border-gray-400 rounded-lg' />
            <textarea
            value={content}
            onChange={(e)=>dispatch(setContent(e.target.value))} 
             id="" rows={5} placeholder='Content......' className=' px-3 my-5 outline-none border-2  border-gray-400 rounded-lg'></textarea>
            <input 
              accept="image/*"
              onChange={handleImage}

            type="file" id="file" name="file" ></input>
            <button
            onClick={handelAdd}
            className='bg-primary rounded-lg py-3 mt-2 text-white capitalize font-semibold text-2xl'>addPosts</button>
        </form>
        </div>
    </div>
  )
}

export default BlogsCreate
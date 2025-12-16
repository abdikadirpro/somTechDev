import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Posts:JSON.parse(window.localStorage.getItem('posts'))||[],
    title:"",
    content:"",
    image:null
}
const PostSlice =createSlice({
    name:"posts",
    initialState,
    reducers:{
        setTitle:(state,action)=>{
            state.title=action.payload
        },
        setContent:(state,action)=>{
            state.content=action.payload

        },
        setImage:(state,action)=>{
            state.image=action.payload
        },
        setAdd:(state)=>{
            state.Posts.push({
                title:state.title,
                content:state.content,
                image:state.image
            })
        window.localStorage.setItem('posts',JSON.stringify(state.Posts));
        state.content="",
        state.title="",
        state.image=""
        },
      deletePost:(state,action)=>{
        const index=action.payload
        state.Posts=state.Posts.filter((_,i) =>i!==index)
        localStorage.setItem("posts",JSON.stringify(state.Posts))
      }
    }
})
export default PostSlice.reducer
export const {setContent,setTitle,setImage,setAdd,deletePost}=PostSlice.actions
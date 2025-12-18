import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Abouts from "./pages/About"
import Service from "./pages/Service"
import Blogs from "./pages/Blogs"
import Contacts from "./pages/Contacts"

import Header from "./Components/home/Header"

import BlogsCreate from "./Components/blogs/BlogsCreate"
import PostList from "./Components/blogs/PostList"

import SignOut from "./Components/pricipal/SignOut"
import SignIn from "./Components/pricipal/SignIn"
import { useSelector,useDispatch } from "react-redux";


const App = () => {
   
    const darkMode = useSelector((state)=>state.posts.darkMode);
    console.log(darkMode)
  return (


<div className={darkMode ? "bg-white text-slate-700" : "bg-black text-white"}>
    <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<Abouts/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/blogs/BlogsCreate" element={<BlogsCreate/>}/>
    <Route path="/blogs/PostList" element={<PostList/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="/signup" element={<SignOut/>}/>
    <Route path="/signin" element={<SignIn/>}/>
  </Routes>
  
  </BrowserRouter>
</div>

  )
}

export default App

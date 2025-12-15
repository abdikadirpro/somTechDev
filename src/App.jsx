


import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Blogs from "./pages/Blogs"
import Header from "./Components/home/Header"
import Contacts from "./pages/Contacts"
import Abouts from "./pages/About"
import SignOut from "./Components/pricipal/SignOut"
import SignIn from "./Components/pricipal/SignIn"


const App = () => {
  return (

  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<Abouts/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="/signup" element={<SignOut/>}/>
    <Route path="/signin" element={<SignIn/>}/>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App

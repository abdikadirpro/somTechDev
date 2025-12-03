import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Blogs from "./pages/Blogs"
import Header from "./Components/home/Header"
import Contacts from "./pages/Contacts"


const App = () => {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [blogs,setBlogs]=useState([])
  const clickHandler=blog=>{
    const newBlog=[...blogs,blog]
    setBlogs(newBlog)
  }
  console.log(blogs)
 const[total,setTotal]=useState(0)
const  addedToread=(reading_time)=>{
  setTotal (total+reading_time);
 

}
console.log(total)
  return (
    <>
    <div className='max-w-7xl mx-auto'>
    <Header></Header>
   <div className='flex'>
  <Blogs clickHandler={clickHandler} addedToread={addedToread}></Blogs>
   <Bookmarks blogs={blogs} total={total}></Bookmarks>
   </div>
    </div>

    </>
  )
}

export default App

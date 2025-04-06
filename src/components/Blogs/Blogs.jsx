import React from 'react';
import  { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blog from '../Blog/Blog';

const Blogs = ({clickHandler,addedToread}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])
    return (
        <div className='w-2/3 m-4'>
            {
                blogs.map(blog=><Blog blog={blog} clickHandler={clickHandler} addedToread={addedToread}></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes = {
    clickHandler:PropTypes.func,
    addedToread:PropTypes.func
    
};

export default Blogs;
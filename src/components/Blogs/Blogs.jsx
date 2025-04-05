import React from 'react';
import  { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Blogs = props => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>console.log(data))

    },[])
    return (
        <div>
            
        </div>
    );
};

Blogs.propTypes = {
    
};

export default Blogs;
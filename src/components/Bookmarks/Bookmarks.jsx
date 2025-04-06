import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({blogs,total}) => {
    console.log(blogs)
    return (
        <div className='w-1/3'>
            <h2 className='mb-2 text-center font-bold text-2xl'>Bookmarked Blogs:{blogs.length}</h2>
            <h2 className='mb-2 text-center font-bold text-2xl'>Total Time Spent :{total} Minutes</h2>
            <div>
                {
                    blogs.map(blog=><Bookmark blog={blog}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;
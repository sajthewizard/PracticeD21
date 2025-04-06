import React from 'react';

const Bookmark = ({blog}) => {
    console.log(blog)
    return (
        <div>
            <h1 className=' text-center text-3xl bg-gray-200 mb-2 p-2'>
                {blog.title}
            </h1>
        </div>
    );
};

export default Bookmark;
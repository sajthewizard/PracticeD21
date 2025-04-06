import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,clickHandler,addedToread}) => {
   const{id,author,author_img,cover,hashtags,posted_date,reading_time,title}=blog;
    return (
        <div className="mb-4 border-x-4 p-2 "> 
            <img className="mb-4 w-full" src={cover} alt="" />
            <div className="flex justify-between m-6">
                <div className="flex">
                    <div className="m-2 mt-4">
                    <img className="w-12" src={author_img} alt="" />

                    </div>
                    <div className="m-2">
                          
                    <h5>
                        {
                            author
                        
                        }

                    </h5>
                    <p>
                        {posted_date}

                    </p>

                    </div>
                 
                </div>
                <div>
                    <span>{reading_time} Min Read</span>
                    <button className="ml-2 mt-1" onClick={()=>clickHandler(blog)}><CiBookmark />
                    </button>

                </div>
            </div>
            <h3 className="mx-4 text-4xl my-2">{title}</h3>
            <p className="mx-6 my-1">
            {
                hashtags.map(hash=><span className="m-1">
                   #{hash}
                </span>)
            }
            </p>
            <button onClick={()=>addedToread(reading_time,id)} className="underline mx-6 text-blue-600">
                Mark as read
            </button>
            
        </div>
    );
};

export default Blog;
import {Link} from 'react-router-dom';
const BlogList = ({blogs,title,handleDelete}) => {
   

    return ( 
        <div>
            <h2>{title}</h2>
            {blogs.map((e)=>(
               <div className="blog-preview" key={e.id}>
                   <Link to={`/blogs/${e.id}`}>
                   <h2>{e.title}</h2>
                    <p>Written by: <b>{e.author}</b></p>
                   </Link>
                   
                   
               </div>
           ))}
        </div>
     );
}
 
export default BlogList;
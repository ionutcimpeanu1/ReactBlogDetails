import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState("Vali");
    const [body,setBody] = useState("");
    const [author,setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleForm=(e)=>{
        e.preventDefault();
        const blog ={title,body,author};

        setIsPending("true");
        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsPending("false");
            history.push("/");
        })

        

    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleForm}>
                <label>Blog title:</label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required />
                <label>Blog body:</label>
                <textarea value={body}  onChange={(e)=>setBody(e.target.value)}  required > </textarea>
                <label>Blog author:</label>
                <select value={author}  onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;
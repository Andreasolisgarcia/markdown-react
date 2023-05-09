import React, { useState, useEffect} from "react";
import ReactMarkdown from 'react-markdown'
import Article from "./Article";

const Blog = () => {
    const [blogData , setBlogData] = useState([])
    const [title , setTitle] = useState("")
    const [content, setContent] = useState("")

    const getData = () => {
        const dataArray = [];
      
        // iterate localStorage
        for (var i = 0; i < localStorage.length; i++) {
          // set iteration key name
          var key = localStorage.key(i);
          // use key name to retrieve the corresponding value
          var value = localStorage.getItem(key);
      
          var object = {"title": key, "content": value};
      
          // add new object to the array
          dataArray.push(object);
        }
      
        // set state with the array of objects
        setBlogData(dataArray);
      };
 
      useEffect( () => getData(),[]);


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(title, content);
        setTitle("");
        setContent("");
    }
console.log(blogData)

  return (
    <div class="blog-container">
      <div className="editing-container">
        <h3>{title}</h3>
        <div className="text-markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>


      </div>

      <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
          <input 
            type="text" 
            placeholder="titre" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
          <textarea
            cols="30"
            rows="10"
            placeholder="blog text...remember you can use Markdown"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
          <input type="submit" value="Valider" />
        </form>
      </div>
      <ul>
        {blogData.map((article) =>(
            <Article article= {article}/>
        ) )}
        </ul>
    </div>
  );
};

export default Blog;

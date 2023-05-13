import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import React from 'react';

function App() {
  const[post,setPost]=useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);


useEffect(()=>{
  fetch("https://dummyjson.com/posts")
  .then(res=>res.json())
  .then(data=>{setPost(data.posts);})
},[])



const handleFilter = () => {
  const toFilter = post.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredPosts(toFilter);
};


  return (
    <div className="App">
      <button onClick={()=> console.log(filteredPosts)}> Boton </button>
        <Filter searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleFilter={handleFilter}/>
      <ul>
        <li onClick={()=>console.log(post)}>casa</li>
        {filteredPosts.map((item, index) => {
          return <li key={index}><h1>{item.title}</h1>{item.body}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

const Filter= ({ searchTerm, setSearchTerm, handleFilter })=>{
  return <>
<input type="text" onChange={(e)=>{setSearchTerm(e.target.value);console.log(searchTerm);}}/>
<button onClick={()=>{handleFilter()}}>Filter</button>
  </>
}
 
  


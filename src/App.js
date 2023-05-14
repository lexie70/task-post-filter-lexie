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
    if (toFilter.length === 0) {
      alert("no match found");
    }    
  };

  return (
    <div className="App">
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleFilter={handleFilter} />
      {/* <button onClick={() => console.log(filteredPosts)}> Boton </button> */}
      <ul>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((item, index) => {
            return (
              <>
                <h1>{item.title}</h1>
                <li key={index}>{item.body}</li>
                
              </>
            )
          })
        )
        : (
          post.map((item, index) => {
            return (
              <>
                <h1>{item.title}</h1>
                <li key={index}>{item.body}</li>;
              </>
            )
          })
        )}
      </ul>
    </div>
  );
}

export default App;

const Filter= ({ searchTerm, setSearchTerm, handleFilter })=>{
  return <>
<input type="text" onChange={(e)=>{setSearchTerm(e.target.value);}}/>
<button onClick={()=>{handleFilter()}}>Filter</button>
  </>
}









      
 
  


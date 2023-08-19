import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../Components/Pagination';


export default function Home() {
  const[dogs, setDogs] = useState([]);
  const[breed, setBreed] = useState('');
  const[currentPage, setPage] = useState(1); 
  const postsPerPage = 18; 

  const fetchInit = () => { fetch('https://api.thedogapi.com/v1/breeds/')
    .then(res => res.json())
    .then(json => setDogs(json))
    .catch((error) => { 
      console.log(error)})} 

  useEffect(()=> {
      fetchInit(); 
  }
  ,[]) 

  const searchDog = () =>  { 
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`)
    .then(res => res.json())
    .then(json => setDogs(json))
    .catch((error) => { 
      console.log(error)})
  }

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    searchDog();
  }

  const onReset = () => { 
    fetchInit();
    setBreed('');
  }
  
  const lastPostIndex = currentPage * postsPerPage; 
  const firstPostIndex = lastPostIndex - postsPerPage; 
  const currentPost = dogs.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNum) => (
    setPage(pageNum)
  )


  return (
    <div className = 'home-body'>
      <div className = "top-half">
      <div className = "title-bar">
      <i class="fa-solid fa-paw"></i>
      <h1>Dog Search</h1>
      <i class="fa-solid fa-paw"></i>
      </div>

      <p className = "credit">API provided by <a href = "https://www.thedogapi.com/">The Dog API</a> </p>
      <form onSubmit = {handleSubmit}>
        <input
        type = "text" 
        value = {breed}
        placeholder = "Search here to filter by breed"
        onChange = {(e) => setBreed(e.target.value)}
        />
        <input
        className = 'reset-btn'
        type = "button" 
        onClick = {onReset}
        value = 'X'
        /> 
      </form>
      </div>

      {!dogs ? (<h1>Loading...</h1>): 
        (<div className = "bottom-half">
        {currentPost.map ((dog) => (
          <Link to ={`/${dog.name}`} key = {dog.id} style = {{ color: 'inherit', textDecoration: 'inherit'}}>
            <article>
              <h3 className = "dog-header">{dog.name}</h3>
              <img src = {`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} 
                alt = {dog.name}
                onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src=`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.png`;
              }}></img> 
            </article> </Link>
        ))}
      </div> 
        )
      }  
        <Pagination 
        postsPerPage = {postsPerPage} 
        totalPosts = {dogs.length} 
        paginate = {paginate}
        />
    </div>
  )
}

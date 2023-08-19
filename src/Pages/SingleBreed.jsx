import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleBreed() {
  const[breed, setBreed] = useState([]); 
  const{name} = useParams(); 

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
    .then(res => res.json())
    .then(json => setBreed(json))
    .catch((error) => { 
      console.log(error)})
  }, [name])
  

  return ( 
    <div>{breed.map ((b) => (
      <section>
        <div className = "left-half">
          <img className = 'big-picture' src = {`https://cdn2.thedogapi.com/images/${b.reference_image_id}.jpg`}
          alt = {b.name} 
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src=`https://cdn2.thedogapi.com/images/${b.reference_image_id}.png`;
    }}></img>
      </div>

      <div className = "right-half">
      <h1 className = "name">{b.name}</h1>
      <div className = "text">
        <p>Weight: {b.weight.imperial} lb</p>
        <p>Height: {b.height.imperial} in</p>
        <p>Bred for: {b.bred_for}</p>
        <p>Breed Group: {b.breed_group}</p>
        <p>Life Span: {b.life_span}</p>
        <p>Temperament: {b.temperament}</p>
        <p className = "description">{b.description}</p>
      </div>
      </div>

      <p className = "credit-2">Image by rawpixel.com on Freepik</p>

    </section>
    ))}</div>
  )
}

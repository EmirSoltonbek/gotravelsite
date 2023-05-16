import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useTrip } from '../../contexts/TripContextProvider';
import "../styles/TripDetails.css"

const TripDetails = () => {
  const navigate = useNavigate();
  const {getTripDetails, tripDetails} = useTrip();

  const {id} = useParams();

  React.useEffect(()=>{
    getTripDetails(id)
  },[])
   
  const goBack = () => {
    navigate(-1);
  };

  function addComment(newComment){
    tripDetails.comments.push(newComment);
    console.log(tripDetails.comments)
  }
  const [comment, setComment]= useState('');
  const handleValues=()=>{
    let newComment = {
        comment:comment,
    }
    addComment(newComment);
    setComment('');
}

  return (
    <>
    <div class="container">
    <h1>Picture: </h1>
    <p>{tripDetails.picture}</p>
    
    <h2>Location:</h2>
    <p>{tripDetails.location}</p>
    
    <h2>Description:</h2>
    <p>{tripDetails.description}</p>
    
    <h2>Data:</h2>
    <p>{tripDetails.data}</p>
    
    <h2>Price:</h2>
    <p>{tripDetails.price}</p>
    
    <h2>Заголовок 6</h2>
    <p>Описание 6...</p>
    <input type="text" placeholder='username'/>
    <br />
    <textarea type="text" placeholder='comment' onChange={(e)=>setComment(e.target.value)}/>
    <button onClick={handleValues}>Add comment</button>
    <br />
    <button onClick={goBack}>GO BACK</button>
  </div>
    </>
  )
}

export default TripDetails;
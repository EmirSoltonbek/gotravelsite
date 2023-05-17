import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useTrip } from '../../contexts/TripContextProvider';
import "../styles/TripDetails.css"


const TripDetails = () => {
  const navigate = useNavigate();
  const {getTripDetails, tripDetails, setComments , commentsState} = useTrip();

  const {id} = useParams();

  React.useEffect(()=>{
    getTripDetails(id)
  },[])
   
  const goBack = () => {
    navigate(-1);
  };
  const [inputCom, setInputCom] = useState("");


  return (
    <>
    <div class="contain">
    <h1>Picture: </h1>
    <img src={tripDetails.picture} width="70%"/>
    
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
    {/* <input type="text" placeholder='username'/> */}
    <br />
    
    <form action="">
    <textarea type="text" placeholder='comment' onChange={(e) => {
                setInputCom(e.target.value);
              }}/>
    <button onClick={(e) => {
              // e.preventDefault();
              const newObj = {
                ...commentsState,
                comment: inputCom,
                // user: email,
              };
              // console.log("newObj", newObj);

              setComments(newObj)}}>Add comment</button>
              </form>
              
                
{tripDetails.comments
  ? (tripDetails.comments.map((a) => {
    console.log(a);
      return (
        <div>
          <p>{a.user}</p>
          <p>{a.comment}</p>
        </div>
      );
    }))
  : null}
              
           
    <br />
    <button onClick={goBack}>GO BACK</button>
  </div>
    </>
  )
}

export default TripDetails;
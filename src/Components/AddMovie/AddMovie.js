import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineVideoCameraAdd} from 'react-icons/ai'
const AddMovie = ({addMovie}) => {
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
const [rating, setRating] = useState(0)
const [posterUrl, setPosterUrl] = useState("")
const navigate= useNavigate();
const handleClick=(e)=>{
    e.preventDefault()
    if(!(title && rating && posterUrl && desc)){
      alert('Missed Field is required')
    return 
  }
addMovie(title,desc,rating,posterUrl);
navigate('/')
};
  return (
    <>
    <h2 style={{marginLeft: "550px", marginTop:"120px"}}>Add To Movie List</h2>
    <span style={{display:"flex", justifyContent:"center" , marginTop:"30px", marginBottom:"0"}}><AiOutlineVideoCameraAdd color="white"  fontSize={40}/></span>
    <div className='form-login'>
        <form className="login-box">
        Title
        <input type="text" placeholder="Add Title" onChange={(e) => setTitle(e.target.value)} />
        Description
        <input type="text" placeholder="Add Description" onChange={(e) => setDesc(e.target.value)} />
        Rating
        <input type="number" placeholder="Add Rating" onChange={(e) => setRating(+e.target.value)} />
        PosterURL
        <input type="url"  placeholder="Add PosterUrl" onChange={(e) => setPosterUrl(e.target.value)} />
        <button className='add-btn' onClick={handleClick}>Add</button>
        <button className='add-btn' ><Link to="/">Back</Link></button>

    </form>
     
    </div>
    </>
  )

}

export default AddMovie

import React from 'react'
import { Link, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieDetails({data}) {
    const obj=useParams();
    const movie= data.find(el=>el.id == obj.x);
  return (
    <div >
    <h2 style={{width:"300px",color:"white"}}>Movie Details</h2>
    <table class="table table-hover ">
 
    <tr>
    <tr>
            <td style={{width:"100px", fontWeight:"bold",color:"white"}}>Title</td>
            <td style={{color:"white"}}>{movie.title}</td>
        </tr>
        <tr>
            <td style={{width:"100px", fontWeight:"bold",color:"white"}}>Description</td>
            <td style={{color:"white"}}><p>{movie.description}</p></td>
        </tr>
        <tr>
            <td style={{width:"100px", fontWeight:"bold",color:"white"}}>Rating</td>
            <td style={{color:"white"}}>{movie.rating}</td>
        </tr>
        <tr>
            <td style={{width:"100px", fontWeight:"bold",color:"white"}}>Trailer</td>
            <td style={{color:"white"}}><iframe style={{width:"300px", height:"200px"}} src={movie.trailerSrc}></iframe></td>
        </tr>

    </tr>
    <button className='add-btn2' ><Link to="/">Back</Link></button>
</table>





    <table>
        
    </table>
   
      

    </div>
  )
}

export default MovieDetails
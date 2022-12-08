import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from 'react-simple-star-rating';

function Navbar({setSearch,setRating}) {
  const handleRating = (rate) => {
    setRating(rate)
  }
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)
  return (
    <>
    <div className='nav'>
        <form className='search-btn'>
                <input type="texte" placeholder='Enter Movie' className='inputText' onChange={(e)=>setSearch(e.target.value)}>
                </input>
                <button><FontAwesomeIcon icon={faSearch }/></button>
                <Rating
                className='star-rating'
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                size="16px"

                 />
        </form>
    </div>
    </>
  )
}

export default Navbar

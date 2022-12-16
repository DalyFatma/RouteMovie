import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'

const MovieList = (props) => {  
	return (
		<>
			{props.movies.map((movie) => (
			<>
                <div className='movie'>
                    <img className='poster' src={movie.posterUrl} alt='movie' />
                <div className='movie-details'>
                    <div>
                        <h5 >{movie.title}</h5>
                        </div>
                        <div className='d-flex'>
                        <Rating
                         className='rating'
                         iconsCount={5} 
                         initialValue={movie.rating}
                         readonly={true}
                         size="20px" />  
                    <Link className='btn-details' to={`/details/${movie.id}`}><FaPlay className='playf' ></FaPlay></Link>
                    </div>
                    
                      </div>
                      </div>
                
            </>	
				
			))}
		</>
	);
};

export default MovieList;
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList/MovieList';
import { movies } from './Components/data/data';
import AddMovie from './Components/AddMovie/AddMovie';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails/MovieDetails';
const App = () => {
	const [Newmovies, setNewmovies] = useState(movies);
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState(0)
  const addMovie=(title,desc,rating,posterUrl,trailerSrc)=>{
    setNewmovies([...Newmovies,{title,description:desc,rating, id:Newmovies.length+1,posterUrl,trailerSrc}])
  }
	return (
    
		<>
      <Routes>
        <Route path='/' element={
        <div className='row'>
        <div className="add-nav">
        <Navbar setSearch={setSearch} setRating={setRating}/>
        </div>
        <div className='container'>
        <MovieList movies={Newmovies.filter((el)=>el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()) && el.rating>=rating)} />
        </div>
			</div>
    }/>

        <Route path='/add' element={<div> <Navbar/> <AddMovie addMovie={addMovie} /> </div>}/>
        <Route path='/details/:x' element={<> <Navbar/> <MovieDetails data={Newmovies}/> </>}/>
      </Routes>

		</>
	);
};
export default App;
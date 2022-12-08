import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList/MovieList';
import { movies } from './Components/data/data';
import AddMovie from './Components/AddMovie/AddMovie';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
const App = () => {
	const [Newmovie, setNewmovie] = useState(movies);
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState(0)
  const addMovie=(title,desc,rating,id,posterUrl,trailerSrc)=>{
    setNewmovie([...Newmovie,{title,description:desc,rating, id:Newmovie.length+1,posterUrl,trailerSrc}])
  }
  {/*setNewList(newList.map(el=>el.id?el:{...el,rating:e}))*/}
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
        <div className="add-nav">
        <Navbar setSearch={setSearch} setRating={setRating}   />
        <AddMovie addMovie={addMovie} />
        </div>
        <div className='container'>
        <MovieList movies={Newmovie.filter((el)=>el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()) && el.rating>=rating)} />
        </div>
			</div>
		</div>
	);
};
export default App;
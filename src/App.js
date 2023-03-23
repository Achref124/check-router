import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Navb/Navb';
import moviesData from './Data'
import { useState } from 'react';
import MovieList from './MovieList/MovieList';
import { Route, Routes } from 'react-router-dom';
import Details from './Pages/Details';
function App() {

  const [movies, setMovies] = useState(moviesData)
  const [inputSearch, setInputSearch] = useState('')
  const [inputStars, setInputStars] = useState(0)
  const Add =(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  
  
  return (
    <div className="App">
      
        
     <Navb inputSearch={inputSearch} setInputSearch={setInputSearch} inputStars={inputStars} setInputStars={setInputStars}  />
     
     <Routes>
      <Route path='' element={
        
      movies && <MovieList movies ={movies} inputSearch={inputSearch} inputStars={inputStars} Add={Add} />} />
     
      <Route path='/movie/:id' element={<Details />} />
     </Routes>
    </div>
  );
}

export default App;

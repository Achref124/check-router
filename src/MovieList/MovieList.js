import React from 'react'
import AddMovie from '../AddMovie/AddMovie'
import Cards from '../Cards/Cards'
import './MovieList.css'

const MovieList = ({movies,inputSearch,inputStars,Add}) => {
  return (
    <div>
      <AddMovie Add={Add}/>
    <div className='crd1'>
{
movies.filter((movie)=>
inputStars!==0 ?
    (movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) ||
    movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim())) &&
    movie.rate===inputStars :
    movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) ||
    movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim())

)
.map((movie)=>
<Cards movie={movie} key={movie.id}/>

)
}
    </div>
    </div>
  )
}

export default MovieList
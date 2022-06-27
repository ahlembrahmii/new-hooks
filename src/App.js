import MoviesList from './components/MoviesList.jsx';
import SearchMovie from './components/SearchMovie/SearchMovie.jsx';
import {MoviesData}  from './components/MoviesData';
import { useState } from 'react';
import AddMovie from './components/AddMovie/AddMovie.jsx';

function App() {
  const [nameSearch, setNameSearch]=useState('');
  const [ratingSearch, setRatingSearch]=useState(1);
  const addNewMovie = (newMovie) =>MoviesData.push(newMovie);
  return (
    <div className="App">
   <h1> MOVIES </h1>
     <MoviesList
        moviesList={MoviesData.filter(
          el =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating === ratingSearch
        )}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       <AddMovie addNewMovie ={addNewMovie}/>
      </div>
      <SearchMovie
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
        setNameSearch={setNameSearch}
      />
    </div>
  );
}

export default App;

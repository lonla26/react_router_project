import { useState } from 'react';
import './App.css';
import AddNewMovie from './Components/AddNewMovie';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
import { moviesData } from './Data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Description from './Components/Description';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const handleChange = (y) => {
    setText(y);
  }

  const handleRating = (z) => {
    setRating(z);
  }

  //to delete a movie
  const handleDelete = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  }

  //to add a new movie
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);

  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<div>
            <SearchBar text={text} rating={rating} handleChange={handleChange} handleRating={handleRating} />
            <MovieList data={movies.filter(elem => elem.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) && elem.rating >= rating)} deleteMovie={handleDelete} />
            <AddNewMovie handleAdd={handleAdd} />
          </div>} />
          <Route path='/description/:id' element={<Description movies={movies} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

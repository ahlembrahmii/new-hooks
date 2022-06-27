import { useState } from 'react';
import Rate from '../Rate';
import './SearchMovie.css';
const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e.target.value);
    setNameSearch(e.target.value);
  };
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type movie name to search"
        />
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
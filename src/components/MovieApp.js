// // import PropTypes from 'prop-types'
// // import React, { Component, useEffect } from 'react'

// // function Movie(){

// //     const getMovie = ()=>{
// //         fetch("https://api.themoviedb.org/3/discover/movie?api_keys=6adffdddb6e9bc8ad2b95b4901a47931")
// //         .then(res => res.json())
// //         .then(json => console.log(json))
// //     }
// // }

// // useEffect(()=>{
// //     getMovie()
// // }, [])

// // // export class Movie extends Component {
// // //   static propTypes = {}

// // //   render() {
// //     return (
// //       <div>Movie</div>
// //     )
// //   //}
// // //}

// // export default Movie


// import React, { useEffect } from 'react';

// function Movie() {
//   const getMovie = () => {
//     fetch("https://api.themoviedb.org/3/discover/movie?api_keys=6adffdddb6e9bc8ad2b95b4901a47931")
//       .then(res => res.json())
//       .then(json => console.log(json));
//   };

//   useEffect(() => {
//     getMovie();
//   }, []);  // Empty dependency array to run once on component mount

//   return (
//     <div>Movie</div>
//   );
// }

// export default Movie;


/*
import React, { useEffect, useState } from 'react';

function Movie() {
  const [movieList, setMovieList] = useState([]); // ✅ define state

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=6adffdddb6e9bc8ad2b95b4901a47931")
      .then(res => res.json())
      .then(json => {
        console.log(json.results);
        setMovieList(json.results); // ✅ move inside the same .then
      })
      .catch(error => console.error('Error fetching data:', error)); // ✅ catch should be last
  };

  useEffect(() => {
    getMovie();
  }, []);


  console.log(movieList)
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movieList.map(movie => (
          //<li key={movie.id}>{movie.title}</li>
           <img style ={{width:"300px", height:"250px", marginLeft:"10px", marginTop:"10px"}} src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
*/


//need one
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AiOutlineSearch } from 'react-icons/ai';
// import './MovieApp.css';

// const MovieRecommendations = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('popularity.desc');
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState('');
//   const [expandedMovieId, setExpandedMovieId] = useState(null);

//   useEffect(() => {
//     const fetchGenres = async () => {
//       const response = await axios.get(
//         'https://api.themoviedb.org/3/genre/movie/list',
//         {
//           params: {
//             api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
//           },
//         }
//       );
//       setGenres(response.data.genres);
//     };
//     fetchGenres();
//   }, []);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const response = await axios.get(
//         'https://api.themoviedb.org/3/discover/movie',
//         {
//           params: {
//             api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
//             sort_by: sortBy,
//             page: 1,
//             with_genres: selectedGenre,
//             query: searchQuery,
//           },
//         }
//       );
//       setMovies(response.data.results);
//     };
//     fetchMovies();
//   }, [searchQuery, sortBy, selectedGenre]);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSortChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   const handleGenreChange = (event) => {
//     setSelectedGenre(event.target.value);
//   };

//   const handleSearchSubmit = async () => {
//     const response = await axios.get(
//       'https://api.themoviedb.org/3/search/movie',
//       {
//         params: {
//           api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
//           query: searchQuery,
//         },
//       }
//     );
//     setMovies(response.data.results);
//   };

//   const toggleDescription = (movieId) => {
//     setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
//   };

//   return (
//     <div>
//       <h1>MovieHouse</h1>
//       <div className="search-bar">
//         <input type="text" placeholder="Search movies..." value={searchQuery} onChange={handleSearchChange} className='search-input'/>
//         <button onClick={handleSearchSubmit} className="search-button">
//           <AiOutlineSearch />
//         </button>
//       </div>
//       <div className="filters">
//         <label htmlFor="sort-by">Sort By:</label>
//         <select id="sort-by" value={sortBy} onChange={handleSortChange}>
//           <option value="popularity.desc">Popularity Descending</option>
//           <option value="popularity.asc">Popularity Ascending</option>
//           <option value="vote_average.desc">Rating Descending</option>
//           <option value="vote_average.asc">Rating Ascending</option>
//           <option value="release_date.desc">Release Date Descending</option>
//           <option value="release_date.asc">Release Date Ascending</option>
//         </select>
//         <label htmlFor="genre">Genre:</label>
//         <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
//           <option value="">All Genres</option>
//           {genres.map((genre) => (
//             <option key={genre.id} value={genre.id}>
//               {genre.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="movie-wrapper">
//         {movies.map((movie) => (
//           <div key={movie.id} className="movie">
//             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//             <h2>{movie.title}</h2>
//             <p className='rating'>Rating: {movie.vote_average}</p>
//             {expandedMovieId === movie.id ? (
//               <p>{movie.overview}</p>
//             ) : (
//               <p>{movie.overview.substring(0, 150)}...</p>
//             )}
//             <button onClick={() => toggleDescription(movie.id)} className='read-more'>
//               {expandedMovieId === movie.id ? 'Show Less' : 'Read More'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieRecommendations;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import './MovieApp.css';

const MovieRecommendations = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [expandedMovieId, setExpandedMovieId] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list',
        {
          params: {
            api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
          },
        }
      );
      setGenres(response.data.genres);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie',
        {
          params: {
            api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
            sort_by: sortBy,
            page: 1,
            with_genres: selectedGenre,
            query: searchQuery,
          },
        }
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [searchQuery, sortBy, selectedGenre]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSearchSubmit = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
          query: searchQuery,
        },
      }
    );
    setMovies(response.data.results);
  };

  const toggleDescription = (movieId) => {
    setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <h1>MovieHouse</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search movies..." value={searchQuery} onChange={handleSearchChange} className="search-input" />
        <button onClick={handleSearchSubmit} className="search-button">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="filters">
        <label htmlFor="sort-by">Sort By:</label>
        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="release_date.desc">Release Date Descending</option>
          <option value="release_date.asc">Release Date Ascending</option>
        </select>
        <label htmlFor="genre">Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="movie-wrapper">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p className="rating">Rating: {movie.vote_average}</p>
            {expandedMovieId === movie.id ? (
              <p>{movie.overview}</p>
            ) : (
              <p>{movie.overview.substring(0, 150)}...</p>
            )}
            <button onClick={() => toggleDescription(movie.id)} className="read-more">
              {expandedMovieId === movie.id ? 'Show Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRecommendations;

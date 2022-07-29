import React, { useState, useEffect } from 'react'
import "./styles.css"
import axios from 'axios'
import MovieCard from './Movie.card';

function App() {
  const [movieName, setMovieName] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([])

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
      .then((res) => { setPopularMovies(res.data.results) })
  }, [])

  useEffect(() => {
    if (movieName == "") {
      setSearchedMovies([])
    } else {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716`)
        .then((res) => {
          console.log(res.data.results);
          setSearchedMovies(res.data.results)
        })
    }
  }, [movieName])

  return (
    <>
      <form className='search' >
        <input type="search" value={movieName}
          placeholder="Search for Movie Title …"
          onChange={(e) => { setMovieName(e.target.value) }} />
      </form>


      {searchedMovies.length == 0 && movieName == "" ? <div className='movies-wrapper' >
        {popularMovies.map((movie, i) => {
          return (
            <MovieCard
              poster_path={movie.poster_path}
              original_title={movie.original_title}
            />
          )
        })}

      </div> : <div className='movies-wrapper' >
        {searchedMovies.map((movie, i) => {
          return (
            <MovieCard
              poster_path={movie.poster_path}
              original_title={movie.original_title}
            />
          )
        })}

      </div>}


    </>
  )
}





































// function App() {

//   const [movieName, setMovieName] = useState("")
//   const [popularMovies, setPopularMovies] = useState([])
//   const [searchedMovies, setSearchedMovies] = useState([])


//   useEffect(() => {
//     axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
//       .then((res) => { setPopularMovies(res.data.results) })
//   }, [])

//   useEffect(() => {
//     if (movieName == "") {
//       searchedMovies(res.data.results)
//     } else
//       axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716`)
//         .then((res) => {
//           console.log(res.data.results);
//           setSearchedMovies([res.data.results])
//         })
//   }, [movieName])
//   return (
//     <>
//       <form className='search'>
//         <input type="search" value={movieName}
//           placeholder="Search for Movie Title …"
//           onChange={(e) => { setMovieName(e.target.value) }} />
//       </form>

//       {searchedMovies.length == 0 ? < div className='movies-wrapper'>
//         {popularMovies.map((movie, i) => {
//           return (
//             <div className='movies-card'>
//               <img
//                 src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
//                 className='movie-image'
//               />
//               <figcaption>
//                 <h2 className='movies__title'> {movie.original_title}</h2>
//               </figcaption>
//             </div>
//           )
//         })}

//       </div> : {searchedMovies.length == 0 ? < div className='movies-wrapper'>
//           {popularMovies.map((movie, i) => {
//             return (
//               <div className='movies-card'>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
//                   className='movie-image'
//                 />
//                 <figcaption>
//                   <h2 className='movies__title'> {movie.original_title}</h2>
//                 </figcaption>
//               </div>
//             )
//           })}

//         </div>:""}
//     </>
//   )
// }

export default App
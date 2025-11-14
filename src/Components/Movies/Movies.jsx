import axios from 'axios';
import { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import { Link } from 'react-router-dom';

export default function Movies() {
  let media_type = 'movie'
  const [movies, setmovies] = useState([]);
  let nums = new Array(10).fill(1).map((elem,ind)=> ind +1);

  async function getmovies(page){
    let {data} = await axios.get(`https:api.themoviedb.org/3/discover/movie?api_key=144b328f673f77d13fe482739c1caf7d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
    setmovies(data.results);
  }

  useEffect(() => {
    getmovies(1);
  }, [])

  return (
    <>
    {movies[0]?<> <div className="row g-3 py-5">
        {movies.map((movie, i) => (
          <div key={i} className="col-sm-6 col-md-4 col-lg-3">
            <div className="position-relative item">
              <Link className="text-decoration-none text-white" to={`/MovieDetails/${movie.id}/${media_type}`}>
               
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} className="w-100" alt="" />
              
                <div className="top-0 end-0 position-absolute p-1">{movie.vote_average}</div>
               
                <div className='position-absolute display-details display-6 flex-column text-center top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center'>
                  <h4>{movie.title}</h4> <br />
                  <h6><span>language: </span> {movie.original_language}</h6>
                  <h6><span>release date: </span> {movie.release_date}</h6>
                </div>
            
              </Link>
            </div>
          </div>
        ))}
      </div>

      <nav className="py-5 Page navigation example">
        <ul className="pagination pagination-sm justify-content-center">
          {nums.map((page) => (
            <li onClick={() => getmovies(page)} className="page-item" key={page}>
              <Link className="page-link text-decoration-none bg-transparent text-white">{page}</Link>
            </li>
          ))}
        </ul>
      </nav></>:<div className='d-flex vh-100 align-items-center justify-content-center'>
        <i className='fas fa-spinner fa-spin fa-8x'></i>
      </div>}

    </>
  );
}
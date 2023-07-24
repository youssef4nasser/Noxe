import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';


export default function Home() {
  const [movie, setMovie] = useState([]);
  const [tv, settv] = useState([]);
  const [people, setpeople] = useState([]);

  async function getmovies(mediaType, callBack){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=144b328f673f77d13fe482739c1caf7d`)
    callBack(data.results);
  }

  useEffect(() => {
    getmovies("movie", setMovie);
    getmovies("tv", settv);
    getmovies("person", setpeople);
  }, [])
  
  return <>
  {movie[0]?<>
    <div className="row g-3 py-5">
      <div className="col-sm-6 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center">
        <div>
            <div className="border w-25 mt-3"></div>
            <h2>Trending <br />Movies <br /> To Watch Now</h2>
            <p className='text-muted'>Most Watched Movies By week</p>
            <div className="border w-100 mt-3"></div>
        </div>
      </div>
      {movie.slice(0,11).map((item,i)=><MediaItem key={i} item={item}/>)}
    </div>

    <div className="row g-3 py-5">
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-center">
      <div>
        <div className="border w-25 mt-3"></div>
        <h2>Trending <br />TV <br /> To Watch Now</h2>
        <p className='text-muted'>Most Watched TV By week</p>
        <div className="border w-100 mt-3"></div>
      </div>
      </div>
      {tv.slice(0,11).map((item,i)=><MediaItem key={i} item={item}/>)}
    </div>

    <div className="row g-3 py-5">
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-center">
      <div>
        <div className="border w-25 mt-3"></div>
        <h2>Trending <br />Movies <br /> To Watch Now</h2>
        <p className='text-muted'>Most Watched Movies By week</p>
        <div className="border w-100 mt-3"></div>
      </div>
      </div>
      {people.slice(0,11).map((item,i)=><MediaItem key={i} item={item}/>)}
    </div>

    </>:<div className='d-flex vh-100 align-items-center justify-content-center'>
        <i className='fas fa-spinner fa-spin fa-8x'></i>
      </div>}
  
    </>
    
}




// Trending api --> `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=.......`

// movieDetails api --> `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=.......&language=en-US`

// people api --> `https://api.themoviedb.org/3/person/popular?api_key=.......&language=en-US&page=${page}`

// movies api --> https://api.themoviedb.org/3/discover/movie?api_key=.......&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`

// movies api --> https://api.themoviedb.org/3/discover/tv?api_key=.......&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`

// img path --> 'https://image.tmdb.org/t/p/w500'
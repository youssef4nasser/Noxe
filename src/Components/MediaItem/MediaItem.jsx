import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaItem({item}) {
  return <>
  <div className="col-sm-6 col-sm-6 col-md-4 col-lg-3 col-lg-3">
    <div className='position-relative item'>
      <Link className='text-decoration-none text-white' to={`/MovieDetails/${item.id}/${item.media_type}`}>

         {item.poster_path?<img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} className='w-100' alt="" />: <img src={'https://image.tmdb.org/t/p/w500'+item.profile_path} className='w-100' alt="" />}
         
 
         {item.vote_average? <div className="vote top-0 end-0 position-absolute p-1">{item.vote_average.toFixed(1)}</div>:""}
     
         <div className='position-absolute display-details display-6 flex-column text-center top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center'>
            <h4>{item.title} {item.name}</h4> 
            {item.original_language?<h6><span>language: </span> {item.original_language}</h6>:""}
            {item.release_date?<h6><span>release date: </span> {item.release_date} </h6> :""}
          </div>
      </Link>

    </div>
  </div>
  </>
}

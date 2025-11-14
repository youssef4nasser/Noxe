
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Tvshow() {
  let media_type = 'tv'
  const [tv, settv] = useState([]);
  let nums = new Array(10).fill(1).map((elem,ind)=> ind +1);

  async function gettv(page){
    let {data} = await axios.get(`https:api.themoviedb.org/3/discover/tv?api_key=144b328f673f77d13fe482739c1caf7d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
    settv(data.results);
  }

  useEffect(() => {
    gettv(1);
  }, [])

  return <>
  {tv[0]?<> <div className="row g-3 py-5">
      {tv.map((tv, i)=> <div key={i} className="col-sm-6 col-md-4 col-lg-3">
       <div className='position-relative item overflow-hidden'>
        <Link className='text-decoration-none text-white' to={`/MovieDetails/${tv.id}/${media_type}`}>

          <img src={'https://image.tmdb.org/t/p/w500'+tv.poster_path} className='w-100' alt="" /> <img src={'https://image.tmdb.org/t/p/w500'+tv.profile_path} className='w-100' alt="" />
  
        <div className="top-0 end-0 position-absolute p-1">{tv.vote_average}</div>

        <div className='position-absolute display-details flex-column text-center top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center'>
          <h4>{tv.name}</h4> <br />
          <h6><span className='fw-bold'>first air date : </span> {tv.first_air_date}</h6>
          <h6><span className='fw-bold'>country : </span> {tv.origin_country}</h6>
          <h6><span className='fw-bold'>language : </span> {tv.original_language}</h6>
        </div>

        </Link>
       </div>
      </div>
      )}
    </div>

    <nav className='py-5 Page navigation example'>

      <ul className='pagination pagination-sm d-flex justify-content-center'>
       
        {nums.map((page)=> <li onClick={function(){gettv(page)}} className='page-item' key={page}><Link className='page-link text-decoration-none bg-transparent text-white'>{page}</Link></li>)}
        
      </ul>
    </nav></>:<div className='d-flex vh-100 align-items-center justify-content-center'>
        <i className='fas fa-spinner fa-spin fa-8x'></i>
      </div>}

  </>
}

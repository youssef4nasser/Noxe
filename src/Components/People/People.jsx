import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function People() {
  let media_type = 'person'
  const [people, setpeople] = useState([]);
  let nums = new Array(10).fill(1).map((elem,ind)=> ind +1);

  async function getpeople(page){
    let {data} = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=144b328f673f77d13fe482739c1caf7d&language=en-US&page=${page}`)
    setpeople(data.results);
  }

  useEffect(() => {
    getpeople();
  }, [])

  return <>
  {people[0]?<> <div className="row g-3 py-5">
      {people.map((people, i)=> <div key={i} className="col-sm-6 col-md-4 col-lg-3">
       <div className='position-relative item'>
        <Link className='text-decoration-none text-white' to={`/MovieDetails/${people.id}/${media_type}`}>

          <img src={'https://image.tmdb.org/t/p/w500'+people.profile_path} className='w-100' alt="" />
        
          <div className='position-absolute display-details display-6 flex-column text-center top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center'>
            <h5>{people.name}</h5>
          </div>
        </Link>
       </div>
      </div>)}
    </div>

    <nav className='py-5 Page navigation example'>

      <ul className='pagination pagination-sm d-flex justify-content-center'>
       {nums.map((page)=> <li onClick={function(){getpeople(page)}} className='page-item' key={page}><Link className='page-link text-decoration-none bg-transparent text-white'>{page}</Link></li>)}
      </ul>

    </nav></>:<div className='d-flex vh-100 align-items-center justify-content-center'>
        <i className='fas fa-spinner fa-spin fa-8x'></i>
      </div>}

  </>
}

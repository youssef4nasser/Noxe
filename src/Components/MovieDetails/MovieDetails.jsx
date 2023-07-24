import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { id, mediaType } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  async function getDetails(id, mediaType) {
    setLoading(true);
    const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=144b328f673f77d13fe482739c1caf7d&language=en-US`);
    setDetails(data);
    setLoading(false);
  }

  useEffect(() => {
    getDetails(id, mediaType);
  }, []);

  return (
    <>
      {loading ? (
        <div className='d-flex vh-100 align-items-center justify-content-center'>
          <i className='fas fa-spinner fa-spin fa-8x'></i>
        </div>
      ) : (
        <div className="row py-5">
          <div className="col-md-3">
            <img src={`https://image.tmdb.org/t/p/w500${details.poster_path || details.profile_path}`} className='w-100' alt="" />
          </div>

          <div className="col-md-9 d-flex align-items-center">
            <div>
              <h2>{details.title || details.name}</h2>
              {details.vote_average && <h4>Rate : {details.vote_average}</h4>}
              {details.vote_count && <h4>Votes : {details.vote_count}</h4>}
              {details.budget && <h4>budget : {details.budget}$</h4>}
              {details.release_date && <h4>release date : {details.release_date}</h4>}
              {details.original_language && <h4>original language : {details.original_language}</h4>}
              <h4>story:</h4> <br/>
              <h4>{details.overview || details.biography}</h4>
              {details.runtime && <h4>Movie duration : {details.runtime} minutes</h4>}
              {details.genres && <h4>Categories : {details.genres.map((item,i) => <span key={i}>{item.name}, </span>)}</h4>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

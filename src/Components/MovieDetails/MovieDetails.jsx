import axios from 'axios';
import  { useEffect, useState } from 'react';
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
        <>
        <div className="row hero_details">
          <div className="col-12">
            <div className='mt-4 position-relative'>
              <div className='overlay rounded-3'></div>
              <img src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`} alt="heroImg" className='w-100 rounded-3 heroImg' />
              <div className='position-absolute bottom-0 start-50 translate-middle-x p-3 text-white'>
                <h2 className='text-center'>{details.title || details.name}</h2>
                <p className='text-center'>{details.tagline}</p>
                {/* icons */}
                <ul className='list-unstyled icons_hero d-flex justify-content-center'>
                  <li><span><i className='fas fa-thumbs-up'></i></span></li>
                  <li><span><i className='fas fa-star'></i></span></li>
                  <li><span><i className='fas fa-plus'></i></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-8">
            <div className='bg-dark p-3 rounded-3 col-12'>
              <h5>Description</h5>
              <p>{details.overview || details.biography}</p>
            </div>
            <div className='bg-dark p-3 rounded-3 col-12 mt-4'>
              <h5>Production Companies</h5>
              <p>{details.production_companies && details.production_companies.map((item,i) => <span key={i}>{item.name}, </span>)}</p>
            </div>
            <div className='bg-dark p-3 rounded-3 col-12 mt-4'>
              <h5>Production Countries</h5>
              <p>{details.production_countries && details.production_countries.map((item,i) => <span key={i}>{item.name}, </span>)}</p>
            </div>
          </div>
          <div className="col-4">
            <div className='bg-dark p-3 rounded-3'>
              <div>
                <h5><i className='fas fa-calendar-alt'></i> Released Year</h5>
                <p>{details.release_date && details.release_date.split('-')[0]}</p>
              </div>
              <div>
                <h5><i className='fas fa-star'></i> Rate</h5>
                <p>{details.vote_average}</p>
              </div>
              <div>
                <h5><i className='fas fa-thumbs-up'></i> Votes</h5>
                <p>{details.vote_count}</p>
              </div>
              <div>
                <h5><i className='fas fa-film'></i> Runtime</h5>
                <p>{details.runtime} minutes</p>
              </div>
              <div>
                <h5><i className='fas fa-language'></i> Available Languages</h5>
                <p>{details.spoken_languages && details.spoken_languages.map((item,i) => <span key={i}>{item.english_name}, </span>)}</p>
              </div>
              <div>
                <h5><i className='fas fa-film'></i> Status</h5>
                <p>{details.status}</p>
              </div>
              <div>
                <h5><i className='fas fa-film'></i> Genres</h5>
                <p>{details.genres && details.genres.map((item,i) => <span key={i}>{item.name}, </span>)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* old */}
        {/* <div className="row py-5">
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
        </div> */}
        </>
      )}
    </>
  );
}

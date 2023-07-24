
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// export default function TvDetails() {
//   let {id, mediaType} = useParams();

//   const [details, setdetails] = useState({});
//   const [loading, setloading] = useState(false);


//   async function gettrending(id, mediaType){
//     setloading(true);
//     let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=144b328f673f77d13fe482739c1caf7d&language=en-US`);
//     setdetails(data);
//     setloading(false);
//     console.log(data);
//   }

//   useEffect(() => {
//     gettrending(id, mediaType);
//   }, []);
  
//   return <>
//   {loading?<div className='d-flex vh-100 align-items-center justify-content-center'>
//         <i className='fas fa-spinner fa-spin fa-8x'></i>
//       </div>: <div className="row">
//       <div className="col-md-3">
//       {details.poster_path?<img src={'https://image.tmdb.org/t/p/w500'+details.poster_path} className='w-100' alt="" />: <img src={'https://image.tmdb.org/t/p/w500'+details.profile_path} className='w-100' alt="" />}
//       </div>

//       <div className="col-md-9 d-flex align-items-center">
//         <div>
//           gkfk
//         </div>
//       </div>
//     </div>}

//   </>
// }

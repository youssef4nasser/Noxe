import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tvshow from './Components/Tvshow/Tvshow';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/NotFound/Notfound';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './Components/Layout/ProtectedRoute/ProtectedRoute';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {

  useEffect(() => {
    if(localStorage.getItem("usertokenmovie") !== null){
      saveUserData();
    }
  }, []);
  
  const [userData, setuserData] = useState(null);

  function saveUserData(){
    let encodedToken = localStorage.getItem("usertokenmovie");
    let decodedToken = jwtDecode(encodedToken);
    setuserData(decodedToken);
  };
  
  let routers = createBrowserRouter([
    { path: "", element: <Layout setuserData={setuserData} userData={userData} /> , children: [
      {index:true , element: <ProtectedRoute><Home/></ProtectedRoute>},
      {path: "Noxe" , element: <ProtectedRoute><Home/></ProtectedRoute>},
      {path:"movies" , element: <ProtectedRoute><Movies/></ProtectedRoute>},
      {path:"tvshow" , element: <ProtectedRoute><Tvshow/></ProtectedRoute>},
      {path:"people" , element: <ProtectedRoute><People/></ProtectedRoute>},
      {path:"MovieDetails/:id/:mediaType" , element: <ProtectedRoute><MovieDetails/></ProtectedRoute>},
      
      {path:"login" , element: <Login saveUserData={saveUserData}/>},
      {path:"register" , element: <Register/>},
      {path:"*" , element: <Notfound/>},
    ]}
  ])

  return <RouterProvider router={routers}></RouterProvider>
}

export default App;

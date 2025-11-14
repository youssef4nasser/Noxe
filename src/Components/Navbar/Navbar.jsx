import { Link, useLocation } from 'react-router-dom';

export default function Navbar({userData, LogOut}) {
    const location = useLocation();

  return (
      <nav className="navbar custom_navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <Link className="navbar-brand text-light" to='/'><h3>Noxe</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData? <ul className="navbar-nav custom_bavbar_nav ms-auto">
              <li className="nav-item customNavItem">
                <Link className={`nav-link custom_nav_link ${location.pathname === '/'? 'active':''}`} aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item customNavItem">
                <Link className={`nav-link custom_nav_link ${location.pathname === '/movies'? 'active':''}`} to='movies'>Movies</Link>
              </li>

              <li className="nav-item customNavItem">
                <Link className={`nav-link custom_nav_link ${location.pathname === '/Tvshow'? 'active':''}`} to='Tvshow'>Tvshow</Link>
              </li>
              <li className="nav-item customNavItem">
                <Link className={`nav-link custom_nav_link ${location.pathname === '/people'? 'active':''}`} to='people'>People</Link>
              </li>
            </ul>:''}

            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item d-flex align-items-center">
                <i className='fab mx-2 fa-facebook'></i>
                <i className='fab mx-2 fa-twitter'></i>
                <i className='fab mx-2 fa-instagram'></i>
                <i className='fab mx-2 fa-soundcloud'></i>
              </li>

              {userData? <li className="nav-item">
                <span onClick={function(){LogOut()}}  className="nav-link">Logout</span>
              </li>: <><li className="nav-item">
                <Link className="nav-link active" to='register'>Register</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to='login'>Login</Link>
              </li></>}
            </ul>
          </div>
        </div>
      </nav>
  )
}

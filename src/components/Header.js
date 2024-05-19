import logo from '../assets/img/logo1.png'
import '../assets/style/Header.css'
import { Link } from 'react-router-dom';
function Header(){
    return(
<nav class="navbar  border-bottom bg-light" style={{backgroundColor:"#ffff",color:"#47D3CE" }}>
  <div class="container-fluid ">
   <Link to={'/'} className='d-flex text-decoration-none txt'>
      <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
     <span className='ms-2 mb-0 mt-2' style={{fontWeight:"600",fontSize:"24px"}} > GPA CONVERTER</span>
</Link>
<div class="dropdown me-lg-5">
        <Link to="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none  " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        <i class="bi bi-three-dots-vertical" style={{fontSize:"22px",fontWeight:"800",color:"#47D3CE" }}></i>
        </Link>
        <ul class="dropdown-menu text-small shadow " >
          <li><Link class="dropdown-item" to="/" aria-current="page">Home</Link></li>
          
          <li><hr class="dropdown-divider"/></li>
          <li><Link class="dropdown-item disabled" to="#">Tools</Link></li>
          <li><Link class="dropdown-item" to="/cgpa-to-percent">CGPA -{'>'} %</Link></li>
          <li><Link class="dropdown-item" to="/grade-to-sgpa">Grade -{'>'} SGPA</Link></li>
       
          <li><Link class="dropdown-item" to="/cgpa-calculator">CGPA calculator</Link></li>
         
          <li><hr class="dropdown-divider"/></li>
          <li><Link class="dropdown-item" to="/about">About</Link></li>
        </ul>
      </div>
  </div>
</nav>
    )
}

export default Header;
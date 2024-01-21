import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
  return (
    <nav className="navbar navbar-expand-lg nav_custom">
      <div className="container-fluid">
        <img src="../src/assets/logo_white.png" alt="" width="196" height="72"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">客房旅宿</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">會員登入</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" type="submit">立即訂房</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
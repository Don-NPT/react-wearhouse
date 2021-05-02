import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="p-3 bg-dark text-white fixed-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <i className="fas fa-warehouse" style={{ "marginRight": "10px" }}></i>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-white" style={{padding:"4px"}}><h4 style={{margin:"0", padding:"0"}}>Wear<span style={{color:"#ffc000"}}>House</span></h4></Link></li>
              <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
              <li><Link to="/aboutus" className="nav-link px-2 text-white">About</Link></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              {/* <input type="search" className="form-control form-control-dark" placeholder="Search..." /> */}
              <Link to="/search"><button type="button" className="btn btn-outline-light me-2">Search</button></Link>
            </form>

            <div className="text-end">
              <Link to="/login">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
              </Link>
              <Link to="/admin">
                <button type="button" className="btn btn-danger me-2">Admin</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
} export default Navbar;

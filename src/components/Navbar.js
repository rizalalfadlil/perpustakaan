import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../css/style.css'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar p-2">
        <a className="navbar-brand" href="#">Nama Aplikasi Anda</a>
        <div className="justify-content-end">
          <a className='btn btn-primary'>p</a>
        </div>
    </nav>
    </>
  );
}

export default Navbar;

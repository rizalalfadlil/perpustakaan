import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../css/style.css'
import { Nav } from 'react-bootstrap';
function Navbar() {
  return (
    <>
    <div className='custom-navbar position-fixed'>
      <b>Perpustakaan</b>
    </div>
    <div className='custom-navbar'></div>
    </>
  );
}

export default Navbar;

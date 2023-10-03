import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../css/style.css'
import { Nav } from 'react-bootstrap';
function Navbar() {
  return (
    <>
    <Nav className="navbar navbar-expand-lg navbar-dark custom-navbar p-2" sticky="top">
        <a className="navbar-brand" href="#">Perpustakaan</a>
        <div className="justify-content-end">
        </div>
    </Nav>
    </>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'; // Jika menggunakan React Router
import { Button, Container, Row, Col } from 'react-bootstrap';

function NotFound404() {
  return (
    <Container className="text-center">
      <Row className="justify-content-center align-items-center" style={{ height: '80vh' }}>
        <Col>
          <h1 className="display-4">404 - Halaman Tidak Ditemukan</h1>
          <p className="lead">Oops, sepertinya Anda tersesat.</p>
          <span role="img" aria-label="Confused Face" style={{ fontSize: '100px' }}>
            😕
          </span>
          <p>
            <a href='/' className="btn btn-outline-success mt-3">Kembali ke Beranda</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound404;

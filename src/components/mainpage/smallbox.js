import React from 'react';
import { Col } from 'react-bootstrap';

function SmallBox(props) {
  return (
    <Col>
    <div className={`box box-small ${props.class}`}>
        <div className='number-bg'><h1>{props.jumlah}</h1></div>
        <div className='title'>
            <h2>{props.judul}</h2><hr/>
        </div>
    </div>
    </Col>
  );
}

export default SmallBox;

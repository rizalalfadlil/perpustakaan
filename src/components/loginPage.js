import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import { Row, Col } from "react-bootstrap";
export function LoginPage(){
    return(
            <Row className="login-row m-0">
                <Col className="row justify-content-center align-items-center">
                <div className="box w-50">
                <b className="box-title"><i className="fa fa-sign-in m-2"/>Halaman Login</b>
                <hr/>
                <div className="">
                        <form action="/">
                            <Input name='email' type='email'/>
                            <Input name='password' type='password'/>
                            <button className="button1 mt-3"> login</button>
                        </form>
                        </div>
                </div>
                </Col>
                <Col className="row justify-content-center align-items-center">
                <div className="box w-50">
                <b className="box-title"><i className="fa fa-sign-in m-2"/>Halaman Login</b>
                <hr/>
                <div className="">
                        <form action="/">
                            <Input name='email' type='email'/>
                            <Input name='password' type='password'/>
                            <button className="button1 mt-3"> login</button>
                        </form>
                        </div>
                </div>
                </Col>
            </Row>
    )
}
const Input = (props) =>{
    return(
        <>
        <label className="login-page-title">{props.name}</label>
        <br/>
        <input className="login-page-input" type={props.type} name={props.name} placeholder={`masukkan `+ props.name} id={props.id}/>
        <br/>
        </>
    )
}
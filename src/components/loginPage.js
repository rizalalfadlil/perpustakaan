import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
export function LoginPage(){
    return(
            <div className="box-container h-100">
                <div className="box w-25">
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
                <div className="solid">
                    s
                </div>
            </div>
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
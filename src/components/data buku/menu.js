import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css'
import 'font-awesome/css/font-awesome.min.css';
export function Menu(){
    const currentURL = window.location.pathname;
    return(
        <div className="box menu-box">
            <div className="box-title"><i className="fa fa-bars m-2"/>Menu</div>
            <hr/>
            <div className="menu-container">
            <a className="green1" href={`${currentURL}/edit`}><i className="fa fa-pencil m-2"/>Edit terpilih</a>
            <a className="green2" href="#"><i className="fa fa-eraser m-2"/>Hapus terpilih</a>
            <a className="green3" href={`${currentURL}/edit`}><i className="fa fa-plus m-2"/>Tambah</a>
            </div>
        </div>
    )
}
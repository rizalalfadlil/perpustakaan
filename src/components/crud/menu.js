import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../css/style.css'
export function MenuCrud(props){
    return(
        <div className="box menu-box">
            <div className="box-title"><i className="fa fa-bars m-2"/>Menu</div>
            <hr/>
            <a className="green1" href={`/${props.name}`}><i className="fa fa-check m-2"/>Simpan</a>
            <a className="green2" href="#"><i className="fa fa-rotate-right m-2"/>Kosongkan</a>
            <a className="green3" href={`/${props.name}`}><i className="fa fa-times m-2"/>Batal</a>
        </div>
    )
}
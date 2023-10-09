import React from "react";
import '../../css/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function DaftarPinjam(){
    return(
        <div className="box">
        <b className="box-title"><i className="fa fa-book m-2"/>Buku Yang Dipinjam</b>
        <hr/>
        <div className="box-invert little-sharp">
            <PinjamBuku judul="ini judul" expired="02-01-2022"/>
            <PinjamBuku judul="judul buku" expired="03-12-2023"/>
            <PinjamBuku judul="" expired="02-01-2022"/>
        </div>
        </div>
    )
}
const PinjamBuku = (props) =>{
    return(
        <div className="box little-sharp box-container">
            <div className="buku-dipinjam justify-content-end">
                <b>{props.judul}</b>
            </div>
            <div className="align-left">
                {props.expired}
                <button className="close-button">
                    <i className="fa fa-close"/>
                </button>
            </div>
        </div>
    )
}
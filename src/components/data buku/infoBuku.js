import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export function BookInfo(){
    return(
        <div className="box">
            <b className="box-title"><i className="fa fa-book m-2"/>Informasi Buku</b>
            <hr/>
            <div className="box-container">
                <div className="gambar-buku"></div>
                <div className="info-buku">
                    <b>ID buku</b>
                    <h5>id</h5>
                    <b>judul</b>
                    <h3>JUDUL BUKU</h3>
                    <b>penulis</b>
                    <h5>penulis buku</h5>
                    <b>penerbit</b>
                    <h5>penerbit buku</h5>
                </div>
            </div>
            <div className="deskripsi-buku">
                <b>Sinopsis</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, maiores? Ab nesciunt unde harum saepe soluta nostrum nobis, aut alias expedita ad aperiam placeat laudantium illum ipsam maxime provident architecto!</p>
            </div>
        </div>
    )
}
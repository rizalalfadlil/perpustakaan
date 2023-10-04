import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css'
export function Menu(){
    return(
        <div className="box menu-box">
            <div className="box-title">Menu</div>
            <hr/>
            <a className="green1" href="#">Edit terpilih</a>
            <a className="green2" href="#">Hapus terpilih</a>
            <a className="green3" href="#">Tambah</a>
        </div>
    )
}
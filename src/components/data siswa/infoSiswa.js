import React from "react";import 'font-awesome/css/font-awesome.min.css';
export function InfoSiswa(){
    return(
        <div className="box">
            <b className="box-title"><i className="fa fa-user m-2"/>Informasi Siswa</b>
            <hr/>
            <div className="box-container">
                <div className="foto-siswa"></div>
                <div className="info-siswa">
                    <b>Nama Lengkap</b>
                    <h3>Nama Lengkap</h3>
                    <div className="box-container">
                    <div className="mt-4">
                    <b>Kelas</b>
                    <h5>XII-RPL</h5>
                    </div>
                    <div className="m-4">
                    <b>nis</b>
                    <h5>01</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
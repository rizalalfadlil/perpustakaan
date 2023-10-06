import React from "react";
export function InfoAdmin(){
    return(
        <div className="box">
            <b className="box-title">Informasi Admin</b>
            <hr/>
            <div className="box-container">
                <div className="foto-admin"></div>
                <div className="info-admin">
                    <b>Username</b>
                    <h3>Username</h3>
                    <div className="box-container">
                    <div className="mt-4">
                    <b>id</b>
                    <h5>01</h5>
                    </div>
                    <div className="m-4">
                    <b>Nama</b>
                    <h5>nama</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
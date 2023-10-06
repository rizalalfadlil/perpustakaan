import React from "react";
import { InputText, InputNumber, InputTextArea, InputDate } from "./inputs/Inputs";

export function EditSiswa(){
    return(
        <div className="box">
            <div className="box-title">Edit Data Siswa</div>
            <hr/>
            
            <form>
                <InputText name="nama lengkap"/>
                <div className="box-container">
                <InputText name="kelas"/>
                <InputNumber name="nis"/>
                </div>
                <InputDate name="tanggal lahir"/>
            </form>
        </div>
    )
}
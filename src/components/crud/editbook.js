import React from "react";
import { InputText, InputNumber, InputTextArea } from "./inputs/Inputs";

export function EditBook(){
    return(
        <div className="box">
            <div className="box-title">Edit Buku</div>
            <hr/>
            <form>
                <InputText name="judul"/>
                <div className="box-container">
                <InputText name="penulis"/>
                <InputText name="penerbit"/>
                </div>
                <InputTextArea name="Sinposis" rows="7" w="75"/>
            </form>
        </div>
    )
}
import React from "react";
import '../css/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputNumber } from "./crud/inputs/Inputs";

export function SettingsPage(){
    return(
        <div className="box">
            <b className="box-title"><i className="fa fa-cog m-2"/>Pengaturan</b>
            <hr/>
            <InputNumber name="Denda Keterlambatan" w="25"/>
        </div>
    )
}
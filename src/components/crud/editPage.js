import React from "react";
import { BookInfo } from "../data buku/infoBuku";
import { InfoSiswa } from "../data siswa/infoSiswa";
import { EditBook } from "./editbook";
import { MenuCrud } from "./menu";
import { EditSiswa } from "./editsiswa";

function BookEditPage(){
 return(
    <>
    <div className="box-container">
     <div className="half">
         <BookInfo/>
         <MenuCrud name="buku"/>
     </div>
     <EditBook/>
    </div>
    </>
 )
}
function SiswaEditPage(){
    return(
       <>
       <div className="box-container">
        <div className="half">
            <InfoSiswa/>
            <MenuCrud name="siswa"/>
        </div>
        <EditSiswa/>
       </div>
       </>
    )
   }
export {BookEditPage, SiswaEditPage};
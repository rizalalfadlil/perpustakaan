import React from "react";
import 'font-awesome/css/font-awesome.min.css';
export function ListAdmin(){
    return(
        <div className="box">
            <div className="box-title"><i className="fa fa-cog m-2"/>Daftar Admin</div>
            <hr/>
            <table>
                <tr>
                    <th width="20%">id</th>
                    <th>Nama</th>
                    <th>Username</th>
                </tr>
                <tr>
                    <td>
                        01
                    </td>
                    <td>
                        Nama
                    </td>
                    <td>
                        Username
                    </td>
                </tr>
            </table>
        </div>
    )
}
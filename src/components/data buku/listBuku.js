import React from "react";
export function BookList(){
    return(
        <div className="box book-list">
            <div className="box-title">Daftar Buku</div>
            <hr/>
            <table>
                <tr>
                    <th width="10%">id buku</th>
                    <th>judul buku</th>
                    <th width="10%">status</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ini Judul Buku</td>
                    <td>tersedia</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ini Judul Buku</td>
                    <td>tersedia</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ini Judul Buku</td>
                    <td>tersedia</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ini Judul Buku</td>
                    <td>tersedia</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Ini Judul Buku</td>
                    <td>tersedia</td>
                </tr>
            </table>
        </div>
    )
}
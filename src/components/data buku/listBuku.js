import React, {useState} from "react";
import { Buku } from "./buku";
import { Button } from "react-bootstrap";
export function BookList(){
const [isGridview, setIsGridview] = useState(true);

  const toggleView = () => {
    setIsGridview(!isGridview);
  };
    
    return(
        <div className="box book-list">
            <div className="box-title">Daftar Buku</div>
            <hr/><Button className="m-3" onClick={toggleView}>toggle</Button>
            {isGridview?(
                <div className="grid-buku">
                <Buku judul="buku 1"/>
                <Buku judul="buku 1"/>
                <Buku judul="buku 1"/>
                <Buku judul="buku 1"/>
                <Buku judul="buku 1"/>
                <Buku judul="buku 1"/>
                <Buku judul="buku 1"/>
                <Buku judul="buku 1"/>
            </div>
            ):(
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
            )}
            
        </div>
    )
}
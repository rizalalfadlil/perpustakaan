import React, {useState} from "react";
import { Buku } from "./buku";
import { Button } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
export function BookList(){
const [isGridview, setIsGridview] = useState(true);

  const toggleView = () => {
    setIsGridview(!isGridview);
  };
    
    return(
        <div className="box book-list">
            <div className="box-title"><i className="fa fa-table m-2"/>Daftar Buku</div>
            <hr/><Button className="m-2" variant="success" onClick={toggleView}>{isGridview?(<i className="fa fa-list"/>):(<i className="fa fa-th-large"/>)}</Button>
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
            </table>
            )}
            
        </div>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../../css/style.css';
import { Table } from 'react-bootstrap';

export const Navigation = () =>{
    return(
        <div className='box box-dark navigation'>
            <b className='box-title-dark'>Navigasi<hr/></b>
            <ul type='none'>
                <li><a href='/'>Dashboard</a></li>
                <li><a href='/siswa'>Data Siswa</a></li>
                <li><a href='/buku'>Data Buku</a></li>
                <li><a href='/admin'>Data Admin</a></li>
            </ul>
        </div>
    )
}
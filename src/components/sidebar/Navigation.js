import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../../css/style.css';
import { Table } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

export const Navigation = () =>{
    return(
        <div className='box box-dark navigation'>
            <b className='box-title-dark'>Navigasi<hr/></b>
            <ul type='none'>
                <li><a href='/'><i className="fa fa-home m-2"/>Dashboard</a></li>
                <li><a href='/siswa'><i className="fa fa-user m-2"/>Data Siswa</a></li>
                <li><a href='/buku'><i className="fa fa-book m-2"/>Data Buku</a></li>
                <li><a href='/admin'><i className="fa fa-cog m-2"/>Data Admin</a></li>
            </ul>
        </div>
    )
}
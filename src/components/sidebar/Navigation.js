import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../../css/style.css';
import { Table } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

export const Navigation = () =>{
    return(
        <div className='box box-dark navigation'>
            <b className='box-title-dark'><i className='fa fa-bars m-2'/>Navigasi<hr/></b>
            <div className='flex-wrap nav-menu'>
            <a href='/'><i className="fa fa-home m-2 xl"/><br/>Dashboard</a>
            <a href='/siswa'><i className="fa fa-user m-2"/><br/>Data Siswa</a>
            <a href='/buku'><i className="fa fa-book m-2"/><br/>Data Buku</a>
            <a href='/admin'><i className="fa fa-shield m-2"/><br/>Data Admin</a>
            <a href='/settings'><i className="fa fa-cog m-2"/><br/>Pengaturan</a>
            <a href='/login'><i className="fa fa-sign-out m-2"/><br/>Keluar</a>
            </div>
        </div>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../../css/style.css';
import { Table } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

export const Navigation = () =>{
    return(
        <div className='box box-dark navigation'>
            <b className='box-title-dark'><i className='fa fa-bars m-2'/>Navigasi<hr/></b>
            <div className='nav-menu'>
            <MenuItem location='/' icon='home' title='Dashboard' />
            <MenuItem location='/siswa' icon='user' title='Data Siswa' />
            <MenuItem location='/buku' icon='book' title='Data Buku' />
            <MenuItem location='/admin' icon='shield' title='Data Admin' />
            <MenuItem location='/settings' icon='cog' title='Pengaturan' />
            <MenuItem location='/login' icon='sign-out' title='Keluar' />
            </div>
        </div>
    )
}
const MenuItem = (props) =>{
    return (
        <a href={props.location}><i className={`fa fa-${props.icon} m-2 xl`}/><br/>{props.title}</a>
    )
}
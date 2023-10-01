import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../../css/style.css';
import { Table } from 'react-bootstrap';

export const Navigation = () =>{
    return(
        <div className='box box-dark navigation'>
            <b className='box-title-dark'>Navigasi<hr/></b>
            <ul type='none'>
                <li><a>menu</a></li>
                <li><a>menu</a></li>
                <li><a>menu</a></li>
                <li><a>menu</a></li>
            </ul>
        </div>
    )
}
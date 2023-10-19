import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../../css/style.css';
import 'font-awesome/css/font-awesome.min.css';
import { Row, Col } from 'react-bootstrap';

export const AccountInfo = () =>{
    return(
        <div className='box accountinfo'>
            <b className='box-title'><i className='fa fa-user m-2'/>Akun<hr/></b>
            <Row>
                <Col>
                    <div className='acImg m-2'/>
                </Col>
                <Col className='account-table account-table-text m-2 d-none d-xl-block'>
                    <h2>Nama Akun</h2>
                    <hr/>
                    <h4>Tipe Akun</h4>
                </Col>
            </Row>
        </div>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../../css/style.css';
import 'font-awesome/css/font-awesome.min.css';

export const AccountInfo = () =>{
    return(
        <div className='box accountinfo'>
            <b className='box-title'><i className='fa fa-user m-2'/>Akun<hr/></b>
            <div className='box-container'>
                <div>
                    <div className='acImg m-2'/>
                </div>
                <div className='account-table m-2'>
                    <h2>Nama Akun</h2>
                    <hr/>
                    <h4>Tipe Akun</h4>
                </div>
            </div>
        </div>
    )
}
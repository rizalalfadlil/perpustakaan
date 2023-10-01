import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../../css/style.css';

export const AccountInfo = () =>{
    return(
        <div className='box accountinfo'>
            <b className='box-title'>Akun<hr/></b>
            <table className="account-table">
                <tr>
                    <td className="photo"><div className='acImg'></div></td>
                    <td>
                        <h3>Nama</h3>
                        <hr></hr>
                        <h5>Tipe Akun</h5>
                    </td>
                </tr>
            </table>
        </div>
    )
}
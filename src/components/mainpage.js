import "../css/style.css";
import SmallBox from "./mainpage/smallbox";
import { ActivityLog } from "./mainpage/activity";
import { BookInfo } from "./data buku/infoBuku";
import { BookList } from "./data buku/listBuku";
import { Menu } from "./data buku/menu";
import { RoutePage } from "./routes";
import { ListSiswa } from "./data siswa/listSiswa";
import { InfoSiswa } from "./data siswa/infoSiswa";
import { InfoAdmin } from "./data admin/infoAdmin";
import { ListAdmin } from "./data admin/listAdmin";
import { DaftarPinjam } from "./data siswa/daftarPinjam";
import { ScrollUp } from "./scrollup";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import { SettingsPage } from "./settings";
export const Mainpage = () => {
    return (
        <>
          {isLoginPage() ? (
            <RoutePage />
          ) : (
            <Frame>
              <RoutePage />
            </Frame>
          )}
        </>
      );
}
function isLoginPage() {
    return window.location.pathname === '/login';
}
function Frame(props){
    return(
<>
        <div className='content'>
        <ScrollUp/>
        <Navbar className="nb"/>    
          <Sidebar/>
          <div className="main">
            {props.children}
        </div>
        </div>
</>
    )
}
const Dashboard = () =>{
 return(
    <>
    <div className="box welcome">
        <h1>welcome</h1>
    </div>
    <div className="box-container">
        <SmallBox jumlah="4" judul="judul"/>
        <SmallBox jumlah="1" judul="judul"/>
        <SmallBox jumlah="2" judul="judul"/>
        <SmallBox jumlah="3" judul="judul" class="last"/>
    </div>
    <ActivityLog/>
    </>
 )
}
const DataBuku = () =>{
    return(
       <>
       <div className="box-container">
        <div className="half">
            <BookInfo/>
            <Menu/>
        </div>
        <BookList/>
       </div>
       </>
    )
}
const DataSiswa = () =>{
    return(
       <>
       <div className="box-container">
        <div className="half">
            <InfoSiswa/>
            <DaftarPinjam/>
            <Menu/>
        </div>
        <ListSiswa/>
       </div>
       </>
    )
}
const DataAdmin = () =>{
    return(
       <>
       <div className="box-container">
        <div className="half">
            <InfoAdmin/>
            <Menu/>
        </div>
        <ListAdmin/>
       </div>
       </>
    )
}
const Settings = () =>{
    return(
       <SettingsPage/>
    )
}
export {DataBuku, Dashboard, DataSiswa, DataAdmin, Settings};
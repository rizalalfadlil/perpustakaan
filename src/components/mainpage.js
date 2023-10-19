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
import { Row, Col } from "react-bootstrap";
function is404Page() {
    const validRoutes = [
      '/',
      '/buku',
      '/siswa',
      '/admin',
      '/buku/:id',
      '/siswa/:id',
      '/buku/:id/edit',
      '/siswa/:id/edit',
      '/settings',
      '/login',
    ];
  
    const currentPath = window.location.pathname;
    const is404 = !validRoutes.some(route => {
      // Gunakan metode .match() untuk mencocokkan rute yang valid dengan rute saat ini
      return new RegExp(`^${route.replace(/:[a-zA-Z]+/g, '[a-zA-Z0-9-]+')}$`).test(currentPath);
    });
  
    return is404;
  }
  
  export const Mainpage = () => {
    const isLoginPage = window.location.pathname === '/login';
    const is404 = is404Page();
  
    if (isLoginPage || is404) {
      return <RoutePage />;
    } else {
      return (
        <Frame>
          <RoutePage />
        </Frame>
      );
    }
  }
  
function Frame(props){
    return(
<>
        <div className='content'>
        <Navbar className="nb"/>    
          <div className="box-container">
          <Sidebar/>
          <div className="main mt-5">
            {props.children}
        </div>
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
    <Row>
        <SmallBox jumlah="4" judul="judul"/>
        <SmallBox jumlah="1" judul="judul"/>
        <SmallBox jumlah="2" judul="judul"/>
        <SmallBox jumlah="3" judul="judul"/>
    </Row>
    <ActivityLog/>
    </>
 )
}
const DataBuku = () =>{
    return(
       <>
       <Row>
        <Col xl={4}>
            <BookInfo/>
            <Menu/>
        </Col>
        <Col>
        <BookList/>
        </Col>
       </Row>
       </>
    )
}
const DataSiswa = () =>{
    return(
       <>
       <Row>
        <Col  xl={4}>
            <InfoSiswa/>
            <DaftarPinjam/>
            <Menu/>
        </Col>
        <Col>
        <ListSiswa/>
        </Col>
       </Row>
       </>
    )
}
const DataAdmin = () =>{
    return(
       <>
       <Row>
        <Col  xl={4}>
            <InfoAdmin/>
            <Menu/>
        </Col>
        <Col>
        <ListAdmin/>
        </Col>
       </Row>
       </>
    )
}
const Settings = () =>{
    return(
       <SettingsPage/>
    )
}
export {DataBuku, Dashboard, DataSiswa, DataAdmin, Settings};
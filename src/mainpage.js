import "./css/style.css";
import SmallBox from "./components/mainpage/smallbox";
import { ActivityLog } from "./components/mainpage/activity";
import { BookInfo } from "./components/data buku/infoBuku";
import { BookList } from "./components/data buku/listBuku";
import { Menu } from "./components/data buku/menu";
import { RoutePage } from "./components/routes";
import { ListSiswa } from "./components/data siswa/listSiswa";
import { InfoSiswa } from "./components/data siswa/infoSiswa";
import { InfoAdmin } from "./components/data admin/infoAdmin";
import { ListAdmin } from "./components/data admin/listAdmin";
export const Mainpage = () => {
    return (
        <div className="main">
            <RoutePage/>
        </div>
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
export {DataBuku, Dashboard, DataSiswa, DataAdmin};
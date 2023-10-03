import "./css/style.css";
import SmallBox from "./components/mainpage/smallbox";
import { ActivityLog } from "./components/mainpage/activity";
import { BookInfo } from "./components/data buku/infoBuku";
import { BookList } from "./components/data buku/listBuku";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const Mainpage = () => {
    return (
        <div className="main">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={Dashboard}/>
                    <Route path="/buku" Component={DataBuku}/>
                </Routes>
            </BrowserRouter>
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
       <div className="box-container">
        <BookInfo/>
        <BookList/>
       </div>
    )
   }
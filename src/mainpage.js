import "./css/style.css";
import SmallBox from "./components/mainpage/smallbox";
import { ActivityLog } from "./components/mainpage/activity";
export const Mainpage = () => {
    return (
        <div className="main">
            <Dashboard/>
        </div>
    )
}
const Dashboard = () =>{
 return(
    <>
    <div className="box welcome">
        <h1>welcome</h1>
    </div>
    <div className="small-container">
        <SmallBox jumlah="4" judul="judul"/>
        <SmallBox jumlah="1" judul="judul"/>
        <SmallBox jumlah="2" judul="judul"/>
        <SmallBox jumlah="3" judul="judul" class="last"/>
    </div>
    <ActivityLog/>
    </>
 )
}
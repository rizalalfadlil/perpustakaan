import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataBuku, Dashboard, DataSiswa } from "../mainpage";
export const RoutePage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={Dashboard}/>                    
                <Route path="/buku" Component={DataBuku}/>
                <Route path="/siswa" Component={DataSiswa}/>
            </Routes>
        </BrowserRouter>
    )
}
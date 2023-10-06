import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataBuku, Dashboard, DataSiswa, DataAdmin } from "../mainpage";
import { BookEditPage } from "./crud/editPage";
import { SiswaEditPage } from "./crud/editPage";
export const RoutePage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={Dashboard}/>                    
                <Route path="/buku" Component={DataBuku}/>
                <Route path="/siswa" Component={DataSiswa}/>
                <Route path="/admin" Component={DataAdmin}/>

                <Route path="/buku/edit" Component={BookEditPage}/>
                <Route path="/siswa/edit" Component={SiswaEditPage}/>
            </Routes>
        </BrowserRouter>
    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataBuku, Dashboard, DataSiswa, DataAdmin, Settings } from "./mainpage";
import { BookEditPage } from "./crud/editPage";
import { SiswaEditPage } from "./crud/editPage";
import { LoginPage } from "./loginPage";
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
                <Route path="/settings" Component={Settings}/>
                <Route path="/login" Component={LoginPage}/>
            </Routes>
        </BrowserRouter>
    )
}
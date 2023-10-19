import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataBuku, Dashboard, DataSiswa, DataAdmin, Settings } from "./mainpage";
import NotFound404 from "./mainpage/notFound";
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
                <Route path="/buku/:id" Component={DataBuku}/>
                <Route path="/siswa/:id" Component={DataSiswa}/>
                <Route path="/admin" Component={DataAdmin}/>

                <Route path="/buku/:id/edit" Component={BookEditPage}/>
                <Route path="/siswa/:id/edit" Component={SiswaEditPage}/>
                <Route path="/settings" Component={Settings}/>
                <Route path="/login" Component={LoginPage}/>
                <Route path="*" Component={NotFound404}/>
            </Routes>
        </BrowserRouter>
    )
}
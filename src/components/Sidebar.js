import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../css/style.css';
import { AccountInfo } from './sidebar/accountinfo';
import { Navigation } from './sidebar/Navigation';
export const Sidebar = () => {
    return (
        <>
        <div className='sb sb-fixed d-none d-md-block mt-5'>
            <AccountInfo/>
            <Navigation/>
        </div>
        <div className='sb d-none d-md-block'/>
        </>
    )
}
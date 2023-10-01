import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import '../css/style.css';
import { AccountInfo } from './sidebar/accountinfo';
import { Navigation } from './sidebar/Navigation';
export const Sidebar = () => {
    return (
        <div className='sb'>
            <AccountInfo/>
            <Navigation/>
        </div>
    )
}
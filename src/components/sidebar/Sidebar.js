import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar () {
    return (
        <div className={"sidebar"}>
            <Link className={"sidebar-entry"} to={'/'}>
                Employees Tree View
            </Link>
        </div>
    )
}

export default Sidebar;

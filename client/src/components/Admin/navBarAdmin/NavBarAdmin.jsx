import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {FaRegUserCircle} from "react-icons/fa";

export default function NavBarAdmin(){
    const name = useSelector((state)=>state.useName)
    return(
        <div className="navbar">
        <div className="user">
        <FaRegUserCircle size={40}/>
        <h4>{name}</h4>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/admin/dashboard">
                      Home
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addservice">
                        Add Service
                        </Link>
                </li>
                <li>
                    <Link to="/admin/allservices">
                        View Services
                    </Link>
                </li>
                <li>
                    <Link to="/admin/orders">
                        Orders
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}
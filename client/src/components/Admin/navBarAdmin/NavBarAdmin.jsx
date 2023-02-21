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
                    <Link to="/admin/home">
                      Home
                    </Link>
                </li>
                <li>
                    <Link to="/admin/add-service">
                        Add Service
                        </Link>
                </li>
                <li>
                    <Link to="/admin/all-services">
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
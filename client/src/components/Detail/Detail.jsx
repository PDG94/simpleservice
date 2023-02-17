import React, {useEffect } from "react";
import { useSelector /*, useDispatch*/ } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { cleanDetail, getDetail } from "../../redux/actions";
import "../Detail/detail.css";
import Loading from "../Loading/Loading";
import {NavBar, Footer} from "../index";

export default function Detail (){

    const { id } = useParams();
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(getDetail(id));
    //     return () => {
    //         dispatch(cleanDetail())
    //     }
    // }, [dispatch, id]);

    //PARA QUE HAGA SCROLL HACIA ARRIBA
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });

    const serviceDetail = useSelector((state) => state.services);

    return (
        <div className="detailContainer">
            <NavBar/>
            <div>
                <Link to="/" className="btnHome">
                    <button>Go Back</button>
                </Link>
            </div>
            <p>Estoy en Detail</p>
            {/* { serviceDetail.length > 0 ? (
                <div className="main">
                    <div className="left">
                        <div className="details">
                            <h1 className="name">{serviceDetail.name || "name not found"}</h1>
                            <div className="info">
                            <p className="activity">{serviceDetail.acivity || "activity not found"}</p>
                            <p className="price">{serviceDetail.price}</p>
                            <div className="description">{serviceDetail.description || "description not found"}</div>
                            </div>
                        </div>
                        <div className="right">
                            {serviceDetail.image ? (
                                <img src={serviceDetail.image || "image not found"} alt={`${serviceDetail.name}`} width="275vh" className="image"/>
                            ): <img alt="default" src="una imagen de default"/>}
                        </div>
                    </div>
                </div>
            ):<Loading/>} */}
            <Footer/>
        </div>
    )
}



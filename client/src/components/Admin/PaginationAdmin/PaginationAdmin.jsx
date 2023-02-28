import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resedPaged } from "../../../redux/actions";
import "../PaginationAdmin/paginationAdmin.css"

export default function PaginationAdmin({paged,allServices,servicesPerPage}){
    const currentPage = useSelector((state) => state.currentPage); // 1
     const pageNumbers = allServices/servicesPerPage

     const dispatch = useDispatch();

     //Limit the page numbers shown

     const [pageNumberLimit] = useState(5);
     const [maxPageNumberLimit , setMaxPageNumberLimit] = useState(5);
     const [minPageNumberLimit , setMinPageNumberLimit] = useState(0);
      
     let pageNumber=[]
    for(let i=1; i<= Math.ceil(allServices / servicesPerPage); i ++){
        pageNumber.push(i)
    }

        function prev(){ 
        if(currentPage===1){
            dispatch(resedPaged(1));
        }else{
         dispatch(resedPaged(currentPage-1))
        }}
  
        function nextPage(){
        if (currentPage === pageNumber[pageNumber.length - 1]) {
            dispatch(resedPaged(currentPage));
          } else {
            dispatch(resedPaged(currentPage + 1));
          }
        }
        
    return (
        <nav className="page">
    <div className="pagesAd">
             <div onClick={prev} className={currentPage === pageNumber[0] ? `hidden` : null}>&laquo;</div>
             
        {pageNumber.map((number)=>{
            if(number<maxPageNumberLimit + 1 && number > minPageNumberLimit){
        return(
        <div key={number} onClick={() => paged(number)} className={currentPage === number ? "active" : "" }>{number}</div>
        )
            }
        })}
        
        
       <li onClick={nextPage} className={currentPage === pageNumber[pageNumber.length-1] ? "hidden" : ""}>&raquo;</li> 
        <p className="pAdPage">
            <b className="Page">{`Page
            ${currentPage}`}</b>
            <span>{` of `}</span>
            <b>{`${Math.ceil(pageNumbers)}`}</b>
        </p>
    </div>
    </nav>
)}

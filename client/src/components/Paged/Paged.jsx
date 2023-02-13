import React from 'react'
import '../Paged/paged.css'


export default function Paged({servicesPerPage,allServices,paged,currentPage,setCurrentPage}) {
    const pageNumber= [];
    for(let i = 1 ; i < Math.ceil(allServices/servicesPerPage); i ++ ){
        pageNumber.push(i)
    }

    function handlePrev(){
        if(currentPage===1){
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage-1)
        }
    }

    function handleNext(){
        if(currentPage === pageNumber[pageNumber.length-1]){
            setCurrentPage(currentPage)
        } else {
            setCurrentPage(currentPage + 1);
        }
    }

    return(
    <nav className=''>
        <div className=''>
        <button className='' onClick={()=>handlePrev()} disabled={allServices<6}>Prev</button>
        </div>
        <div className=''>
            {allServices < 6 ?
            <div key='paged'>{ paged (1) }</div> :
            pageNumber && pageNumber.map(n=>(
                <div className=''>
                    <button className={'page-number' + (n===currentPage ? 'active' : '')} key={n} onClick={()=>paged(n)}>{n}</button>
                </div>
            ))
            }
            </div>
            <div className=''>
                <button className='' onClick={()=>handleNext()} disabled={allServices<6}>Next</button>
            </div>
            </nav>
    )   
}

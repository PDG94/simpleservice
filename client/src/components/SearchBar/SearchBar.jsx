import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearName,getServicesByName } from '../../redux/actions';
import '../SearchBar/searchBar.css'


export default function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name,setName] = useState("");



    function handleInputChange(event){
        console.log(event.target.value)
        event.preventDefault()
        setName(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(getServicesByName(name))
        setCurrentPage(1)
        setName("");
    }
    function handleOnKeyPress(event){
        if(event.key === "Enter"){
            handleSubmit(event)
            setCurrentPage(1)
            dispatch(clearName())
        }
    }

    return(
        <>
        <div className='search'>
            <form>
                <input
                onChange={(e)=>{handleInputChange(e)}}
                type = "text"
                placeholder="🔍   Search..."
                value={name}
                onKeyPress = {e => handleOnKeyPress(e)}
                />
                <button className='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </>
    )
}

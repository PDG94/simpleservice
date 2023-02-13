import axios from "axios";
import { GET_SERVICES, GET_DETAIL, CLEAN_DETAIL } from "./actionTypes";

export function getServices () {
    return async function (dispatch) {
        var json = await axios.get(`la url de host va acá`)
        return dispatch({
            type: GET_SERVICES,
            payload: json.data,
        })
    }
}

export function getDetail (id){
    return async function (dispatch) {
        try {
            var json = await axios.get("ACÁ VA LA URL QUE TRAE EL SERVICIO POR ID" + id )
            return dispatch({
                type: GET_DETAIL,
                payload: json.data,  //chequearlo
            })
        } catch (error) {
         console.log("Error on action GET_DETAIL", error);
        }
    }
}

export function cleanDetail (){
    return function (dispatch) {
        return (dispatch) ({
            type: CLEAN_DETAIL,
            detail: []
        })
    }
}
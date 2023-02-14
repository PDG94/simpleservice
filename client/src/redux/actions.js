import axios from "axios";
import { GET_SERVICES, CLEANER_NAME, GET_BY_NAME} from "./actionTypes";


export function getServices () {
    return async function (dispatch) {
        var json = await axios.get(`la url de host va acá`)
        return dispatch({
            type: GET_SERVICES,
            payload: json.data,
        })
    }
}
export function clearName(){
    return{
        type: 'CLEANER_NAME',
        payload: {},
    }
}
export function getServicesByName(){
    return async function (dispatch) {
        try{
            let json= await axios.get('ruta a name (query)')
            let json1= await json.data
        return dispatch({
            type: GET_BY_NAME,
            payload:json1
        })
    } catch(error){
        console.log(error)
    }
}
}
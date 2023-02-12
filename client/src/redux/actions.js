import axios from "axios";
import { GET_SERVICES } from "./actionTypes";

export function getServices () {
    return async function (dispatch) {
        var json = await axios.get(`la url de host va acá`)
        return dispatch({
            type: GET_SERVICES,
            payload: json.data,
        })
    }
}
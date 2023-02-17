import axios from "axios";
import {
  GET_SERVICES /*, GET_DETAIL, CLEAN_DETAIL*/,
  CLEANER_NAME,
  GET_BY_NAME,
} from "./actionTypes";

export function getServices() {
  return async function (dispatch) {
    const response = await axios.get(
      "https://simpleservice-production.up.railway.app/services"
    );
    return dispatch({ type: GET_SERVICES, payload: response.data });
  };
}

export function clearName(payload) {
  return function (dispatch) {
    dispatch({ type: CLEANER_NAME, payload: {} });
  };
}

export function getServicesByName() {
  return async function (dispatch) {
    try {
      let json = await axios.get("ruta a name (query)");
      let json1 = await json.data;
      return dispatch({
        type: GET_BY_NAME,
        payload: json1,
      });
    } catch (error) {
      console.log("Error on action GET_BY_NAME", error);
    }
  };
}

// export function getDetail (id){
//     return async function (dispatch) {
//         try {
//             var json = await axios.get("ACÁ VA LA URL QUE TRAE EL SERVICIO POR ID" + id )
//             return dispatch({
//                 type: GET_DETAIL,
//                 payload: json.data,  //chequearlo
//             })
//         } catch (error) {
//          console.log("Error on action GET_DETAIL", error);
//         }
//     }
// }

// export function cleanDetail (){
//     return function (dispatch) {
//         return (dispatch) ({
//             type: CLEAN_DETAIL,
//             detail: []
//         })
//     }
// }

import { FETCH_ARTICULOS } from "../Types";
import {URL_SERVER} from "../constants/userConstants";



export const fetchArticulos = () => async (dispatch) => {
    const res = await fetch(URL_SERVER+"/api/articulos");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: FETCH_ARTICULOS,
      payload: data,
    });
  };

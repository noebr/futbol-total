import { FILTER_FISCALIZACION_BY_DATE,FETCH_FISCALIZACION } from "../Types";
import { URL_SERVER} from '../constants/userConstants';
import axios from 'axios';


export const fetchFiscalizacion = () => async (dispatch) => {
    const res = await fetch(URL_SERVER+"/api/fiscalizacion");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: FETCH_FISCALIZACION,
      payload: data,
    });
  };


export const filterFiscalizacion = (fiscalizacion, date) => (dispatch) => {
  dispatch({
    type: FILTER_FISCALIZACION_BY_DATE,
    payload: {
        date: date,
      items:
      date === ""
          ? fiscalizacion
          : fiscalizacion.filter((x) => x.date.indexOf(date) >= 0),
    },
  });
};
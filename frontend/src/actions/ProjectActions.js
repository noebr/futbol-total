import { FETCH_ESTADISTICAS, FETCH_PROJECTS } from "../Types";
import {URL_SERVER} from "../constants/userConstants";



export const fetchProjects = () => async (dispatch) => {
    const res = await fetch(URL_SERVER+"/api/projects");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: FETCH_PROJECTS,
      payload: data,
    });
  };
  export const fetchEstadisticas = () => async (dispatch) => {
    const res = await fetch(URL_SERVER+"/api/estadisticas");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: FETCH_ESTADISTICAS,
      payload: data,
    });
  };

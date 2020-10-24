import { FETCH_PROJECTS, CART_SAVE_VOLUNTARIADO } from "../Types";
import { URL_SERVER } from "../constants/userConstants";

export const fetchProjects = () => async (dispatch) => {
  const res = await fetch(URL_SERVER + "/api/projects");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PROJECTS,
    payload: data,
  });
};
export const saveVoluntariado = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_VOLUNTARIADO, payload: data });
  localStorage.setItem('Voluntariadoform', JSON.stringify(data));
}


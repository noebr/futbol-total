import { FETCH_VIDEOS } from "../Types";
import { URL_SERVER} from '../constants/userConstants'

export const fetchVideos = () => async (dispatch) => {
  const res = await fetch(URL_SERVER+"/api/videos");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_VIDEOS,
    payload: data,
  });
};
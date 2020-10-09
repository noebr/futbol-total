import {FETCH_VIDEOS} from "../Types";

export const videosReducer = (state = {}, action) => {
    switch (action.type) {
  

      case FETCH_VIDEOS:
        return { items: action.payload, filteredItems: action.payload};
      default:
        return state;
    }
    
  };
import {FETCH_PROJECTS} from "../Types";

export const projectsReducer = (state = {}, action) => {
    switch (action.type) {
  

  
      case FETCH_PROJECTS:
        return { items: action.payload, filteredItems: action.payload};
      default:
        return state;
    }
    
  };
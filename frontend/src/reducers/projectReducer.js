import {CART_SAVE_VOLUNTARIADO, FETCH_PROJECTS} from "../Types";

export const projectsReducer = (state = {}, action) => {
    switch (action.type) {
  

  
      case FETCH_PROJECTS:
        return { items: action.payload, filteredItems: action.payload};
        case CART_SAVE_VOLUNTARIADO:
        return { ...state, voluntariado: action.payload };
      default:
        return state;
    }
    
  };
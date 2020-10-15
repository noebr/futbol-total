import { FETCH_FISCALIZACION, FILTER_FISCALIZACION_BY_DATE} from "../Types";

  
  export const fiscalizacionReducer = (state = {}, action) => {
    switch (action.type) {
      case FILTER_FISCALIZACION_BY_DATE:
        return {
          ...state,
          date: action.payload.date,
          filteredItems: action.payload.items,
        };
      case FETCH_FISCALIZACION:
        return { items: action.payload, filteredItems: action.payload };
      default:
        return state;
    }
  };
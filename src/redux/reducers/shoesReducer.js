const initialState = {
  shoes: [],
  oneShoe:{}
};

const shoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SHOES":
      return {
        ...state,
        shoes: action.payload,
      };
    default:
      return state;
      
    case "GET_ONE_SHOE":
      return {
        ...state, 
        oneShoe: action.payload, 
        auxiliar: action.payload,
      };
  }
};
export default shoesReducer;

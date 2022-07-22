const initialState = {
  shoes: [],
  oneShoe:{},
  filterShoes:[],
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
    case "FILTER_SHOES":
      return{
        ...state,
        filterShoes:state.shoes.filter(shoe=>shoe.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
      }
  }

};
export default shoesReducer;

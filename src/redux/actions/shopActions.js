import axios from 'axios';

const shopActions = {


    addToShop: (product) => {
        
        return async (dispatch, getState) => {

            dispatch({
                type: 'ADDTOSHOP',
                payload: { product }
            })
        }
    },

}

export default shopActions;
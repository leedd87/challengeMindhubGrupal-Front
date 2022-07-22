// import axios from 'axios';

const shopActions = {


    addToShop: (product) => {

        console.log(product);

        return async (dispatch, getState) => {

            dispatch({
                type: 'ADDTOSHOP',
                payload: { product }
            })
        }
    },

    deleteToShop: (product) => {
        return async (dispatch, getState) => {
            dispatch()
        }
    }

}

export default shopActions;
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
        console.log(product)

        return async (dispatch, getState) => {
            
            dispatch({
                type: 'DELETETOSHOP',
                payload: { product }
            })
        }
    }

}

export default shopActions;
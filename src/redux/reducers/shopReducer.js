const initialState = {
    productsInShop: [],
}

const shopReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADDTOSHOP':

            let productsInShop = [...state.productsInShop];
            productsInShop.push(action.payload.product)
            return {
                ...state,
                productsInShop: productsInShop

            };

        default:
            return state;

    }

}

export default shopReducer;
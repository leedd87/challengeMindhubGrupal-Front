const initialState = {
    productsInShop: [],
}

const shopReducer = (state = initialState, action) => {

    let productsInShop = [...state.productsInShop];
    
    switch (action.type) {

        case 'ADDTOSHOP':

            productsInShop = [...state.productsInShop];
            productsInShop.push(action.payload.product)
            return {
                ...state,
                productsInShop: productsInShop

            };

        case 'DELETETOSHOP':

            productsInShop = [...state.productsInShop];
            // console.log(productsInShop)
            // console.log(action.payload.product.id)
            let modifiedShop = productsInShop.filter(product => product.id !== action.payload.product.id)
            return {
                ...state,
                productsInShop: modifiedShop

            };

        default:
            return state;

    }

}

export default shopReducer;
const initialState = {
    productsInShop: [],
    // productsInShopAux: [],
}
// localStorage.setItem('producto', JSON.stringify(product))
const shopReducer = (state = initialState, action) => {

    let productsInShop = [...state.productsInShop];
    
    switch (action.type) {

        case 'ADDTOSHOP':

            productsInShop = [...state.productsInShop];
            productsInShop.push(action.payload.product)
            
            localStorage.setItem('carrito', JSON.stringify(productsInShop) )
            return {
                ...state,
                productsInShop: productsInShop

            };

        case 'DELETETOSHOP':

            productsInShop = [...state.productsInShop];
            let modifiedShop = productsInShop.filter(product => product.id !== action.payload.product.id)

            localStorage.setItem('carrito', JSON.stringify(modifiedShop))
            return {
                ...state,
                productsInShop: modifiedShop

            };
        
        // case 'VERIFYSHOPSTORAGE':
        //     return {
        //         productsInShop: action.payload.shopStorage // IGUALO MI LOCAL STORAGE A MI STORE
        //     }

        default:
            return state;

    }

    
}

export default shopReducer;
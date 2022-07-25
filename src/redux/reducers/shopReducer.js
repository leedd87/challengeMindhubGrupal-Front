const initialState = {
    productsInShop: [],
}



const shopReducer = (state = initialState, action) => {

    let productsInShop = [...state.productsInShop];
    
    switch (action.type) {

        case 'ADDTOSHOP':

            productsInShop = [...state.productsInShop];

            
            // if (action.payload.product.id ===)
            // let productRepetido = productsInShop.map(product => product.id)

            // productRepetido.cant = productRepetido.cant + 1
            
            productsInShop.push(action.payload.product)
            
            localStorage.setItem('carrito', JSON.stringify(productsInShop) ) // hace que mi ls se vaya modificando en vivo
            return {
                ...state,
                productsInShop: productsInShop

            };

        case 'DELETETOSHOP':

            productsInShop = [...state.productsInShop];
            let modifiedShop = productsInShop.filter(product => product.id !== action.payload.product.id)

            localStorage.setItem('carrito', JSON.stringify(modifiedShop)) // hace que mi ls se vaya modificando en vivo
            return {
                ...state,
                productsInShop: modifiedShop

            };
        
        case 'VERIFYSHOPSTORAGE':
            return {
                productsInShop: action.payload.shopStorage // IGUALO MI LOCAL STORAGE A MI STORE
            }

        default:
            return state;

    }

    
}

export default shopReducer;
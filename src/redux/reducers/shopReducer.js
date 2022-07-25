const initialState = {
    productsInShop: [],
}



const shopReducer = (state = initialState, action) => {

    let productsInShop = [...state.productsInShop];
    
    switch (action.type) {

        case 'ADDTOSHOP':

            productsInShop = [...state.productsInShop];

            let productRepetido = productsInShop.find(product => product.id === action.payload.product.id)

            if (productRepetido === undefined) { // SI NO ESTA REPETIDO ENTRA ACA

                productsInShop.push(action.payload.product)
                
                localStorage.setItem('carrito', JSON.stringify(productsInShop) ) // hace que mi ls se vaya modificando en vivo
                return {
                    ...state,
                    productsInShop: productsInShop
    
                };
            } else { // SI ESTA REPETIDO ENTRA ACA

                productRepetido.cant = productRepetido.cant + 1;

                localStorage.setItem('carrito', JSON.stringify(productsInShop)) // hace que mi ls se vaya modificando en vivo
                return {
                    ...state,
                    productsInShop: productsInShop

                };


            }
            
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

        case 'DELETEALLTOSHOP':

            // productsInShop = [...state.productsInShop];
            // let modifiedShop = productsInShop.filter(product => product.id !== action.payload.product.id)

            // localStorage.setItem('carrito', JSON.stringify(modifiedShop)) // hace que mi ls se vaya modificando en vivo
            localStorage.removeItem('carrito')
            return {
                ...state,
                productsInShop: []

            };

        default:
            return state;

    }

    
}

export default shopReducer;
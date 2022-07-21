const initialState = {
    productsInShop: [],
}

const shopReducers = ( state = initialState, action ) => {

    switch (action.type) {

        case 'ADDTOSHOP':

            let productsInShop = [...state.productsInShop];

            return {
                ...state,
                productsInShop: productsInShop

            }

    }


}
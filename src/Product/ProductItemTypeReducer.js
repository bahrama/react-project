const ProductItemTypeReducer = (state,action) =>{
    switch (action.type) {
        case 'ADD_TO_CARD' :
        return {
            ...state ,
            added :true
        }
        case 'REMOVE_FROM_CARD' :
            return {
                ...state ,
                added :false
            }
    }
}

export default ProductItemTypeReducer
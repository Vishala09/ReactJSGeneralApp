let initialState = {loading:true,data:[]};

const ProductsReducer = (state=initialState,action) => {
    switch(action.type)
    {
        case 'GET_PRODUCTS':
            {
                state.loading=false;
                state.data=action.payload.products;
                return {...state};
            }
        default:
             return state;
    }
}

export default ProductsReducer;
let initialState = {loading:true,data:[]};

const QuotesReducer = (state=initialState,action) => {
    switch(action.type)
    {
        case 'GET_QUOTES':
            {
                state.loading=false;
                state.data=action.payload.quotes;
                return {...state};
            }
        default:
             return state;
    }
}

export default QuotesReducer;
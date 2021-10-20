const initalState = {
    cash:[],
    list:[]
}

const todoReducer = (state = initalState, action) => {
    
    switch (action.type) {
        case "ADDCASH":
        return {
            ...state,
            cash: [...state.cash, action.payload],
        };
        
        case "ADDAllAC":
        return {
            ...state,
            list: [...state.list, action.payload],
        };




        default:
        return state;
    };  
        
    };

    export default todoReducer;
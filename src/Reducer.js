export const initialState = {
    user:"00:00:00",
    remaining:180,
}

function Reducer (state, action) {
    console.log(action)
    switch(action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
                remaining:action.remaining
            }
         default:
            return state;
        }
}

export default Reducer;
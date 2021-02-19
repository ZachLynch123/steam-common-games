const  friendReducer = (state, action) => {

    switch(action.type) {
        case "FETCH_FRIENDS":
            return {
                friends: action.payload
            }
        default:
            return state
    }
}

export default friendReducer;
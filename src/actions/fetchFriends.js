const fetchFriends = friends => {
    return {
        type: "FETCH_FRIENDS",
        payload: friends
    }

}

export default fetchFriends;
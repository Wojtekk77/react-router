const initialState = {
    arrayOfDates: [{ "1996-05-31": 7 }],
};

export const numerologyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_DATES":
            return { ...state, isLoggedIn: !state.isLoggedIn };
        default:
            return state;
    }
};

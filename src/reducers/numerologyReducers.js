const initialState = {
    arrayOfDates: [{ data: "1996-05-31", numerologicNumber: 7 }],
};

export const numerologyReducer = (state = initialState, action) => {
    console.log("in numerologyReducer", action, state)
    switch (action.type) {
        case "UPDATE_DATES":
            return { ...state, arrayOfDates: action.dates };
        default:
            return state;
    }
};

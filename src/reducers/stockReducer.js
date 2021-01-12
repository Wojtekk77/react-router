const initialState = {
    marketIndices: [
        { id: "SP500", companies: ["sp500"] },
        { id: "WIG", companies: ["KGHM", "PKOBP", "CCC", "CDP"] },
    ]
}

export const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMPANIES_TO_INDEX":
            console.log("intoreducer")
            return { ...state, marketIndices: action.marketIndices };
        default:
            return state;
    }
};
const initialState = {
  marketIndices: [
    { SP500: ["sp500"] },
    { WIG: ["KGHM", "PKOBP", "CCC", "CDP"] },
  ],
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPANIES_TO_INDEX":
      console.log("intoreducer");
      return { ...state, marketIndices: action.marketIndices };
    default:
      return state;
  }
};

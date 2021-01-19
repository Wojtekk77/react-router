const initialState = {
    marketIndices: [
        { symbol: '^AXJO', name: 'ASX 20', constituents: [] },
        { symbol: 'XIN9.FGI', name: 'China A50', constituents: [] },
        { symbol: '^STOXX50E', name: 'Stoxx 50', constituents: [] },
        { symbol: '^FCHI', name: 'CAC 40', constituents: [] },
        { symbol: '^GDAXI', name: 'DAX', constituents: [] },
        { symbol: '^HSI', name: 'Hang Seng', constituents: [] },
        { symbol: '^N225', name: 'Nikkei 225', constituents: [] },
        { symbol: '^NSEI', name: 'Nifty 50', constituents: [] },
        { symbol: '^AEX', name: 'AEX index', constituents: [] },
        { symbol: '^STI', name: 'Straits Times Index', constituents: [] },
        { symbol: '^FTSE', name: 'FTSE 100', constituents: [] },
        { symbol: '^NDX', name: 'Nasdaq 100', constituents: [] },
        { symbol: '^RUT', name: 'Russel 2000', constituents: [] },
        { symbol: '^GSPC', name: 'S&P 500', constituents: [] },
        { symbol: '^DJI', name: 'Dow Jones', constituents: [] }
    ],
}

export const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMPANIES_TO_INDEX":
            console.log("I am in reducer", action.marketIndices)
            return { ...state, marketIndices: action.marketIndices };
        default:
            return state;
    }
};
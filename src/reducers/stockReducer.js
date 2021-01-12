const initialState = {
    marketIndices: [
        { symbol: '^AXJO', name: 'ASX 20' },
        { symbol: 'XIN9.FGI', name: 'China A50' },
        { symbol: '^STOXX50E', name: 'Stoxx 50' },
        { symbol: '^FCHI', name: 'CAC 40' },
        { symbol: '^GDAXI', name: 'DAX' },
        { symbol: '^HSI', name: 'Hang Seng' },
        { symbol: '^N225', name: 'Nikkei 225' },
        { symbol: '^NSEI', name: 'Nifty 50' },
        { symbol: '^AEX', name: 'AEX index' },
        { symbol: '^STI', name: 'Straits Times Index' },
        { symbol: '^FTSE', name: 'FTSE 100' },
        { symbol: '^NDX', name: 'Nasdaq 100' },
        { symbol: '^RUT', name: 'Russel 2000' },
        { symbol: '^GSPC', name: 'S&P 500' },
        { symbol: '^DJI', name: 'Dow Jones' }
    ],
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
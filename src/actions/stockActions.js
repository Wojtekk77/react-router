export const addCompanyToMarket = (marketIndices, companies, index) => {
    let newMarketIndices = marketIndices;
    for (let key in newMarketIndices) {
        console.log(key + " -> " + newMarketIndices[key]);
        if (key == index) {
            newMarketIndices[key] = newMarketIndices[key].concat(companies)
        }
    }
    console.log(newMarketIndices)
    return {
        type: "ADD_COMPANIES_TO_INDEX",
        marketIndices: newMarketIndices,
    }
}
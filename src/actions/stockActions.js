export const addCompanyToMarket = (marketIndices, constituents, symbol) => {
  let newMarketIndex = marketIndices.map((indexData) => {

    return symbol === indexData.symbol ? { ...indexData, constituents: indexData.constituents.concat(constituents) } : indexData
  })
  console.log("I am in stockActions", newMarketIndex)

  return {
    type: "ADD_COMPANIES_TO_INDEX",
    marketIndices: newMarketIndex
  };
};

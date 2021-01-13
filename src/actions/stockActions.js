export const addCompanyToMarket = (marketIndices, constituents, symbol) => {
  let newMarketIndex = marketIndices.map((indexData) => {

    return symbol === indexData.symbol ? { ...indexData, constituents: indexData.constituents.concat(constituents) } : indexData
  })
  console.log(newMarketIndex)

  return {
    type: "ADD_COMPANIES_TO_INDEX",
    marketIndices: newMarketIndex
  };
};

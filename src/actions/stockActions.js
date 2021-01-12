export const addCompanyToMarket = (marketIndices, constituents, symbol) => {
  const newMarketIndex = marketIndices.map((indexData) => {
    return symbol === indexData.symbol ? { ...indexData, constituents: indexData.companies.concat(constituents) } : indexData
  })

  console.log("newMarket", newMarketIndex);
  return {
    type: "ADD_COMPANIES_TO_INDEX",
    marketIndices: newMarketIndex,
  };
};

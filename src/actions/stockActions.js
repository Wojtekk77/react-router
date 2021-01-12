export const addCompanyToMarket = (marketIndices, companies, index) => {
  const newMarketIndex = marketIndices.map((indexData) => {
    return indexData.id === index ? { ...indexData, companies: indexData.companies.concat(companies) } : indexData
  })

  console.log("newMarket", newMarketIndex);
  return {
    type: "ADD_COMPANIES_TO_INDEX",
    marketIndices: newMarketIndex,
  };
};

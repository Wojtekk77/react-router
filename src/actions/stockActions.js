export const addCompanyToMarket = (marketIndices, companies, index) => {
  console.log("into action");
  return {
    type: "ADD_COMPANIES_TO_INDEX",
    marketIndices: marketIndices,
  };
};

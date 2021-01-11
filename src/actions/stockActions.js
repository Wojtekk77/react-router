export const addCompanyToMarket = (marketIndices, companies, index) => {
  const newMarketIndex = marketIndices.map((el) => {
    console.log("elIndex", el[index]);
    if (el[index]) {
      console.log(el[index].concat(companies));
      return { el: el[index].concat(companies) };
    } else {
      console.log(el);
      return el;
    }
  });
  console.log("into action");
  console.log("newMarket", newMarketIndex);
  return {
    type: "ADD_COMPANIES_TO_INDEX",
    marketIndices: newMarketIndex,
  };
};

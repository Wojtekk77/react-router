import numberOfDays from "../components/numberOfDays";

const countSumOfDigitInNumber = (number) =>
  number > 9
    ? countSumOfDigitInNumber(
        Array.from(String(number), Number).reduce((a, b) => a + b)
      )
    : number;

console.log(countSumOfDigitInNumber(11));

const countNumerologicNumber = (year, month, day) => {
  let numerologic_number = [year, month, day].reduce(
    (a, b) => countSumOfDigitInNumber(a) + countSumOfDigitInNumber(b)
  );
  return numerologic_number === 11 || numerologic_number === 22
    ? numerologic_number
    : countSumOfDigitInNumber(numerologic_number);
};

const allNumerologicsByDate = (startYear, endYear) => {
  let arrOfDates = [];
  let data = "";
  for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      for (let day = 1; day <= numberOfDays(year, month); day++) {
        data = "" + year + "-" + month + "-" + day;
        arrOfDates.push({
          data: data,
          numerologicNumber: countNumerologicNumber(year, month, day),
        });
      }
    }
  }
  console.log("allNum - kolejne wykonanie");
  return arrOfDates;
};
export default allNumerologicsByDate;

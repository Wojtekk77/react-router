export const updateDates = (dates) => {
    console.log("dates", dates)
    return {
        type: "UPDATE_DATES",
        dates,
    };
};
const initialState = {
  EventList: [
    { id: 0, name: "Strzelanie", event_date: "2021-03-03", status: "active" },
    {
      id: 1,
      name: "StandUp Lotek Lodkowski",
      event_date: "2021-12-02",
      status: "active",
    },
    { id: 2, name: "Koncert", event_date: "2021-01-12", status: "postponed" },
    {
      id: 3,
      name: "Mecz Polska - WKS",
      event_date: "2022-02-02",
      status: "active",
    },
    {
      id: 4,
      name: "Zajęcia z Matmy",
      event_date: "2020-12-22",
      status: "completed",
    },
    {
      id: 5,
      name: "Maryla rodowicz tańczy boso",
      event_date: "2023-12-12",
      status: "canceled",
    },
  ],
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return { ...state, EventList: state.EventList.concat(action.event) };
    default:
      return state;
  }
};

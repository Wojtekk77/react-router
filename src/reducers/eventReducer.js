const initialState = {
  EventList: [
    {
      id: "0",
      name: "Strzelanie",
      event_date: "2021-03-03",
      place: "Wrocław",
      status: "active",
    },
    {
      id: "1",
      name: "StandUp Lotek Lodkowski",
      event_date: "2021-12-02",
      place: "Wrocław",
      status: "active",
    },
    {
      id: "2",
      name: "Koncert",
      event_date: "2021-01-12",
      place: "Wrocław",
      status: "postponed",
    },
    {
      id: "3",
      name: "Mecz Polska - WKS",
      event_date: "2022-02-02",
      place: "Wrocław",
      status: "active",
    },
    {
      id: "4",
      name: "Zajęcia z Matmy",
      event_date: "2020-12-22",
      place: "Wrocław",
      status: "completed",
    },
    {
      id: "5",
      name: "Maryla rodowicz tańczy boso",
      event_date: "2023-12-12",
      place: "Wrocław",
      status: "canceled",
    },
  ],
  DetailList: [],
  ReservationList: [],
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENTS":
      console.log("addEvents", action.type);
      console.log(state.EventList);
      return { ...state, EventList: state.EventList.concat(action.events) };
    case "ADD_EVENT_DETAILS":
      console.log("addEventsDetails", action.type, action.event);
      return { ...state, DetailList: state.DetailList.concat(action.event) };
    case "ADD_EVENT_RESERVATION_DETAILS":
      console.log("addEventsDetails", action.type);
      return {
        ...state,
        ReservationList: state.DetailList.concat(action.reservationDetails),
      };
    default:
      console.log("i am in default return in reducer", action.type);
      return state;
  }
};

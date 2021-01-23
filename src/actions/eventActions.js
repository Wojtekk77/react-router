export const addEventsAction = (events) => {
  console.log("In action", events);
  return {
    type: "ADD_EVENTS",
    events,
  };
};

export const addEventDetails = (event) => {
  console.log("in Acion", event);
  return {
    type: "ADD_EVENT_DETAILS",
    event,
  };
};

export const addEventReservationStats = (event) => {
  console.log("in Acion", event);
  return {
    type: "ADD_EVENT_RESERVATION_DETAILS",
    event,
  };
};

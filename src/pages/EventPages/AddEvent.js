import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { authAction } from "../actions/authAction";
import Axios from "axios";

const AddEvent = () => {
  const state = useSelector((state) => state);
  // console.log(state);
  // const dispatch = useDispatch();
  // const handleAuth = () => {
  //   dispatch(authAction());
  // };
  const [token, setToken] = useState("");
  const [eventName, setEventName] = useState("");
  const [event_date, setEventDate] = useState("");
  const [event_time, setEventTime] = useState("");
  const [place, setEventPlace] = useState("");
  const [eventStatus, setEventStatus] = useState("");
  const [description, setEventDescription] = useState("");

  const addEvent = () => {
    // console.log(" i am in post auth login");
    // console.log(username, password);

    const api = `https://ticketmaster-django.herokuapp.com/admin/events/`;
    const token = "Token 654f6ac41de1b0f152e5cc36a3b6ce2c0b5350cb";

    Axios.post(
      api,
      {
        name: eventName,
        event_date: event_date + "T" + event_time,
        place: place,
        eventStatus: eventStatus,
        description: description,
      },
      { headers: { Authorization: `${token}` } }
    ).then(
      (response) => {
        console.log(response);
        // dispatch(authAction(true, true, response.data.token));
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div>
      {/* <h2>{state.auth.token}</h2> */}
      <label>Nazwa Wydarzenia</label>
      <input
        type="text"
        name="name"
        onChange={(e) => {
          setEventName(e.target.value);
        }}
      />
      <br />
      <label>Data Wydarzenia:</label>
      <input
        type="date"
        name="event_date"
        onChange={(e) => {
          setEventDate(e.target.value);
        }}
      />
      <label>Godzina:</label>
      <input
        onChange={(e) => {
          setEventTime(e.target.value);
        }}
        type="time"
        id="appt"
        name="appt"
        required
      ></input>
      <br />
      <label>Miejsce wydarzenia:</label>
      <input
        type="text"
        name="place"
        onChange={(e) => {
          setEventPlace(e.target.value);
        }}
      />
      <br />
      <div onChange={(e) => setEventStatus(e.target.value)}>
        <input type="radio" id="Choice1" name="eventStatus" value="active" />
        <label for="Choice1">Active</label>

        <input type="radio" id="Choice2" name="eventStatus" value="postponed" />
        <label for="Choice2">Postponed</label>

        <input type="radio" id="Choice3" name="eventStatus" value="canceled" />
        <label for="Choice3">Canceled</label>

        <input type="radio" id="Choice4" name="eventStatus" value="completed" />
        <label for="Choice4">Completed</label>
      </div>

      <label>Opis wydarzenia</label>
      <input
        type="text"
        name="description"
        onChange={(e) => {
          setEventDescription(e.target.value);
        }}
      />
      <p>event name: {eventName}</p>
      <p>event_date: {event_date}</p>
      <p>place: {place}</p>
      <p>eventStatus: {eventStatus}</p>
      <p>event description: {description}</p>
      {/* <button onClick={handleAuth} className="btn btn-info">
        {state.auth.isLoggedIn ? "Login" : "Logout"}
      </button> */}
      <button onClick={addEvent} className="btn btn-info">
        get token
      </button>
    </div>
  );
};

export default AddEvent;

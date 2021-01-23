import React, { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./styles.css";
import Axios from "axios";

// https://punkapi.com/documentation/v2

const Beer = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.desc}</p>
    </div>
  );
};

const App = () => {
  const [beer, setBeer] = useState("");
  const [listOfBeers, setListOfBeers] = useState([]);
  const REST_URL = `https://api.punkapi.com/v2/beers?beer_name=${beer}`;

  useEffect(() => {
    Axios.get(REST_URL)
      .then((res) => {
        setListOfBeers(
          res.data.map((el) => {
            return { name: el.name, desc: el.description };
          })
        );
      })
      .catch((err) => console.log("err", err));
  }, [beer]);

  // Axios.get(REST_URL)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.log("err", err));

  const beers = listOfBeers.map((el) => {
    return <Beer name={el.name} desc={el.desc} />;
  });

  return (
    <div className="App">
      <PulseLoader />
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setBeer(e.target.value)}
      />
      <div id="beers" />
      {beer}
      {beers}
    </div>
  );
};

export default App;

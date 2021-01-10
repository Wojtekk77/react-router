import allNumerologicsByDate from "./../components/numerologicNumbers";
import { useMemo, useEffect, useState, useCallback } from "react";
import React from "react";
function Numerology() {
  const [numerologic, setNumerologic] = useState({});

  const dates = allNumerologicsByDate(2020, 2020);
  const showDates = dates.map((element) => (
    <p key={element.data}>
      {element.data} - {element.numerologicNumber}
    </p>
  ));

  return (
    <>
      {showDates}
      <h2>Numerology Welcome</h2>
    </>
  );
}
export default React.memo(Numerology);

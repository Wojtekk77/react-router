import { useMemo } from 'react'
import allNumerologicsByDate from "../components/numerologicNumbers"

function Numerology() {
    const dates = allNumerologicsByDate(2020, 2020);
    let table = "";
    const showDatesInTable = dates.map((element) => {
        return <p>{element.data} + {element.numerologicNumber}</p>
    })

    return <>
        {console.log(showDatesInTable)}
        {showDatesInTable}
        <h2>Numerology Welcome</h2>
    </>
}
export default Numerology
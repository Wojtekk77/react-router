import { useMemo } from 'react'
import allNumerologicsByDate from "../components/numerologicNumbers"

function Numerology() {
    const dates = allNumerologicsByDate(2020, 2020);

    return <>
        <h2>Numerology Welcome</h2>
    </>
}
export default Numerology
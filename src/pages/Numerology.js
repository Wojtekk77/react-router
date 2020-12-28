import { useMemo, useEffect } from 'react'
import allNumerologicsByDate from "../components/numerologicNumbers"
import { connect } from 'react-redux'
import { updateDates } from "../actions/numerologyActions.js";

function Numerology(props) {
    let table = "";
    const showDatesInTable = props.arrayOfDates.map((element) => {
        return <p key={element.data}>{element.data} + {element.numerologicNumber}</p>
    })
    console.log(props)
    const handleClick = () => {
        console.log("click")
        props.updateDates2(allNumerologicsByDate(2020, 2020));
        console.log("after click", props.arrayOfDates)
    }
    return <>
        {/* {showDatesInTable} */}
        <h2>Numerology Welcome</h2>
        <button onClick={handleClick}>dispatch_updatedates</button>
        {showDatesInTable}
    </>
}

const mapStateToProps = (state, ownProps) => ({
    arrayOfDates: state.numerology.arrayOfDates,
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateDates2: (dates) => dispatch(updateDates(dates)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Numerology)
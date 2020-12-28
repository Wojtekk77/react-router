import { useMemo } from 'react'
import allNumerologicsByDate from "../components/numerologicNumbers"
import { connect } from 'react-redux'

function Numerology(props) {
    const dates = allNumerologicsByDate(2020, 2020);
    let table = "";
    const showDatesInTable = dates.map((element) => {
        return <p>{element.data} + {element.numerologicNumber}</p>
    })

    return <>
        {console.log(dates)}
        {showDatesInTable}
        <h2>Numerology Welcome</h2>
    </>
}

const mapStateToProps = (state, ownProps) => ({
    arrayOfDates: state.numerology.arrayOfDates,
});

const mapDispatchToProps = (dispatch) => {
    return {
        // CHANGE_DATES: (fields, id) => dispatch(setBetAction(fields, id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Numerology)
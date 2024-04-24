import './FilterButtonContainer.css';
import PropTypes from "prop-types";
import { useState } from 'react';
import FilterButtonByOrder from './FilterButtonByOrder/FilterButtonByOrder';
import FilterButton from './FilterButton/FilterButton';
import FilterMenu from './FilterMenu/FilterMenu';

function FilterButtonContainer ({ dataCategory }) {

    const [ visible, setVisible ] = useState(false);

    return (
        <>
            {visible && <FilterMenu visible={visible} setVisible={setVisible} dataCategory={dataCategory} /> }
            <div className="filter-button-container">
                <FilterButton setVisible={setVisible} />
                <FilterButtonByOrder dataCategory={dataCategory} />
            </div>
        </>
    )
}

FilterButtonContainer.propTypes = {
    dataCategory: PropTypes.number.isRequired,
}

export default FilterButtonContainer;

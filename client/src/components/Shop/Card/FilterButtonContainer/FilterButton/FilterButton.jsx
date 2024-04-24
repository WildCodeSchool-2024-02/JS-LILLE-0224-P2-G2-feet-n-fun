import PropTypes from "prop-types";

function FilterButton({ setVisible }) {

    const handleToggle = () => {
        setVisible(true);
    };

    return (
        <button type='button' className='filter-btn' onClick={handleToggle}>
            Filtrer par...
        </button>
    )
}

FilterButton.propTypes = {
    setVisible: PropTypes.func.isRequired,
}

export default FilterButton;
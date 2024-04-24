import PropTypes from "prop-types";
import { useNavigate, useLocation } from 'react-router-dom';

function FilterButtonByOrder ({ dataCategory }) {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    const queryContain = query && query.includes('all');

    const navigate = useNavigate();

    const handleSearch = (searchValue) => {
      navigate(`/filtre?query=${searchValue}-${queryContain ? "all" : dataCategory}`);
    };

    return (
        <select className="filter-button-by-order" onChange={(e) => handleSearch(e.target.value)}>
            <option value="">Trier par...</option>
            <option value="productsFilterAscending">Prix croissant</option>
            <option value="productsFilterDescending">Prix decroissant</option>
            <option value="productsFilterNew">Nouveauté</option>
        </select>
    )
};

FilterButtonByOrder.propTypes = {
    dataCategory: PropTypes.number.isRequired,
}

export default FilterButtonByOrder;

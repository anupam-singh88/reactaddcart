import React, { useContext } from 'react'
import ItemContext from '../context/ItemContext'

const CartFilters = () => {
    const { sortAsc, sortDsc } = useContext(ItemContext);
    // console.log(sortAsc())
    const priceHandler = () => {
        let priceOption = (document.getElementById('sorting').value);
        if (priceOption === "asc") {
            sortAsc();
        }
        if (priceOption === "dsc") {
            sortDsc();
        }
    }
    return (
        <div>
            <h4>Cart Filters</h4>
            <div className="filter">
                <select name="sorting" id="sorting" onClick={priceHandler}>
                    <option value="none">Price Range </option>
                    <option value="asc">Low To High</option>
                    <option value="dsc">High To Low</option>
                </select>


            </div>
        </div>
    )
}

export default CartFilters

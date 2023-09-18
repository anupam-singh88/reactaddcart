import React, { useEffect, useState, useReducer } from 'react'
import ItemContext from './ItemContext'
import { products } from '../products'
import { reducer } from "../redecer";

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
};
const ItemState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const deleteItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    }

    const incrementQty = (id) => {
        return dispatch({
            type: 'INCREMENT_ITEM',
            payload: id
        })
    }
    const decrementQty = (id) => {
        return dispatch({
            type: 'DECREMENT_ITEM',
            payload: id
        })
    }
    const clearCart = (id) => {
        return dispatch({
            type: 'CLEAR',
            payload: id
        })
    }

    const sortAsc = () => {
        // return state.item = state.item.sort((a, b) => {
        //     return a.price - b.price
        // })

        return dispatch({
            type: 'ASC',
            // payload: id
        })
    }
    const sortDsc = () => {
        return dispatch({
            type: 'DSC',
            // payload: id
        })
    }

    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
        // console.log("Awesome");
    }, [state.item]);


    return (
        <div>
            <ItemContext.Provider value={{ ...state, deleteItem, incrementQty, decrementQty, clearCart, sortAsc, sortDsc }}>
                {props.children}
            </ItemContext.Provider>
        </div>
    )
}

export default ItemState

export const reducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                item: state.item.filter((curElem) => {
                    return curElem.id !== action.payload;
                }),
            }
        case 'CLEAR':
            return {
                ...state,
                item: []
            }
        case 'INCREMENT_ITEM':
            const updatedIncCart = state.item.map((curElem) => {
                if (curElem.id === action.payload) {
                    return { ...curElem, quantity: curElem.quantity + 1 };
                }
                return curElem;
            });

            return { ...state, item: updatedIncCart };

        case 'DECREMENT_ITEM':
            const updatedCart = state.item
                .map((curElem) => {
                    if (curElem.id === action.payload) {
                        return { ...curElem, quantity: curElem.quantity - 1 };
                    }
                    return curElem;
                })
                .filter((curElem) => curElem.quantity !== 0);
            return { ...state, item: updatedCart };

        case 'GET_TOTAL':
            let { totalItem, totalAmount } = state.item.reduce(
                (accum, curVal) => {
                    let { price, quantity } = curVal;

                    let updatedTotalAmount = price * quantity;
                    accum.totalAmount += updatedTotalAmount;

                    accum.totalItem += quantity;
                    return accum;
                },
                {
                    totalItem: 0,
                    totalAmount: 0,
                }
            );
            return { ...state, totalItem, totalAmount };

    }
}
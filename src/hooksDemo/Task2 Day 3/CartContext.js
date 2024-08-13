import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return state.filter((item) => item.id !== action.payload);
        case 'CLEAR_CART':
            return [];  // Clear all items from the cart
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [
        { id: 1, name: 'Desk', price: 4 },
        { id: 2, name: 'Chair', price: 9 },
        { id: 3, name: 'Lamp', price: 3 },
    ]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

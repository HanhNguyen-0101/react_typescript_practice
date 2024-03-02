import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Cart = {
    id: string,
    title: string,
    price: number,
    quantity: number
}

type CartState = {
    items: Cart[];
}

const initialState: CartState = {
    items: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state: CartState, action: PayloadAction<{ id: string, title: string, price: number }>) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },
        removeFromCart(state: CartState, action: PayloadAction<string>) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                if (state.items[itemIndex].quantity === 1) {
                    state.items.splice(itemIndex, 1);
                } else {
                    state.items[itemIndex].quantity--;
                }
            }
        },
    },
});

export const {addToCart, removeFromCart} = CartSlice.actions;

export default CartSlice;
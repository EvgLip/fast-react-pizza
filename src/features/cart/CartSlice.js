import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice(
  {
    name: 'cart',
    initialState,
    reducers:
    {
      addItem (state, action)
      {//action.paload = newItem
        state.cart.push(action.payload);
      },

      deleteItem (state, action) 
      { //action.payload = pizzaId
        state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
      },

      increaseItemQuantity (state, action)
      {//action.payload = pizzaId
        const item = state.cart.find(item => item.pizzaId === action.payload);
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      },

      decreaseItemQuantity (state, action)
      { //action.payload = pizzaId
        const item = state.cart.find(item => item.pizzaId === action.payload);
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      },

      clearCart (state)
      {
        state.cart = [];
      },
    }
  }
);

export default cartSlice.reducer;
export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

//данные селекторы рекомендованы Redux к размещению в модулях Slice
//однако в больших приложениях могут снижать производительность
//для ознакомления просмотреть библиотеку reselect
export const getTotalCartQuantity =
  (state) => state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice =
  (state) => state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;
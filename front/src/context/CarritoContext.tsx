import React, { createContext, useContext, useReducer } from 'react';

// Definimos el contexto para el carrito de compras
const CartContext = createContext();

// Definimos las acciones que pueden modificar el estado del carrito
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
};

// Reducer para manejar el estado del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case actionTypes.REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload.id);
    case actionTypes.CLEAR_CART:
      return [];
    default:
      return state;
  }
};

// Componente de proveedor para el contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => useContext(CartContext);

// Uso del contexto del carrito en un componente
// Ejemplo: Agregar un elemento al carrito
/*
import { useCart, actionTypes } from './CartContext';

const Product = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};
*/

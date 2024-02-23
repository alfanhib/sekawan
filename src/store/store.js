/* eslint-disable no-undef */
import axios from 'axios';
import {create} from 'zustand';

const useAppStore = set => ({
  listProducts: [],
  cart: [],
  detailProduct: {},
  addProduct: product => {
    set(state => {
      return {
        cart: [...state.cart, product],
      };
    });
  },
  removeProduct: productId => {
    set(state => {
      return {
        cart: state.cart.filter(item => item.id !== productId),
      };
    });
  },
  updateProduct: product => {
    set(state => {
      return {
        cart: state.cart.map(item => {
          if (item.id === product.id) {
            return product;
          }
          return item;
        }),
      };
    });
  },
  removeAllProducts: () => {
    set({cart: []});
  },
  fetchProducts: async () => {
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products?limit=10',
      );
      console.log('isi response', response);
      set({listProducts: response.data});
    } catch (error) {
      console.error('isi error', error);
    }
  },
  fetchProduct: async id => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );
      console.log('isi response', response);
      set({detailProduct: response.data});
      return response.data;
    } catch (error) {
      console.error('isi error', error);
    }
  },
});

export default useProduct = create(useAppStore);

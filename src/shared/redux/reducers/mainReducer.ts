import {createSlice} from '@reduxjs/toolkit';
import {SAMPLE_PRODUCTS} from '../../exporter';

interface State {
  products: Array<any>;
}

const initialState: State = {
  products: SAMPLE_PRODUCTS,
};

export const mainReducer = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addNewProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
  },
});

export const {addNewProduct} = mainReducer.actions;

export default mainReducer.reducer;

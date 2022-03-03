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
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {setProducts} = mainReducer.actions;

export default mainReducer.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../product/product.type';
import Api from '../../api/product';

const initialState: ProductState = {
  isLoading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(Api.getData.pending, (state) => {
        state.isLoading = true;
        state.data = undefined;
      })
      .addCase(Api.getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(Api.getData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export default productSlice.reducer;

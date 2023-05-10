import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ResponseData,
} from '../redux/product/product.type';
import axios from 'axios';

const getData = createAsyncThunk<
ResponseData[],
  void,
  { rejectValue: any }
>('getData', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<ResponseData[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export default {
  getData,
};

import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import productReducer from './slices/product';
import { ProductState } from './product/product.type';

export interface InitialRootState {
  product: ProductState;
}

const rootPersistConfig = {
  key: 'login',
  storage,
  whitelist: ['login'],
};
const combinedReducer = combineReducers({
  product: productReducer,
});

export { rootPersistConfig, combinedReducer };

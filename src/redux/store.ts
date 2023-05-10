import { CombinedState, configureStore, PayloadAction, PreloadedState } from '@reduxjs/toolkit';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootPersistConfig, combinedReducer, InitialRootState } from './rootReducer';

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer = (
  state: CombinedState<InitialRootState> | undefined,
  action: PayloadAction<InitialRootState>
) => {
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
    preloadedState,
  });
}

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

const useDispatch = () => useAppDispatch<AppDispatch>();

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
export type AppStore = ReturnType<typeof setupStore>;

export { store, persistor, useSelector, useDispatch };

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ships from './slices/ShipsSlice';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import filter from './slices/FilterSlice';
import cart from './slices/CartSlice'
import { useDispatch } from 'react-redux';


const rootReducer = combineReducers({
  cart,
  filter,
  ships
});


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const store = configureStore({
//     reducer: {
//       ships,
//       filter,
//       cart
//     },
//   });

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch; 

export default store;
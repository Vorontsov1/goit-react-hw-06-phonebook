import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { myContactsSlice } from './contacts/contactsslice';



const persistConfig = {
  key: 'contacts',
  storage,
};

export const myContactsReducer = persistReducer(
  persistConfig,
  myContactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: myContactsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contacts/contactsslice';
// import { filtersReducer } from './contacts/filterSlice';
// import { combineReducers } from '@reduxjs/toolkit';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filtersReducer,
// });

// export const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);
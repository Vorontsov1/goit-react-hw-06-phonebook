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
import { contactsReducer } from './contacts/contactsslice';
import { filtersReducer } from './contacts/filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware ({
      serializableCheck: {
        ignoreActions: [FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,]
      },
    });
  },
});

export const persistor = persistStore(store);


import { createSlice, nanoid } from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    },
  reducers: {
    addContacts : {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(({id}) => id === action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const {addContact, deleteContact} = myContactsSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  myContactsSlice.reducer
);


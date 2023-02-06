import { createSlice } from '@reduxjs/toolkit';
// import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setFilter, addContacts, removeContacts } =
  myContactsSlice.actions;
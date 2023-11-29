import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'FLUSH',
          'REHYDRATE',
          'PAUSE',
          'PERSIST',
          'PURGE',
          'REGISTER',
        ],
      },
    }),
});

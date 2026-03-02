import { configureStore } from '@reduxjs/toolkit';
import aiReducer from './aiSlice';
import codeReducer from './codeSlice';
import websiteReducer from './websiteSlice';
import historyReducer from './historySlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    ai: aiReducer,
    code: codeReducer,
    website: websiteReducer,
    history: historyReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
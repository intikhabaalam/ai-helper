import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    items: [],
    filteredItems: [],
    searchTerm: '',
    filter: 'all', // all | search | code | website
    bookmarks: [],
    isLoading: false,
  },
  reducers: {
    addToHistory: (state, action) => {
      state.items.unshift({
        id: Date.now(),
        ...action.payload,
        timestamp: new Date().toISOString(),
        bookmarked: false,
      });
      
      // Keep only last 100 items
      if (state.items.length > 100) {
        state.items = state.items.slice(0, 100);
      }
    },
    removeFromHistory: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearHistory: (state) => {
      state.items = [];
      state.filteredItems = [];
    },
    toggleBookmark: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.bookmarked = !item.bookmarked;
        
        if (item.bookmarked) {
          state.bookmarks.push(item.id);
        } else {
          state.bookmarks = state.bookmarks.filter(id => id !== item.id);
        }
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = state.items.filter(item =>
        item.query?.toLowerCase().includes(action.payload.toLowerCase()) ||
        item.result?.title?.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      
      if (action.payload === 'all') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(item => item.type === action.payload);
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  addToHistory,
  removeFromHistory,
  clearHistory,
  toggleBookmark,
  setSearchTerm,
  setFilter,
  setLoading,
} = historySlice.actions;

export default historySlice.reducer;
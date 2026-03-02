import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { aiService } from './aiService';

// Async thunk for processing AI queries
export const processQuery = createAsyncThunk(
  'ai/processQuery',
  async ({ query, type, language = 'javascript' }, { rejectWithValue }) => {
    try {
      const response = await aiService.processAIQuery(query, type, language);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const aiSlice = createSlice({
  name: 'ai',
  initialState: {
    query: '',
    result: null,
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
    type: 'search', // search | code | website
    language: 'javascript',
    history: [],
    suggestions: [],
    isLoading: false,
    progress: 0,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    clearResult: (state) => {
      state.result = null;
      state.error = null;
      state.status = 'idle';
    },
    clearError: (state) => {
      state.error = null;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    updateProgress: (state, action) => {
      state.progress = action.payload;
    },
    resetState: (state) => {
      state.query = '';
      state.result = null;
      state.status = 'idle';
      state.error = null;
      state.progress = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(processQuery.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
        state.error = null;
        state.progress = 0;
      })
      .addCase(processQuery.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.result = action.payload;
        state.progress = 100;
        
        // Add to history
        state.history.unshift({
          id: Date.now(),
          query: state.query,
          result: action.payload,
          type: state.type,
          timestamp: new Date().toISOString(),
        });
      })
      .addCase(processQuery.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.error = action.payload || 'Something went wrong';
        state.progress = 0;
      });
  },
});

export const {
  setQuery,
  setType,
  setLanguage,
  clearResult,
  clearError,
  setSuggestions,
  updateProgress,
  resetState,
} = aiSlice.actions;

export default aiSlice.reducer;
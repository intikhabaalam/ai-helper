import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { codeService } from './codeService';

// Async thunk for code fixing
export const fixCode = createAsyncThunk(
  'code/fixCode',
  async ({ code, language, options = {} }, { rejectWithValue }) => {
    try {
      const response = await codeService.fixCode(code, language, options);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for code explanation
export const explainCode = createAsyncThunk(
  'code/explainCode',
  async ({ code, language }, { rejectWithValue }) => {
    try {
      const response = await codeService.explainCode(code, language);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for code optimization
export const optimizeCode = createAsyncThunk(
  'code/optimizeCode',
  async ({ code, language }, { rejectWithValue }) => {
    try {
      const response = await codeService.optimizeCode(code, language);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const codeSlice = createSlice({
  name: 'code',
  initialState: {
    input: '// Write your code here\nfunction hello() {\n  console.log("Hello World");\n}',
    output: '',
    language: 'javascript',
    status: 'idle',
    error: null,
    history: [],
    favorites: [],
    suggestions: [],
    isLoading: false,
    fontSize: 14,
    theme: 'vs-dark',
    wordWrap: 'on',
    minimap: false,
    lineNumbers: true,
    isFullscreen: false,
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    clearOutput: (state) => {
      state.output = '';
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.favorites.indexOf(id);
      if (index === -1) {
        state.favorites.push(id);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setWordWrap: (state, action) => {
      state.wordWrap = action.payload;
    },
    toggleMinimap: (state) => {
      state.minimap = !state.minimap;
    },
    toggleLineNumbers: (state) => {
      state.lineNumbers = !state.lineNumbers;
    },
    toggleFullscreen: (state) => {
      state.isFullscreen = !state.isFullscreen;
    },
    resetEditor: (state) => {
      state.input = '// Write your code here\nfunction hello() {\n  console.log("Hello World");\n}';
      state.output = '';
      state.language = 'javascript';
    },
  },
  extraReducers: (builder) => {
    builder
      // Fix Code
      .addCase(fixCode.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fixCode.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.output = action.payload;
        
        state.history.unshift({
          id: Date.now(),
          type: 'fix',
          input: state.input,
          output: action.payload,
          language: state.language,
          timestamp: new Date().toISOString(),
        });
      })
      .addCase(fixCode.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.error = action.payload;
      })
      
      // Explain Code
      .addCase(explainCode.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(explainCode.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.output = action.payload;
      })
      .addCase(explainCode.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.error = action.payload;
      })
      
      // Optimize Code
      .addCase(optimizeCode.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(optimizeCode.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.output = action.payload;
      })
      .addCase(optimizeCode.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setInput,
  setOutput,
  setLanguage,
  clearOutput,
  toggleFavorite,
  setFontSize,
  setTheme,
  setWordWrap,
  toggleMinimap,
  toggleLineNumbers,
  toggleFullscreen,
  resetEditor,
} = codeSlice.actions;

export default codeSlice.reducer;
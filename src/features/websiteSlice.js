import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { websiteService } from './websiteService';

// Async thunk for website generation
export const generateWebsite = createAsyncThunk(
  'website/generateWebsite',
  async ({ prompt, template = 'modern', options = {} }, { rejectWithValue }) => {
    try {
      const response = await websiteService.generateWebsite(prompt, template, options);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for template customization
export const customizeTemplate = createAsyncThunk(
  'website/customizeTemplate',
  async ({ template, customizations }, { rejectWithValue }) => {
    try {
      const response = await websiteService.customizeTemplate(template, customizations);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const websiteSlice = createSlice({
  name: 'website',
  initialState: {
    prompt: 'Create a modern portfolio website with dark mode',
    output: '',
    template: 'modern',
    status: 'idle',
    error: null,
    history: [],
    favorites: [],
    templates: [
      { id: 'modern', name: 'Modern', icon: '✨' },
      { id: 'portfolio', name: 'Portfolio', icon: '🎨' },
      { id: 'business', name: 'Business', icon: '💼' },
      { id: 'ecommerce', name: 'E-commerce', icon: '🛍️' },
      { id: 'blog', name: 'Blog', icon: '📝' },
      { id: 'landing', name: 'Landing Page', icon: '🚀' },
    ],
    currentTemplate: null,
    previewMode: 'desktop', // desktop | tablet | mobile
    showCode: false,
    isLoading: false,
    customizations: {
      primaryColor: '#8b5cf6',
      secondaryColor: '#ec4899',
      darkMode: true,
      animations: true,
    },
  },
  reducers: {
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    },
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    },
    clearOutput: (state) => {
      state.output = '';
    },
    setPreviewMode: (state, action) => {
      state.previewMode = action.payload;
    },
    toggleShowCode: (state) => {
      state.showCode = !state.showCode;
    },
    updateCustomization: (state, action) => {
      state.customizations = {
        ...state.customizations,
        ...action.payload,
      };
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
    resetWebsite: (state) => {
      state.prompt = 'Create a modern portfolio website with dark mode';
      state.output = '';
      state.template = 'modern';
      state.customizations = {
        primaryColor: '#8b5cf6',
        secondaryColor: '#ec4899',
        darkMode: true,
        animations: true,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // Generate Website
      .addCase(generateWebsite.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
        state.error = null;
      })
      .addCase(generateWebsite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.output = action.payload;
        state.currentTemplate = state.template;
        
        state.history.unshift({
          id: Date.now(),
          prompt: state.prompt,
          template: state.template,
          output: action.payload,
          timestamp: new Date().toISOString(),
        });
      })
      .addCase(generateWebsite.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.error = action.payload;
      })
      
      // Customize Template
      .addCase(customizeTemplate.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(customizeTemplate.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.output = action.payload;
      })
      .addCase(customizeTemplate.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setPrompt,
  setTemplate,
  setOutput,
  clearOutput,
  setPreviewMode,
  toggleShowCode,
  updateCustomization,
  toggleFavorite,
  resetWebsite,
} = websiteSlice.actions;

export default websiteSlice.reducer;
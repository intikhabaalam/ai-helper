import { createSlice } from '@reduxjs/toolkit';

// Get initial theme from localStorage
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: getInitialTheme(),
    primaryColor: '#8b5cf6',
    secondaryColor: '#ec4899',
    fontSize: 'medium', // small | medium | large
    animations: true,
    sidebarOpen: false,
    notifications: true,
    compactMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
      
      // Apply to document
      if (state.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
      document.documentElement.style.setProperty('--primary-color', action.payload);
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload;
      document.documentElement.style.setProperty('--secondary-color', action.payload);
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
      
      const sizes = {
        small: '14px',
        medium: '16px',
        large: '18px',
      };
      
      document.documentElement.style.fontSize = sizes[action.payload];
    },
    toggleAnimations: (state) => {
      state.animations = !state.animations;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleNotifications: (state) => {
      state.notifications = !state.notifications;
    },
    toggleCompactMode: (state) => {
      state.compactMode = !state.compactMode;
    },
    resetTheme: (state) => {
      state.darkMode = getInitialTheme();
      state.primaryColor = '#8b5cf6';
      state.secondaryColor = '#ec4899';
      state.fontSize = 'medium';
      state.animations = true;
      state.compactMode = false;
    },
  },
});

export const {
  toggleDarkMode,
  setPrimaryColor,
  setSecondaryColor,
  setFontSize,
  toggleAnimations,
  toggleSidebar,
  toggleNotifications,
  toggleCompactMode,
  resetTheme,
} = themeSlice.actions;

export default themeSlice.reducer;
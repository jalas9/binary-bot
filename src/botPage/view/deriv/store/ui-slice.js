import { createSlice } from "@reduxjs/toolkit";

const initial_states = {
  show_tour: false,
  is_gd_ready: false,
  is_bot_running: false,
  account_switcher_loader: true,
  show_bot_unavailable_page: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initial_states,
  reducers: {
    updateShowTour: (state, action) => {
      state.show_tour = action.payload;
    },
    setGdReady: (state, action) => {
      state.is_gd_ready = action.payload;
    },
    setIsBotRunning: (state, action) => {
      state.is_bot_running = action.payload;
    },
    setAccountSwitcherLoader: (state, action) => {
      state.account_switcher_loader = action.payload;
    },
    updateShowMessagePage: (state, action) => {
      state.show_bot_unavailable_page = action.payload;
    },
  },
});

export const {
  updateShowTour,
  setGdReady,
  setIsBotRunning,
  setAccountSwitcherLoader,
  updateShowMessagePage,
} = uiSlice.actions;

export default uiSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
  selectedMail: null,
  sendMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;

// create selectors that can hook into state
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;

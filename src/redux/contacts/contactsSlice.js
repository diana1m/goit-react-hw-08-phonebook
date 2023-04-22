import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => handlePending(state))
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state) => handleRejected(state))
      .addCase(addContact.pending, (state) => handlePending(state))
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state) => handleRejected(state))
      .addCase(deleteContact.pending, (state) => handlePending(state))
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state) => handleRejected(state))
    }
});

// export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
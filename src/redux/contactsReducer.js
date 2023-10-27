
import { requestAddContact, requestContacts } from "services/contacts";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (__, thunkAPI) => {
  try {
    const contactsData = await requestContacts();
    console.log(contactsData)
    return contactsData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const addContact = createAsyncThunk('contacts/fetchAll', async (newContact, thunkAPI) => {
  try {
    const contact = await requestAddContact(newContact);
    console.log(contact)
    return contact;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

const INITIAL_STATE = {

  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
};




const contactsSlice = createSlice({
  
  name: "contacts",
 
  initialState: INITIAL_STATE,
  
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => { 
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
       }),
 
});


export const { addContacts, deleteContacts, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;


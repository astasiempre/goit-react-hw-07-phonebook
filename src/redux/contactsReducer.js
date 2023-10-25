
import { fetchContacts } from "services/contacts";
// import { useDispatch } from "react-redux";

// const dispatch = useDispatch();
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



export const requestContacts = createAsyncThunk('contacts/fetchAll', async (data, thunkAPI) => {
  try {
    const contactsData = await fetchContacts();
    return contactsData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})



const INITIAL_STATE = {
  // contacts: [],
  // filter: '',

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
  
  reducers: {
      addContacts(state, action) {
        state.contacts.push(action.payload);
          
    },
      deleteContacts(state, action) {
        state.contacts = state.contacts.filter(
          contact => contact.name !== action.payload
        );
        
    },
      setFilter(state, action) {
        state.filter = action.payload;
    },
  },
});


export const { addContacts, deleteContacts, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;


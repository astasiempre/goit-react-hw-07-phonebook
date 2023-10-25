const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE = {
  contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
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

// Генератори екшенів
export const { addContacts, deleteContacts, setFilter } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'contacts/addContacts': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts/deleteContacts': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.name !== action.payload
//         ),
//       };
//     }
//     case 'contacts/setFilter': {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }

//     case 'contacts/setContacts': {
//       return {
//         ...state,
//         contacts: action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// };

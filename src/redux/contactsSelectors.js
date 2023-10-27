
export const selectContacts = state => state.contacts.contacts.items;
export const selectContactsIsloading = state => state.contacts.contacts.isLoading;
export const selectContactsError = state => state.contacts.contacts.error;
export const selectContactsFilter = state => state.contacts.filter;
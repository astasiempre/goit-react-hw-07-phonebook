import axios from 'axios';

 export const fetchContacts = async () => {
  const { data } = await axios.get(
    `https://65393496e3b530c8d9e81b9f.mockapi.io/api/v1/contacts`
  );
  console.log(data)
  return data;
}

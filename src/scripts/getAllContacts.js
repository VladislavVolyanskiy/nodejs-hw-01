import { readContacts } from '../utils/readContacts.js'

export const getAllContacts = async () => {
  try {
    const currentContacts = await readContacts();
    const parsedContacts = JSON.parse(currentContacts);
    return parsedContacts;
  } catch (error) {
    console.error('getAllContacts', error);
  }
};

console.log(await getAllContacts());

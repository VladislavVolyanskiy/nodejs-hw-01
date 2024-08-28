import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();
    const parsedContacts = JSON.parse(currentContacts);
    if (parsedContacts.length > 0) {
      parsedContacts.pop();
    }
    await writeContacts(parsedContacts)
  } catch (error) {
    console.error('removeLastContact', error);
  }
};

removeLastContact();

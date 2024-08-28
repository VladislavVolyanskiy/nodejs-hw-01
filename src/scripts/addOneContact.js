import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js'
import { writeContacts } from '../utils/writeContacts.js'

export const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();
    const parsedContacts = JSON.parse(currentContacts);
    const contact = createFakeContact();
    parsedContacts.push(contact);
    await writeContacts(parsedContacts);
  } catch (error) {
    console.error('addOneContact', error);
  }
};

addOneContact();

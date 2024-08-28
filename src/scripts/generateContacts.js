import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();
    const parsedContacts = JSON.parse(currentContacts);
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      parsedContacts.push(contact);
    }
    await writeContacts(parsedContacts);
  } catch (error) {
    console.error('generateContacts', error);
  }
};

generateContacts(5);

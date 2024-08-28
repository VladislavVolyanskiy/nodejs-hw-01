import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    return data;
  } catch (error) {
    console.error('readContacts', error);
    throw error; // for reading an error on upper level
  }
};

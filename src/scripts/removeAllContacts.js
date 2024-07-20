import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    // const data = fs.readFile(PATH_DB, 'utf-8');
    await fs.writeFile(PATH_DB, JSON.stringify([]));
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();

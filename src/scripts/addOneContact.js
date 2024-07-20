import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    await fs.appendFile(
      PATH_DB,
      JSON.stringify(createFakeContact(), undefined, 2),
    );
  } catch (error) {
    console.error(error);
  }
};

addOneContact();

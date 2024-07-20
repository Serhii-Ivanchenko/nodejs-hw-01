import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    for (let index = 0; index < number; index++) {
      await fs.appendFile(
        PATH_DB,
        JSON.stringify(createFakeContact(), undefined, 2),
      );
    }
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);

import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'

export const countContacts = async () => {
    try {
        const dbJson = await fs.readFile(PATH_DB, 'utf-8');
        const dbArr = JSON.parse(dbJson);
        if (Array.isArray(dbArr) && dbArr.length >= 0) {
            return `Number of contacts: ${dbArr.length}`;
        } 

    } catch (error) {
        console.log(error.message);

    }
};

console.log(await countContacts());

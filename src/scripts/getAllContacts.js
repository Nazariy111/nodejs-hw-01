import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'

export const getAllContacts = async () => {
    try {
        const dbJson = await fs.readFile(PATH_DB, 'utf-8');
        const dbArr = JSON.parse(dbJson);
        if (Array.isArray(dbArr) && dbArr.length > 0) {
            return dbArr;
        } else {
            return "!!!Sorry, there are no any contacts in DB!!!";
        };

    } catch (error) {
        console.log(error.message);
    }

};

console.log(await getAllContacts());

import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";

export const removeAllContacts = async () => {
    try {
        const arr = [];
        const stringifyedArr = JSON.stringify(arr, null, 2)
        await fs.writeFile(PATH_DB, stringifyedArr, 'utf-8');

    } catch (error) {
        console.log(error.message)

    }
};

await removeAllContacts();

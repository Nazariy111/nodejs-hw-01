import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from "fs/promises";

export const addOneContact = async () => {
    try {
        const dbJson = await fs.readFile(PATH_DB, 'utf-8');
        const dbArr = JSON.parse(dbJson);

        const newContact = createFakeContact();
        const newArr = dbArr.concat(newContact);
        const stringifyedArr = JSON.stringify(newArr, null, 2);

        await fs.writeFile(PATH_DB, stringifyedArr, 'utf-8');
    } catch (error) {
        console.log(error.message);
    }
};

await addOneContact();

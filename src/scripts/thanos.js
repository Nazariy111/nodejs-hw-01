import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

export const thanos = async () => {
    try {
        const allContacts = await getAllContacts();

        if (allContacts.length !== 0) {
            const randomContactsArr = [];
            for (let i = 0; i < allContacts.length; i++) {
                const random = Math.random();
                if (random < 0.5) {
                    randomContactsArr.push(allContacts[i]);
                }
            }

            const stringifyedArr = JSON.stringify(randomContactsArr, null, 2);
            await fs.writeFile(PATH_DB, stringifyedArr, 'utf-8');
            console.log(`You had ${allContacts.length} contacts, but now only ${randomContactsArr.length} left...`);
            
        } else {
            console.log("Sorry! There are no contacts");
        }
    } catch (error) {
        console.log(error);
    }
};

await thanos();

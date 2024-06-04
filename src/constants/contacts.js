import fs from 'node:fs';
import path from 'node:path';


const workdir = process.cwd();
export const PATH_DB = path.join(workdir, 'src', 'db', 'db.json');



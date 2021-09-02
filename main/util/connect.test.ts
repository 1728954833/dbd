import DBConnection, { ConnectArgs } from './connect';
import * as M from 'mysql2/node_modules/iconv-lite';
import { error } from 'console';
// solve encode error
M.encodingExists('foo');

describe('DBConnection', () => {
    let db:DBConnection | null = null;
    it('The database can be connected correctly', () => {
        const args: ConnectArgs = {
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            dialect: 'mysql'
        };
        db = new DBConnection(args);
        expect(db).toBeDefined();
    });

    it('The database authenticate correctly', async () => {
        expect.assertions(1);

        if (!db) return;
        const connected = await db.authenticate();
        expect(connected).toBe(true);
    });

    it('can get all databases', async () => {
        expect.assertions(1);

        if (!db) return;
        const res = await db.getAllDatabase();
        expect(res).toBeDefined();
    });
});
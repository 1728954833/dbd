import { Dialect, Sequelize, QueryTypes } from 'sequelize';
export interface ConnectArgs {
    host: string;
    port: number;
    username: string;
    password: string;
    dialect: Dialect;
}
class DBConnection {
    public sequelize: Sequelize;
    constructor(args: ConnectArgs) {
    	this.sequelize = this.connect(args);
    }

    connect(args: ConnectArgs): Sequelize {
    	const sequelize = new Sequelize(args);

    	return sequelize;
    }

    switchConnect(args: ConnectArgs) {
    	this.sequelize = this.connect(args);
    }

    async authenticate(): Promise<boolean> {
        try {
            await this.sequelize.authenticate();
            return true;
        } catch(error) {
            console.error('Unable to connect to the database:', error);
            return false;
        }
    }

    async getAllDatabase() {
        const dbs: { Database: string }[] = await this.sequelize.query('show databases', { type: QueryTypes.SELECT });
        return dbs.map(db => db.Database);
    }
}

export default DBConnection;

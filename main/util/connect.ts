import { Sequelize } from 'sequelize';

export interface ConnectArgs {
    host: string;
    port: number;
    username: string;
    password: string;
}
class DBConnection {
    public sequelize: Sequelize;
    constructor(args: ConnectArgs) {
    	this.sequelize = this.connect(args);
    }

    connect(args: ConnectArgs): Sequelize {
    	const sequelize = new Sequelize(args);

    	sequelize
    		.authenticate()
    		.catch(error =>
    			console.error('Unable to connect to the database:', error)
    		);

    	return sequelize;
    }

    switchConnect(args: ConnectArgs) {
    	this.sequelize = this.connect(args);
    }
}

export default DBConnection;

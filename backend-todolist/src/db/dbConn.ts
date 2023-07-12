import { connect, Mongoose } from "mongoose";

export class DBConn {

    conn: Mongoose;

    constructor() {
		if (!this.conn) {
            this.initDB();
        }
	  }

    async initDB() {
        try {
            this.conn = await connect('mongodb://localhost:27017/todo');
        } catch (e) {
            throw(`Can't create connection with DB, reason: ${e.message}`);
        }
    }
}

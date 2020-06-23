import { Client } from "https://deno.land/x/postgres@v0.3.11/mod.ts";


class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        this.client = new Client({
            user: "postgres",
            database: "logrocket_deno",
            host: "localhost",
            password: "postgres",
            port: "4000"
        });

        await this.client.connect();
    }
}

export default new Database().client;
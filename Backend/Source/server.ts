/* 
=====================================
=========[ SAMUEL KYNASTON ]=========
=======[ ALL RIGHTS RESERVED ]=======
=====================================
*/

// DEV CONFIG
const isDev = process.env.NODE_ENV === `development`

//PORT
const DefaultPort = process.env.PORT

// IMPORTS
import express from "express"
import cors from "cors"

// EXPRESS
const app = express()

// SERVER
class Server {
    public app: express.Application;
    public operatorPort: string;

    constructor() {
        this.build()
    }

    public async build() {
        // BUILD APPS FOR ROUTES
        
        // BUILD OPERATOR APP
        this.listen(app, DefaultPort)
    }

    private listen(app: express.Application, port: string) {
        app.listen(port, () => {
            console.log(`[LISTENING] localhost:${port}`)
        })
    }
}

export default new Server()
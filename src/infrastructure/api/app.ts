import express from 'express';
import db from './db';
import { UserRoutes } from './routes/UserRoutes';

export class App {
    app: express.Application = express();
    init() {
        this.app.use(express.json());
        db();
        const route = new UserRoutes();
        route.registerRoutes(this.app);

        this.app.listen(3000, () => {
            console.log('App listening on port 3000');
        })
    }
}
import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import sequelize from './sequelize';

/*
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signupRouter } from './routes/signup';
import { signoutRouter } from './routes/signout';
import { NotFoundError } from './errors/not-found-error';
*/
// import { errorHandler } from './middlewares/error-handler';
import { currentUserRouter } from './routes/current-user';

const app = express();
app.use(json());

/*
app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
*/
app.use(currentUserRouter);

/*
app.all('*', async () => {
    // throw new NotFoundError();
});
*/

// app.use(errorHandler);

const init = async () => {
    try {
        // Tests the connection 
        (await sequelize).authenticate();

        console.log('Successfully connected to MySQL Database');

        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    } catch (error) {
        console.error(error);
    }
}

init();

import {
    createUser,
    getUserbyEmail,
    sendEmailtoUser,
    test,
} from '../controller/user.controller';
import { auth } from '../services/AuthBlock';

const userRoutes = (app) => {
    app.post('/user', auth, createUser);
    app.get('/userEmail', getUserbyEmail);
    app.get('/sendEmail', auth, sendEmailtoUser);
    app.get('/test', auth, test);
};

export default userRoutes;

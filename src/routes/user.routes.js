import {
    create,
    getUserbyEmail,
    sendEmailtoUser,
    test,
} from '../controller/user.controller';
import { auth } from '../services/AuthBlock';

const userRoutes = (app) => {
    app.post('/user', auth, create);
    app.get('/userEmail', getUserbyEmail);
    app.get('/sendEmail', auth, sendEmailtoUser);
    app.get('/test', auth, test);
};

export default userRoutes;

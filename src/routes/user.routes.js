import {
    create,
    getUserbyEmail,
    sendEmailtoUser,
} from '../controller/user.controller';
import { auth } from '../services/AuthBlock';

const userRoutes = (app) => {
    app.post('/user', auth, create);
    app.get('/userEmail', getUserbyEmail);
    app.get('/sendEmail', sendEmailtoUser);
};

export default userRoutes;

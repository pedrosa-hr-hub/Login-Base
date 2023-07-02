import {
    createUser,
    getUserbyEmail,
    sendEmailtoUser,
    updateUser,
    deleteUser,
    test,
} from '../controller/user.controller';
import { auth } from '../services/AuthBlock';

const userRoutes = (app) => {
    app.post('/user', auth, createUser);
    app.get('/user', getUserbyEmail);
    app.get('/sendEmail', auth, sendEmailtoUser);
    app.put('/user', auth, updateUser);
    app.delete('/user', auth, deleteUser);
    app.get('/test', auth, test);
};

export default userRoutes;

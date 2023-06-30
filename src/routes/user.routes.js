import { create, getUserbyEmail } from '../controller/user.controller';
import { authenticate } from '../controller/user.middleware';

const userRoutes = (app) => {
    app.post('/user', create);
    app.get('/userEmail', getUserbyEmail);
};

export default userRoutes;

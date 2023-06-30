import { create, getUserbyEmail } from '../controller/user.controller';
import { auth } from '../services/AuthBlock';

const userRoutes = (app) => {
    app.post('/user', auth, create);
    app.get('/userEmail', getUserbyEmail);
};

export default userRoutes;

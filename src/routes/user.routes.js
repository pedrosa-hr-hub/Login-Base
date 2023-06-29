import { create } from '../controller/user.controller';
import { authenticate } from '../controller/user.middleware';

const userRoutes = (app) => {
    app.post('/user', authenticate, create);
};

export default userRoutes;

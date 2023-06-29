import createUser from '../model/user.model';

const bcrypt = require('bcrypt');

export const create = async (req, res) => {
    try {
        const password = await req.body.password;
        const reqdata = await req.body;
        var salt = bcrypt.genSaltSync(8);
        var hash = bcrypt.hashSync(password, salt);

        reqdata.password = hash;

        await createUser(reqdata);

        res.status(201).json(reqdata);
    } catch (e) {
        res.status(400).json(e);
    }
};

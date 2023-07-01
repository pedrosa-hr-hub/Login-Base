import { create_User } from '../model/user.model';
import { find_UserbyEmail } from '../model/user.model';
import { sendEmail } from '../services/SendEmail';

const bcrypt = require('bcrypt');

export const create = async (req, res) => {
    try {
        var password = await req.body.password;
        var reqdata = await req.body;
        var salt = bcrypt.genSaltSync(8);
        var hash = bcrypt.hashSync(password, salt);

        reqdata.password = hash;

        await create_User(reqdata);

        res.status(201).json(reqdata);
    } catch (e) {
        res.status(404).json(e);
    }
};

export const getUserbyEmail = async (req, res) => {
    try {
        var reqdata = await req.body;

        var dbdata = await find_UserbyEmail(reqdata);

        if (dbdata == null) {
            res.status(401).json('Verify your credentials');
        } else {
            const password = await req.body.password;

            bcrypt.compare(password, dbdata.password, (error, result) => {
                if (result == true) {
                    const email = reqdata.email;
                    var salt = bcrypt.genSaltSync(12);
                    var hash = bcrypt.hashSync(email, salt);

                    req.session.isAuthenticated = true;
                    req.session.hash = hash;

                    res.json('Session created!');
                } else {
                    res.status(401).json(
                        'Password or E-mail not match! Try agin!'
                    );
                }
            });
        }
    } catch (e) {
        res.status(404).json(e);
    }
};

export const sendEmailtoUser = async (req, res) => {
    try {
        var reqdata = await req.body;

        var dbdata = await find_UserbyEmail(reqdata);

        if (dbdata == null) {
            res.status(401).json('Verify your email');
        } else {
            sendEmail(dbdata.email, dbdata.nome)
                .then((result) => {
                    res.status(result.status).json('Success');
                })
                .catch((error) => {
                    res.status(error.status).json(error);
                });
        }
    } catch (e) {
        res.status(404).json(e);
    }
};

export const test = async (req, res) => {
    try {
        res.status(200).json('Im ready!');
    } catch (e) {
        res.status(404).json(e);
    }
};

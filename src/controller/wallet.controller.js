import {
    create_Wallet,
    find_WalletbyName,
    delete_Wallet,
    update_Wallet,
    find_AllWallet,
} from '../model/wallet.model';

import { catchStock } from '../services/StockMarket';

export const createWallet = async (req, res) => {
    try {
        var reqdata = await req.body;

        await create_Wallet(reqdata);

        res.status(201).json(reqdata);
    } catch (e) {
        res.status(400).json(e);
    }
};

export const getAllWallet = async (req, res) => {
    try {
        var dbdata = await find_AllWallet();

        res.status(200).json(dbdata);
    } catch (e) {
        res.status(400).json(e);
    }
};

export const getOneWallet = async (req, res) => {
    try {
        var reqdata = await req.body;

        if (reqdata.name != null) {
            var dbdata = await find_WalletbyName(reqdata.name);

            res.status(200).json(dbdata);
        } else {
            res.status(400).json(
                'No name in the body requisition!Plase, verify!'
            );
        }
    } catch (e) {
        res.status(400).json(e);
    }
};

export const updateWallet = async (req, res) => {
    try {
        const reqdata = await req.body;

        var dbdata = await find_WalletbyName(reqdata);

        if (dbdata != null) {
            await update_Wallet(reqdata);

            res.status(202).json('Success');
        } else {
            res.status(401).json('Verify your email');
        }
    } catch (e) {
        res.status(400).json(e);
    }
};

export const deleteWallet = async (req, res) => {
    try {
    } catch (e) {}
};

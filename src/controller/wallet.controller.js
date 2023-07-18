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
        res.status(404).json(e);
    }
};

export const getAllWallet = async (req, res) => {
    try {
    } catch (e) {}
};

export const getOneWallet = async (req, res) => {
    try {
    } catch (e) {}
};

export const updateWallet = async (req, res) => {
    try {
    } catch (e) {}
};

export const deleteWallet = async (req, res) => {
    try {
    } catch (e) {}
};

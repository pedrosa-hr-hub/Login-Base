import { prisma } from '../services/prisma';

export const create_Wallet = async (data) => {
    const wallet = await prisma.wallet.create({
        data,
    });
    return wallet;
};

export const find_WalletbyName = async (data) => {
    const wallet = await prisma.wallet.findUnique({
        where: {
            name: data.name,
        },
    });
    return wallet;
};

export const find_AllWallet = async () => {
    const wallet = await prisma.wallet.findMany();
    return wallet;
};

export const update_Wallet = async (data) => {
    const wallet = await prisma.wallet.update({
        where: {
            id: data.id,
        },
        data: {
            name: data.name,
            idwallet: data.idwallet,
        },
    });
    return wallet;
};

export const delete_Wallet = async (data) => {
    const wallet = await prisma.wallet.delete({
        where: {
            id: data.id,
        },
    });
    return wallet;
};

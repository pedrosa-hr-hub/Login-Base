import { prisma } from '../services/prisma';

export const create_User = async (data) => {
    const user = await prisma.user.create({
        data,
    });
    return user;
};

export const find_UserbyEmail = async (data) => {
    const user = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });
    return user;
};

export const update_User = async (data) => {
    const user = await prisma.user.update({
        where: {
            id: data.id,
        },
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
        },
    });
};

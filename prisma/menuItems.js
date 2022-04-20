import prisma from "./prisma";

export const getAllItems = async () => {
    const menuItems = await prisma.MenuItem.findMany({})
    return menuItems
}

export const getItem = async id => {
    const menuItem = await prisma.MenuItem.findUnique({
        where: { id }
    })

    return menuItem
}
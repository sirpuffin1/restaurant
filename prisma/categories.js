import prisma from "./prisma";

export const getAllCategories = async () => {
  const categories = await prisma.Category.findMany({
    include: { items: true },
  });
  return categories;
};

export const getCategory = async (id) => {
  const user = await prisma.Category.findUnique({
    where: { id },
  });

  return user;
};

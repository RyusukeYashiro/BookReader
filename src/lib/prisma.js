import { PrismaClient } from "@prisma/client";


const prisma = global.prisma ??
    new PrismaClient({log : ['query']});
    //非production環境ではglobal.prismaオブジェクトを格納
if(process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
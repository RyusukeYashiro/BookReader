'use server';
import { getBookById } from "./getter";
import { redirect } from "next/navigation";
import prisma from "./prisma";


//formからの入力値をデータベースに登録する処理
export async function addReview(data) {
    const book = await getBookById(data.get('id'));
    const input = {
        title: book.title,
        author: book.author,
        price : Number(book.price),
        publisher : book.publisher,
        published : book.published,
        image : book.image,
        read : new Date(data.get('read')),
        memo: data.get('memo')
    };

    await prisma.reviews.upsert({
        update : input,
        // Object.assign(target, ...sources)
        create: Object.assign({} , input , {id : data.get('id')}),
        where: {
            id : data.get('id')
        }
    });
    redirect('/');
}

export async function removeReview(data){
    await prisma.reviews.delete({
        where: {
            id: data.get('id')
        }
    });

    redirect('/');
}
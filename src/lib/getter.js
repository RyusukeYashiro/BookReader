import prisma from './prisma';

export async function getAllReviews() {
    return await prisma.reviews.findMany({
        orderBy: {
            read : 'desc'
        }
    });
}

export function createBooks(book) {
    const authors = book.volumeInfo.authors;
    const price = book.saleInfo.listPrice;
    const img = book.volumeInfo.imageLinks;
    return {
        id : book.id,
        title : book.volumeInfo.title,
        author : authors ? authors.join(',') : '',
        price : price ? price.amount : 0,
        publisher : book.volumeInfo.publisher,
        published : book.volumeInfo.publishedDate,
        image : img ? img.smallThumbnail : '/vercel.svg',
    };
}

export async function getBooksByKeyword(keyword) {
    const res = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${keyword}
        &langRestrict=ja&maxResults=30&printType=books`);
    const result = await res.json();
    const books = [];
    for(const b of result.items) {
        books.push(createBooks(b));
    }
    return books;
}

//id値をキーにして書籍情報を取得する
export async function getBookById(id){
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const result = await  res.json();
    return createBooks(result);
}

export async function getReviewById(id) {
    return await prisma.reviews.findUnique({
        where : {
            id : id
        }
    });
}
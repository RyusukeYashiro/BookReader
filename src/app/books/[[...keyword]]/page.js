import LinkedBookDetails from "@/components/LinkedBookDetails";
import { getBooksByKeyword } from "@/lib/getter";


//ルートパラメーターを取得。規定値に設定
export default async function BookResult({ params : {keyword = '湊かなえ'}}) {
    const books = await getBooksByKeyword(keyword);
    return(
        <>
        {books.map((b , i) => (
            <LinkedBookDetails book={b} index={i + 1} key={b.id}></LinkedBookDetails>
        ))}
        </>
    );
}
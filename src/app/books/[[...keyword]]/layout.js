'use client';

import { useRef } from "react";
import { useRouter } from "next/navigation";

//[books / keyword]配下に適用されるレイアウト
export default function BooksLayout({children}) {
    const router = useRouter();
    const txtKeyword = useRef(null);
    const handleSearch = () => {
        //[検索ボタンクリック時に[/books/keyword]]
        router.push(`/books/${txtKeyword.current.value}`);
    };

    return(
        <>
            <form className="mt-2 mb-4">
                <input type="text" ref={txtKeyword} 
                    className="bg-gray-100 mr-2 px-2 py-2 text-black border border-gray-600 rounded
                        focus:bg-white focus:outline-none focus:border-red-500"></input>
                <button type="button" onClick={handleSearch}
                    className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500">検索</button>
            </form>
            <hr/>
            {children}
        </>
    );
}
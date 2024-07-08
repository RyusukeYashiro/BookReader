import Link from "next/link"
import './globals.css'
import { Inconsolata } from 'next/font/google'

const font = Inconsolata({subsets: ['latin']});

export const metadata = {
  title: 'Reading Recorder',
  description: '自分が読んだ本を記録するためのアプリ'
}

export default function RootLayout({children}) {
  return(
    <html lang="ja">
      <body className={font.className}>
        <h1 className="text-4x1 text-indigo-800 font-bold my-2">Reding Recorder</h1>
        <ul className="flex bg-blue-600 mb-4 pl-2">
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/">Home</Link>
          </li>
          <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/books">Search</Link>
          </li>
          <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <a className="no-underline text-blue-300" href="https://wings.msn.to/" target="_blank">Support</a>
          </li>
        </ul>
        {/* //ページコンポーネントを反映する領域 */}
        <div className="ml-2">
          {children}
        </div>
      </body>
    </html>
  );
}
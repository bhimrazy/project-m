import Head from 'next/head'
import { useState } from 'react'
import Section from '../components/section'

export default function Home() {
  const [active, setActive] = useState(0)
  const content = {
    'title': "Project M",
    'nav_items': [
      { 'title': 'Home', 'content': [{ 'title': '', 'description': '', 'thumbnail_url': '' }] },
      { 'title': 'News', 'content': [{ 'title': '', 'description': '', 'thumbnail_url': '' }] },
      { 'title': 'Sports', 'content': [{ 'title': '', 'description': '', 'thumbnail_url': '' }] },
      { 'title': 'Tech', 'content': [{ 'title': '', 'description': '', 'thumbnail_url': '' }] },
      { 'title': 'Science', 'content': [{ 'title': '', 'description': '', 'thumbnail_url': '' }] },
    ]

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{content?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <header className="w-full bg-white border-b py-4">
        <nav className="max-w-5xl mx-auto flex sm:justify-between items-center">
          <h1 className="sm:hidden text-gray-900 font-bold uppercase text-lg tracking-wider text-center w-full">Project M</h1>
          <ul className="hidden sm:flex flex-row space-x-3">
            {content?.nav_items && content?.nav_items.map((item, index) => (
              <li key={index} onClick={() => setActive(index)} className={`${active === index ? 'border-opacity-100' : ''} text-base font-medium tracking-wider border-b-2 border-blue-600 border-opacity-0 hover:border-opacity-100 hover:text-blue-600 cursor-pointer uppercase`}>{item?.title}</li>
            ))}
          </ul>
          <button className="bg-gray-900 hidden sm:block rounded-full px-6 py-2 text-white hover:bg-gray-800">subscribe</button>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 py-10 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Project M!
          </a>
        </h1>

        <Section title={content?.nav_items[active]?.title} />

        {/* <div className="flex flex-wrap items-center justify-around max-w-5xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

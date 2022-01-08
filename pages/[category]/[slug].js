import React from 'react'
import Image from "next/image";

export default function Index({ post }) {
    return (
        <div className="flex flex-col max-w-5xl mx-auto py-20">
            <article className="flex flex-col">
                <Image
                    className="bg-cover bg-center object-cover rounded-lg shadow-lg"
                    src={post?.img_url}
                    alt="Falcon"
                    width={1920}
                    height={1280}
                    placeholder="blur"
                    blurDataURL={post?.img_url}
                />
                <div className="flex flex-col space-y-1">
                    <p className="text-cool-500 text-sm tracking-wide pt-4">
                        Jan 18,2021
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight text-cool-800">
                        {post?.title}
                    </h2>
                    <p className="text-cool-600 text-sm leading-relaxed">
                        {post?.description}
                    </p>
                    <div>
                        <button className="hidden px-6 py-3 rounded-md left-0 text-cool-100 text-sm font-semibold bg-cool-900 hover:bg-cool-800 focus:outline-none">
                            Read More.
                        </button>
                    </div>
                </div>
            </article>
        </div>
    )
}

// export async function getStaticPaths() {

//     const res = await fetch('https://3000-tan-panther-z3e1aw7u.ws-us25.gitpod.io/api')
//     const posts = await res.json()

//     const paths = []
//     posts?.data.map(cat => {
//         return cat.content.map(post => {
//             paths.push({
//                 params: {
//                     category: cat.category.toLowerCase(),
//                     slug: post.slug
//                 }
//             })
//         })
//     })
//     console.log(paths)
//     return { paths, fallback: false }
// }

export async function getServerSideProps({ params }) {
    const category = params.category;
    const slug = params.slug;
    const res = await fetch('https://project-m-eta.vercel.app/api')
    const posts = await res.json()
    const post = posts?.data?.find(cat => cat?.category.toLowerCase() === category)?.content?.find(post => post?.slug === slug)
    return { props: { post } }
}
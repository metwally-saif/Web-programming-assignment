import { PortableText, type PortableTextReactComponents } from 'next-sanity'
import Link from 'next/link'
import styles from './PostBody.module.css'
import { SanityImage } from './SanityImage'
import { comment } from 'lib/sanity.queries'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
}

export default function PostBody({ content, comments, author}) {
  console.log('comments', comments)
  return (
    <div className={`mx-auto max-w-4xl ${styles.portableText}`}>
      <div className='flex items-center gap-1'>

      <span className=' font-bold '>{author.name} </span>
      <PortableText value={content} components={myPortableTextComponents} />
      </div>
      <div className=' bg-gray-100 rounded-xl shadow-md  px-6 py-2'>
        <h3 className=' font-semibold'>Comments</h3>
        <ul >
          {comments?.map((comment: comment, index) => (
            <li className=' border mt-3 p-2 rounded border-black border-opacity-25' key={index}>
              <div className='w-full flex justify-between mb-2'>
                <span className='font-semibold'>@{comment.name}</span>
                {comment.hashtags && comment.hashtags.map((tag, index) => (
                  <Link href={`/hashtags/${tag}`} key={index} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">#{tag}</Link>
                ))}
              </div>
              {comment.comment}
              <div className='text-sm text-gray-500'>{
                comment.comments && comment.comments.map((reply, index) => (
                  <div className='ml-4 mt-2' key={index}>
                    <div className='font-semibold'>@{reply.name} replied</div>
                    <div>{reply.comment}</div>
                  </div>
                ))
              }</div>
              </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

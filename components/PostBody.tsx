/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText, type PortableTextReactComponents } from 'next-sanity'

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

export default function PostBody({ content, comments, hashtags}) {
  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={myPortableTextComponents} />
      <div>
        <h3>Hashtags</h3>
        <ul>
          {hashtags?.map((hashtag: string, index) => (
            <li key={index}>{hashtag}</li>
          ))}
        </ul>
      </div>
      <div>

        <h3>Comments</h3>
        <ul>
          {comments?.map((comment: comment, index) => (
            <li key={index}>{comment.comment}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

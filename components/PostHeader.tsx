import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug' | "hashtags"> & { commentsCount: Number },
) {
  const { title, coverImage, date, author, slug, hashtags, commentsCount } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block ">
        <div className='w-full flex justify-between'>

        {author && <Avatar name={author.name} picture={author.picture} />}
        <Date dateString={date} />
        </div>
      </div>
      <div className="mb-4 sm:mx-0 md:mb-12">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className=" w-full">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg text-gray-700 w-full flex justify-between">
          <span>{String(commentsCount || "no")} comments</span>
          <div>
            {hashtags && hashtags?.map((tag, index) => (
              <Link href={`/hashtags/${tag}`} key={index} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">#{tag}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

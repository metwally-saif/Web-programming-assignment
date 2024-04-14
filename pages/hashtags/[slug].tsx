import {
  getAllPosts,
  getAllPostsSlugs,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import { GetStaticProps } from 'next'

import IndexPage from '../../components/IndexPage'
import PreviewIndexPage from '../../components/PreviewIndexPage'
import { readToken } from '../../lib/sanity.api'
import { Post, Settings } from '../../lib/sanity.queries'
import type { SharedPageProps } from '../../pages/_app'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
  hashtag: string
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { posts, settings, draftMode, hashtag } = props

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} />
  }

  return <IndexPage hashtag={hashtag} posts={posts} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)
  console.log('client', params.slug)

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ])

  return {
    props: {
      posts: posts.filter((post) => post.hashtags.includes(params.slug)),
      settings,
      draftMode,
      token: draftMode ? readToken : '',
      hashtag: params.slug,
    },
  }
}
export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/hashtags/${slug}`) || [],
    fallback: 'blocking',
  }
}

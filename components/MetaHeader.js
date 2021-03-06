import Head from 'next/head'

export default function MetaHeader ({ title, keywords, description }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

MetaHeader.defaultProps = {
  title: 'News',
  keywords: 'news headlines, news',
  description: 'Get the latest news',
}
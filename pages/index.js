// import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { server } from '../config'
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  return (
    <div>
      Top Headline
      <ArticleList articles={articles} />
    </div>
  )
}


export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/top-headlines`)
  const articles = await response.json()

  return {
    props: {
      articles
    },
  }
}
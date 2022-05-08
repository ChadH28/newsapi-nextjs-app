// import Head from 'next/head'
import ArticleList from '../../components/ArticleList'
import { server } from '../../config'
// import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  return (
    <div>
      Technology
      <ArticleList articles={articles} />
    </div>
  )
}


export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/technology`)
  const articles = await response.json()

  return {
    props: {
      articles
    },
  }
}
// import Head from 'next/head'
import ArticleList from '../../components/ArticleList'
import { server } from '../../config'
// import styles from '../styles/Home.module.css'

export default function SearchResult({ articles }) {
  return (
    <div>
      Search Results
      <ArticleList articles={articles} />
    </div>
  )
}


export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/searchquery`)
  const articles = await response.json()

  return {
    props: {
      articles
    },
  }
}
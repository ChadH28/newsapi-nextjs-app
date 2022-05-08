import ArticleList from '../../components/ArticleList'
import { server } from '../../config'
// import styles from '../styles/pages/Home.module.css'



export default function Business() {
  return (
    <div>
      <ArticleList articles={articles}/>
    </div>
  )
}


export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/business`)
  const articles = await response.json()

  return {
    props: {
      articles
    },
  }
}
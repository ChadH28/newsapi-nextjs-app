import ArticleItem from './Article'
// import styles from '../styles/component-styles/ArticleList.module.css'


// passing down article prop
export default function ArticleList({articles}) {
  return (
    <div className='row'>
      {
        articles.map(
          (article) => (
            <ArticleItem article={article} key={article.id}/>
          )
        )
      }
    </div>
  )
}
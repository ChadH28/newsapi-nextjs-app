import Link from 'next/link'
import styles from '../styles/component-stylings/Article.module.css'

export default function ArticleItem(
    {
       article: {
        urlToImage,
        title,
        author,
        publishedAt,
        content,
        url,
        source
       } 
    }
  ) {
  return (
    <div className='col-sm-4 col-md-4 col-lg-4'>
      <div className={"card mb-10"}>
        {/* used conditions because some values in article array was displaying as null */}
        {
          urlToImage === null || urlToImage === '' ? <div className={styles.cardPlaceholder}><span>No image for News Article</span></div>
            :
            <img alt='newsImg' src={`${urlToImage}`} className="card-img-top" height="300px" />
        }
        <div className='card-body'>
          <h5 className="card-title">
            {title}
          </h5>
          {
            author === null ? <h6 className="card-subtitle mb-2 text-muted">Unknown Author | Published {publishedAt}</h6>
              :
              <h6 className="card-subtitle mb-2 text-muted">
                By {author} | Published {new Date(publishedAt).toDateString()}
              </h6>
          }
          {
            content === null ? <p className="card-text">No Content Provided for Article</p>
              :
              <p className="card-text content">
                {content}
              </p>
          }
          <p className='row'>
            <a className="card-link col-sm-6 text-start" href={`${url}`}>Read full article here</a>
            <span className="col-sm-6 text-end">Source: {source.name}</span>
          </p>
        </div>
      </div>
    </div>

  )
}    
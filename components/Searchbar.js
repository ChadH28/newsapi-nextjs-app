import Link from 'next/link'

export default function Searchbar({ article }) {
  return (
    <div className="searchbar">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder='Search News here..' aria-label="Search" />
        {/* <Link to="/search-query">
          <button className="btn btn-outline-success">Search</button>
        </Link> */}
        <button className="btn btn-outline-success">Search</button>
      </form>
    </div>

  )
}    
import Link from 'next/link'
import { useState } from 'react';
import {server} from '../config'

export default function Searchbar() {
  const [query, setQuery] = useState('');

  async function handleSearch(e) {
    e.preventDefault();
    console.log(query)

    const response = await fetch(`${server}/api/searchquery`, {
      method: 'POST',
      body: JSON.stringify({query}),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    const data = await response.json()
    console.log(data)
  }


  return (
    <div className="searchbar">
      <form className="d-flex" onSubmit={handleSearch}>
        <input className="form-control me-2" type="search" placeholder='Search News here..' aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value) } />
        {/* <Link to="/search-query">
          <button className="btn btn-outline-success">Search</button>
        </Link> */}
        <button type='submit' className="btn btn-outline-success">Search</button>
      </form>
    </div>

  )
}

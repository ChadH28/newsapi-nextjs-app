import MetaHeader from './MetaHeader'
import Navbar from './Navbar'

// child component of pages
export default function Layout({ children }) {
  return (
    <div>
      <MetaHeader/>
      <Navbar/>
      <div>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}
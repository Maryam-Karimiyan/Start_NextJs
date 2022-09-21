import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../styles/layout.css'
import '../components/Navbar.css'

function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp

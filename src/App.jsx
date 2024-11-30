
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import JewelleryBanner from './pages/JewelleryBanner'
import Trending from './pages/Trending'
import About from './pages/About'
import Testimonial from './pages/Testimonial'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <JewelleryBanner/>
      <Trending/>
      <About/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App

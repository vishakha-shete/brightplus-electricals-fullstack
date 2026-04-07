import Navbar from "./components/Navbar"
import About from "./components/About"
import Services from "./components/services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
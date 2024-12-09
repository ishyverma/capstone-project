import { Contact } from "./components/Contact"
import { Design } from "./components/Design"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Project } from "./components/Project"
import { Social } from "./components/Social"

function App() {
  return <div className="flex justify-center">
    <div className="w-[93%]">
      <Navbar />
      <Hero />
      <Project />
      <Design />
      <Contact />
      <Social />
      <Footer />
    </div>
  </div>
}

export default App
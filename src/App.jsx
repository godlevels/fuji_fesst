import { BrowserRouter } from "react-router-dom"
import Hero from "./components/Hero"
import Artists from "./components/Artists"
import Footer from "./components/Footer"
import Tickets from "./components/Tickets"

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-[1500px] bg-background overflow-hidden relative">
          <Hero />
          <Artists />
          <Tickets />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

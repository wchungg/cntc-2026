import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Events } from "./pages/Events"
import { About } from "./pages/About"
import { Speakers } from "./pages/Speakers"
import { Sponsors } from "./pages/Sponsors"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />}/>
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
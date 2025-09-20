import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Armada from "./pages/Armada";
import Contact from "./pages/Contact";


const qeryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={qeryClient}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/armada" element={<Armada />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
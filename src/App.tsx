import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import Projeto from "./pages/Projeto";

function App() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
              </>
            }
          />
          <Route path="/projeto/:id" element={<Projeto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { Header } from "./components/layout/Header";
import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import Projeto from "./pages/Projeto";

function App() {
  return (
    <div className="dark">
      <Header />
      <main className="bg-background text-foreground min-h-screen">
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
    </div>
  );
}

export default App;

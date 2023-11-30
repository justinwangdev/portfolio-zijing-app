import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Research from "./components/Research";
import Contact from "./components/Contact";

function App() {
  return (
    <NextUIProvider>
      <main>
        <NavBar />
        <HeroSection />
        <About />
        <Research />
        <Contact />
      </main>
    </NextUIProvider>
  );
}

export default App;

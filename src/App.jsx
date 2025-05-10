import React from "react";
import "./App.css";
import "./i18n";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Header />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;

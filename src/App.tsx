import { Suspense, lazy } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import About from "./components/About";

// Lazy load components that aren't needed for initial render
const TechStack = lazy(() => import("./components/TechStack"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <ThemeToggle />

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/20 dark:bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <Header />

        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto space-y-24">
            <About />
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
              <TechStack />
              <Experience />
              <Education />
              <Projects />
              <Contact />
            </Suspense>
          </div>
        </div>

        <Suspense fallback={<div className="h-16"></div>}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;

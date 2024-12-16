// import About from "./components/About";
// import Contact from "./components/Contact";
// import Features from "./components/Features";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Story from "./components/Story";

// const App = () => {
//     return (
//         <main className="relative min-h-screen w-screen overflow-x-hidden">
//             <Navbar />
//             <Hero />
//             <About />
//             <Features />
//             <Story />
//             <Contact />
//             <Footer />
//         </main>
//     );
// };

// export default App;
import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading time of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {isLoading && <LoadingScreen />}
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;

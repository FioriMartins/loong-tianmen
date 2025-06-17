import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Planos from './components/Planos';
import Hardware from './components/Hardware';
import Suporte from './components/Suporte';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  return (
    <div className="App">
      <BackgroundGrid />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Hardware />
        <Suporte />
      </main>
      <Footer />
    </div>
  );
}

export default App;

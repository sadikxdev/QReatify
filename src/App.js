import React,{useEffect} from 'react';
import Header from './component/Header';
import About from './component/About';
import Home from './component/Home';
import Footer from './component/Footer';
import FAQ from './component/FAQ';
import "./CSS/main.css";
function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    anchors.forEach(anchor => anchor.addEventListener('click', handleClick));
    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleClick));
    };
  }, []);
  return (
    <div>
    <Header/>
    <Home/>
    <About/>
    <FAQ/>
    <Footer/>
    </div>
  );
}

export default App;

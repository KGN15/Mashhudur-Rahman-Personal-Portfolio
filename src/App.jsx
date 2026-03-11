import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ProjectShowcase from './pages/ProjectShowcase';
import Lenis from '@studio-freight/lenis';

// পেজ চেঞ্জ হলে উপরে স্ক্রল করার জন্য ছোট একটি সাব-কম্পোনেন্ট
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  // --- Lenis Smooth Scroll Setup ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      lerp: 0.03,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <BrowserRouter>
      {/* ScrollToTop অবশ্যই BrowserRouter এর ভেতরে থাকতে হবে */}
      <ScrollToTop /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<ProjectShowcase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
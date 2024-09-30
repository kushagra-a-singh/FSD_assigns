import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Events';
import Event1 from './pages/Event1';
import Event2 from './pages/Event2';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/policy';
import Refund from './pages/refund';
import Terms from './pages/terms';
import PaymentSuccess from './pages/PaymentSuccess';
import ScrollToTop from './ScrollToTop';
import Calculator from './pages/calculator';
import ResumeBuilder from './pages/resumeBuilder';
import ResumePreview from './pages/ResumePreview';

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/1" element={<Event1 />} />
        <Route path="/events/2" element={<Event2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/resumeBuilder" element={<ResumeBuilder />} />
        <Route path="/ResumePreview" element={<ResumePreview />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
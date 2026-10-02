import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import LearningPage from "./components/LearningPage";
import HRSolutionsPage from "./components/HRSolutionsPage";
import PeopleAdvisoryPage from "./components/PeopleAdvisoryPage";
import CareersPage from "./components/CareersPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import NotFound from "./components/NotFound";
import ScrollProgress from "./components/ScrollProgress";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollProgress />
      <ScrollToTop />
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/hr-solutions" element={<HRSolutionsPage />} />
              <Route path="/people-advisory" element={<PeopleAdvisoryPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </Router>
  );
}

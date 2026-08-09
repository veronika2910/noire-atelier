import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollManager from "@/components/ScrollManager";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import Home from "@/pages/Home";
import Studio from "@/pages/Studio";
import Services from "@/pages/Services";
import Journal from "@/pages/Journal";
import Contact from "@/pages/Contact";
import ProjectDetail from "@/pages/ProjectDetail";
import NotFound from "@/pages/NotFound";

export default function App() {
  useSmoothScroll();

  return (
    <div className="relative">
      <CustomCursor />
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

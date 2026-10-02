import { useEffect, useState } from "react";
import Lenis from "lenis";
import { LangContext, translations } from "./i18n";
import { Navbar } from "./components/Navbar";
import { AgeGate } from "./components/AgeGate";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Features } from "./components/Features";
import { Premium } from "./components/Premium";
import { Roadmap } from "./components/Roadmap";
import { Stats } from "./components/Stats";
import { Screens } from "./components/Screens";
import { HowItWorks } from "./components/HowItWorks";
import { CreatorHub } from "./components/CreatorHub";
import { Compare } from "./components/Compare";
import { Safety } from "./components/Safety";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { DownloadModal } from "./components/DownloadModal";
import { Footer } from "./components/Footer";

function App() {
  const [lang, setLangState] = useState(() => localStorage.getItem("velora_lang") || "EN");
  const [ageOk, setAgeOk] = useState(() => localStorage.getItem("velora_age") === "1");
  const [downloadOpen, setDownloadOpen] = useState(false);

  const setLang = (l) => {
    localStorage.setItem("velora_lang", l);
    setLangState(l);
  };

  const confirmAge = () => {
    localStorage.setItem("velora_age", "1");
    setAgeOk(true);
  };

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div className="grain min-h-screen bg-[#08050D] text-slate-100 font-jakarta">
        {!ageOk && <AgeGate onConfirm={confirmAge} />}
        <Navbar onDownload={() => setDownloadOpen(true)} />
        <main>
          <Hero intro={ageOk} onDownload={() => setDownloadOpen(true)} />
          <Marquee />
          <Stats />
          <Features />
          <Screens />
          <HowItWorks onDownload={() => setDownloadOpen(true)} />
          <CreatorHub />
          <Premium />
          <Compare onDownload={() => setDownloadOpen(true)} />
          <Safety />
          <Roadmap />
          <FAQ />
          <FinalCTA onDownload={() => setDownloadOpen(true)} />
        </main>
        <Footer onDownload={() => setDownloadOpen(true)} />
        <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
      </div>
    </LangContext.Provider>
  );
}

export default App;

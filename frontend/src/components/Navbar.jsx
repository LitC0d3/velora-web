import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLang } from "../i18n";
import { VeloraMark, Wordmark } from "./Logo";

const links = [
  { key: "features", href: "#features" },
  { key: "creator", href: "#creator-hub" },
  { key: "premium", href: "#premium" },
  { key: "roadmap", href: "#roadmap" },
  { key: "faq", href: "#faq" },
];

export const Navbar = ({ onDownload }) => {
  const { lang, setLang, t } = useLang();
  return (
    <motion.header
      data-testid="header-navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#08050D]/70 border-b border-purple-500/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" data-testid="nav-logo-link">
          <VeloraMark size={32} />
          <Wordmark className="text-sm" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              data-testid={`nav-link-${l.key}`}
              className="text-xs font-mono tracking-[0.18em] uppercase text-slate-400 hover:text-purple-300 transition-colors duration-300"
            >
              {t.nav[l.key]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-purple-500/25 bg-purple-950/40 p-0.5" data-testid="lang-toggle">
            {["EN", "ES"].map((l) => (
              <button
                key={l}
                data-testid={`lang-toggle-${l.toLowerCase()}`}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-widest transition-all duration-300 ${
                  lang === l ? "bg-purple-600 text-white shadow-[0_0_16px_rgba(139,92,246,0.5)]" : "text-slate-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            data-testid="nav-download-btn"
            onClick={onDownload}
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-purple-900/40 hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-300 hover:scale-[1.03] active:scale-95"
          >
            <Download size={14} />
            {t.nav.download}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

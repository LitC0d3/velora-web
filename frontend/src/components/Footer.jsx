import { Download } from "lucide-react";
import { useLang } from "../i18n";
import { VeloraMark, Wordmark } from "./Logo";

export const Footer = ({ onDownload }) => {
  const { t } = useLang();
  const anchors = ["#features", "#premium", "#roadmap"];
  return (
    <footer data-testid="footer-discretion" className="relative py-16 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <VeloraMark size={34} />
              <Wordmark className="text-sm" />
            </div>
            <p className="mt-4 text-sm text-slate-400">{t.footer.tagline}</p>
            <p data-testid="footer-notice" className="mt-5 text-xs text-slate-600 leading-relaxed">
              {t.footer.notice}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {t.footer.links.map((label, i) => (
              <a
                key={i}
                href={anchors[i]}
                data-testid={`footer-link-${i}`}
                className="text-xs font-mono tracking-[0.2em] uppercase text-slate-500 hover:text-purple-300 transition-colors"
              >
                {label}
              </a>
            ))}
            <button
              data-testid="footer-download-btn"
              onClick={onDownload}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-600/15 px-5 py-2.5 text-xs font-semibold text-purple-200 hover:bg-purple-600/30 transition-all duration-300 w-max"
            >
              <Download size={13} />
              {t.footer.download} APK
            </button>
          </div>
        </div>
        <div className="mt-12 pt-7 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono tracking-wider text-slate-600">{t.footer.rights}</p>
          <span className="rounded-full border border-red-500/35 bg-red-500/10 px-4 py-1 text-[10px] font-mono tracking-[0.3em] text-red-400">
            18+
          </span>
        </div>
      </div>
    </footer>
  );
};

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, FileDown, CheckCircle2, Hourglass } from "lucide-react";
import { useLang } from "../i18n";

// Static manifest served from /public — no backend needed (GitHub Pages friendly).
// Regenerate it with: node scripts/release-apk.js <path/to/velora.apk> [--url <download-url>]
const MANIFEST_URL = `${process.env.PUBLIC_URL}/apk/release.json`;

const resolveDownloadUrl = (url) =>
  /^https?:\/\//.test(url) ? url : `${process.env.PUBLIC_URL}/${url.replace(/^\.?\//, "")}`;

export const DownloadModal = ({ open, onClose }) => {
  const { t } = useLang();
  const m = t.modal;
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!open) return;
    setStatus(null);
    fetch(`${MANIFEST_URL}?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : { available: false }))
      .then(setStatus)
      .catch(() => setStatus({ available: false }));
  }, [open]);

  const sizeMb = status?.size_bytes ? (status.size_bytes / (1024 * 1024)).toFixed(1) : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="apk-download-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-md p-0 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-t-3xl sm:rounded-3xl border border-purple-500/25 bg-[#160F24]/95 backdrop-blur-xl p-7 sm:p-9 shadow-[0_20px_80px_rgba(0,0,0,0.8)] max-h-[88vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-syne text-2xl font-bold text-white" data-testid="modal-title">{m.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{m.sub}</p>
              </div>
              <button
                data-testid="modal-close-btn"
                onClick={onClose}
                className="rounded-full border border-purple-500/25 p-2 text-slate-400 hover:text-white hover:border-purple-400/60 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-7 rounded-2xl border border-purple-500/20 bg-[#0d0916]/80 p-5">
              {status === null ? (
                <p className="text-sm text-slate-400 flex items-center gap-2" data-testid="modal-status-loading">
                  <Hourglass size={15} className="animate-spin" /> …
                </p>
              ) : status.available ? (
                <div data-testid="modal-status-ready">
                  <p className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
                    <CheckCircle2 size={15} /> {m.ready}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono text-slate-400">
                    <span>{m.version}: <span className="text-purple-300">v{status.version}</span></span>
                    <span>{m.size}: <span className="text-purple-300">{sizeMb} MB</span></span>
                  </div>
                  <p className="mt-3 text-[10px] font-mono tracking-wider text-slate-500 uppercase">{m.sha}</p>
                  <p data-testid="modal-sha256" className="mt-1 text-[10px] font-mono text-purple-300/80 break-all leading-relaxed">
                    {status.sha256}
                  </p>
                  <a
                    data-testid="modal-download-link"
                    href={resolveDownloadUrl(status.url || "apk/velora.apk")}
                    download
                    className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/50 hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    <FileDown size={16} /> {m.download}
                  </a>
                </div>
              ) : (
                <p className="flex items-center gap-2 text-sm text-amber-400" data-testid="modal-status-pending">
                  <Hourglass size={15} /> {m.pending}
                </p>
              )}
            </div>

            <div className="mt-7">
              <p className="text-xs font-mono tracking-[0.25em] text-purple-400/80 uppercase">{m.stepsTitle}</p>
              <ol className="mt-4 space-y-3">
                {m.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300" data-testid={`modal-step-${i}`}>
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-600/25 border border-purple-500/40 text-[11px] font-mono text-purple-200 shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

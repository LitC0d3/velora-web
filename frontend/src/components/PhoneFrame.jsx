export const PHONE_MAIN =
  "https://customer-assets-eiarnc6j.emergentagent.net/job_f0fb59c8-549b-4a2b-906a-64f1cb5c5645/artifacts/1vtbgvbl_Screenshot_20261001-004134.png";
export const PHONE_SIDE =
  "https://customer-assets-eiarnc6j.emergentagent.net/job_f0fb59c8-549b-4a2b-906a-64f1cb5c5645/artifacts/wf4wfm36_Screenshot_20261001-004149.png";

/* Frame sized by the screenshot itself (800x1280 = 5:8), so the image is never cropped. */
export const PhoneFrame = ({ src, alt, className = "", imgClassName = "", style, testid }) => (
  <div
    data-testid={testid}
    style={style}
    className={`rounded-[2.4rem] border border-purple-400/30 bg-[#0d0916] p-2.5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.85)] ${className}`}
  >
    <div className="relative overflow-hidden rounded-[1.9rem] bg-black">
      <img src={src} alt={alt} className={`block w-full h-auto aspect-[5/8] object-contain ${imgClassName}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-white/5 pointer-events-none" />
    </div>
  </div>
);

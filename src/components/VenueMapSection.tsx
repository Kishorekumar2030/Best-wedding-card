import { Check, Copy, Navigation } from 'lucide-react';
import { useState } from 'react';
import { getGoogleMapsUrl, WEDDING_DATA } from '../data/wedding';

function DarkCartographicMap() {
  return (
    <svg
      viewBox="0 0 420 260"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-label={`Stylized map of ${WEDDING_DATA.address}`}
    >
      <rect width="420" height="260" fill="#120B0F" />

      <g fill="#191015" stroke="#2B1C23" strokeWidth="0.8">
        <rect x="20" y="16" width="66" height="44" rx="4" />
        <rect x="108" y="18" width="84" height="42" rx="4" />
        <rect x="218" y="14" width="76" height="48" rx="4" />
        <rect x="314" y="18" width="86" height="46" rx="4" />
        <rect x="24" y="88" width="62" height="58" rx="4" />
        <rect x="112" y="92" width="78" height="52" rx="4" />
        <rect x="218" y="90" width="84" height="54" rx="4" />
        <rect x="322" y="94" width="78" height="58" rx="4" />
        <rect x="22" y="176" width="68" height="64" rx="4" />
        <rect x="114" y="174" width="80" height="62" rx="4" />
        <rect x="216" y="176" width="88" height="62" rx="4" />
      </g>

      <path
        d="M-10 218 Q130 198 250 226 T430 202"
        fill="none"
        stroke="#1C2A35"
        strokeWidth="16"
      />
      <path
        d="M-10 218 Q130 198 250 226 T430 202"
        fill="none"
        stroke="#273B4B"
        strokeWidth="1.2"
        strokeOpacity="0.6"
      />

      <g stroke="#2F2128" strokeLinecap="round">
        <path d="M0 74 H420" strokeWidth="9" />
        <path d="M0 160 H420" strokeWidth="7" />
        <path d="M98 0 V260" strokeWidth="8" />
        <path d="M204 0 V260" strokeWidth="8" />
        <path d="M308 0 V260" strokeWidth="6" />
      </g>

      <path
        d="M52 214 Q146 164 204 156 T274 108"
        fill="none"
        stroke="#D4A853"
        strokeWidth="3"
        strokeDasharray="6 5"
        strokeLinecap="round"
      />

      <text
        x="114"
        y="66"
        fill="#A48C78"
        fontSize="10"
        letterSpacing="3"
        fontFamily="Plus Jakarta Sans, sans-serif"
      >
        {WEDDING_DATA.mapAreaLabel}
      </text>
      <text
        x="295"
        y="240"
        fill="#8E7866"
        fontSize="10"
        letterSpacing="2.5"
        fontFamily="Plus Jakarta Sans, sans-serif"
      >
        {WEDDING_DATA.mapCityLabel}
      </text>

      <circle cx="274" cy="108" r="24" fill="#9E1B24" fillOpacity="0.22" />
      <circle cx="274" cy="108" r="14" fill="#D4A853" fillOpacity="0.2" />
      <path
        d="M274 72 C263 72 254 81 254 92 C254 107 274 126 274 126 C274 126 294 107 294 92 C294 81 285 72 274 72 Z"
        fill="#B82934"
        stroke="#ECD08B"
        strokeWidth="1.6"
      />
      <circle cx="274" cy="92" r="6" fill="#F5ECE0" />
    </svg>
  );
}

export function VenueMapSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyPlusCode = async () => {
    try {
      await navigator.clipboard.writeText(WEDDING_DATA.plusCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="venue"
      className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D4A853]">
          Location &amp; Arrival
        </p>
        <h2 className="font-display mt-2 text-4xl font-medium tracking-wide text-[#F5ECE0] sm:text-5xl">
          How to Reach
        </h2>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-[#D4A853]/30 bg-[#150D11] shadow-[0_24px_60px_rgba(0,0,0,0.75)] lg:grid lg:grid-cols-12">
        <div className="relative h-60 border-b border-[#D4A853]/20 sm:h-72 lg:col-span-7 lg:h-auto lg:min-h-[320px] lg:border-b-0 lg:border-r">
          <DarkCartographicMap />
        </div>

        <div className="flex flex-col justify-between p-6 text-left sm:p-8 lg:col-span-5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4A853]">
              Celebration Venue
            </p>
            <h3 className="font-display mt-2 text-3xl font-medium text-[#F5ECE0]">
              {WEDDING_DATA.venue}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#C2B09E]">
              {WEDDING_DATA.address}
            </p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#D4A853]/18 pt-4">
              <div className="text-xs text-[#C2B09E]">
                Plus code ·{' '}
                <span className="font-medium text-[#ECD08B]">
                  {WEDDING_DATA.plusCode}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyPlusCode}
                aria-label="Copy Google Plus Code"
                className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg border border-[#D4A853]/30 px-2.5 py-1 text-[11px] font-medium text-[#ECD08B] transition-colors hover:bg-[#1E1217] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#92C86D]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-7">
            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-[#D4A853]/50 bg-[#9E1B24] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#F5ECE0] transition-colors hover:bg-[#B82934] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
            >
              <Navigation className="h-4 w-4 text-[#ECD08B]" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

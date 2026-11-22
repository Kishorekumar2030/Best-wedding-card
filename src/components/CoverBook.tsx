import { useState } from 'react';
import { WEDDING_DATA } from '../data/wedding';

interface CoverBookProps {
  isOpen: boolean;
  onOpenStart?: () => void;
  onOpen: () => void;
}

export function CoverBook({ isOpen, onOpenStart, onOpen }: CoverBookProps) {
  const [flipping, setFlipping] = useState(false);

  if (isOpen) return null;

  const handleTrigger = () => {
    if (flipping) return;
    onOpenStart?.();
    setFlipping(true);
    window.setTimeout(() => {
      onOpen();
    }, 1050);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Cover"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-5 py-8 transition-opacity duration-700 ${
        flipping ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{
        background:
          'radial-gradient(circle at 50% 42%, #2B0D14 0%, #14070B 52%, #080406 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,83,0.22) 0%, rgba(158,27,36,0.16) 45%, transparent 72%)',
        }}
      />

      <button
        type="button"
        onClick={handleTrigger}
        className="book-float group relative w-[276px] cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B] sm:w-[310px]"
        style={{ perspective: '1800px' }}
        aria-label={`Open wedding invitation for ${WEDDING_DATA.groom} and ${WEDDING_DATA.bride}`}
      >
        <div
          className="relative aspect-[3/4.25] w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Inner Velvet Page Revealed Underneath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-r-2xl rounded-l-[4px] border border-[#D4A853]/45 bg-[#150D11] p-6 text-center shadow-[inset_0_0_40px_rgba(0,0,0,0.65)]">
            <span
              className={
                WEDDING_DATA.invocationIsDevanagari
                  ? 'font-dev text-xs tracking-[0.14em] text-[#D4A853]/85'
                  : 'text-[10px] font-medium uppercase tracking-[0.26em] text-[#D4A853]/85'
              }
            >
              {WEDDING_DATA.invocation}
            </span>
            <p className="font-display mt-3 text-3xl font-medium italic tracking-wide text-[#F5ECE0]">
              {WEDDING_DATA.groom}
            </p>
            <span className="font-display my-1 text-xl italic text-[#D4A853]">
              &amp;
            </span>
            <p className="font-display text-3xl font-medium italic tracking-wide text-[#F5ECE0]">
              {WEDDING_DATA.bride}
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.26em] text-[#C2B09E]">
              {WEDDING_DATA.coverYearLine}
            </p>
          </div>

          {/* Front Velvet Royal Cover */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-between rounded-r-2xl rounded-l-[4px] p-5 text-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transform: flipping ? 'rotateY(-155deg)' : 'rotateY(0deg)',
              background:
                'linear-gradient(140deg, #5F0E1B 0%, #3E0710 42%, #23040A 100%)',
              boxShadow:
                'inset 10px 0 18px rgba(0,0,0,0.5), inset -1px 0 2px rgba(236,208,139,0.22), 0 26px 56px rgba(0,0,0,0.75)',
            }}
          >
            <div className="pointer-events-none absolute inset-3 rounded-r-xl rounded-l-[3px] border border-[#D4A853]/55" />
            <div className="pointer-events-none absolute inset-[17px] rounded-r-lg rounded-l-[2px] border border-[#D4A853]/25" />

            <div className="relative z-10 pt-4">
              <p
                className={
                  WEDDING_DATA.invocationIsDevanagari
                    ? 'font-dev text-[12px] tracking-[0.14em] text-[#ECD08B]/90'
                    : 'text-[10px] font-medium uppercase tracking-[0.28em] text-[#ECD08B]/90'
                }
              >
                {WEDDING_DATA.invocation}
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4A853]/65 bg-[#1B0408]/70 shadow-[0_0_24px_rgba(212,168,83,0.18)]">
                <span
                  className={
                    WEDDING_DATA.coverEmblemType === 'devanagari'
                      ? 'font-dev text-4xl leading-none text-[#ECD08B]'
                      : 'font-display text-2xl font-medium italic tracking-wide text-[#ECD08B]'
                  }
                >
                  {WEDDING_DATA.coverEmblem}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#D4A853]/50" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#ECD08B]/80">
                  {WEDDING_DATA.coverSubtitle}
                </span>
                <span className="h-px w-7 bg-[#D4A853]/50" />
              </div>

              <h1 className="font-display mt-3 text-[24px] font-semibold tracking-[0.15em] text-[#F5ECE0] sm:text-[26px]">
                {WEDDING_DATA.coverTitle}
              </h1>

              <p className="font-display mt-2 text-lg italic text-[#ECD08B]">
                {WEDDING_DATA.groom} &amp; {WEDDING_DATA.bride}
              </p>
            </div>

            <div className="relative z-10 pb-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#C2B09E]">
                {WEDDING_DATA.coverFooter}
              </p>
            </div>
          </div>
        </div>
      </button>

      <button
        type="button"
        onClick={handleTrigger}
        className="mt-7 min-h-[44px] cursor-pointer px-5 py-2.5 text-xs font-medium uppercase tracking-[0.26em] text-[#ECD08B] transition-colors hover:text-[#F5ECE0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
      >
        Tap to Open Invitation
      </button>
    </div>
  );
}

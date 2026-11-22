import { WEDDING_DATA } from '../data/wedding';

function ToranBanner() {
  const arches = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden pt-2">
      <svg
        viewBox="0 0 700 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="toranGold" x1="0" y1="0" x2="700" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9E732B" />
            <stop offset="50%" stopColor="#ECD08B" />
            <stop offset="100%" stopColor="#9E732B" />
          </linearGradient>
          <linearGradient id="toranLeaf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#265436" />
            <stop offset="100%" stopColor="#122B1B" />
          </linearGradient>
        </defs>

        <line x1="16" y1="8" x2="684" y2="8" stroke="url(#toranGold)" strokeWidth="2.5" />
        <line x1="24" y1="14" x2="676" y2="14" stroke="#D4A853" strokeOpacity="0.4" strokeWidth="1" />

        {arches.map((i) => {
          const x = 50 + i * 100;
          return (
            <g key={i}>
              <path
                d={`M ${x - 50} 14 Q ${x} 52 ${x + 50} 14`}
                stroke="url(#toranGold)"
                strokeWidth="1.8"
                strokeOpacity="0.8"
                fill="none"
              />
              <path
                d={`M ${x - 24} 16 C ${x - 30} 36 ${x - 20} 50 ${x - 16} 56 C ${x - 10} 44 ${x - 14} 28 ${x - 24} 16 Z`}
                fill="url(#toranLeaf)"
                stroke="#D4A853"
                strokeOpacity="0.35"
                strokeWidth="0.7"
              />
              <path
                d={`M ${x + 24} 16 C ${x + 30} 36 ${x + 20} 50 ${x + 16} 56 C ${x + 10} 44 ${x + 14} 28 ${x + 24} 16 Z`}
                fill="url(#toranLeaf)"
                stroke="#D4A853"
                strokeOpacity="0.35"
                strokeWidth="0.7"
              />
              <circle cx={x} cy={35} r="8" fill="#8C1D24" stroke="#ECD08B" strokeWidth="1.2" />
              <circle cx={x} cy={35} r="4" fill="#D4A853" />
              <line x1={x} y1={43} x2={x} y2={62} stroke="#D4A853" strokeOpacity="0.7" strokeWidth="1.2" />
              <circle cx={x} cy={66} r="4.5" fill="#ECD08B" />
              <circle cx={x} cy={74} r="2.2" fill="#9E1B24" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="invitation"
      className="relative mx-auto max-w-5xl px-4 pb-12 pt-4 sm:px-6 sm:pb-16 lg:px-8"
    >
      <ToranBanner />

      <div className="mt-4 text-center">
        <p
          className={
            WEDDING_DATA.invocationIsDevanagari
              ? 'font-dev text-sm tracking-[0.14em] text-[#ECD08B] sm:text-base'
              : 'text-xs font-medium uppercase tracking-[0.28em] text-[#ECD08B]'
          }
        >
          {WEDDING_DATA.invocation}
        </p>
      </div>

      {/* Royal Mughal Arch Card */}
      <div className="relative mx-auto mt-6 max-w-2xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 rounded-t-[360px] rounded-b-[40px] opacity-40 blur-2xl"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(212,168,83,0.18), rgba(158,27,36,0.16) 55%, transparent 78%)',
          }}
        />

        <div
          className="relative overflow-hidden rounded-t-[280px] rounded-b-3xl border border-[#D4A853]/35 px-6 pb-12 pt-14 text-center shadow-[0_28px_70px_rgba(0,0,0,0.75)] sm:rounded-t-[340px] sm:px-14 sm:pb-16 sm:pt-20"
          style={{
            background:
              'radial-gradient(circle at 50% 24%, #281119 0%, #160C11 58%, #10080B 100%)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-t-[268px] rounded-b-2xl border border-[#D4A853]/25 sm:inset-4 sm:rounded-t-[324px]"
          />

          <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4A853]/50 bg-[#0B0709]/80 shadow-[0_0_26px_rgba(212,168,83,0.22)]">
            <span
              className={
                WEDDING_DATA.coverEmblemType === 'devanagari'
                  ? 'font-dev text-3xl leading-none text-[#ECD08B]'
                  : 'font-display text-xl font-medium italic tracking-wide text-[#ECD08B]'
              }
            >
              {WEDDING_DATA.coverEmblem}
            </span>
          </div>

          <p className="relative z-10 mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-[#C2B09E] sm:text-xs">
            {WEDDING_DATA.heroLead}
          </p>

          <div className="relative z-10 mt-7">
            <h1 className="font-display text-5xl font-medium tracking-wide text-[#F5ECE0] sm:text-6xl lg:text-[68px]">
              {WEDDING_DATA.groom}
            </h1>
            <p className="mt-2 text-sm text-[#C2B09E] sm:text-base">
              Son of{' '}
              <span className="font-medium text-[#ECD08B]">
                {WEDDING_DATA.groomParents}
              </span>
            </p>
          </div>

          <div className="relative z-10 my-6 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A853]/65 sm:w-24" />
            <span className="font-display text-4xl italic leading-none text-[#ECD08B]">
              &amp;
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A853]/65 sm:w-24" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-5xl font-medium tracking-wide text-[#F5ECE0] sm:text-6xl lg:text-[68px]">
              {WEDDING_DATA.bride}
            </h2>
            <p className="mt-2 text-sm text-[#C2B09E] sm:text-base">
              Daughter of{' '}
              <span className="font-medium text-[#ECD08B]">
                {WEDDING_DATA.brideParents}
              </span>
            </p>
          </div>

          <p className="relative z-10 mx-auto mt-8 max-w-md text-sm leading-relaxed text-[#C2B09E] sm:text-base">
            joyfully invite you to share in the blessings and celebration of
            their wedding.
          </p>
        </div>
      </div>

      {/* Story / Blessing Statement */}
      <div className="mx-auto mt-12 max-w-2xl px-2 text-center sm:mt-14">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#D4A853]/35" />
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-[#D4A853]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <span className="h-px w-12 bg-[#D4A853]/35" />
        </div>
        <p className="font-display text-2xl font-normal leading-relaxed text-[#F5ECE0]/95 sm:text-[28px]">
          {WEDDING_DATA.storyLead}{' '}
          <em className="italic text-[#ECD08B]">
            {WEDDING_DATA.storyHighlight}
          </em>
          . {WEDDING_DATA.storyTail}
        </p>
      </div>
    </section>
  );
}

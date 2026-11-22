import { CalendarPlus, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  downloadIcsFile,
  getGoogleCalendarUrl,
  WEDDING_DATA,
} from '../data/wedding';

interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getCountdown(): CountdownParts {
  const target = new Date(WEDDING_DATA.dateISO).getTime();
  const diffSec = Math.max(0, Math.floor((target - Date.now()) / 1000));
  return {
    days: Math.floor(diffSec / 86400),
    hours: Math.floor((diffSec % 86400) / 3600),
    minutes: Math.floor((diffSec % 3600) / 60),
    seconds: diffSec % 60,
  };
}

const DEFAULT_REVEAL_HEIGHT = 460;

export function SaveTheDateSection() {
  const [height, setHeight] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<CountdownParts>(getCountdown);

  const rodRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const dragStartY = useRef<number>(0);
  const dragStartHeight = useRef<number>(0);
  const didDrag = useRef<boolean>(false);

  const getMaxHeight = () =>
    (contentRef.current?.scrollHeight || DEFAULT_REVEAL_HEIGHT) + 12;

  useEffect(() => {
    const id = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onResize = () => setHeight(getMaxHeight());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  const snapTo = (open: boolean) => {
    setIsOpen(open);
    setHeight(open ? getMaxHeight() : 0);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    didDrag.current = false;
    dragStartY.current = e.clientY;
    dragStartHeight.current = height;
    rodRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.clientY - dragStartY.current;
    if (Math.abs(delta) > 4) {
      didDrag.current = true;
    }
    const maxH = getMaxHeight();
    const next = Math.max(0, Math.min(maxH, dragStartHeight.current + delta));
    setHeight(next);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!didDrag.current) {
      snapTo(!isOpen);
      return;
    }
    snapTo(height > getMaxHeight() * 0.35);
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section
      id="save-the-date"
      className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D4A853]">
        Auspicious Moment
      </p>
      <h2 className="font-display mt-2 text-4xl font-medium tracking-wide text-[#F5ECE0] sm:text-5xl">
        Save the Date
      </h2>

      {/* Interactive Scroll & Tassel Assembly */}
      <div className="relative mx-auto mt-8 max-w-md select-none">
        {/* Golden Scroll Rod */}
        <div
          ref={rodRef}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-controls="save-the-date-scroll"
          aria-label={isOpen ? 'Pull up to close Save the Date scroll' : 'Pull the tassel down to reveal Save the Date'}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              snapTo(!isOpen);
            }
          }}
          className={`relative z-20 mx-auto flex h-4 w-full items-center justify-between rounded-full border border-[#ECD08B]/65 px-0 shadow-[0_6px_18px_rgba(0,0,0,0.75)] touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B] ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            background:
              'linear-gradient(180deg, #F3D999 0%, #C6933E 55%, #7D581D 100%)',
          }}
        >
          <span className="-ml-2 h-6 w-3 rounded-full border border-[#ECD08B]/70 bg-gradient-to-b from-[#ECD08B] to-[#8C611F] shadow-md" />
          <span className="-mr-2 h-6 w-3 rounded-full border border-[#ECD08B]/70 bg-gradient-to-b from-[#ECD08B] to-[#8C611F] shadow-md" />

          {/* Hanging Silk & Gold Tassel */}
          <span
            aria-hidden="true"
            className={`tassel-sway absolute left-1/2 top-3.5 flex flex-col items-center transition-opacity duration-300 ${
              height > 14 ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <span className="h-8 w-[2px] bg-[#D4A853]" />
            <span className="h-3.5 w-3.5 rounded-full border border-[#ECD08B] bg-gradient-to-br from-[#F3D999] to-[#9E732B] shadow" />
            <span className="mt-0.5 h-9 w-5 rounded-t-sm rounded-b-lg bg-gradient-to-b from-[#B82934] via-[#8E1620] to-[#4A080F] shadow-[0_6px_12px_rgba(0,0,0,0.6)]" />
          </span>
        </div>

        {/* Unrolling Velvet-Gold Scroll */}
        <div
          id="save-the-date-scroll"
          className="relative -mt-2 overflow-hidden pt-2"
          style={{
            height: `${height}px`,
            transition: isDragging
              ? 'none'
              : 'height 0.62s cubic-bezier(0.28, 1.18, 0.42, 1)',
          }}
        >
          <div
            ref={contentRef}
            className="mx-3 rounded-b-2xl border border-t-0 border-[#D4A853]/40 px-5 pb-7 pt-8 shadow-[0_24px_50px_rgba(0,0,0,0.75)] sm:px-7"
            style={{
              background:
                'linear-gradient(180deg, #1E1217 0%, #150D11 55%, #110A0D 100%)',
            }}
          >
            <div className="font-display text-6xl font-medium leading-none text-[#ECD08B] sm:text-7xl">
              {WEDDING_DATA.dateDisplayDay}
            </div>
            <div className="font-display mt-1 text-3xl italic text-[#F5ECE0]">
              {WEDDING_DATA.dateDisplayMonth}{' '}
              <span className="not-italic text-[#C2B09E]">
                {WEDDING_DATA.dateDisplayYear}
              </span>
            </div>

            <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-[#D4A853]">
              {WEDDING_DATA.dateLine}
            </p>
            <p className="mt-1.5 text-sm text-[#C2B09E]">
              {WEDDING_DATA.summaryLine}
            </p>

            {/* 4-column Tabular-Nums Countdown */}
            <div
              aria-label="Countdown to the wedding"
              className="mt-6 grid grid-cols-4 gap-2 sm:gap-3"
            >
              {[
                { label: 'Days', value: String(countdown.days) },
                { label: 'Hours', value: pad(countdown.hours) },
                { label: 'Minutes', value: pad(countdown.minutes) },
                { label: 'Seconds', value: pad(countdown.seconds) },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="rounded-xl border border-[#D4A853]/30 bg-[#0B0709]/85 px-1 py-3"
                >
                  <div className="font-display text-2xl font-semibold leading-none tabular-nums text-[#F5ECE0] sm:text-3xl">
                    {unit.value}
                  </div>
                  <div className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#C2B09E]">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#D4A853]/50 bg-[#9E1B24] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#F5ECE0] transition-colors hover:bg-[#B82934] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
              >
                <CalendarPlus className="h-4 w-4 text-[#ECD08B]" aria-hidden="true" />
                <span>Add to Calendar</span>
              </a>
              <button
                type="button"
                onClick={() => downloadIcsFile()}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-[#D4A853]/35 bg-transparent px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#ECD08B] transition-colors hover:border-[#ECD08B] hover:bg-[#1E1217] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>.ICS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Toggle / Pull Hint */}
        <button
          type="button"
          onClick={() => snapTo(!isOpen)}
          className={`min-h-[44px] cursor-pointer px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#C2B09E] transition-colors hover:text-[#ECD08B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B] ${
            isOpen ? 'mt-4' : 'mt-24'
          }`}
        >
          {isOpen ? '↑ Pull up to close' : '↓ Pull the tassel down'}
        </button>
      </div>
    </section>
  );
}

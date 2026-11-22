import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { WEDDING_DATA, WeddingEvent } from '../data/wedding';

function EventCard({
  event,
  isActive,
  onSelect,
}: {
  event: WeddingEvent;
  isActive?: boolean;
  onSelect: (event: WeddingEvent) => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D4A853]/28 bg-[#150D11] text-center shadow-[0_18px_42px_rgba(0,0,0,0.6)] transition-all duration-300 ${
        isActive === false
          ? 'scale-[0.94] opacity-70 md:scale-100 md:opacity-100'
          : 'scale-100 opacity-100'
      }`}
    >
      {/* Natural Candid Ceremony Photograph */}
      <button
        type="button"
        onClick={() => onSelect(event)}
        aria-label={`View ${event.name} photo`}
        className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden border-b border-[#D4A853]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
      >
        {!imgFailed ? (
          <img
            src={event.image}
            alt={event.name}
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center p-4"
            style={{ background: event.headerGradient }}
          >
            <span className="font-display text-2xl italic text-[#ECD08B]">
              {event.name}
            </span>
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#150D11]/75 via-transparent to-transparent"
        />
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between px-5 pb-6 pt-5">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#D4A853]">
            {event.when}
          </p>
          <h3 className="font-display mt-2 text-3xl font-medium text-[#F5ECE0]">
            {event.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#C2B09E]">
            {event.place}
          </p>
        </div>

        <div className="mt-5 border-t border-[#D4A853]/18 pt-4">
          <div className="flex items-center justify-center gap-2 text-xs text-[#C2B09E]">
            <span
              aria-hidden="true"
              className="h-3 w-3 shrink-0 rounded-sm border border-[#F5ECE0]/40"
              style={{ backgroundColor: event.swatch }}
            />
            <span>
              Attire · <span className="text-[#F5ECE0]">{event.dress}</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function FestivitiesSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<WeddingEvent | null>(null);
  const [modalImgFailed, setModalImgFailed] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let minDist = Number.POSITIVE_INFINITY;
      Array.from(track.children).forEach((child, idx) => {
        const el = child as HTMLElement;
        const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
        if (dist < minDist) {
          minDist = dist;
          best = idx;
        }
      });
      setActiveIndex(best);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedEvent) return;
    setModalImgFailed(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedEvent(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedEvent]);

  const scrollToCard = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = track.children[idx] as HTMLElement | undefined;
    if (!target) return;
    track.scrollTo({
      left: target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="festivities"
      className="mx-auto max-w-6xl py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="px-4 text-center sm:px-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D4A853]">
          Celebrations &amp; Gatherings
        </p>
        <h2 className="font-display mt-2 text-4xl font-medium tracking-wide text-[#F5ECE0] sm:text-5xl">
          Wedding Festivities
        </h2>
      </div>

      <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
        {WEDDING_DATA.events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onSelect={setSelectedEvent}
          />
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc(50%-138px)] py-4"
        >
          {WEDDING_DATA.events.map((event, idx) => (
            <div key={event.id} className="w-[276px] shrink-0 snap-center">
              <EventCard
                event={event}
                isActive={idx === activeIndex}
                onSelect={setSelectedEvent}
              />
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-center gap-2">
          {WEDDING_DATA.events.map((event, idx) => (
            <button
              key={event.id}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`View ${event.name}`}
              className="flex h-7 w-7 cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-5 bg-[#ECD08B]'
                    : 'w-2 bg-[#D4A853]/35'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Natural Photo Preview Lightbox */}
      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedEvent.name} photo`}
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#D4A853]/40 bg-[#150D11] shadow-[0_32px_80px_rgba(0,0,0,0.85)]"
          >
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close photo preview"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#D4A853]/50 bg-[#0B0709]/85 text-[#F5ECE0] transition-colors hover:bg-[#9E1B24] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[4/3] w-full bg-[#0B0709]">
              {!modalImgFailed ? (
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.name}
                  referrerPolicy="no-referrer"
                  onError={() => setModalImgFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{ background: selectedEvent.headerGradient }}
                >
                  <span className="font-display text-3xl italic text-[#ECD08B]">
                    {selectedEvent.name}
                  </span>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#150D11] via-transparent to-transparent"
              />
            </div>

            <div className="px-6 pb-6 pt-3 text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#D4A853]">
                {selectedEvent.when}
              </p>
              <h3 className="font-display mt-1 text-3xl font-medium text-[#F5ECE0]">
                {selectedEvent.name}
              </h3>
              <p className="mt-1.5 text-sm text-[#C2B09E]">
                {selectedEvent.place}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 border-t border-[#D4A853]/18 pt-3 text-xs text-[#C2B09E]">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-sm border border-[#F5ECE0]/40"
                  style={{ backgroundColor: selectedEvent.swatch }}
                />
                <span>
                  Attire · <span className="text-[#F5ECE0]">{selectedEvent.dress}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

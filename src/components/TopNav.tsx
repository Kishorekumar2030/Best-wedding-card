import { MapPin } from 'lucide-react';
import { getGoogleMapsUrl, WEDDING_DATA } from '../data/wedding';

export function TopNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#D4A853]/20 bg-[#0B0709]/88 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#invitation"
          className="font-display shrink-0 whitespace-nowrap text-xl font-semibold tracking-wide text-[#F5ECE0] transition-colors hover:text-[#ECD08B]"
        >
          {WEDDING_DATA.groom}{' '}
          <span className="italic text-[#D4A853]">&amp;</span>{' '}
          {WEDDING_DATA.bride}
        </a>

        {/* Zone 2: Section Links */}
        <nav
          aria-label="Primary sections"
          className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] text-[#C2B09E] md:flex"
        >
          <a
            href="#invitation"
            className="shrink-0 whitespace-nowrap py-2 transition-colors hover:text-[#ECD08B]"
          >
            Invitation
          </a>
          <a
            href="#save-the-date"
            className="shrink-0 whitespace-nowrap py-2 transition-colors hover:text-[#ECD08B]"
          >
            Save the Date
          </a>
          <a
            href="#festivities"
            className="shrink-0 whitespace-nowrap py-2 transition-colors hover:text-[#ECD08B]"
          >
            Festivities
          </a>
          <a
            href="#venue"
            className="shrink-0 whitespace-nowrap py-2 transition-colors hover:text-[#ECD08B]"
          >
            Venue
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <a
          href={getGoogleMapsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[40px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#D4A853]/45 bg-[#9E1B24] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#F5ECE0] transition-colors hover:bg-[#B82934] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
        >
          <MapPin className="h-3.5 w-3.5 text-[#ECD08B]" aria-hidden="true" />
          <span>Get Directions</span>
        </a>
      </div>
    </header>
  );
}

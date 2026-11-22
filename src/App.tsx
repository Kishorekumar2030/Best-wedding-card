import { Volume2, VolumeX } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CoverBook } from './components/CoverBook';
import { FestivitiesSection } from './components/FestivitiesSection';
import { FooterSection } from './components/FooterSection';
import { HeroSection } from './components/HeroSection';
import { PetalBackdrop } from './components/PetalBackdrop';
import { SaveTheDateSection } from './components/SaveTheDateSection';
import { TopNav } from './components/TopNav';
import { VenueMapSection } from './components/VenueMapSection';
import {
  MusicPlayerHandle,
  YouTubeMusicPlayer,
} from './components/YouTubeMusicPlayer';
import { WEDDING_DATA } from './data/wedding';

export default function App() {
  const [coverOpened, setCoverOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef<MusicPlayerHandle | null>(null);

  useEffect(() => {
    document.title = WEDDING_DATA.pageTitle;
  }, []);

  const handleOpenStart = useCallback(() => {
    musicRef.current?.play();
  }, []);

  const handleOpenCover = useCallback(() => {
    setCoverOpened(true);
  }, []);

  const handleToggleMusic = useCallback(() => {
    musicRef.current?.toggle();
  }, []);

  const handleReplayCover = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCoverOpened(false);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0709] text-[#F5ECE0]">
      <YouTubeMusicPlayer ref={musicRef} onPlayingChange={setIsPlaying} />

      <PetalBackdrop />

      <CoverBook
        isOpen={coverOpened}
        onOpenStart={handleOpenStart}
        onOpen={handleOpenCover}
      />

      <TopNav />

      <main className="relative z-20">
        <HeroSection />
        <SaveTheDateSection />
        <FestivitiesSection />
        <VenueMapSection />
      </main>

      <FooterSection onReplayCover={handleReplayCover} />

      {/* Floating Music Toggle */}
      {coverOpened && (
        <button
          type="button"
          onClick={handleToggleMusic}
          title={WEDDING_DATA.songTitle}
          aria-label={
            isPlaying
              ? `Pause ${WEDDING_DATA.songTitle}`
              : `Play ${WEDDING_DATA.songTitle}`
          }
          aria-pressed={isPlaying}
          className="fixed bottom-4 right-4 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#D4A853]/55 bg-[#150D11]/95 text-[#ECD08B] shadow-[0_8px_24px_rgba(0,0,0,0.7)] backdrop-blur-md transition-colors hover:border-[#ECD08B] hover:bg-[#241319] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ECD08B]"
        >
          {isPlaying ? (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          ) : (
            <VolumeX className="h-4 w-4 text-[#C2B09E]" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}

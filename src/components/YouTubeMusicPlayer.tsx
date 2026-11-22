import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { WEDDING_DATA } from '../data/wedding';

export interface MusicPlayerHandle {
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

interface YouTubePlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  unMute: () => void;
  setVolume: (vol: number) => void;
  getPlayerState: () => number;
  destroy: () => void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        options: {
          events?: {
            onReady?: () => void;
            onStateChange?: (event: { data: number }) => void;
            onError?: () => void;
          };
        }
      ) => YouTubePlayerInstance;
      PlayerState?: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YouTubeMusicPlayerProps {
  onPlayingChange: (playing: boolean) => void;
}

export const YouTubeMusicPlayer = forwardRef<
  MusicPlayerHandle,
  YouTubeMusicPlayerProps
>(function YouTubeMusicPlayer({ onPlayingChange }, ref) {
  const playerRef = useRef<YouTubePlayerInstance | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const fallbackAudioRef = useRef<HTMLAudioElement | null>(null);
  const wantPlayRef = useRef(false);
  const [useFallbackAudio, setUseFallbackAudio] = useState(false);

  const sendIframeCommand = (func: string, args: unknown[] = []) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      'https://www.youtube.com'
    );
  };

  useEffect(() => {
    let cancelled = false;

    const initPlayer = () => {
      if (cancelled || !window.YT?.Player || playerRef.current) return;
      playerRef.current = new window.YT.Player('yt-wedding-player', {
        events: {
          onReady: () => {
            if (wantPlayRef.current && playerRef.current) {
              playerRef.current.unMute();
              playerRef.current.setVolume(85);
              playerRef.current.playVideo();
            }
          },
          onStateChange: (event) => {
            // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
            if (event.data === 1) {
              onPlayingChange(true);
            } else if (event.data === 2 || event.data === 0) {
              onPlayingChange(false);
            }
          },
          onError: () => {
            setUseFallbackAudio(true);
            if (wantPlayRef.current && fallbackAudioRef.current) {
              fallbackAudioRef.current.volume = 0.8;
              fallbackAudioRef.current
                .play()
                .then(() => onPlayingChange(true))
                .catch(() => onPlayingChange(false));
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prevCallback?.();
        initPlayer();
      };
      if (
        !document.querySelector(
          'script[src="https://www.youtube.com/iframe_api"]'
        )
      ) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        document.head.appendChild(tag);
      }
    }

    return () => {
      cancelled = true;
    };
  }, [onPlayingChange]);

  const play = () => {
    wantPlayRef.current = true;
    if (useFallbackAudio && fallbackAudioRef.current) {
      fallbackAudioRef.current.volume = 0.8;
      fallbackAudioRef.current
        .play()
        .then(() => onPlayingChange(true))
        .catch(() => onPlayingChange(false));
      return;
    }

    if (playerRef.current) {
      playerRef.current.unMute();
      playerRef.current.setVolume(85);
      playerRef.current.playVideo();
      onPlayingChange(true);
    } else {
      sendIframeCommand('unMute');
      sendIframeCommand('setVolume', [85]);
      sendIframeCommand('playVideo');
      onPlayingChange(true);
    }
  };

  const pause = () => {
    wantPlayRef.current = false;
    if (useFallbackAudio && fallbackAudioRef.current) {
      fallbackAudioRef.current.pause();
      onPlayingChange(false);
      return;
    }

    if (playerRef.current) {
      playerRef.current.pauseVideo();
    } else {
      sendIframeCommand('pauseVideo');
    }
    onPlayingChange(false);
  };

  const toggle = () => {
    if (wantPlayRef.current) {
      pause();
    } else {
      play();
    }
  };

  useImperativeHandle(ref, () => ({ play, pause, toggle }));

  const originParam =
    typeof window !== 'undefined' ? `&origin=${encodeURIComponent(window.location.origin)}` : '';

  const embedSrc = `https://www.youtube.com/embed/${WEDDING_DATA.youtubeVideoId}?enablejsapi=1&playsinline=1&start=${WEDDING_DATA.youtubeStartSeconds}&loop=1&playlist=${WEDDING_DATA.youtubeVideoId}&rel=0&controls=0${originParam}`;

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 h-px w-px overflow-hidden opacity-0"
      >
        <iframe
          ref={iframeRef}
          id="yt-wedding-player"
          width="200"
          height="200"
          src={embedSrc}
          title={WEDDING_DATA.songTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <audio
        ref={fallbackAudioRef}
        src={WEDDING_DATA.audioSrc}
        loop
        preload="none"
      />
    </>
  );
});

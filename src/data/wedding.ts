export interface WeddingEvent {
  id: 'haldi' | 'sangeet' | 'mehndi' | 'wedding';
  name: string;
  when: string;
  place: string;
  dress: string;
  swatch: string;
  image: string;
  headerGradient: string;
  accentHex: string;
}

export interface CreatorContact {
  name: string;
  tagline: string;
  whatsappDisplay: string;
  whatsappUrl: string;
}

export interface WeddingConfig {
  slug: 'kabir-zara' | 'santosh-rameela' | 'rohan-amara';
  pageTitle: string;
  coverTitle: string;
  coverSubtitle: string;
  coverEmblem: string;
  coverEmblemType: 'devanagari' | 'monogram';
  coverFooter: string;
  coverYearLine: string;
  invocation: string;
  invocationIsDevanagari: boolean;
  heroLead: string;
  groom: string;
  groomParents: string;
  bride: string;
  brideParents: string;
  dateISO: string;
  dateDisplayDay: string;
  dateDisplayMonth: string;
  dateDisplayYear: string;
  dateLine: string;
  summaryLine: string;
  venue: string;
  address: string;
  plusCode: string;
  mapAreaLabel: string;
  mapCityLabel: string;
  mapQuery: string;
  storyLead: string;
  storyHighlight: string;
  storyTail: string;
  closing: string;
  youtubeVideoId: string;
  youtubeStartSeconds: number;
  songTitle: string;
  audioSrc: string;
  creatorContact?: CreatorContact;
  events: WeddingEvent[];
}

export const KABIR_ZARA_DATA: WeddingConfig = {
  slug: 'kabir-zara',
  pageTitle: 'Kabir & Zara – Royal Wedding Invitation',
  coverTitle: 'WEDDING INVITATION',
  coverSubtitle: 'A Royal Celebration',
  coverEmblem: 'K & Z',
  coverEmblemType: 'monogram',
  coverFooter: 'December 26, 2026 · The Grand Courtyard',
  coverYearLine: '26 · 12 · 2026',
  invocation: 'With Love & Warmest Wishes',
  invocationIsDevanagari: false,
  heroLead: 'Together with their families',
  groom: 'Kabir',
  groomParents: 'Mr. & Mrs. Singhania',
  bride: 'Zara',
  brideParents: 'Mr. & Mrs. Merchant',
  dateISO: '2026-12-26T20:00:00+05:00',
  dateDisplayDay: '26',
  dateDisplayMonth: 'December',
  dateDisplayYear: '2026',
  dateLine: 'Wedding & Reception · 8 pm to 1 am · The Grand Courtyard',
  summaryLine: 'See you on Saturday, 26 December 2026',
  venue: 'The Grand Courtyard',
  address: 'Garden Avenue, Clifton Promenade',
  plusCode: '7R9P+M42 Clifton',
  mapAreaLabel: 'GARDEN AVENUE',
  mapCityLabel: 'CLIFTON',
  mapQuery: 'Clifton Promenade',
  storyLead: 'Two families, one',
  storyHighlight: 'beautiful beginning',
  storyTail:
    'We would be honoured to have your presence, laughter, and blessings as we celebrate our wedding together.',
  closing: 'With love, the Singhania & Merchant families',
  youtubeVideoId: 't4wy8NYrc28',
  youtubeStartSeconds: 12,
  songTitle: 'Nachde Ne Saare – Baar Baar Dekho',
  audioSrc: '/audio/indian-wedding-melody.mp3',
  creatorContact: {
    name: 'Kishore Kumar',
    tagline: 'Want a custom digital wedding invitation website like this?',
    whatsappDisplay: '0314-1423622',
    whatsappUrl: `https://wa.me/923141423622?text=${encodeURIComponent(
      'Hi Kishore Kumar, I saw your digital wedding invitation demo and would like to order a custom invitation website.'
    )}`,
  },
  events: [
    {
      id: 'haldi',
      name: 'Haldi & Mayoon',
      when: 'THU · 24 DEC 2026 · 5 PM – 8 PM',
      place: 'The Lawn Terrace, Grand Courtyard',
      dress: 'Yellow & ivory',
      swatch: '#F4C542',
      image: '/src/assets/images/natural_haldi_marigold_1795353114262.jpg',
      headerGradient: 'linear-gradient(155deg, #47320B 0%, #241708 55%, #160E09 100%)',
      accentHex: '#F4C542',
    },
    {
      id: 'sangeet',
      name: 'Sangeet Night',
      when: 'FRI · 25 DEC 2026 · 7 PM – 11 PM',
      place: 'Royal Ballroom, Grand Courtyard',
      dress: 'Colourful & festive',
      swatch: '#7B3FA0',
      image: '/src/assets/images/natural_sangeet_dholak_1795353113610.jpg',
      headerGradient: 'linear-gradient(155deg, #3A1A52 0%, #210E31 55%, #150B1F 100%)',
      accentHex: '#C88DF2',
    },
    {
      id: 'mehndi',
      name: 'Mehndi',
      when: 'SAT · 26 DEC 2026 · 2 PM – 5 PM',
      place: 'Jasmine Pavilion, Grand Courtyard',
      dress: 'Green & pastels',
      swatch: '#6F9A4D',
      image: '/src/assets/images/natural_mehndi_hands_1795353113462.jpg',
      headerGradient: 'linear-gradient(155deg, #1E3B1F 0%, #122414 55%, #0D1610 100%)',
      accentHex: '#92C86D',
    },
    {
      id: 'wedding',
      name: 'Wedding & Reception',
      when: 'SAT · 26 DEC 2026 · 8 PM – 1 AM',
      place: 'The Grand Courtyard, Garden Avenue',
      dress: 'Traditional red & gold',
      swatch: '#B3261E',
      image: '/src/assets/images/natural_wedding_courtyard_1795353113533.jpg',
      headerGradient: 'linear-gradient(155deg, #5A111A 0%, #31090F 55%, #19080B 100%)',
      accentHex: '#E8A554',
    },
  ],
};

export const SANTOSH_RAMEELA_DATA: WeddingConfig = {
  slug: 'santosh-rameela',
  pageTitle: 'Santosh Weds Rameela – Wedding Invitation',
  coverTitle: 'SHUBH VIVAAH',
  coverSubtitle: 'Royal Invitation',
  coverEmblem: 'ॐ',
  coverEmblemType: 'devanagari',
  coverFooter: 'December 11, 2026 · Umerkot',
  coverYearLine: '11 · 12 · 2026',
  invocation: '॥ श्री गणेशाय नमः ॥',
  invocationIsDevanagari: true,
  heroLead: 'With the blessings of the Almighty & their families',
  groom: 'Santosh',
  groomParents: 'Mr. Rejhu Mal',
  bride: 'Rameela',
  brideParents: 'Mr. Hiralal Tamsani',
  dateISO: '2026-12-11T22:00:00+05:00',
  dateDisplayDay: '11',
  dateDisplayMonth: 'December',
  dateDisplayYear: '2026',
  dateLine: 'Wedding · 10 pm to 4 am · Hiralal Tamsani House',
  summaryLine: 'See you on Friday, 11 December 2026',
  venue: 'Hiralal Tamsani House',
  address: 'Shewani Mohallah, Umerkot, Sindh',
  plusCode: '9P5J+H92 Umerkot',
  mapAreaLabel: 'SHEWANI MOHALLAH',
  mapCityLabel: 'UMERKOT',
  mapQuery: '9P5J+H92 Umerkot',
  storyLead: 'Two families, one',
  storyHighlight: 'beautiful beginning',
  storyTail:
    'We would be honoured to have your blessings and your presence as we start our journey together.',
  closing: 'With love, the Rejhu Mal & Tamsani families',
  youtubeVideoId: 'Cu3QpWEfqgg',
  youtubeStartSeconds: 34,
  songTitle: 'Tenu Leke – Salaam-E-Ishq',
  audioSrc: '/audio/wedding-song.mp3',
  events: [
    {
      id: 'haldi',
      name: 'Haldi',
      when: 'TUE · 8 DEC 2026 · 6 PM – 9 PM',
      place: 'Hiralal Tamsani House, Shewani Mohallah',
      dress: 'Yellow & white',
      swatch: '#F4C542',
      image: '/src/assets/images/natural_haldi_marigold_1795353114262.jpg',
      headerGradient: 'linear-gradient(155deg, #47320B 0%, #241708 55%, #160E09 100%)',
      accentHex: '#F4C542',
    },
    {
      id: 'sangeet',
      name: 'Sangeet',
      when: 'WED · 9 DEC 2026 · 7 PM – 10 PM',
      place: 'Hiralal Tamsani House, Shewani Mohallah',
      dress: 'Colourful & festive',
      swatch: '#7B3FA0',
      image: '/src/assets/images/natural_sangeet_dholak_1795353113610.jpg',
      headerGradient: 'linear-gradient(155deg, #3A1A52 0%, #210E31 55%, #150B1F 100%)',
      accentHex: '#C88DF2',
    },
    {
      id: 'mehndi',
      name: 'Mehndi',
      when: 'THU · 10 DEC 2026 · 8 PM – 6 AM',
      place: 'Hiralal Tamsani House, Shewani Mohallah',
      dress: 'Green & pastels',
      swatch: '#6F9A4D',
      image: '/src/assets/images/natural_mehndi_hands_1795353113462.jpg',
      headerGradient: 'linear-gradient(155deg, #1E3B1F 0%, #122414 55%, #0D1610 100%)',
      accentHex: '#92C86D',
    },
    {
      id: 'wedding',
      name: 'Wedding',
      when: 'FRI · 11 DEC 2026 · 10 PM – 4 AM',
      place: 'Hiralal Tamsani House, Shewani Mohallah',
      dress: 'Traditional red & gold',
      swatch: '#B3261E',
      image: '/src/assets/images/natural_wedding_courtyard_1795353113533.jpg',
      headerGradient: 'linear-gradient(155deg, #5A111A 0%, #31090F 55%, #19080B 100%)',
      accentHex: '#E8A554',
    },
  ],
};

export const ROHAN_AMARA_DATA: WeddingConfig = {
  slug: 'rohan-amara',
  pageTitle: 'Rohan & Amara – Wedding Invitation',
  coverTitle: 'THE WEDDING INVITATION',
  coverSubtitle: 'With Love & Blessings',
  coverEmblem: 'R & A',
  coverEmblemType: 'monogram',
  coverFooter: 'December 19, 2026 · Heritage Courtyard',
  coverYearLine: '19 · 12 · 2026',
  invocation: 'Wedding Invitation',
  invocationIsDevanagari: false,
  heroLead: 'Together with their families',
  groom: 'Rohan',
  groomParents: 'Mr. Vikram & Mrs. Saira Oberoi',
  bride: 'Amara',
  brideParents: 'Mr. Farhan & Mrs. Elena Merchant',
  dateISO: '2026-12-19T20:00:00+05:00',
  dateDisplayDay: '19',
  dateDisplayMonth: 'December',
  dateDisplayYear: '2026',
  dateLine: 'Wedding & Reception · 8 pm to 1 am · The Heritage Courtyard',
  summaryLine: 'See you on Saturday, 19 December 2026',
  venue: 'The Heritage Courtyard',
  address: 'Rose Garden Estate, Lakeview Boulevard',
  plusCode: '8Q6M+X4F Rose Garden',
  mapAreaLabel: 'ROSE GARDEN ESTATE',
  mapCityLabel: 'LAKEVIEW BLVD',
  mapQuery: 'The Heritage Courtyard Rose Garden Estate',
  storyLead: 'Two families, one',
  storyHighlight: 'beautiful beginning',
  storyTail:
    'We would be honoured to have your warm wishes and presence as we begin our journey together.',
  closing: 'With love, the Oberoi & Merchant families',
  youtubeVideoId: '58r8MDf5sxQ',
  youtubeStartSeconds: 18,
  songTitle: 'Sweetheart – Kedarnath (Amit Trivedi)',
  audioSrc: '/audio/indian-wedding-melody.mp3',
  events: [
    {
      id: 'haldi',
      name: 'Haldi & Mayoon',
      when: 'THU · 17 DEC 2026 · 5 PM – 8 PM',
      place: 'The Courtyard Lawns, Rose Garden Estate',
      dress: 'Yellow & ivory',
      swatch: '#F4C542',
      image: '/src/assets/images/natural_haldi_marigold_1795353114262.jpg',
      headerGradient: 'linear-gradient(155deg, #47320B 0%, #241708 55%, #160E09 100%)',
      accentHex: '#F4C542',
    },
    {
      id: 'sangeet',
      name: 'Sangeet Night',
      when: 'FRI · 18 DEC 2026 · 7 PM – 11 PM',
      place: 'Grand Marquee, Rose Garden Estate',
      dress: 'Colourful & festive',
      swatch: '#7B3FA0',
      image: '/src/assets/images/natural_sangeet_dholak_1795353113610.jpg',
      headerGradient: 'linear-gradient(155deg, #3A1A52 0%, #210E31 55%, #150B1F 100%)',
      accentHex: '#C88DF2',
    },
    {
      id: 'mehndi',
      name: 'Mehndi',
      when: 'SAT · 19 DEC 2026 · 3 PM – 6 PM',
      place: 'The Olive Terrace, Rose Garden Estate',
      dress: 'Green & pastels',
      swatch: '#6F9A4D',
      image: '/src/assets/images/natural_mehndi_hands_1795353113462.jpg',
      headerGradient: 'linear-gradient(155deg, #1E3B1F 0%, #122414 55%, #0D1610 100%)',
      accentHex: '#92C86D',
    },
    {
      id: 'wedding',
      name: 'Wedding & Reception',
      when: 'SAT · 19 DEC 2026 · 8 PM – 1 AM',
      place: 'The Heritage Courtyard, Rose Garden Estate',
      dress: 'Traditional red & gold',
      swatch: '#B3261E',
      image: '/src/assets/images/natural_wedding_courtyard_1795353113533.jpg',
      headerGradient: 'linear-gradient(155deg, #5A111A 0%, #31090F 55%, #19080B 100%)',
      accentHex: '#E8A554',
    },
  ],
};

export function getActiveWeddingData(): WeddingConfig {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const cardParam = (params.get('card') || '').toLowerCase();

    if (
      path.includes('santosh-rameela') ||
      path === '/santosh' ||
      cardParam === 'santosh-rameela' ||
      cardParam === 'santosh'
    ) {
      return SANTOSH_RAMEELA_DATA;
    }

    if (
      path.includes('rohan-amara') ||
      path === '/rohan' ||
      cardParam === 'rohan-amara' ||
      cardParam === 'rohan'
    ) {
      return ROHAN_AMARA_DATA;
    }

    if (
      path.includes('kabir-zara') ||
      path === '/demo' ||
      cardParam === 'kabir-zara' ||
      cardParam === 'demo'
    ) {
      return KABIR_ZARA_DATA;
    }
  }

  const envDefault = (import.meta.env.VITE_DEFAULT_CARD || '').toLowerCase();
  if (envDefault === 'santosh-rameela') {
    return SANTOSH_RAMEELA_DATA;
  }
  if (envDefault === 'rohan-amara') {
    return ROHAN_AMARA_DATA;
  }

  return KABIR_ZARA_DATA;
}

export const WEDDING_DATA: WeddingConfig = getActiveWeddingData();

export function getGoogleCalendarUrl(data: WeddingConfig = WEDDING_DATA): string {
  const start = new Date(data.dateISO);
  const end = new Date(start.getTime() + 6 * 3600 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');
  const text = `${data.groom} weds ${data.bride}`;
  const location = `${data.plusCode} ${data.venue}, ${data.address}`;
  const details = `${data.dateLine}\n${data.venue}, ${data.address}`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${fmt(start)}/${fmt(end)}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(details)}`;
}

export function getGoogleMapsUrl(data: WeddingConfig = WEDDING_DATA): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.mapQuery)}`;
}

export function downloadIcsFile(data: WeddingConfig = WEDDING_DATA): void {
  const start = new Date(data.dateISO);
  const end = new Date(start.getTime() + 6 * 3600 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//${data.slug}//WeddingInvitation//EN`,
    'BEGIN:VEVENT',
    `UID:${data.slug}-2026@wedding`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${data.groom} weds ${data.bride}`,
    `DESCRIPTION:${data.dateLine}`,
    `LOCATION:${data.venue}, ${data.address} (${data.plusCode})`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.groom}-Weds-${data.bride}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

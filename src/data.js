// Edit everything about the business here.
const img = (f) => `/images/${f}`;

export const biz = {
  name: 'Queen St Tattoo',
  tagline: 'Custom or classic.', // taken from the shop's window signs
  intro: 'Classic American traditional work and custom designs from a small shop on Queen Street, Honolulu.', // ASSUMPTION: check wording
  street: '980 Queen St',
  city: 'Honolulu, HI 96814',
  plusCode: '74WW+GQ Honolulu, Hawaii, USA',
  phone: '+1 808-637-9888',
  tel: '+18086379888',
  whatsapp: '19367581151', // digits only, with country code
  rating: 4.9,
  reviewCount: 53,
  tz: 'Pacific/Honolulu',
  // Monday first. open/close are 24h hours.
  hours: [
    { day: 'Monday', open: 12, close: 20 },
    { day: 'Tuesday', open: 12, close: 20 },
    { day: 'Wednesday', open: 12, close: 20 },
    { day: 'Thursday', open: 12, close: 20 },
    { day: 'Friday', open: 12, close: 20 },
    { day: 'Saturday', open: 12, close: 20 },
    { day: 'Sunday', open: 12, close: 20 },
  ],
  social: {
    instagram: 'https://www.instagram.com/queenstreettattoo/',
    facebook: '', // add your Facebook page URL and the icon appears automatically
  },
  message:
    "Hi Queen St Tattoo! I'd like to book a tattoo.\n\nIdea: \nPlacement: \nSize: \nPreferred day: \n\nThanks!",
  mapQuery: '980 Queen St, Honolulu, HI 96814',
};

export const photos = {
  storefront: { src: img('storefront.png'), w: 696, h: 693, alt: 'Queen St Tattoo storefront: a red block building with a TATTOO sign and "Custom or classic" and "World famous" window signs' },
  mural: { src: img('mural-eagle.png'), w: 1081, h: 685, alt: 'Hand-painted Queen Street Tattoo mural of an eagle with flag-pattern wings and a cartoon cat on its chest, with two people posing in front' },
  collage: { src: img('collage-shop-and-work.png'), w: 935, h: 828, alt: 'Collage of the storefront, the shop interior with flash sheets covering the walls and ceiling, and six tattoos including a red oni mask, swallows and daggers, a script lettering forearm and two horses with roses' },
};

export const filters = ['All', 'Color', 'Black & grey', 'Lettering'];

export const gallery = [
  { id: 'usn', title: 'Eagle, flag and USN', tag: 'Color', src: img('usn-eagle-arm.png'), w: 668, h: 699, alt: 'Traditional tattoo of an eagle in front of an American flag, above crossed cannons, an anchor and a USN banner, with a flower below, on an upper arm' },
  { id: 'wolf', title: 'Wolf head chest piece', tag: 'Color', src: img('wolf-chest.png'), w: 668, h: 699, alt: 'Large traditional tattoo of a black wolf head with blue eyes, a red tongue and yellow fangs across a chest' },
  { id: 'puffer', title: 'Pufferfish', tag: 'Color', src: img('pufferfish-ankle.png'), w: 668, h: 699, alt: 'Colorful pufferfish tattoo with orange eyes and a spotted pink belly on a lower leg, next to a red and teal octopus tattoo' },
  { id: 'vase', title: 'Flowers in a vase', tag: 'Black & grey', src: img('flower-vase.png'), w: 670, h: 759, alt: 'Black ink tattoo of three outlined flowers with bold leaves in a solid black vase on a forearm' },
  { id: 'verse', title: 'Verse on the forearm', tag: 'Lettering', src: img('scripture-forearm.png'), w: 687, h: 514, alt: 'Forearm tattoo of a verse of poetry in small black lettering, with a line of green lettering running beside it, photographed in front of flash sheets' },
  { id: 'devil', title: 'Cartoon devil girl', tag: 'Color', src: img('devil-pinup-arm.png'), w: 696, h: 693, alt: 'Faded tattoo of a cartoon girl with small red devil horns holding a pitchfork, with black bats around her, on an upper arm' },
  { id: 'hula', title: 'Eagle and hula girl', tag: 'Color', src: img('hula-and-usn-selfie.png'), w: 670, h: 759, alt: 'Man in a camouflage uniform taking a mirror selfie, showing an eagle, flag and USN tattoo on his upper arm and a hula dancer tattoo on his forearm' },
];

export const featured = ['usn', 'wolf', 'puffer', 'vase'];

export const steps = [
  { t: 'Message us on WhatsApp', d: 'Tell us your idea, where you want it and roughly how big.' },
  { t: 'Talk it through', d: 'We reply in the chat to sort out the design and a day that works.' },
  { t: 'Come in to the shop', d: 'Visit us at 980 Queen St and get tattooed.' },
]; // ASSUMPTION: check this describes how you really book

export const reviews = [
  { name: 'Jack', note: 'Local Guide', text: 'pretty classic american traditional shop. reminds me of most of the Old School Traditional shops in chicago. small space but it works well. quality work across their artists. Uno does great work, uses really rad colors, solid bold lines. I …' },
  { name: 'Jaden Kellogg', note: 'Local Guide', text: "Great experience! Keir was awesome to work with and I'll be going back for my next one. Super chill. Parking is best at Whole Foods or Long's Drugs. Short walk either way." },
  { name: 'Bryanna Rivera', note: 'Local Guide', text: "I've been coming to see Erik over the past year and every time I leave so much happier! All the artists are so talented and friendly! And Goose the dog is the sweetest." },
];

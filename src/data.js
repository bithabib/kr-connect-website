// Non-translatable data: brand, contact details, icons, and founder photos.
// All translatable TEXT lives in src/i18n/translations.js instead.

export const company = {
  name: 'KR Connect Technologies', // brand name — kept the same in every language
  email: 'hello@krconnect.tech',
  phone: '+82 10-0000-0000',
  location: 'Seoul, South Korea',
}

// Icons line up by index with services[].items in each language.
export const serviceIcons = ['🎓', '🏥', '🍽️', '💻', '🛂', '🤝']

// ===== Products (mobile apps & more) =====
// To add a new product later, just copy one block and change the fields.
//   status: 'available'  -> shows the store buttons
//   status: 'coming'     -> shows a "Coming soon" badge instead
// Paste the real store links into playStore / appStore. Leave a link as ''
// (empty) to hide that one button (e.g. Android-only app -> empty appStore).
export const products = [
  {
    id: 'kiip-academy',
    name: 'KIIP Academy',
    icon: '🎓',
    status: 'available',
    playStore: '', // e.g. 'https://play.google.com/store/apps/details?id=...'
    appStore: '',  // e.g. 'https://apps.apple.com/app/id...'
  },
  {
    id: 'topik-academy',
    name: 'TOPIK Academy',
    icon: '📘',
    status: 'available',
    playStore: '',
    appStore: '',
  },
]

// Names + photos stay the same across languages (roles/bios are translated).
export const founders = [
  {
    name: 'Md Habibur Rahman',
    // Drop a photo named "founder-habib.jpg" in the /public folder to show it here.
    photo: '/founder-habib.jpg',
    initials: 'HR',
  },
  {
    name: 'Mohammad Entaz Bahar',
    // Drop a photo named "founder-entaz.jpg" in the /public folder to show it here.
    photo: '/founder-entaz.jpg',
    initials: 'EB',
  },
]

export const SITE_CONFIG = {
  name: 'Saucony Shop',
  title: 'Saucony Shop - Patike za trčanje | Sreten Spasić',
  description: 'Profesionalne patike za trčanje Saucony brenda. Za početnike, rekreativce i napredne trkače. Kvalitet i tradicija od 1898. godine.',
  url: 'https://sauconyshop.rs',
  
  company: {
    name: 'Saucony Shop',
    fullName: 'Saucony Shop - Sreten Spasić',
    location: 'Srbija',
    address: 'Srbija',
    phone: '+381 64 382 4647',
    email: 'info@sauconyshop.rs',
    instagram: '@sauconyshop',
    instagramUrl: 'https://instagram.com/sauconyshop'
  },

  navigation: {
    main: [
      { name: 'Početna', href: '/' },
      { name: 'O brendu', href: '/o-brendu' },
      { name: 'Proizvodi', href: '/proizvodi' },
      { name: 'Kategorije', href: '/kategorije' },
      { name: 'Kontakt', href: '/kontakt' }
    ]
  },

  categories: [
    {
      name: 'Patike za početnike',
      slug: 'pocetnici',
      description: 'Idealne za rekreativce i one koji tek počinju sa trčanjem',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
    },
    {
      name: 'Trail patike',
      slug: 'trail',
      description: 'Za terensko trčanje i prirodu',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'
    },
    {
      name: 'Maratonske patike',
      slug: 'maraton',
      description: 'Za duge staze i maratonski trening',
      image: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg'
    },
    {
      name: 'Patike sa jastučićima',
      slug: 'jastucici',
      description: 'Maksimalna amortizacija i udobnost',
      image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg'
    }
  ]
};
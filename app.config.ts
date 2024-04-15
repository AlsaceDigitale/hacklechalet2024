export default defineAppConfig({
  docus: {
    title: 'Hack Le Chalet',
    description: 'Q2-Q3 2024 Deux jours d\'aventure 🌲 et de hacking 🤖 en Alsace 🥨',
    url: 'https://hacklechalet.com',
    image: 'https://www.hacklechalet.com/cover.jpg',
    socials: {
      twitter: 'AlsaceDigitale',
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: ['/pages'],
      fluid: true
    },
    footer: {
      credits: {
        icon: '©',
        text: 'Alsace Digitale 2024',
        href: 'https://www.alsacedigitale.org'
      }
    },
  }
})

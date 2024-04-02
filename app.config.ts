export default defineAppConfig({
  docus: {
    title: 'Hack Le Chalet',
    description: '28-30 juin 2024 - Two days of hacking, fun and discussion in Alsace 🥨',
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

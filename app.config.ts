export default defineAppConfig({
  docus: {
    title: 'Hack Le Chalet',
    description: '28-30 juin 2024 - Two days of hacking, fun and discussion in Alsace 🥨',
    url: 'https://hacklechalet.com',
    image: 'https://hacklechalet.com/cover.png',
    socials: {
      twitter: 'AlsaceDigitale',
    },
    aside: {
      level: 0,
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
      exclude: [],
      fluid: true
    },
    footer: {
      textLinks: [
        {
          text: 'Alsace Digitale',
          href: 'https://www.alsacedigitale.org',
          target: '_blank',
          rel: 'noopener'
        }
      ]  
    },
  }
})

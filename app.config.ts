export default defineAppConfig({
  docus: {
    title: 'Hack Le Chalet',
    description: 'Du 6 au 8 septembre 2024. Deux jours d\'aventure 🌲 et de hacking 🤖 en Alsace 🥨',
    url: 'https://hacklechalet.com',
    image: 'https://www.hacklechalet.com/hlc-poster@0.5x.jpg',
    socials: {
      twitter: 'AlsaceDigitale',
      youtube: 'AlsaceDigitale',
      ad: {
        label: 'Un évènement Alsace Digitale',
        href: 'https://www.alsacedigitale.org',
        icon: 'icon-park-twotone:rocket'
      }
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
      },
      textLinks: [
        {
          text: 'FAQ',
          href: '/pages/faq'
        }
      ]
    },
  }
})

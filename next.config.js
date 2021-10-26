/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['nl', 'fr'],
    defaultLocale: 'nl',
  },

  // TODO: check if we can have locale automatically handled
  async rewrites() {
    return [
      {
        source: '/fr/produits',
        destination: '/products',
        locale: false,
      },
      {
        source: '/nl/producten',
        destination: '/products',
        locale: false,
      },
      {
        source: '/fr/produits/:slug*',
        destination: '/products/:slug*',
        locale: false,
      },
      {
        source: '/nl/producten/:slug*',
        destination: '/products/:slug*',
        locale: false,
      },
    ]
  },
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains:  ["links.papareact.com"],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiY3J0ZC1sdW5hY3kiLCJhIjoiY2xiN3RmcXZ2MDVhcTN2bXQ3ZmN4cDRhaSJ9.2WApPEnrbI56-Ux895uvhQ',
  }
}

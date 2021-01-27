const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
});

const withOffline = require('next-offline');

module.exports = withOffline({});

importScripts('/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/065750440c29e46a7071.js",
    "revision": "4f2a70dd568f450c2716508f12b06a2f"
  },
  {
    "url": "/assets/3be849a9fadbabe57d0b.js",
    "revision": "865ce78c1f1367ca08d097859e30e0bb"
  },
  {
    "url": "/assets/667cdf5c876dec71501a.js",
    "revision": "e165c30853ffd9fe54a362f8693857cf"
  },
  {
    "url": "/assets/e263fad54ccd7cf46c85.js",
    "revision": "fbff4b9e0f7dd994b84688efcb104967"
  },
  {
    "url": "/assets/e2d65c6f8191a8d1d498.js",
    "revision": "4eeecf0f40fc152b58e17b99da062242"
  },
  {
    "url": "/assets/f3cd1764b722ddbb0020.js",
    "revision": "b16d5d74f7526434bf2e67609949e759"
  }
], {
  "cacheId": "cardversus",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/assets/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

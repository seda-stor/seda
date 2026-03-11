const cacheName = 'seda-cache-v1';
const assets = [
  '/seda/',
  '/seda/index.html',
  '/seda/manifest.json',
  '/seda/icon-192.png',
  '/seda/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});


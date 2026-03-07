const cacheName = 'seda-store-v1';
const assets = [
  '/seda/',
  '/seda/index.html',
  '/seda/manifest.json',
  '/seda/icon-192.png',
  '/seda/icon-512.png'
];

// تثبيت الـ Service Worker وتخزين الملفات
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// جلب البيانات من التخزين المؤقت عند انقطاع الشبكة
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

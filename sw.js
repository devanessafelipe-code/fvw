const CACHE_NAME = 'ebooks-cache-v1';

const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './Ebook/DM.pdf',
  './Ebook/IA.pdf',
  './Ebook/Perguntas_e_Respostas_Lista_IA.pdf',
  './imagens/ia.png',
  './imagens/dm.png',
  './style.css',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

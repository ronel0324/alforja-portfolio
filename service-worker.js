const CACHE_NAME = "alforja-portfolio-cache";

const urlsToCache = [
  "index.html",
  "styles.css",
  "mediaqueries.css",
  "script.js",
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all(
      urlsToCache.map(url => 
        fetch(url).then(response => { if (!response.ok) throw new Error(url+' -> '+response.status); return response; })
        )
      )
      .then(responses => caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)))
      .catch(error => console.error('Failed to cache resources:', error))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
}); 
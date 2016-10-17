// install cache iamcaleb 
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('iamcalebericv02').then(function(cache) {
return cache.addAll([
'./',
'./index.html',
'./sw.js',
'./manifest.json',
'./index.html?homescreen=1',
'./?homescreen=1',
'../css/style.css',
'../css/semantic.min.css',
'./components',
'../js/script.js',
'../js/typed.js',
'../js/semantic.min.js',
'../assets/images/home.jpg',
'../assets/images/me.jpg'
]);
})
);
});

// Check cache first before reloading assets
self.addEventListener('fetch', function(event) {
console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['iamcalebericv02'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

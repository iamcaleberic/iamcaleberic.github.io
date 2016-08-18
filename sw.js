// install cache iamcaleb 
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('iamcaleb').then(function(cache) {
return cache.addAll([
'./',
'./index.html',
'./index.html?homescreen=1',
'./?homescreen=1',
'../css/master.css',
'../css/semantic.min.css',
'../js/master.js',
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
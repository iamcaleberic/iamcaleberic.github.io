self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('airhorner').then(function(cache) {
return cache.addAll([
'/',
'index.html',
'index.html?homescreen=1',
'?homescreen=1',
'/css/master.css',
'/css/semantic.min.css',
'/js/master.js',
'/js/typed.js',
'/images/home.jpg'
]);
})
);
});


self.addEventListener('fetch', function(event) {
console.log(event.request.url);
});

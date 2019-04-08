

self.addEventListener('install', function(event){
    var urlsToCache = [
        '/',
        './index.html',
        './restaurant.html',
        './css/styles.css',
        './data/restaurants.json',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './img/Webp.net-resizeimage.jpg',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js'
    ];

    event.waitUntil(
        caches.open('review-cache-v1').then(function (cache) {
                return cache.addAll(urlsToCache);
                console.log('cach-open'); 
        })
    )
})

self.addEventListener('fetch', function(event){
    console.log('yooo! working')
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response) return response ;
                return fetch(event.request);
        })
    )
})
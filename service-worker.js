/* Create 'Neighborhood-map-v1' cache if there isn't one
 * or get 'Neighborhood-map-v1' cache object
 * and store it in currentCache property of service-worker
*/
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('Neighborhood-map-v1').then(cache => {
      self.currentCache = cache;
    })
  );
});

// Add event listener for 'fetch' events
self.addEventListener('fetch', (event) => {

  /* When a 'fetch' event occurs:
   *
   * 1. Take control of fetch response
   */
  event.respondWith(
    // Search if the response is stored in cache.
    caches.match(event.request).then(cacheResponse => {
      if (cacheResponse) {
        // If response is found in cache, send it to the browser
        return cacheResponse;
      } else {
        /* If response is not found in cache,
         * fetch it from the network
         * and then send it to the browser
         */
        return fetch(event.request);
      }
    })
  );

  /*
   * 2. If response is not saved in cache
   */
  caches.match(event.request).then(cacheResponse => {
    if (!cacheResponse) {
      // Fetch it again from the network and then save it in cache
      fetch(event.request).then(netResponse => {
        self.currentCache.put(event.request, netResponse);
      });
    }
  });
});

/*
Copyright 2015, 2019 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
const OFFLINE_VERSION = 1;
const CACHE_NAME = 'Short Task';
// Customize this with a different URL if needed.
const OFFLINE_URL = 'Short Task.html';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Setting {cache: 'reload'} in the new request will ensure that the response
    // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
    await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        // First, try to use the navigation preload response if it's supported.
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        // catch is only triggered if an exception is thrown, which is likely
        // due to a network error.
        // If fetch() returns a valid HTTP response with a response code in
        // the 4xx or 5xx range, the catch() will NOT be called.
        console.log('Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL);
        return cachedResponse;
      }
    })());
  }

  // If our if() condition is false, then this fetch handler won't intercept the
  // request. If there are any other fetch handlers registered, they will get a
  // chance to call event.respondWith(). If no fetch handlers call
  // event.respondWith(), the request will be handled by the browser as if there
  // were no service worker involvement.
});
document.getElementById("para1").innerHTML = "Let us start off the comparison with a short introduction.";
document.getElementById("para2").innerHTML = "Hybrid Applications are any web applications built using HTML, CSS and JavaScript, which is then wrapped inside of a native app with help from some special container platforms. It is a shorthand combination of elements with both web and native development approaches.";
document.getElementById("para3").innerHTML = "On this page, three such Hybrid Applications will be compared: PhoneGap, Flutter and React Native.";
document.getElementById("td1").innerHTML = "Developed by Adobe System in 2011, PhoneGap is a software development framework primarily used to develop mobile applications. It can produce apps for iOS, Android, BlackBerry and Windows Mobile OS. It only uses HTML, CSS, and Jscript for its languages. Today it is known as Apache Cordova";
document.getElementById("td2").innerHTML = "Flutter is an open-source mobile SDK used to build native Android and iOS applications. It has been around since 2015, released in 2018 and uses C, C++ and Dart languages. An example of a Flutter app would be the Xianyu app created by the Alibaba team, used by over 50 million people to date";
document.getElementById("td3").innerHTML = "An open-source mobile application framework created by Facebook and released in 2015. It utilizes JavaScript, Java, C++ and Python for its languages for developing Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP compatible apps";

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "38fea80fe598d84c5d2975e9f6c1e215",
"assets/AssetManifest.bin.json": "5b8628be4ced8848086f2f1075f98813",
"assets/AssetManifest.json": "4b4fed7fa803b8e0a5c4161bcf0c85b8",
"assets/assets/audio/casher.mp3": "c4d9885b80e4103fd5b493f0c90aa34e",
"assets/assets/audio/click.mp3": "e5a81d8e2f80b6ba280a6144eac1f3ce",
"assets/assets/audio/click2.wav": "c91db761881f46d1cf78e67271f095ec",
"assets/assets/audio/click3.wav": "622d510e6cb7fe7403c3e1b8e86bc1de",
"assets/assets/audio/click4.mp3": "cbd1fc2cb7c80e738d3c830811409e42",
"assets/assets/audio/currect.mp3": "5ad718a77a39515c556d52700069432d",
"assets/assets/audio/gamiover.mp3": "7bc5d64d4891e9a889ea742bb649d369",
"assets/assets/audio/getmony.mp3": "afa112736305128e0b7e82ac3e520c2c",
"assets/assets/audio/getreword.mp3": "1768de81fa3eef9da9ce4aedc029bc69",
"assets/assets/audio/h2andrer.mp3": "97e7e3568bdbc19c168af81b7138f660",
"assets/assets/audio/haddnow.wav": "c4315f17392c69084799cbc45ccfee12",
"assets/assets/audio/haddtime.mp3": "8e9b7d9b7ef2da144a14776b083881f2",
"assets/assets/audio/hcurrect.mp3": "9154a4d0d1af474451c19e85a3b80208",
"assets/assets/audio/islandclick.mp3": "224bd5f9967fb854d591f4b0fd830285",
"assets/assets/audio/newGame.mp3": "722b94346c985ace2f9f1ca6c8a6690d",
"assets/assets/audio/newisland.MP3": "c3cad7f7a29a503aee1d08f01554cc53",
"assets/assets/audio/openisland.mp3": "224bd5f9967fb854d591f4b0fd830285",
"assets/assets/audio/startgame.mp3": "42a386dddde9d14c607500303bd51cc0",
"assets/assets/audio/win.mp3": "1768de81fa3eef9da9ce4aedc029bc69",
"assets/assets/audio/wingame.mp3": "d26272bb4b108eddf9b21b8770b9c895",
"assets/assets/audio/wrong.mp3": "b9cfeca941103f11611101c7046c78de",
"assets/assets/doc/privacy.pdf": "e853b3c5c905fae871054da9484702df",
"assets/assets/img/applogo.png": "1a625504cca8cb2454f9f24e901d6eeb",
"assets/assets/img/background.png": "6c327331989c1d3a1cf7dce60a4ed356",
"assets/assets/img/background2.png": "1cf377fbc85f1a668643d79e2dc8720a",
"assets/assets/img/cpBG.png": "3c14f5ed9a41c2e4afc59ad2452eb905",
"assets/assets/img/dep.jpg": "3f97c149f97f809c8d55bc6e1c79d971",
"assets/assets/img/empty.png": "3ade730f3ecf6fa4f7cf3132c4b3a76b",
"assets/assets/img/facebook.png": "3d0ddc4485da120fdda9bd558bf99e0c",
"assets/assets/img/headerbgc.png": "5a83d40808825ee014152bcea19cac3b",
"assets/assets/img/instegram.png": "44b089609610443d8f93695b2afb7b92",
"assets/assets/img/logo.png": "2589163e7c3a01efd75f20e818614172",
"assets/assets/img/logo2.png": "4bf4732377c7445ed5f760a3b12dd678",
"assets/assets/img/pc1.png": "c020c6fd5db645abef7a28ccd1e60114",
"assets/assets/img/profile.png": "b17f563afb5568957649148a813841c1",
"assets/assets/img/uploadIcon.png": "91504a97c1557a3f22e5578f084d8d8e",
"assets/assets/img/whatsapp.png": "498250b5998f67b43d08ad928b772bb6",
"assets/assets/img/youtub.png": "acf68c38b8fb452fe033e36283b5829e",
"assets/assets/json/pay.json": "ae1464b80707185544536a28308f27ac",
"assets/assets/json_config/base_url_config.json": "350b9b29193c26bb0d063d5c39f0948c",
"assets/assets/json_config/firebase_config.json": "ad2af6fc02f20c14d77fda21486d212c",
"assets/assets/svg/quran.svg": "7dbb1631700d7f0febd308b3493419f5",
"assets/assets/svg/svg%2520-%2520Shortcut.lnk": "2827f4acbd210d70f50090a7b3eda5b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "55dcf67fa1ac7e919b675d03ff68bd27",
"assets/NOTICES": "408fd586b2a10e2284fd5e8ff8576b1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b6c1a554910909fba5288fd50a4dc2ca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88b18819da1fcfc2dc8a3b4126e5b204",
"/": "88b18819da1fcfc2dc8a3b4126e5b204",
"main.dart.js": "f52b2925b778503a5fe9ccbe303259dc",
"manifest.json": "e5d8afff4784eeaf6e648c77de0a9f79",
"version.json": "507e9f327b4daf764c11771e436ffc7f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

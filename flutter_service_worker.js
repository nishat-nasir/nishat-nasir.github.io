'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d06628454d454ff8f6685a57d12f2b28",
"assets/AssetManifest.json": "d2f8f2eebdf9b7b842a68e2ddf550723",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "6b78c7ec468eb0e13c6c5c4c39203986",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/lottie/147828-3d-design-system.json": "1a46779052388009ae15afeb3cd4d4b5",
"assets/assets/lottie/ambition.json": "bf0c0499264361bd42a33bab8785752f",
"assets/assets/lottie/unlock.json": "b2aa92181964b00df2314128ab2b3ce2",
"assets/assets/png/mehonot_logo_v4.png": "e3f6035be615c5480d6027ba207c43d9",
"assets/assets/svg/appstore.svg": "645a6b080314ca54073eaf35b0256c9d",
"assets/assets/svg/playstore.svg": "0a7ad526c17c063731ba3d3f722a656d",
"assets/assets/svg/url_qr.svg": "711b9128900d8e5363a18da744b6c2dc",
"assets/assets/video/ambition.mp4": "5e67b7bc870e9e3181c1a4d5958b0f06",
"assets/assets/video/unlock.mp4": "66abfa94b907e862bb5fd13549dad6e7",
"assets/FontManifest.json": "3010b615c42b6ccdc71bf807a1e61b0c",
"assets/fonts/MaterialIcons-Regular.otf": "41299a4e725d49bc2954f9c48719230f",
"assets/NOTICES": "5f4bc1ee594cc2348d07ae9d5f3e23b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "60114762957c6a50d2e0cd7d2c5b7b98",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "a3a25b95f46abee8978a5614ae458b8d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-icon-144x144.png": "dbfb95118828969c1798966e2fa9d499",
"icons/android-icon-192x192.png": "9e90d800e0a68b33e24c07cae42cff4b",
"icons/android-icon-36x36.png": "35c15e04b901916d2d541ea156e9f993",
"icons/android-icon-48x48.png": "7c70623e68b7579b88e824f6a1367c4d",
"icons/android-icon-72x72.png": "a0a25d79b29c7279f89264173f2b5dab",
"icons/android-icon-96x96.png": "9795f5ba320f7401f4f1e83e9aff8063",
"icons/apple-icon-114x114.png": "d0727f918a4f41e2d194372dbcde6749",
"icons/apple-icon-120x120.png": "35299e54ae2c0c7362ee2ed3f0de1422",
"icons/apple-icon-144x144.png": "dbfb95118828969c1798966e2fa9d499",
"icons/apple-icon-152x152.png": "7af1cc4ac4781661325cc15f8f46b879",
"icons/apple-icon-180x180.png": "4d368cfb5049f7fa9ab8de86825393a5",
"icons/apple-icon-57x57.png": "be37983b28202115f92742555091391c",
"icons/apple-icon-60x60.png": "52f3a8b7f8cdd0b607dd4a47a21c8c43",
"icons/apple-icon-72x72.png": "a0a25d79b29c7279f89264173f2b5dab",
"icons/apple-icon-76x76.png": "6fb24cb630a45f99dc0ea9045746b8e6",
"icons/apple-icon-precomposed.png": "4ffb2839af8e78d8762a93eb2c4fe78c",
"icons/apple-icon.png": "4ffb2839af8e78d8762a93eb2c4fe78c",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "a3a25b95f46abee8978a5614ae458b8d",
"icons/favicon-32x32.png": "100290f28dddc82dfccf8178bd15db8b",
"icons/favicon-96x96.png": "fc65df197c54c877dfcf7d609abd8efe",
"icons/favicon.ico": "7c544f44b34d54849a486d58d49a6222",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "f406236c48caa93ee5a0a9d6a757c298",
"icons/ms-icon-144x144.png": "3d8acb12db5e1d40d69c2ec62db55e2b",
"icons/ms-icon-150x150.png": "02e2e67d9babc83d6ab264c25f633626",
"icons/ms-icon-310x310.png": "cf38af1e3d8983ee0342eb24c3a29676",
"icons/ms-icon-70x70.png": "c0a147c44ee245e55ef66c561595c9e2",
"index.html": "353f2bef516acf5d62501389c7020a83",
"/": "353f2bef516acf5d62501389c7020a83",
"main.dart.js": "2930ba727bd113ac5708def923d970fa",
"manifest.json": "894c0120f774ad14d94d06fd50713342",
"version.json": "250bc6e1c69ae20e6bb73ca069055d73"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

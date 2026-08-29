// Minimal service worker — its only job is to make ORBITAL installable
// (the browser requires a registered service worker before it will offer
// "Add to Home Screen" / "Install app"). It doesn't cache or intercept
// anything, so the app always loads fresh from the network like before.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Intentionally not handled — falls through to normal network fetch.
});

// Helm minimal Service Worker
// - PWA install / share_target を有効にするために必要（キャッシュはしない）
// - 常にネットワーク優先。古いビルドを配ってしまう事故を防ぐ。
self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", () => { /* passthrough */ });

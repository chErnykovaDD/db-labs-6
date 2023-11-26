/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "806c32e1d1cfbaf303ce0d8ee7bdbd47"
  },
  {
    "url": "assets/css/0.styles.4c047c3c.css",
    "revision": "ebb19c125927a38df6790139037b78f6"
  },
  {
    "url": "assets/img/delete.85380062.png",
    "revision": "85380062c585594991d9e0ca61dcabdc"
  },
  {
    "url": "assets/img/delete.9cc9e589.png",
    "revision": "9cc9e589254f36be8457562c37b6def0"
  },
  {
    "url": "assets/img/get-all.e6807f8b.png",
    "revision": "e6807f8bb574a46bccec9d6bddc8861c"
  },
  {
    "url": "assets/img/get-all.e6bc2fd1.png",
    "revision": "e6bc2fd1e378daf499684dd7627f9b89"
  },
  {
    "url": "assets/img/get.518fcc70.png",
    "revision": "518fcc704ca567fafaa0598e85a38da1"
  },
  {
    "url": "assets/img/get.872dc6ab.png",
    "revision": "872dc6abc916d226d4aaf52f6e11fa08"
  },
  {
    "url": "assets/img/invalid-id.9a9d5f24.png",
    "revision": "9a9d5f2495c4a1c6777b56a7eecc2c7b"
  },
  {
    "url": "assets/img/not-string.3e71e299.png",
    "revision": "3e71e2995e0a10a05e57f54dff1751f5"
  },
  {
    "url": "assets/img/null.76424b7d.png",
    "revision": "76424b7d9ff4c599775ce77f36b608d7"
  },
  {
    "url": "assets/img/patch.43b36a13.png",
    "revision": "43b36a1392dd12c0f16cde597f757ce8"
  },
  {
    "url": "assets/img/patch.c3b94aa5.png",
    "revision": "c3b94aa5f60f55c16f79442c32b36b18"
  },
  {
    "url": "assets/img/post.a8a473db.png",
    "revision": "a8a473db390d1e84bacb4c3260ed19d7"
  },
  {
    "url": "assets/img/post.c73f3474.png",
    "revision": "c73f3474dfd6fe7ada9fc46ea5ec6669"
  },
  {
    "url": "assets/img/relationalSchema.3a2a4fde.png",
    "revision": "3a2a4fdeff9e9713d6425c71e25a45b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.d59e67b6.png",
    "revision": "d59e67b61e9398ce126162b77b8aa265"
  },
  {
    "url": "assets/js/1.47b6cb50.js",
    "revision": "d6c5a684ccc7d23b1bcd982e941b06e4"
  },
  {
    "url": "assets/js/10.cdcaaf66.js",
    "revision": "434dfbd2b81a1cd994c6e3ba4bcbdeaa"
  },
  {
    "url": "assets/js/13.010ed0e4.js",
    "revision": "69b3e69bfbe214d734722cfd8e235f4c"
  },
  {
    "url": "assets/js/14.73f0a200.js",
    "revision": "4bb9acec9271ebcdf48abd70098390ff"
  },
  {
    "url": "assets/js/15.9e1f0fc9.js",
    "revision": "010c84ceda56c84575d6e1088c6563d3"
  },
  {
    "url": "assets/js/16.1840d11c.js",
    "revision": "fbc388081c20dd0c300a0d6a439d0375"
  },
  {
    "url": "assets/js/17.d806c96d.js",
    "revision": "ee1357e8e808b05feb8e488e0b2902ae"
  },
  {
    "url": "assets/js/18.02ce786a.js",
    "revision": "58c385d2bb99c37bc4b8930ba6eed0b9"
  },
  {
    "url": "assets/js/19.763bcea3.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.bfd37d04.js",
    "revision": "d51cf48571db56fc382e44ceb2af828d"
  },
  {
    "url": "assets/js/20.02775bc8.js",
    "revision": "c7e01ebdafa658451f47bf82817b76b2"
  },
  {
    "url": "assets/js/21.a7082210.js",
    "revision": "4171ccd210fe54818e3afe7dc5c94f39"
  },
  {
    "url": "assets/js/22.c4804eae.js",
    "revision": "670a8531dba75d2f13066ef07a16915f"
  },
  {
    "url": "assets/js/23.a443e5b0.js",
    "revision": "cf2741e2a90ed09c178bcd4f6f96bb08"
  },
  {
    "url": "assets/js/24.344101b2.js",
    "revision": "49d81031cf28220cb574a52550899df9"
  },
  {
    "url": "assets/js/25.a6242c93.js",
    "revision": "bc520f702d5f27f4c7f74437bf136fed"
  },
  {
    "url": "assets/js/26.f86e80ed.js",
    "revision": "1d08b73f746bcc2251dcaa5c679b57e6"
  },
  {
    "url": "assets/js/27.c3611601.js",
    "revision": "bffa03b8f41667f74013e7537553d445"
  },
  {
    "url": "assets/js/28.6cab3764.js",
    "revision": "18197b72efeab5eb0687732c6e5128d4"
  },
  {
    "url": "assets/js/29.b841f861.js",
    "revision": "a57594b0fa3efb1084beb32d98b7bb58"
  },
  {
    "url": "assets/js/3.55c33bba.js",
    "revision": "10f31f23ef8a9518a159d0af12392fb4"
  },
  {
    "url": "assets/js/30.2aaa2abb.js",
    "revision": "51400ae22cf58cecdedaf8ef092c4418"
  },
  {
    "url": "assets/js/31.a74c64fb.js",
    "revision": "27b608adfc917dd4a06379511c15eb52"
  },
  {
    "url": "assets/js/32.8f455602.js",
    "revision": "98d54d4b0b79c18d3f11311c3a984e71"
  },
  {
    "url": "assets/js/33.d05d9162.js",
    "revision": "2f5923f5c7c12c3def5796ce6bf96416"
  },
  {
    "url": "assets/js/34.b8d0fac8.js",
    "revision": "92dd1ca113f97c9e3a4718689584be75"
  },
  {
    "url": "assets/js/35.fb88119a.js",
    "revision": "53eba96e2a9ffa4d7dd5c2dc2f576c95"
  },
  {
    "url": "assets/js/36.20660154.js",
    "revision": "662afeb50262d879414e8735f300d45d"
  },
  {
    "url": "assets/js/37.b421f0ee.js",
    "revision": "c91c987f0d2dfc8e159552d5ec6cc86f"
  },
  {
    "url": "assets/js/38.ed35d6da.js",
    "revision": "b6afb9f8ebe88bd19c897fb3201ac61c"
  },
  {
    "url": "assets/js/39.5973bb9d.js",
    "revision": "34d7a744acb255dd1e108b66dbef1556"
  },
  {
    "url": "assets/js/4.7b6c0a79.js",
    "revision": "97a909c8a911c7281b7b38bde6b3f624"
  },
  {
    "url": "assets/js/41.8467d1f8.js",
    "revision": "1d9ab7b4fab02a0cb16175f203653fb4"
  },
  {
    "url": "assets/js/5.570ff3b7.js",
    "revision": "a5874af36e95b7f50d5161a1b3d23767"
  },
  {
    "url": "assets/js/6.e978efcb.js",
    "revision": "f12b4c21a8dea42180413e1adff60b95"
  },
  {
    "url": "assets/js/7.b3bb6294.js",
    "revision": "365a5329d70b74d127d79f80a9506801"
  },
  {
    "url": "assets/js/8.70a15a81.js",
    "revision": "3b4f1e39bc2f58c80472afaab704201f"
  },
  {
    "url": "assets/js/9.ae35fd67.js",
    "revision": "bdd4231a7ce58219fb7449519a874840"
  },
  {
    "url": "assets/js/app.3b621c3f.js",
    "revision": "3afe01b6c87d891c5fef05c93f1d49a1"
  },
  {
    "url": "assets/js/vendors~docsearch.8bdb2884.js",
    "revision": "1dc7282dc3e2408f5e5762c4ebaefb05"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ffef52c4b71591cda8b8ec8fd3112aab"
  },
  {
    "url": "design/index.html",
    "revision": "408e9907c855dfa2d862dc71c1de50b8"
  },
  {
    "url": "index.html",
    "revision": "2aaeee5dc2955ad2057574d8926cf15a"
  },
  {
    "url": "intro/index.html",
    "revision": "75344b0329c6dc749a5ed9593ff58589"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "e692b0b603bf8792a7baefeaf7b18ad5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2191544371a189493ca170cc4a389db0"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "90b52cfe7eebdcc625545352ea8a4195"
  },
  {
    "url": "software/index.html",
    "revision": "dc32b7264d05114237eed002f93431aa"
  },
  {
    "url": "test/index.html",
    "revision": "8a8c830837ec7b07d0130f97d54d52f3"
  },
  {
    "url": "use cases/index.html",
    "revision": "4d1da6151ffcebd5bb0e2afcaed9958f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

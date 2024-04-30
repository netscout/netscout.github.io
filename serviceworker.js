var DisconnectResponse;function initWebappServiceWorker(){const e="@relprefix@".replace("---","").replace(/^\//,""),o=-1===e.indexOf("/"),t="makecode;"+e+";@pxtRelId@",i=["@targetUrl@/"+e,"@simUrl@","/semantic.js","/main.js","/pxtapp.js","/typescript.js","/marked/marked.min.js","/highlight.js/highlight.pack.js","/jquery.js","/pxtlib.js","/pxtcompiler.js","/pxtpy.js","/pxteditor.js","/pxtsim.js","/pxtembed.js","/pxtworker.js","/pxtweb.js","/blockly.css","/semantic.css","/rtlsemantic.css","/blockly/media/sprites.png","/blockly/media/click.mp3","/blockly/media/disconnect.wav","/blockly/media/delete.mp3","/vs/loader.js","/vs/base/worker/workerMain.js","/vs/basic-languages/bat/bat.js","/vs/basic-languages/cpp/cpp.js","/vs/basic-languages/python/python.js","/vs/basic-languages/markdown/markdown.js","/vs/editor/editor.main.css","/vs/editor/editor.main.js","/vs/editor/editor.main.nls.js","/vs/language/json/jsonMode.js","/vs/language/json/jsonWorker.js","/smoothie/smoothie_compressed.js","/images/Bars_black.gif","/gifjs/gif.js","/ai.2.min.js","/target.js","/music-editor/apple.png","/music-editor/burger.png","/music-editor/cake.png","/music-editor/car.png","/music-editor/cat.png","/music-editor/cherry.png","/music-editor/clam.png","/music-editor/computer.png","/music-editor/crab.png","/music-editor/dog.png","/music-editor/duck.png","/music-editor/egg.png","/music-editor/explosion.png","/music-editor/fish.png","/music-editor/ice-cream.png","/music-editor/lemon.png","/music-editor/snake.png","/music-editor/star.png","/music-editor/strawberry.png","/music-editor/taco.png","/music-editor/bass-clef.svg","/music-editor/treble-clef.svg","/fieldeditors.js","/editor.js","","@targetUrl@/monacoworker.js","@targetUrl@/worker.js"],n=a(""),c=a("%2Fdocs%2Fstatic%2Fproviders%2Fgithub-mark.png;%2Fdocs%2Fstatic%2Fproviders%2Fmicrosoft-logo.svg;%2Fdocs%2Fstatic%2Fproviders%2Fgoogle-logo.svg;%2Fdocs%2Fstatic%2Fproviders%2Fclever-logo.png;%2Fdocs%2Fstatic%2Flogo.portrait.white.svg;%2Fdocs%2Fstatic%2Flogo.square.white.svg;%2Fdocs%2Fstatic%2Flogo.portrait.black.svg;%2Fdocs%2Fstatic%2Ficons%2Fapple-touch-icon.png;%2Fdocs%2Fstatic%2FMicrosoft_logo_rgb_W-white_D-square.png;%2Fdocs%2Fstatic%2FMicrosoft_logo_rgb_W-white_D.png;%2Fdocs%2Fstatic%2Fherogallery%2Fhero-banner.png;%2Fdocs%2Fstatic%2Fdownload%2Ftransfer.png;%2Fdocs%2Fstatic%2Fdownload%2Fconnect-microbit.gif;%2Fdocs%2Fstatic%2Fdownload%2Fselecting-microbit.gif;%2Fdocs%2Fstatic%2Fdownload%2Fsuccessfully-paired.png;%2Fdocs%2Fstatic%2Fdownload%2Fincompatible.png;%2Fdocs%2Fstatic%2Fdownload%2Fdevice-forgotten.gif;%2Fdocs%2Fstatic%2Fdownload%2Fbrowser-unpair-image.gif;%2Fdocs%2Fstatic%2Fwinapp.PNG;%2Fdocs%2Fstatic%2Fprofile%2Fmicrobit-cloud.png"),s=r(i.concat(c).map((e=>e.trim())).filter((e=>!!e&&0!==e.indexOf("@"))));let l=!1;function r(e){const o=[];for(const t of e)-1===o.indexOf(t)&&o.push(t);return o}function a(e){const o=String.fromCharCode(64)+"cdnUrl"+String.fromCharCode(64);return r(e.split(";").map((e=>decodeURIComponent(e).replace(o,"@cdnUrl@").trim())))}self.addEventListener("install",(e=>{o?(l=!0,console.log("Installing service worker..."),e.waitUntil(caches.open(t).then((e=>(console.log("Opened cache"),console.log("Caching:\n"+s.join("\n")),e.addAll(s).then((()=>e))))).then((e=>e.addAll(n).catch((e=>{console.log("Failed to cache hexfiles")})))).then((()=>self.skipWaiting())))):console.log("Skipping service worker install for unnamed endpoint")})),self.addEventListener("activate",(i=>{o?(console.log("Activating service worker..."),i.waitUntil(caches.keys().then((o=>{const i=o.filter((o=>{const i=function(e){const o=e.split(";");return 3!==o.length?null:o[1]}(o);return null===i||i===e&&o!==t}));return Promise.all(i.map((e=>caches.delete(e))))})).then((()=>l?(l=!1,function(){const o=self;return o.clients.claim().then((()=>o.clients.matchAll())).then((o=>{o.forEach((o=>o.postMessage({type:"serviceworker",state:"activated",ref:e})))}))}()):Promise.resolve())))):console.log("Skipping service worker activate for unnamed endpoint")})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((o=>o||fetch(e.request))))}))}function initWebUSB(){let e,o,t,i,n=0,c="idle";async function s(e){(await self.clients.matchAll()).forEach((o=>o.postMessage(e)))}function l(){let o;const i=new Promise((o=>{console.log("Waiting for disconnect "+e),t=o,s({type:"serviceworker",action:"packet-io-lock-disconnect",lock:e})})),n=new Promise((t=>{o=setTimeout((()=>{console.log("Timed-out disconnect request "+e),t(DisconnectResponse.TimedOut)}),5e3)}));return Promise.race([i,n]).then((e=>(clearTimeout(o),t=void 0,e)))}function r(e){return new Promise((o=>{setTimeout(o,e)}))}self.addEventListener("message",(async a=>{const d=a.data;if("serviceworkerclient"===(null==d?void 0:d.type))if("request-packet-io-lock"===d.action){if(e||(e=await function(){if(e)return Promise.resolve(e);let o;const t=new Promise((e=>{console.log("check for existing lock"),i=e,s({type:"serviceworker",action:"packet-io-status"})})),n=new Promise((e=>{o=setTimeout((()=>{console.log("Timed-out check for existing lock"),e(void 0)}),1e3)}));return Promise.race([t,n]).then((e=>(clearTimeout(o),i=void 0,e)))}()),"granting"===c)return void await s({type:"serviceworker",action:"packet-io-lock-granted",granted:!1,lock:d.lock});console.log("Received lock request "+d.lock);const t=Date.now()-n;if(o=d.lock,t<4e3&&(c="waiting",console.log("Waiting to grant lock request "+d.lock),await r(4e3-t)),o!==d.lock)return console.log("Rejecting old lock request "+d.lock),void await s({type:"serviceworker",action:"packet-io-lock-granted",granted:!1,lock:d.lock});if(c="granting",e){let e;do{console.log("Sending disconnect request "+d.lock),e=await l(),e===DisconnectResponse.Waiting&&(console.log("Waiting on disconnect request "+d.lock),await r(1e3))}while(e===DisconnectResponse.Waiting)}console.log("Granted lock request "+d.lock),e=d.lock,await s({type:"serviceworker",action:"packet-io-lock-granted",granted:!0,lock:d.lock}),n=Date.now(),c="idle"}else"release-packet-io-lock"===d.action?(console.log("Received disconnect for "+e),e=void 0,t&&t(DisconnectResponse.Disconnected)):"packet-io-lock-disconnect"===d.action?(console.log("Received disconnect response for "+e),d.didDisconnect&&(e=void 0),t&&t(d.didDisconnect?DisconnectResponse.Disconnected:DisconnectResponse.Waiting)):"packet-io-supported"===d.action?await s({type:"serviceworker",action:"packet-io-supported",supported:!0}):"packet-io-status"===d.action&&d.hasLock&&i&&i(d.lock)}))}!function(e){e[e.Disconnected=0]="Disconnected",e[e.Waiting=1]="Waiting",e[e.TimedOut=2]="TimedOut"}(DisconnectResponse||(DisconnectResponse={})),initWebappServiceWorker(),initWebUSB();
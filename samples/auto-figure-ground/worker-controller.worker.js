var a2_0x2275=["isRunning","^([^ ]+( +[^ ]+)+)+[^ ]}","value","started","start","init","parse","exception","worker","log","next","Process","process","console","Controller","serializeProcess","deserialize","initialized","__exportStar","exports","data","path","isFinished","then","table","onCancel","context","status","info","canceling","__awaiter","bind","object","warn","onUpdated","apply","DEFAULT_SLEEP","CANCEL_SLEEP","postMessage","minimumStep","onStatusChanged","__createBinding","className","worker-controller.worker.js","reset","onPostMessage","stop","ProcessBase","create","serializeStatus","defineProperty",'return /" + this + "/',"progress","__proto__","update","canceled","default","Runner",'{}.constructor("return this")( )',"call","__esModule","finished","process.js","DEFAULT_MINIMUM_STEP","_listener","length","sleep","constructor","addEventListener","workerName","getListener","throw","message","getOnUpdateCallback","setProcess","stringify","prototype","done","error","return this"];!function(t,e){var n=function(e){for(;--e;)t.push(t.shift())};!function(){var t={data:{key:"cookie",value:"timeout"},setCookie:function(t,e,n,i){i=i||{};for(var r=e+"="+n,o=0,a=t.length;o<a;o++){var s=t[o];r+="; "+s;var u=t[s];t.push(u),a=t.length,!0!==u&&(r+="="+u)}i.cookie=r},removeCookie:function(){return"dev"},getCookie:function(t,e){var i,r=(t=t||function(t){return t})(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[]\/+^])/g,"$1")+"=([^;]*)"));return i=241,n(++i),r?decodeURIComponent(r[1]):void 0}};t.updateCookie=function(){return new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}").test(t.removeCookie.toString())};var e=t.updateCookie();e?e?t.getCookie(null,"counter"):t.removeCookie():t.setCookie(["*"],"counter",1)}()}(a2_0x2275);var a2_0x4de4=function(t,e){return a2_0x2275[t-=402]},a2_0x55877b=function(){var t=!0;return function(e,n){var i=t?function(){var t=a2_0x4de4;if(n){var i=n[t(436)](e,arguments);return n=null,i}}:function(){};return t=!1,i}}(),a2_0x5671a0=a2_0x55877b(this,(function(){var t=function(){var e=a2_0x4de4;return!t[e(468)](e(452))().constructor(e(402)).test(a2_0x5671a0)};return t()}));a2_0x5671a0();var a2_0x18d46e=function(){var t=!0;return function(e,n){var i=t?function(){if(n){var t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,i}}(),a2_0x55620f=a2_0x18d46e(this,(function(){var t,e=a2_0x4de4;try{t=Function("return (function() "+e(459)+");")()}catch(e){t=window}for(var n=t[e(414)]=t[e(414)]||{},i=[e(410),e(434),e(429),e(479),e(408),e(425),"trace"],r=0;r<i[e(466)];r++){var o=a2_0x18d46e[e(468)][e(477)][e(432)](a2_0x18d46e),a=i[r],s=n[a]||o;o[e(454)]=a2_0x18d46e.bind(a2_0x18d46e),o.toString=s.toString[e(432)](s),n[a]=o}}));a2_0x55620f(),(()=>{"use strict";var t={58594:(t,e,n)=>{var i=a2_0x4de4;Object[i(451)](e,i(461),{value:!0}),e[i(415)]=void 0;const r=n(29784);class o{constructor(t,e){var n,o,a,s,u=i;this[u(465)]=t,this[u(409)]=new Worker(null!==(n=null==e?void 0:e[u(470)])&&void 0!==n?n:u(444)),this.worker[u(469)](u(473),(t=>{var e=u;this[e(471)]()(r[e(417)](t[e(421)]))})),this[u(409)][u(439)]([u(406),null!==(o=null==e?void 0:e[u(422)])&&void 0!==o?o:u(463),null!==(a=null==e?void 0:e[u(443)])&&void 0!==a?a:u(412),JSON[u(476)](null!==(s=null==e?void 0:e[u(427)])&&void 0!==s?s:{})])}[i(471)](){return this[i(465)]}[i(445)](t){var e=i;this[e(409)][e(439)]([e(445),JSON[e(476)](null!=t?t:{})])}[i(405)](){var t=i;this[t(409)][t(439)](["start"])}[i(447)](){var t=i;this[t(471)]()({status:t(430)}),this[t(409)][t(439)]([t(447)])}}e[i(415)]=o},938022:function(t,e,n){var i=a2_0x4de4,r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(r,o){var a=a2_0x4de4;function s(t){var e=a2_0x4de4;try{c(i[e(411)](t))}catch(t){o(t)}}function u(t){var e=a2_0x4de4;try{c(i[e(472)](t))}catch(t){o(t)}}function c(t){var e,i=a2_0x4de4;t[i(478)]?r(t[i(403)]):(e=t[i(403)],e instanceof n?e:new n((function(t){t(e)}))).then(s,u)}c((i=i[a(436)](t,e||[]))[a(411)]())}))};Object[i(451)](e,"__esModule",{value:!0}),e.ProcessBase=void 0;const o=n(968552);class a{[i(406)](t){return r(this,void 0,void 0,(function*(){}))}get sleep(){return o.DEFAULT_SLEEP}get[i(440)](){return o[i(464)]}}e.ProcessBase=a},930139:function(t,e,n){var i=a2_0x4de4,r=this&&this[i(431)]||function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){var e=a2_0x4de4;try{u(i[e(411)](t))}catch(t){o(t)}}function s(t){var e=a2_0x4de4;try{u(i[e(472)](t))}catch(t){o(t)}}function u(t){var e,i=a2_0x4de4;t.done?r(t[i(403)]):(e=t[i(403)],e instanceof n?e:new n((function(t){t(e)})))[i(424)](a,s)}u((i=i[a2_0x4de4(436)](t,e||[])).next())}))};Object.defineProperty(e,i(461),{value:!0}),e[i(458)]=void 0;const o=n(29784),a=n(968552);class s{constructor(t){this.onPostMessage=t,this.onCancel=!1,this.isRunning=!1}[i(475)](t){this[i(413)]=t}[i(474)](){var t=i;return()=>this[t(435)]()}[i(435)](){return r(this,void 0,void 0,(function*(){var t=a2_0x4de4;this[t(413)]&&this.onPostMessage(yield o[t(416)](this.process))}))}[i(441)](t){return r(this,void 0,void 0,(function*(){var e=a2_0x4de4;this[e(446)](o[e(450)](t))}))}[i(467)](t){return r(this,void 0,void 0,(function*(){return new Promise((e=>setTimeout(e,t)))}))}reset(t){return r(this,void 0,void 0,(function*(){var e=a2_0x4de4;if(!this[e(426)]&&this[e(413)]){for(this[e(426)]=!0,yield this[e(441)](e(430));this[e(481)];)yield this.sleep(a[e(438)]);yield this[e(413)].reset(t),this[e(426)]=!1,yield this[e(435)](),yield this[e(441)](e(418))}}))}[i(405)](){return r(this,void 0,void 0,(function*(){var t=a2_0x4de4;if(this.isRunning||this[t(426)]||!this[t(413)])return;this[t(481)]=!0,yield this[t(441)](t(404));let e=this.process.progress;for(;!this[t(413)][t(423)]&&!this[t(426)];)yield this[t(413)].step(),yield this[t(467)](this[t(413)].sleep),this[t(413)][t(453)]>e+this[t(413)][t(440)]&&(e=this[t(413)][t(453)],yield this[t(435)]());yield this[t(435)](),this.process[t(423)]?yield this[t(441)](t(462)):yield this[t(441)](t(456)),this[t(426)]=!1,this.isRunning=!1}))}stop(){return r(this,void 0,void 0,(function*(){var t=a2_0x4de4;!this[t(426)]&&this[t(481)]&&this[t(413)]&&(this[t(426)]=!0)}))}}e[i(458)]=s},406081:function(t,e){var n=a2_0x4de4,i=this&&this[n(431)]||function(t,e,n,i){return new(n||(n=Promise))((function(r,o){var a=a2_0x4de4;function s(t){var e=a2_0x4de4;try{c(i[e(411)](t))}catch(t){o(t)}}function u(t){var e=a2_0x4de4;try{c(i[e(472)](t))}catch(t){o(t)}}function c(t){var e,i=a2_0x4de4;t[i(478)]?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)})))[i(424)](s,u)}c((i=i[a(436)](t,e||[]))[a(411)]())}))};Object.defineProperty(e,n(461),{value:!0}),e[n(417)]=e[n(450)]=e[n(416)]=void 0;e[n(416)]=t=>i(void 0,void 0,void 0,(function*(){var e=n;return JSON[e(476)]({type:e(455),data:yield t.getObject()})}));e[n(450)]=t=>JSON[n(476)]({type:n(428),data:{status:t}});e[n(417)]=t=>{var e=n;const i=JSON[e(407)](t);return i.type===e(428)?i[e(421)]:i.data}},29784:function(t,e,n){var i=a2_0x4de4,r=this&&this[i(442)]||(Object[i(449)]?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this[i(419)]||function(t,e){var n=i;for(var o in t)o===n(457)||Object.prototype.hasOwnProperty[n(460)](e,o)||r(e,t,o)};Object[i(451)](e,i(461),{value:!0}),o(n(406081),e)},561718:function(t,e,n){var i=a2_0x4de4,r=this&&this[i(431)]||function(t,e,n,i){return new(n||(n=Promise))((function(r,o){var a=a2_0x4de4;function s(t){var e=a2_0x4de4;try{c(i[e(411)](t))}catch(t){o(t)}}function u(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e,i=a2_0x4de4;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)})))[i(424)](s,u)}c((i=i[a(436)](t,e||[]))[a(411)]())}))};Object.defineProperty(e,i(461),{value:!0});const o=n(780545);let a;self.addEventListener(i(473),(t=>r(void 0,void 0,void 0,(function*(){var e,r,s,u=i;switch(t[u(421)][0]){case"init":{importScripts(t.data[1]),a=new(o[u(458)])((t=>{self[u(439)](t)}));const i=JSON[u(407)](null!==(e=t[u(421)][3])&&void 0!==e?e:{}),s=new(n.g[null!==(r=t[u(421)][2])&&void 0!==r?r:u(412)])(a.getOnUpdateCallback(),i);yield s[u(406)](i),a[u(475)](s),yield a[u(445)](void 0);break}case"reset":a&&(yield a[u(445)](JSON[u(407)](null!==(s=t[u(421)][1])&&void 0!==s?s:{})));break;case"start":a&&(yield a[u(405)]());break;case"stop":a&&(yield a[u(447)]())}}))))},968552:(t,e)=>{var n=a2_0x4de4;Object[n(451)](e,n(461),{value:!0}),e[n(464)]=e[n(437)]=e[n(438)]=void 0,e[n(438)]=100,e[n(437)]=10,e.DEFAULT_MINIMUM_STEP=.01},780545:(t,e,n)=>{var i=a2_0x4de4;Object[i(451)](e,"__esModule",{value:!0}),e[i(458)]=e.Controller=e[i(448)]=void 0;var r=n(938022);Object[i(451)](e,"ProcessBase",{enumerable:!0,get:function(){return r[i(448)]}});var o=n(58594);Object[i(451)](e,i(415),{enumerable:!0,get:function(){return o[i(415)]}});var a=n(930139);Object[i(451)](e,i(458),{enumerable:!0,get:function(){return a[i(458)]}})}},e={};function n(i){var r=a2_0x4de4;if(e[i])return e[i][r(420)];var o=e[i]={exports:{}};return t[i][r(460)](o.exports,o,o[r(420)],n),o[r(420)]}n.g=function(){var t=a2_0x4de4;if(typeof globalThis===t(433))return globalThis;try{return this||new Function(t(480))()}catch(e){if(typeof window===t(433))return window}}(),n(561718)})();
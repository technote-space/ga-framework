/*! For license information please see process.js.LICENSE.txt */
!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=6175)}({101:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_MINIMUM_STEP=t.DEFAULT_SLEEP=t.CANCEL_SLEEP=void 0,t.CANCEL_SLEEP=100,t.DEFAULT_SLEEP=10,t.DEFAULT_MINIMUM_STEP=.01},102:function(e,t,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),s=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||t.hasOwnProperty(i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),s(i(175),t)},172:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(173);Object.defineProperty(t,"ProcessBase",{enumerable:!0,get:function(){return n.ProcessBase}});var s=i(174);Object.defineProperty(t,"Controller",{enumerable:!0,get:function(){return s.Controller}});var r=i(176);Object.defineProperty(t,"Runner",{enumerable:!0,get:function(){return r.Runner}})},173:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(s,r){function o(e){try{a(n.next(e))}catch(e){r(e)}}function u(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,u)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ProcessBase=void 0;const s=i(101);t.ProcessBase=class{init(e){return n(this,void 0,void 0,(function*(){}))}get sleep(){return s.DEFAULT_SLEEP}get minimumStep(){return s.DEFAULT_MINIMUM_STEP}}},174:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;const n=i(102);t.Controller=class{constructor(e,t){var i,s,r,o;this._listener=e,this.worker=new Worker(null!==(i=null==t?void 0:t.workerName)&&void 0!==i?i:"worker-controller.worker.js"),this.worker.addEventListener("message",e=>{this.getListener()(n.deserialize(e.data))}),this.worker.postMessage(["init",null!==(s=null==t?void 0:t.path)&&void 0!==s?s:"process.js",null!==(r=null==t?void 0:t.className)&&void 0!==r?r:"Process",JSON.stringify(null!==(o=null==t?void 0:t.context)&&void 0!==o?o:{})])}getListener(){return this._listener}reset(e){this.worker.postMessage(["reset",JSON.stringify(null!=e?e:{})])}start(){this.worker.postMessage(["start"])}stop(){this.getListener()({status:"canceling"}),this.worker.postMessage(["stop"])}}},175:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(s,r){function o(e){try{a(n.next(e))}catch(e){r(e)}}function u(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,u)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deserialize=t.serializeStatus=t.serializeProcess=void 0,t.serializeProcess=e=>n(void 0,void 0,void 0,(function*(){return JSON.stringify({type:"update",data:yield e.getObject()})})),t.serializeStatus=e=>JSON.stringify({type:"status",data:{status:e}}),t.deserialize=e=>{const t=JSON.parse(e);return t.type,t.data}},176:function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(s,r){function o(e){try{a(n.next(e))}catch(e){r(e)}}function u(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,u)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Runner=void 0;const s=i(102),r=i(101);t.Runner=class{constructor(e){this.onPostMessage=e,this.onCancel=!1,this.isRunning=!1}setProcess(e){this.process=e}getOnUpdateCallback(){return()=>this.onUpdated()}onUpdated(){return n(this,void 0,void 0,(function*(){this.process&&this.onPostMessage(yield s.serializeProcess(this.process))}))}onStatusChanged(e){return n(this,void 0,void 0,(function*(){this.onPostMessage(s.serializeStatus(e))}))}sleep(e){return n(this,void 0,void 0,(function*(){return new Promise(t=>setTimeout(t,e))}))}reset(e){return n(this,void 0,void 0,(function*(){if(!this.onCancel&&this.process){for(this.onCancel=!0,yield this.onStatusChanged("canceling");this.isRunning;)yield this.sleep(r.CANCEL_SLEEP);yield this.process.reset(e),this.onCancel=!1,yield this.onUpdated(),yield this.onStatusChanged("initialized")}}))}start(){return n(this,void 0,void 0,(function*(){if(this.isRunning||this.onCancel||!this.process)return;this.isRunning=!0,yield this.onStatusChanged("started");let e=this.process.progress;for(;!this.process.isFinished&&!this.onCancel;)yield this.process.step(),yield this.sleep(this.process.sleep),this.process.progress>e+this.process.minimumStep&&(e=this.process.progress,yield this.onUpdated());yield this.onUpdated(),this.process.isFinished?yield this.onStatusChanged("finished"):yield this.onStatusChanged("canceled"),this.onCancel=!1,this.isRunning=!1}))}stop(){return n(this,void 0,void 0,(function*(){!this.onCancel&&this.isRunning&&this.process&&(this.onCancel=!0)}))}}},6175:function(e,t,i){"use strict";(function(e){var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(s,r){function o(e){try{a(n.next(e))}catch(e){r(e)}}function u(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,u)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const s=i(172);e.Process=class extends s.ProcessBase{constructor(t,i){var n,s,r;super(),this.callback=t,importScripts(null!==(n=i.path)&&void 0!==n?n:"algorithm.js"),this.algorithm=new e[null!==(s=i.className)&&void 0!==s?s:"GeneticAlgorithm"](t,null!==(r=i.data)&&void 0!==r?r:void 0),"sleep"in i&&void 0!==i.sleep&&null!==i.sleep&&(this._sleep=Number(i.sleep)),"minimumStep"in i&&void 0!==i.minimumStep&&null!==i.minimumStep&&(this._minimumStep=Number(i.minimumStep))}init(e){var t;return n(this,void 0,void 0,(function*(){yield this.algorithm.init(null!==(t=e.data)&&void 0!==t?t:void 0)}))}get isFinished(){return this.algorithm.hasReached}get sleep(){return void 0!==this._sleep?this._sleep:super.sleep}get minimumStep(){return void 0!==this._minimumStep?this._minimumStep:super.minimumStep}get progress(){return this.algorithm.progress}reset(t){var i,s;return n(this,void 0,void 0,(function*(){return t&&(this.algorithm=new e[null!==(i=t.className)&&void 0!==i?i:"GeneticAlgorithm"](this.callback,null!==(s=t.data)&&void 0!==s?s:void 0),yield this.init(t)),this.algorithm.reset()}))}step(){return n(this,void 0,void 0,(function*(){return this.algorithm.step()}))}getObject(){return this.algorithm.getObject()}}}).call(this,i(63))},63:function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i}});
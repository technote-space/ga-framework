/*! For license information please see worker-controller.worker.js.LICENSE.txt */
(()=>{"use strict";var e={58594:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;const s=n(29784);t.Controller=class{constructor(e,t){var n,i,r,o;this._listener=e,this.worker=new Worker(null!==(n=null==t?void 0:t.workerName)&&void 0!==n?n:"worker-controller.worker.js"),this.worker.addEventListener("message",(e=>{this.getListener()((0,s.deserialize)(e.data))})),this.worker.postMessage(["init",null!==(i=null==t?void 0:t.path)&&void 0!==i?i:"process.js",null!==(r=null==t?void 0:t.className)&&void 0!==r?r:"Process",JSON.stringify(null!==(o=null==t?void 0:t.context)&&void 0!==o?o:{})])}getListener(){return this._listener}reset(e){this.worker.postMessage(["reset",JSON.stringify(null!=e?e:{})])}start(){this.worker.postMessage(["start"])}stop(){this.getListener()({status:"canceling"}),this.worker.postMessage(["stop"])}}},938022:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ProcessBase=void 0;const i=n(968552);t.ProcessBase=class{init(e){return s(this,void 0,void 0,(function*(){}))}get sleep(){return i.DEFAULT_SLEEP}get minimumStep(){return i.DEFAULT_MINIMUM_STEP}}},930139:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Runner=void 0;const i=n(29784),r=n(968552);t.Runner=class{constructor(e){this.onPostMessage=e,this.onCancel=!1,this.isRunning=!1}setProcess(e){this.process=e}getOnUpdateCallback(){return()=>this.onUpdated()}onUpdated(){return s(this,void 0,void 0,(function*(){this.process&&this.onPostMessage(yield(0,i.serializeProcess)(this.process))}))}onStatusChanged(e){return s(this,void 0,void 0,(function*(){this.onPostMessage((0,i.serializeStatus)(e))}))}sleep(e){return s(this,void 0,void 0,(function*(){return new Promise((t=>setTimeout(t,e)))}))}reset(e){return s(this,void 0,void 0,(function*(){if(!this.onCancel&&this.process){for(this.onCancel=!0,yield this.onStatusChanged("canceling");this.isRunning;)yield this.sleep(r.CANCEL_SLEEP);yield this.process.reset(e),this.onCancel=!1,yield this.onUpdated(),yield this.onStatusChanged("initialized")}}))}start(){return s(this,void 0,void 0,(function*(){if(this.isRunning||this.onCancel||!this.process)return;this.isRunning=!0,yield this.onStatusChanged("started");let e=this.process.progress;for(;!this.process.isFinished&&!this.onCancel;)yield this.process.step(),yield this.sleep(this.process.sleep),this.process.progress>e+this.process.minimumStep&&(e=this.process.progress,yield this.onUpdated());yield this.onUpdated(),this.process.isFinished?yield this.onStatusChanged("finished"):yield this.onStatusChanged("canceled"),this.onCancel=!1,this.isRunning=!1}))}stop(){return s(this,void 0,void 0,(function*(){!this.onCancel&&this.isRunning&&this.process&&(this.onCancel=!0)}))}}},406081:function(e,t){var n=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deserialize=t.serializeStatus=t.serializeProcess=void 0;t.serializeProcess=e=>n(void 0,void 0,void 0,(function*(){return JSON.stringify({type:"update",data:yield e.getObject()})}));t.serializeStatus=e=>JSON.stringify({type:"status",data:{status:e}});t.deserialize=e=>{const t=JSON.parse(e);return t.type,t.data}},29784:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(406081),t)},561718:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(780545);let r;self.addEventListener("message",(e=>s(void 0,void 0,void 0,(function*(){var t,s,o;switch(e.data[0]){case"init":{importScripts(e.data[1]),r=new i.Runner((e=>{self.postMessage(e)}));const o=JSON.parse(null!==(t=e.data[3])&&void 0!==t?t:{}),a=new n.g[null!==(s=e.data[2])&&void 0!==s?s:"Process"](r.getOnUpdateCallback(),o);yield a.init(o),r.setProcess(a),yield r.reset(void 0);break}case"reset":r&&(yield r.reset(JSON.parse(null!==(o=e.data[1])&&void 0!==o?o:{})));break;case"start":r&&(yield r.start());break;case"stop":r&&(yield r.stop())}}))))},968552:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_MINIMUM_STEP=t.DEFAULT_SLEEP=t.CANCEL_SLEEP=void 0,t.CANCEL_SLEEP=100,t.DEFAULT_SLEEP=10,t.DEFAULT_MINIMUM_STEP=.01},780545:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Runner=t.Controller=t.ProcessBase=void 0;var s=n(938022);Object.defineProperty(t,"ProcessBase",{enumerable:!0,get:function(){return s.ProcessBase}});var i=n(58594);Object.defineProperty(t,"Controller",{enumerable:!0,get:function(){return i.Controller}});var r=n(930139);Object.defineProperty(t,"Runner",{enumerable:!0,get:function(){return r.Runner}})}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();n(561718)})();
!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";const o=new Promise(e=>{"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",()=>{e()},{capture:!0,once:!0,passive:!0})});e.exports=o,e.exports.default=o},function(e,t,r){"use strict";const o=r(3),n=r(0),s=r(4),a=new o;e.exports=(e,{target:t=document,stopOnDomReady:r=!0,timeout:o=1/0}={})=>{const _=[t,e,r,o],i=a.get(_);if(i)return i;let u;const l=s(),{promise:c}=l;a.set(_,c);const p=()=>{cancelAnimationFrame(u),a.delete(_,c),l.resolve()};return r&&(async()=>{await n,p()})(),o!==1/0&&setTimeout(p,o),function r(){const o=t.querySelector(e);o?(l.resolve(o),p()):u=requestAnimationFrame(r)}(),Object.assign(c,{stop:p})}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var element_ready__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),element_ready__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(element_ready__WEBPACK_IMPORTED_MODULE_0__),dom_loaded__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),dom_loaded__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dom_loaded__WEBPACK_IMPORTED_MODULE_1__);window.elementReady=element_ready__WEBPACK_IMPORTED_MODULE_0___default.a,window.domLoaded=dom_loaded__WEBPACK_IMPORTED_MODULE_1___default.a;const tests=["elementReady('#target')","elementReady('#target', { stopOnDomReady: false, timeout: 5000 })","domLoaded.then(() => document.querySelector('#target'))"];Promise.all(tests.map(test=>eval(test))).then(e=>{let t="";for(let r=0;r<tests.length;r++)t+="<li>",t+=`<code>${tests[r]}</code>`,t+="<br>",t+=`<span class="indent"> => <code>${e[r]}</code></span>`,t+="</li>";document.querySelector("#results").innerHTML=`<ol>${t}</ol>`})},function(e,t,r){"use strict";const o=Symbol("getInternalKeys"),n=Symbol("getPrivateKey"),s=Symbol("publicKeys"),a=Symbol("objectHashes"),_=Symbol("symbolHashes"),i=Symbol("null");let u=0;function l(e){if(!Array.isArray(e))throw new TypeError("The keys parameter must be an array")}e.exports=class extends Map{constructor(){super(),this[a]=new WeakMap,this[_]=new Map,this[s]=new Map;const[e]=arguments;if(null!=e){if("function"!=typeof e[Symbol.iterator])throw new TypeError(typeof e+" is not iterable (cannot read property Symbol(Symbol.iterator))");for(const[t,r]of e)this.set(t,r)}}[o](e,t=!1){const r=this[n](e,t);let o;return r&&this[s].has(r)?o=this[s].get(r):t&&(o=[...e],this[s].set(r,o)),{privateKey:r,publicKey:o}}[n](e,t=!1){const r=[];for(let o of e){null===o&&(o=i);const e="object"==typeof o||"function"==typeof o?a:"symbol"==typeof o&&_;if(e)if(this[e].has(o))r.push(this[e].get(o));else{if(!t)return!1;{const t=`@@mkm-ref-${u++}@@`;this[e].set(o,t),r.push(t)}}else r.push(o)}return JSON.stringify(r)}set(e,t){l(e);const{publicKey:r}=this[o](e,!0);return super.set(r,t)}get(e){l(e);const{publicKey:t}=this[o](e);return super.get(t)}has(e){l(e);const{publicKey:t}=this[o](e);return super.has(t)}delete(e){l(e);const{publicKey:t,privateKey:r}=this[o](e);return Boolean(t&&super.delete(t)&&this[s].delete(r))}clear(){super.clear(),this[_].clear(),this[s].clear()}get[Symbol.toStringTag](){return"ManyKeysMap"}get size(){return super.size}}},function(e,t,r){"use strict";const o=()=>{const e={};return e.promise=new Promise((t,r)=>{e.resolve=t,e.reject=r}),e};e.exports=o,e.exports.default=o}]);
!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=15)}([function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(29),o=e(10);t.exports=function(t){return r(o(t))}},function(t,n,e){t.exports=e(40)},function(t,n,e){var r=e(1),o=e(0),i=e(18),u=e(20),c=e(8),s=function(t,n,e){var f,a,l,p=t&s.F,d=t&s.G,h=t&s.S,v=t&s.P,y=t&s.B,x=t&s.W,m=d?o:o[n]||(o[n]={}),b=m.prototype,g=d?r:h?r[n]:(r[n]||{}).prototype;for(f in d&&(e=n),e)(a=!p&&g&&void 0!==g[f])&&c(m,f)||(l=a?g[f]:e[f],m[f]=d&&"function"!=typeof g[f]?e[f]:y&&a?i(l,r):x&&g[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[f]=l,t&s.R&&b&&!b[f]&&u(b,f,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(28),o=e(38);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){t.exports=e(16)},function(t){t.exports=[{home:["home/p2.png",{t1:["home/t1/t1.png"]}]},"p2.png"]},function(t){t.exports={pages:["pages/home","pages/story","pages/about"],title:"xing h5",version:"1",viewport:"750"}},function(t,n,e){"use strict";e.r(n);var r,o=e(12),i=e.n(o),u=e(6),c=e.n(u),s=e(14),f=e(13),a=(e(44),{init:function(){this.manifest=f,this.createDom(),this.createSwiper()},createDom:function(){var t=this;this.rootEl=document.createElement("div"),this.wrapEl=document.createElement("div"),this.rootEl.classList.add("swiper-container"),this.wrapEl.classList.add("swiper-wrapper"),this.slideElems=[],this.slides=[],s.pages.forEach(function(n){var r=document.createElement("div"),o=e(45)("./".concat(n,"/index.html")),u=e(49)("./".concat(n,"/index")),s=e(53)("./".concat(n,"/index.scss"));if(r.innerHTML=o,c()(s).length>0){var f=c()(s)[0],l=i()(s)[0];r.firstChild.classList.add(f,l)}u.default.app=a,u.default.el=r.firstChild,t.slides.push(u.default),t.slideElems.push(r.innerHTML)}),this.rootEl.appendChild(this.wrapEl),this.appEl=document.querySelector("#app"),this.appEl.appendChild(this.rootEl)},createSwiper:function(){r=new Swiper(".swiper-container",{effect:"fade",fadeEffect:{crossFade:!0},direction:"vertical",loop:!1,virtual:{slides:this.slideElems},on:{init:function(){var t=a.slides[0];t&&t.init&&t.init(),t.hash&&(location.hash=t.hash)},transitionStart:function(){var t=a.slides[r.activeIndex];t&&t.init&&t.init(),t.hash&&(location.hash=t.hash)},transitionEnd:function(){var t=a.slides[r.realIndex],n=a.slides[r.previousIndex];n&&n.destroy&&n.destroy(),t&&t.start&&t.start()}}})}});a.init()},function(t,n,e){e(17),t.exports=e(0).Object.values},function(t,n,e){var r=e(7),o=e(27)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},function(t,n,e){var r=e(19);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(21),o=e(26);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(22),o=e(23),i=e(25),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(3)&&!e(4)(function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(2),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(9),o=e(5),i=e(39).f;t.exports=function(t){return function(n){for(var e,u=o(n),c=r(u),s=c.length,f=0,a=[];s>f;)i.call(u,e=c[f++])&&a.push(t?[e,u[e]]:u[e]);return a}}},function(t,n,e){var r=e(8),o=e(5),i=e(31)(!1),u=e(34)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(5),o=e(32),i=e(33);t.exports=function(t){return function(n,e,u){var c,s=r(n),f=o(s.length),a=i(u,f);if(t&&e!=e){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(11),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(11),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(35)("keys"),o=e(37);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(36)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!0},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){e(41),t.exports=e(0).Object.keys},function(t,n,e){var r=e(42),o=e(9);e(43)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(10);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(7),o=e(0),i=e(4);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){},function(t,n,e){var r={"./pages/about/index.html":46,"./pages/home/index.html":47,"./pages/story/index.html":48};function o(t){var n=i(t);return e(n)}function i(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=45},function(t,n){t.exports='<div class="about"></div>'},function(t,n){t.exports='<div class="home"></div>'},function(t,n){t.exports='<div class="story"></div>'},function(t,n,e){var r={"./pages/about/index":50,"./pages/home/index":51,"./pages/story/index":52};function o(t){var n=i(t);return e(n)}function i(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=49},function(t,n,e){"use strict";e.r(n),n.default={hash:"about",init:function(){console.log("init about")},start:function(){console.log("start about")},destroy:function(){console.log("destroy about")}}},function(t,n,e){"use strict";e.r(n),n.default={hash:"home",init:function(){console.log("init home")},start:function(){console.log("start home")},destroy:function(){console.log("destroy home")}}},function(t,n,e){"use strict";e.r(n),n.default={hash:"story",init:function(){console.log("init story")},start:function(){console.log("start story")},destroy:function(){console.log("destroy story")}}},function(t,n,e){var r={"./pages/about/index.scss":54,"./pages/home/index.scss":55,"./pages/story/index.scss":56};function o(t){var n=i(t);return e(n)}function i(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=53},function(t,n,e){t.exports={about:"_1uDfhBO6dTBWFJcuT9ylxG"}},function(t,n,e){t.exports={home:"_3aYg2marxHfHRQ-jt1UoZF"}},function(t,n,e){t.exports={story:"_3KGlSF3fHjDHMAZx3d2kPJ"}}]);
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("leaflet")):"function"==typeof define&&define.amd?define(["leaflet"],e):"object"==typeof exports?exports["leaflet-ant-path"]=e(require("leaflet")):t["leaflet-ant-path"]=e(t.L)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=87)}([function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(2),o=n(13),i=n(17),a=n(30),u=n(37),c="prototype",s=function(t,e,n){var f,l,p,h,y=t&s.F,v=t&s.G,d=t&s.S,m=t&s.P,g=t&s.B,b=v?r:d?r[e]||(r[e]={}):(r[e]||{})[c],w=v?o:o[e]||(o[e]={}),x=w[c]||(w[c]={});v&&(n=e);for(f in n)l=!y&&b&&void 0!==b[f],p=(l?b:n)[f],h=g&&l?u(p,r):m&&"function"==typeof p?u(Function.call,p):p,b&&a(b,f,p,t&s.U),w[f]!=p&&i(w,f,h),m&&x[f]!=p&&(x[f]=p)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(0),o=n(40),i=n(19),a=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(29),o=n(14),i=n(9),a=n(19),u=n(3),c=n(40),s=Object.getOwnPropertyDescriptor;e.f=n(7)?s:function(t,e){if(t=i(t),e=a(e,!0),c)try{return s(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(55),o=n(38);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(32)("wks"),o=n(15),i=n(2).Symbol,a="function"==typeof i,u=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};u.store=r},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(12),s={main:Symbol("main"),pulse:Symbol("pulse")},f=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i._map=null,i._path=null,i._animatedPathId=null,i._animatedPathClass="leaflet-ant-path",i._reversePathClass="reverse",i._defaultOptions={paused:!1,reverse:!1,delay:400,dashArray:[10,20],weight:5,opacity:.5,color:"#0000FF",pulseColor:"#FFFFFF"},i[s.main]=null,i[s.pulse]=null,c.Util.setOptions(i,a({},i._defaultOptions,n)),i._path=t,i._animatedPathId="ant-path-"+(new Date).getTime(),i._mount(),i}return i(e,t),u(e,[{key:"map",value:function(t){var e=this.constructor[Symbol.species];return new e(this._path.map(t),a({},this.options))}},{key:Symbol.iterator,value:regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(this._path,"t0",1);case 1:case"end":return t.stop()}},t,this)})},{key:"_processOptions",value:function(){var t=this.options,e=this._animatedPathClass,n=this._reversePathClass,r=this._animatedPathId,o=a({},t),i=a({},t);return i.color=i.pulseColor||t.pulseColor,i.className=e+" "+r+" "+(t.reverse?n:""),delete o.dashArray,Array.isArray(i.dashArray)&&(i.dashArray=String(i.dashArray)),{pathOpts:o,pulseOpts:i}}},{key:"_mount",value:function(){var t=this._processOptions(),e=t.pathOpts,n=t.pulseOpts;this.addLayer(this[s.main]=new c.Polyline(this._path,e)),this.addLayer(this[s.pulse]=new c.Polyline(this._path,n))}},{key:"_calculateAnimationSpeed",value:function(){var t=this.options,e=this._map,n=this._animatedPathId;if(!t.paused&&e){var r=e.getZoom(),o=document.getElementsByClassName(n),i=1+t.delay/3/r+"s",a=["-webkit-","-moz-","-ms-","-o-",""].map(function(t){return t+"animation-duration: "+i}).join(";");Array.from(o,function(t){t.style.cssText=a,t.setAttribute("data-animated","true")})}}},{key:"_pureReverse",value:function(){var t=this[s.pulse].getElement();t&&(this.options.reverse?t.classList.remove(this._reversePathClass):t.classList.add(this._reversePathClass))}},{key:"onAdd",value:function(t){return this._map=t,this._map.on("zoomend",this._calculateAnimationSpeed,this),this._mount(),this._calculateAnimationSpeed(),this}},{key:"onRemove",value:function(t){return this._map&&(this._map.off("zoomend",this._calculateAnimationSpeed,this),this._map=null),t&&t.removeLayer(this[s.main]).removeLayer(this[s.pulse]),this}},{key:"pause",value:function(){var t=this.options.paused;if(!t){var e=this[s.pulse].getElement();return this.options.paused=!0,e&&(e.removeAttribute("style"),e.setAttribute("data-animated","true")),!0}return!1}},{key:"resume",value:function(){var t=this.options;return!!t.paused&&(t.paused=!1,this._calculateAnimationSpeed(),!0)}},{key:"bringToFront",value:function(){return this[s.main].bringToFront(),this[s.pulse].bringToFront(),this}},{key:"bringToBack",value:function(){return this[s.pulse].bringToBack(),this[s.main].bringToBack(),this}},{key:"removeFrom",value:function(t){return t&&t.hasLayer(this)&&t.removeLayer(this),this}},{key:"setStyle",value:function(t){var e=t.paused,n=t.delay,r=t.reverse;e?this.pause():this.resume(),n!==this.options.delay&&(this.options.delay=n||this._defaultOptions.delay,this._calculateAnimationSpeed()),"undefined"!=typeof r&&r!==this.options.reverse&&this._pureReverse(),this.options=a({},this.options,t);var o=this._processOptions(),i=o.pathOpts,u=o.pulseOpts;return this[s.main].setStyle(i),this[s.pulse].setStyle(u),this}},{key:"reverse",value:function(){return this._pureReverse(),this.options.reverse=!this.options.reverse,this}},{key:"redraw",value:function(){return this[s.main].redraw(),this[s.pulse].redraw(),this}},{key:"addLatLng",value:function(){var t,e;return(t=this[s.main]).addLatLng.apply(t,arguments),(e=this[s.pulse]).addLatLng.apply(e,arguments),this}},{key:"setLatLngs",value:function(){var t,e;return(t=this[s.main]).setLatLngs.apply(t,arguments),(e=this[s.pulse]).setLatLngs.apply(e,arguments),this}},{key:"getLatLngs",value:function(){return this[s.main].getLatLngs()}},{key:"spliceLatLngs",value:function(){var t,e,n=(t=this[s.main]).spliceLatLngs.apply(t,arguments);return(e=this[s.pulse]).spliceLatLngs.apply(e,arguments),n}},{key:"getBounds",value:function(){return this[s.main].getBounds()}},{key:"toGeoJSON",value:function(){return this[s.main].toGeoJSON()}},{key:Symbol.toStringTag,get:function(){return"L.Polyline.AntPath"}}],[{key:Symbol.species,get:function(){return this}}]),e}(c.FeatureGroup);e.default=f,t.exports=e.default},function(e,n){e.exports=t},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5),o=n(14);t.exports=n(7)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(42),o=n(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),i=r(o);e.default=function(t,e){return Reflect.construct(i.default,[t,e])},t.exports=e.default},function(t,e,n){var r=n(33);"string"==typeof r&&(r=[[t.i,r,""]]);n(35)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.antPath=e.AntPath=void 0;var o=n(12),i=n(11),a=r(i),u=n(20),c=r(u);n(21),o.Polyline.AntPath=a.default,o.polyline.antPath=c.default,t.exports={AntPath:a.default,antPath:c.default},e.AntPath=a.default,e.antPath=c.default},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(0),o=n(60),i=n(24),a=n(31)("IE_PROTO"),u=function(){},c="prototype",s=function(){var t,e=n(39)("iframe"),r=i.length,o="<",a=">";for(e.style.display="none",n(53).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),s=t.F;r--;)delete s[c][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[c]=r(t),n=new u,u[c]=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(42),o=n(24).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(3),o=n(66),i=n(31)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(2),o=n(17),i=n(3),a=n(15)("src"),u="toString",c=Function[u],s=(""+c).split(u);n(13).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,u){var c="function"==typeof n;c&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(c&&(i(n,a)||o(n,a,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,u,function(){return"function"==typeof this&&this[a]||c.call(this)})},function(t,e,n){var r=n(32)("keys"),o=n(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(2),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){e=t.exports=n(34)(),e.push([t.i,"@-webkit-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\n@-moz-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\n@-ms-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\n@-o-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\n@keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0%; } }\n\npath.leaflet-ant-path {\n  fill: none;\n  -webkit-animation: linear infinite leaflet-ant-path-animation;\n  -moz-animation: linear infinite leaflet-ant-path-animation;\n  -ms-animation: linear infinite leaflet-ant-path-animation;\n  -o-animation: linear infinite leaflet-ant-path-animation;\n  animation: linear infinite leaflet-ant-path-animation; }\n  path.leaflet-ant-path.reverse {\n    -webkit-animation-direction: reverse;\n    -moz-animation-direction: reverse;\n    -o-animation-direction: reverse;\n    -ms-animation-direction: reverse;\n    animation-direction: reverse; }\n",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],e));p[r.id]={id:r.id,refs:1,parts:a}}}}function r(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],u=o[2],c=o[3],s={css:a,media:u,sourceMap:c};n[i]?n[i].parts.push(s):e.push(n[i]={id:i,parts:[s]})}return e}function o(t,e){var n=v(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function c(t,e){var n,r,o;if(e.singleton){var c=m++;n=d||(d=a(e)),r=s.bind(null,n,c,!1),o=s.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),r=l.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=f.bind(null,n),o=function(){i(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function l(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},y=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,m=0,g=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=y()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=r(t);return n(o,e),function(t){for(var i=[],a=0;a<o.length;a++){var u=o[a],c=p[u.id];c.refs--,i.push(c)}if(t){var s=r(t);n(s,e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete p[c.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(16);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(4),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(7)&&!n(6)(function(){return 7!=Object.defineProperty(n(39)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=!1},function(t,e,n){var r=n(3),o=n(9),i=n(49)(!1),a=n(31)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,s=[];for(n in u)n!=a&&r(u,n)&&s.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(5).f,o=n(3),i=n(10)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){e.f=n(10)},function(t,e,n){n(69),n(70),n(71),n(72),n(73),n(76),n(74),n(75),n(77),n(78),n(79),n(80),n(82),n(81),t.exports=n(13).Reflect},function(t,e,n){n(83),n(68),t.exports=n(13).Symbol},function(t,e,n){(function(e){t.exports=e.regeneratorRuntime=n(85)}).call(e,n(36))},function(t,e,n){var r=n(9),o=n(65),i=n(64);t.exports=function(t){return function(e,n,a){var u,c=r(e),s=o(c.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if(u=c[f++],u!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){"use strict";var r=n(16),o=n(4),i=n(54),a=[].slice,u={},c=function(t,e,n){if(!(e in u)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";u[e]=Function("F,a","return new F("+r.join(",")+")")}return u[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=a.call(arguments,1),u=function(){var r=n.concat(a.call(arguments));return this instanceof u?c(e,r.length,r):i(e,r,t)};return o(e.prototype)&&(u.prototype=e.prototype),u}},function(t,e,n){var r=n(23),o=n(10)("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(18),o=n(27),i=n(29);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),c=i.f,s=0;u.length>s;)c.call(t,a=u[s++])&&e.push(a);return e}},function(t,e,n){t.exports=n(2).document&&document.documentElement},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(23);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(25),o=n(14),i=n(43),a={};n(17)(a,n(10)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(18),o=n(9);t.exports=function(t,e){for(var n,i=o(t),a=r(i),u=a.length,c=0;u>c;)if(i[n=a[c++]]===e)return n}},function(t,e,n){var r=n(15)("meta"),o=n(4),i=n(3),a=n(5).f,u=0,c=Object.isExtensible||function(){return!0},s=!n(6)(function(){return c(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return s&&y.NEED&&c(t)&&!i(t,r)&&f(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,e,n){var r=n(5),o=n(0),i=n(18);t.exports=n(7)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,c=0;u>c;)r.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var r=n(9),o=n(26).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,e,n){var r=n(26),o=n(27),i=n(0),a=n(2).Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(4),o=n(0),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(37)(Function.call,n(8).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(44),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(44),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(38);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(2),o=n(13),i=n(41),a=n(45),u=n(5).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},function(t,e,n){"use strict";var r=n(51),o={};o[n(10)("toStringTag")]="z",o+""!="[object z]"&&n(30)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,e,n){var r=n(1),o=n(16),i=n(0),a=(n(2).Reflect||{}).apply,u=Function.apply;r(r.S+r.F*!n(6)(function(){a(function(){})}),"Reflect",{apply:function(t,e,n){var r=o(t),c=i(n);return a?a(r,e,c):u.call(r,e,c)}})},function(t,e,n){var r=n(1),o=n(25),i=n(16),a=n(0),u=n(4),c=n(6),s=n(50),f=(n(2).Reflect||{}).construct,l=c(function(){function t(){}return!(f(function(){},[],t)instanceof t)}),p=!c(function(){f(function(){})});r(r.S+r.F*(l||p),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(p&&!l)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var c=n.prototype,h=o(u(c)?c:Object.prototype),y=Function.apply.call(t,h,e);return u(y)?y:h}})},function(t,e,n){var r=n(5),o=n(1),i=n(0),a=n(19);o(o.S+o.F*n(6)(function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,n){i(t),e=a(e,!0),i(n);try{return r.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var r=n(1),o=n(8).f,i=n(0);r(r.S,"Reflect",{deleteProperty:function(t,e){var n=o(i(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var r=n(1),o=n(0),i=function(t){this._t=o(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(57)(i,"Object",function(){var t,e=this,n=e._k;do if(e._i>=n.length)return{value:void 0,done:!0};while(!((t=n[e._i++])in e._t));return{value:t,done:!1}}),r(r.S,"Reflect",{enumerate:function(t){return new i(t)}})},function(t,e,n){var r=n(8),o=n(1),i=n(0);o(o.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.f(i(t),e)}})},function(t,e,n){var r=n(1),o=n(28),i=n(0);r(r.S,"Reflect",{getPrototypeOf:function(t){return o(i(t))}})},function(t,e,n){function r(t,e){var n,u,f=arguments.length<3?t:arguments[2];return s(t)===f?t[e]:(n=o.f(t,e))?a(n,"value")?n.value:void 0!==n.get?n.get.call(f):void 0:c(u=i(t))?r(u,e,f):void 0}var o=n(8),i=n(28),a=n(3),u=n(1),c=n(4),s=n(0);u(u.S,"Reflect",{get:r})},function(t,e,n){var r=n(1);r(r.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var r=n(1),o=n(0),i=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return o(t),!i||i(t)}})},function(t,e,n){var r=n(1);r(r.S,"Reflect",{ownKeys:n(62)})},function(t,e,n){var r=n(1),o=n(0),i=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){o(t);try{return i&&i(t),!0}catch(t){return!1}}})},function(t,e,n){var r=n(1),o=n(63);o&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){o.check(t,e);try{return o.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){function r(t,e,n){var c,p,h=arguments.length<4?t:arguments[3],y=i.f(f(t),e);if(!y){if(l(p=a(t)))return r(p,e,n,h);y=s(0)}return u(y,"value")?!(y.writable===!1||!l(h))&&(c=i.f(h,e)||s(0),c.value=n,o.f(h,e,c),!0):void 0!==y.set&&(y.set.call(h,n),!0)}var o=n(5),i=n(8),a=n(28),u=n(3),c=n(1),s=n(14),f=n(0),l=n(4);c(c.S,"Reflect",{set:r})},function(t,e,n){"use strict";var r=n(2),o=n(3),i=n(7),a=n(1),u=n(30),c=n(59).KEY,s=n(6),f=n(32),l=n(43),p=n(15),h=n(10),y=n(45),v=n(67),d=n(58),m=n(52),g=n(56),b=n(0),w=n(9),x=n(19),O=n(14),_=n(25),S=n(61),j=n(8),L=n(5),P=n(18),k=j.f,E=L.f,R=S.f,T=r.Symbol,F=r.JSON,A=F&&F.stringify,N="prototype",C=h("_hidden"),M=h("toPrimitive"),U={}.propertyIsEnumerable,B=f("symbol-registry"),I=f("symbols"),G=f("op-symbols"),z=Object[N],D="function"==typeof T,J=r.QObject,K=!J||!J[N]||!J[N].findChild,W=i&&s(function(){return 7!=_(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(z,e);r&&delete z[e],E(t,e,n),r&&t!==z&&E(z,e,r)}:E,Y=function(t){var e=I[t]=_(T[N]);return e._k=t,e},q=D&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},Q=function(t,e,n){return t===z&&Q(G,e,n),b(t),e=x(e,!0),b(n),o(I,e)?(n.enumerable?(o(t,C)&&t[C][e]&&(t[C][e]=!1),n=_(n,{enumerable:O(0,!1)})):(o(t,C)||E(t,C,O(1,{})),t[C][e]=!0),W(t,e,n)):E(t,e,n)},Z=function(t,e){b(t);for(var n,r=m(e=w(e)),o=0,i=r.length;i>o;)Q(t,n=r[o++],e[n]);return t},H=function(t,e){return void 0===e?_(t):Z(_(t),e)},V=function(t){var e=U.call(this,t=x(t,!0));return!(this===z&&o(I,t)&&!o(G,t))&&(!(e||!o(this,t)||!o(I,t)||o(this,C)&&this[C][t])||e)},X=function(t,e){if(t=w(t),e=x(e,!0),t!==z||!o(I,e)||o(G,e)){var n=k(t,e);return!n||!o(I,e)||o(t,C)&&t[C][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=R(w(t)),r=[],i=0;n.length>i;)o(I,e=n[i++])||e==C||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===z,r=R(n?G:w(t)),i=[],a=0;r.length>a;)!o(I,e=r[a++])||n&&!o(z,e)||i.push(I[e]);return i};D||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(G,n),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),W(this,t,O(1,n))};return i&&K&&W(z,t,{configurable:!0,set:e}),Y(t)},u(T[N],"toString",function(){return this._k}),j.f=X,L.f=Q,n(26).f=S.f=$,n(29).f=V,n(27).f=tt,i&&!n(41)&&u(z,"propertyIsEnumerable",V,!0),y.f=function(t){return Y(h(t))}),a(a.G+a.W+a.F*!D,{Symbol:T});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var et=P(h.store),nt=0;et.length>nt;)v(et[nt++]);a(a.S+a.F*!D,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=T(t)},keyFor:function(t){if(q(t))return d(B,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),a(a.S+a.F*!D,"Object",{create:H,defineProperty:Q,defineProperties:Z,getOwnPropertyDescriptor:X,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),F&&a(a.S+a.F*(!D||s(function(){var t=T();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!q(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,A.apply(F,r)}}}),T[N][M]||n(17)(T[N],M,T[N].valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){v&&h&&(v=!1,h.length?y=h.concat(y):d=-1,y.length&&u())}function u(){if(!v){var t=o(a);v=!0;for(var e=y.length;e;){for(h=y,y=[];++d<e;)h&&h[d].run();d=-1,e=y.length}h=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function s(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var h,y=[],v=!1,d=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];y.push(new c(t,e)),1!==y.length||v||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){(function(e){var r="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(86),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}).call(e,n(36))},function(t,e,n){(function(e,n){!function(e){"use strict";function r(t,e,n,r){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),u=new h(r||[]);return a._invoke=f(t,n,u),a}function o(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function u(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(n,r,i,a){var u=o(t[n],t,r);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},a)}a(u.arg)}function r(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return i=i?i.then(r,r):r()}"object"==typeof n&&n.domain&&(e=n.domain.bind(e));var i;this._invoke=r}function f(t,e,n){var r=S;return function(i,a){if(r===L)throw new Error("Generator is already running");if(r===P){if("throw"===i)throw a;return v()}for(;;){var u=n.delegate;if(u){if("return"===i||"throw"===i&&u.iterator[i]===d){n.delegate=null;var c=u.iterator.return;if(c){
var s=o(c,u.iterator,a);if("throw"===s.type){i="throw",a=s.arg;continue}}if("return"===i)continue}var s=o(u.iterator[i],u.iterator,a);if("throw"===s.type){n.delegate=null,i="throw",a=s.arg;continue}i="next",a=d;var f=s.arg;if(!f.done)return r=j,f;n[u.resultName]=f.value,n.next=u.nextLoc,n.delegate=null}if("next"===i)n.sent=n._sent=a;else if("throw"===i){if(r===S)throw r=P,a;n.dispatchException(a)&&(i="next",a=d)}else"return"===i&&n.abrupt("return",a);r=L;var s=o(t,e,n);if("normal"===s.type){r=n.done?P:j;var f={value:s.arg,done:n.done};if(s.arg!==k)return f;n.delegate&&"next"===i&&(a=d)}else"throw"===s.type&&(r=P,i="throw",a=s.arg)}}}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function y(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(g.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=d,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:d,done:!0}}var d,m=Object.prototype,g=m.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.toStringTag||"@@toStringTag",O="object"==typeof t,_=e.regeneratorRuntime;if(_)return void(O&&(t.exports=_));_=e.regeneratorRuntime=O?t.exports:{},_.wrap=r;var S="suspendedStart",j="suspendedYield",L="executing",P="completed",k={},E={};E[w]=function(){return this};var R=Object.getPrototypeOf,T=R&&R(R(y([])));T&&T!==m&&g.call(T,w)&&(E=T);var F=u.prototype=i.prototype=Object.create(E);a.prototype=F.constructor=u,u.constructor=a,u[x]=a.displayName="GeneratorFunction",_.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},_.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(F),t},_.awrap=function(t){return{__await:t}},c(s.prototype),_.AsyncIterator=s,_.async=function(t,e,n,o){var i=new s(r(t,e,n,o));return _.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(F),F[x]="Generator",F.toString=function(){return"[object Generator]"},_.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},_.values=y,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=d)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),u=g.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),k},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:y(t),resultName:e,nextLoc:n},k}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,n(36),n(84))},function(t,e,n){n(48),n(47),n(46),t.exports=n(22)}])});
//# sourceMappingURL=leaflet-ant-path.js.map

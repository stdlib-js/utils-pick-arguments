// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).pickArguments=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[d],u=d,r=null!=(o=t)&&g.call(o,u);try{t[d]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[d]=e:delete t[d],n}:function(t){return v.call(t)},m=Boolean.prototype.toString;var j=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function w(t){return y(t)||_(t)}function O(){return new Function("return this;")()}p(w,"isPrimitive",y),p(w,"isObject",_);var E="object"==typeof self?self:null,S="object"==typeof window?window:null,T="object"==typeof global?global:null;var A=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(E)return E;if(S)return S;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),I=A.document&&A.document.childNodes,P=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;p(N,"REGEXP",B);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function V(t){return null!==t&&"object"==typeof t}function x(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=B.exec(n.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(V));var k="function"==typeof t||"object"==typeof P||"function"==typeof I?function(t){return x(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?x(t).toLowerCase():r};function F(t){return"number"==typeof t}var G=Number,L=G.prototype.toString;var M=b();function R(t){return"object"==typeof t&&(t instanceof G||(M?function(t){try{return L.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function U(t){return F(t)||R(t)}p(U,"isPrimitive",F),p(U,"isObject",R);var Y=Number.POSITIVE_INFINITY,X=G.NEGATIVE_INFINITY,q=Math.floor;function z(t){return q(t)===t}function D(t){return t<Y&&t>X&&z(t)}function H(t){return F(t)&&D(t)}function J(t){return R(t)&&D(t.valueOf())}function K(t){return H(t)||J(t)}function Q(t){return H(t)&&t>=0}function W(t){return J(t)&&t.valueOf()>=0}function Z(t){return Q(t)||W(t)}p(K,"isPrimitive",H),p(K,"isObject",J),p(Z,"isPrimitive",Q),p(Z,"isObject",W);function $(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(t,r,e){var n,o,u,i;if("function"!==k(t))throw new TypeError($("0lA3p",t));if(!function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&z(t.length)&&t.length>=0&&t.length<=9007199254740991}(r))throw new TypeError($("0lACb",r));for(o=[],i=0;i<r.length;i++){if(!Q(u=r[i]))throw new TypeError($("0lACb",r));o.push(u)}return n=[function(){return t.call(e)},function(){return t.call(e,arguments[o[0]])},function(){return t.call(e,arguments[o[0]],arguments[o[1]])},function(){return t.call(e,arguments[o[0]],arguments[o[1]],arguments[o[2]])},function(){return t.call(e,arguments[o[0]],arguments[o[1]],arguments[o[2]],arguments[o[3]])},function(){return t.call(e,arguments[o[0]],arguments[o[1]],arguments[o[2]],arguments[o[3]],arguments[o[4]])}],o.length<n.length?n[o.length]:function(){var r,n;for(r=[],n=0;n<arguments.length;n++)r.push(arguments[o[n]]);return t.apply(e,r)}}}));
//# sourceMappingURL=index.js.map
// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,f=n.__lookupGetter__,s=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var u,c,l,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(f.call(t,e)||s.call(t,e)?(u=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=u):t[e]=r.value),l="get"in r,p="set"in r,c&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,e,r.get),p&&a&&a.call(t,e,r.set),t};var u=e;function c(t,e,r){u(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return p&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&y.call(t,e)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var b=h()?function(t){var e,r,n;if(null==t)return g.call(t);r=t[_],e=d(t,_);try{t[_]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[_]=r:delete t[_],n}:function(t){return g.call(t)},m=Boolean.prototype.toString;var v=h();function w(t){return"object"==typeof t&&(t instanceof Boolean||(v?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===b(t)))}function O(t){return l(t)||w(t)}function A(){return new Function("return this;")()}c(O,"isPrimitive",l),c(O,"isObject",w);var E="object"==typeof self?self:null,j="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof I?I:null;function U(t){if(arguments.length){if(!l(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(E)return E;if(j)return j;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}var S=U();function N(t,e,r){u(t,e,{configurable:!1,enumerable:!1,get:r})}var T={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function R(t){return Math.abs(t)}function B(t,e){return e&&(2===t||3===t)}function F(t,e){return e&&(1===t||3===t)}function L(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function V(t){return t.re}function C(t){return t.im}function k(t){return"string"==typeof t}c(L,"assign",(function(t,e,r,n){var i,o,a,f,s;for(i=t.length,o=r,a=r,s=0;s<i;s++){if(0===t[s])return n[0]=r,n[1]=r,n;(f=e[s])>0?a+=f*(t[s]-1):f<0&&(o+=f*(t[s]-1))}return n[0]=o,n[1]=a,n}));var M=String.prototype.valueOf;var P=h();function G(t){return"object"==typeof t&&(t instanceof String||(P?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function D(t){return k(t)||G(t)}function Y(t){return"number"==typeof t}function $(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function J(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+$(i):$(i)+t,n&&(t="-"+t)),t}c(D,"isPrimitive",k),c(D,"isObject",G);var W=String.prototype.toLowerCase,X=String.prototype.toUpperCase;function Z(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!Y(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=J(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=J(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===X.call(t.specifier)?X.call(r):W.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function H(t){return"string"==typeof t}var z=Math.abs,q=String.prototype.toLowerCase,K=String.prototype.toUpperCase,Q=String.prototype.replace,tt=/e\+(\d)$/,et=/e-(\d)$/,rt=/^(\d+)$/,nt=/^(\d+)e/,it=/\.0$/,ot=/\.0*e/,at=/(\..*[^0])0*e/;function ft(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!Y(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":z(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=Q.call(r,at,"$1e"),r=Q.call(r,ot,"e"),r=Q.call(r,it,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=Q.call(r,tt,"e+0$1"),r=Q.call(r,et,"e-0$1"),t.alternate&&(r=Q.call(r,rt,"$1."),r=Q.call(r,nt,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===K.call(t.specifier)?K.call(r):q.call(r)}function st(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function ut(t,e,r){var n=e-t.length;return n<0?t:t=r?t+st(n):st(n)+t}var ct=String.fromCharCode,lt=isNaN,pt=Array.isArray;function ht(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function gt(t){var e,r,n,i,o,a,f,s,u;if(!pt(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",f=1,s=0;s<t.length;s++)if(H(n=t[s]))a+=n;else{if(e=void 0!==n.precision,!(n=ht(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,u=0;u<r.length;u++)switch(i=r.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,lt(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,lt(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Z(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!lt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=lt(o)?String(n.arg):ct(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ft(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=J(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ut(n.arg,n.width,n.padRight)),a+=n.arg||"",f+=1}return a}var yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function dt(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function _t(t){var e,r,n,i;for(r=[],i=0,n=yt.exec(t);n;)(e=t.slice(i,yt.lastIndex-n[0].length)).length&&r.push(e),r.push(dt(n)),i=yt.lastIndex,n=yt.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function bt(t){return"string"==typeof t}function mt(t){var e,r,n;if(!bt(t))throw new TypeError(mt("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=_t(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return gt.apply(null,r)}var vt=/[-\/\\^$*+?.()|[\]{}]/g;var wt=/./,Ot=U(),At=Ot.document&&Ot.document.childNodes,Et=Int8Array;function jt(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;c(jt,"REGEXP",It);var xt=Array.isArray?Array.isArray:function(t){return"[object Array]"===b(t)};function Ut(t){return null!==t&&"object"==typeof t}function St(t){var e,r,n,i;if(("Object"===(r=b(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=It.exec(n.toString()))return e[1]}return Ut(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}c(Ut,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!xt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Ut));var Nt="function"==typeof wt||"object"==typeof Et||"function"==typeof At?function(t){return St(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?St(t).toLowerCase():e};var Tt=RegExp.prototype.exec;var Rt=h();function Bt(t){return"object"==typeof t&&(t instanceof RegExp||(Rt?function(t){try{return Tt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===b(t)))}function Ft(t,e,r){if(!k(t))throw new TypeError(mt("invalid argument. First argument must be a string. Value: `%s`.",t));if(k(e))e=function(t){var e,r;if(!k(t))throw new TypeError(mt("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(vt,"\\$&"):(e=(e=t.substring(1,r)).replace(vt,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!Bt(e))throw new TypeError(mt("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!k(r)&&"function"!==Nt(r))throw new TypeError(mt("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return t.replace(e,r)}var Lt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Vt="function"==typeof Uint8Array;var Ct="function"==typeof Uint8Array?Uint8Array:null;var kt,Mt="function"==typeof Uint8Array?Uint8Array:void 0;kt=function(){var t,e,r;if("function"!=typeof Ct)return!1;try{e=new Ct(e=[1,3.14,-3.14,256,257]),r=e,t=(Vt&&r instanceof Uint8Array||"[object Uint8Array]"===b(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Mt:function(){throw new Error("not implemented")};var Pt=kt,Gt="function"==typeof Uint16Array;var Dt="function"==typeof Uint16Array?Uint16Array:null;var Yt,$t="function"==typeof Uint16Array?Uint16Array:void 0;Yt=function(){var t,e,r;if("function"!=typeof Dt)return!1;try{e=new Dt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Gt&&r instanceof Uint16Array||"[object Uint16Array]"===b(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?$t:function(){throw new Error("not implemented")};var Jt,Wt={uint16:Yt,uint8:Pt};(Jt=new Wt.uint16(1))[0]=4660;var Xt=52===new Wt.uint8(Jt.buffer)[0],Zt="function"==typeof ArrayBuffer;var Ht="function"==typeof Float64Array;var zt="function"==typeof Float64Array?Float64Array:null;var qt,Kt="function"==typeof Float64Array?Float64Array:void 0;qt=function(){var t,e,r;if("function"!=typeof zt)return!1;try{e=new zt([1,3.14,-3.14,NaN]),r=e,t=(Ht&&r instanceof Float64Array||"[object Float64Array]"===b(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Kt:function(){throw new Error("not implemented")};var Qt=qt,te="function"==typeof ArrayBuffer?ArrayBuffer:null;var ee,re="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ee=function(){var t,e,r,n;if("function"!=typeof te)return!1;try{r=new te(16),n=r,(t=(Zt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===b(n))&&"function"==typeof te.isView)&&((e=new Qt(r))[0]=-3.14,e[1]=NaN,t=t&&te.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?re:function(){throw new Error("not implemented")};var ne=ee,ie="function"==typeof DataView;var oe="function"==typeof DataView?DataView:null;var ae,fe="function"==typeof DataView?DataView:void 0;ae=function(){var t,e,r,n;if("function"!=typeof oe)return!1;try{r=new ne(24),e=new oe(r,8),n=e,(t=(ie&&n instanceof DataView||"[object DataView]"===b(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?fe:function(){throw new Error("not implemented")};var se=ae,ue="function"==typeof BigInt?BigInt:void 0,ce=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function le(){return ce.slice()}function pe(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function he(t,e,r){u(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function ge(t){return Object.keys(Object(t))}var ye=void 0!==Object.keys;function de(t){return"[object Arguments]"===b(t)}var _e=function(){return de(arguments)}();function be(t){return"number"==typeof t}var me=Number,ve=me.prototype.toString;var we=h();function Oe(t){return"object"==typeof t&&(t instanceof me||(we?function(t){try{return ve.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function Ae(t){return be(t)||Oe(t)}function Ee(t){return t!=t}function je(t){return be(t)&&Ee(t)}function Ie(t){return Oe(t)&&Ee(t.valueOf())}function xe(t){return je(t)||Ie(t)}c(Ae,"isPrimitive",be),c(Ae,"isObject",Oe),c(xe,"isPrimitive",je),c(xe,"isObject",Ie);var Ue=Number.POSITIVE_INFINITY,Se=me.NEGATIVE_INFINITY,Ne=Math.floor;function Te(t){return Ne(t)===t}function Re(t){return t<Ue&&t>Se&&Te(t)}function Be(t){return be(t)&&Re(t)}function Fe(t){return Oe(t)&&Re(t.valueOf())}function Le(t){return Be(t)||Fe(t)}c(Le,"isPrimitive",Be),c(Le,"isObject",Fe);var Ve=Object.prototype.propertyIsEnumerable;var Ce=!Ve.call("beep","0");function ke(t,e){var r;return null!=t&&(!(r=Ve.call(t,e))&&Ce&&D(t)?!je(e=+e)&&Be(e)&&e>=0&&e<t.length:r)}var Me=_e?de:function(t){return null!==t&&"object"==typeof t&&!xt(t)&&"number"==typeof t.length&&Te(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!ke(t,"callee")},Pe=Array.prototype.slice;var Ge=ke((function(){}),"prototype"),De=!ke({toString:null},"toString");function Ye(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Te(t.length)&&t.length>=0&&t.length<=9007199254740991}function $e(t,e,r){var n,i;if(!Ye(t)&&!k(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Be(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(xe(e)){for(;i<n;i++)if(xe(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function Je(t){return t.constructor&&t.constructor.prototype===t}var We=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Xe="undefined"==typeof window?void 0:window;var Ze=function(){var t;if("undefined"===Nt(Xe))return!1;for(t in Xe)try{-1===$e(We,t)&&d(Xe,t)&&null!==Xe[t]&&"object"===Nt(Xe[t])&&Je(Xe[t])}catch(t){return!0}return!1}(),He="undefined"!=typeof window;var ze=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var qe=ye?function(){return 2!==(ge(arguments)||"").length}(1,2)?function(t){return Me(t)?ge(Pe.call(t)):ge(t)}:ge:function(t){var e,r,n,i,o,a,f;if(i=[],Me(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!Ut(t))return i;r=Ge&&n}for(o in t)r&&"prototype"===o||!d(t,o)||i.push(String(o));if(De)for(e=function(t){if(!1===He&&!Ze)return Je(t);try{return Je(t)}catch(t){return!1}}(t),f=0;f<ze.length;f++)a=ze[f],e&&"constructor"===a||!d(t,a)||i.push(String(a));return i};c(le,"enum",pe),function(t,e){var r,n,i;for(r=qe(e),i=0;i<r.length;i++)he(t,n=r[i],e[n])}(le,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ke=["row-major","column-major"];function Qe(){return{"row-major":1,"column-major":2}}c((function(){return Ke.slice()}),"enum",Qe);var tr=["throw","clamp","wrap"];function er(){return{throw:1,clamp:2,wrap:3}}c((function(){return tr.slice()}),"enum",er);var rr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},nr={"row-major":1,"column-major":2},ir={throw:1,clamp:2,wrap:3};var or=new Pt(8),ar=new se(or.buffer);function fr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<or.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=Ne(t/4294967296),Xt?(ar.setUint32(0,o,Xt),ar.setUint32(4,i,Xt)):(ar.setUint32(0,i,Xt),ar.setUint32(4,o,Xt)),a=0;a<or.length;a++)e[n]=or[a],n+=r;return e}c((function(t){var e,r,n,i;return e=new Pt(8),0===t||(i=(4294967295&t)>>>0,n=Ne(t/4294967296),r=new se(e.buffer),Xt?(r.setUint32(0,i,Xt),r.setUint32(4,n,Xt)):(r.setUint32(0,n,Xt),r.setUint32(4,i,Xt))),e}),"assign",fr);var sr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},ur={"row-major":1,"column-major":2},cr={throw:1,clamp:2,wrap:3};function lr(t,e,r,n,i,o){var a,f,s,u,c;if(!(this instanceof lr))return new lr(t,e,r,n,i,o);for(u=1,c=0;c<r.length;c++)u*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*u:null,this._byteLength=f,this._bytesPerElement=function(t){return T[t]||null}(t),this._buffer=e,this._dtype=t,this._length=u,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=L(e,r,n))[1]-o[0]+1}(u,r,n,i,this._iterationOrder),s=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=R(t[0]),a=1;a<r;a++){if(o=R(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:F(s,a),COLUMN_MAJOR_CONTIGUOUS:B(s,a),READONLY:!1},this.__meta_dataview__=null,this}function pr(t){return function(t){return t instanceof lr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length}function hr(t){var e,r,n;if(!pr(t))return!1;if((e=t.shape[0])!==t.shape[1])return!0;for(r=0;r<e;r++)for(n=0;n<r;n++)if(t.get(r,n)!==t.get(n,r))return!0;return!1}c(lr,"name","ndarray"),N(lr.prototype,"byteLength",(function(){return this._byteLength})),N(lr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),N(lr.prototype,"data",(function(){return this._buffer})),N(lr.prototype,"dtype",(function(){return this._dtype})),N(lr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),N(lr.prototype,"length",(function(){return this._length})),N(lr.prototype,"ndims",(function(){return this._ndims})),N(lr.prototype,"offset",(function(){return this._offset})),N(lr.prototype,"order",(function(){return this._order})),N(lr.prototype,"shape",(function(){return this._shape.slice()})),N(lr.prototype,"strides",(function(){return this._strides.slice()})),c(lr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),c(lr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),c(lr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),c(lr.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),c(lr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=V(i=this.iget(o))+", "+C(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=V(i=this.iget(o))+", "+C(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=V(i=this.iget(this._length-1-o))+", "+C(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Ft(Lt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),c(lr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(V(r),C(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),c(lr.prototype,"__array_meta_dataview__","function"==typeof S.BigInt&&"function"==typeof BigInt&&"bigint"==typeof S.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,s,u,c,l,p,h;if(s=this._mode||"throw",a=this._submode||[s],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new se(new ne(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,u=0,f.setInt8(u,Xt?1:0),u+=1,f.setInt16(u,rr[n],Xt),u+=2,f.setBigInt64(u,ue(l),Xt),c=8*l,u+=8,h=0;h<l;h++)f.setBigInt64(u,ue(i[h]),Xt),f.setBigInt64(u+c,ue(o[h]*t),Xt),u+=8;for(u+=c,f.setBigInt64(u,ue(this._offset*t),Xt),u+=8,f.setInt8(u,nr[this._order]),u+=1,f.setInt8(u,ir[s]),u+=1,f.setBigInt64(u,ue(p),Xt),u+=8,h=0;h<p;h++)f.setInt8(u,ir[a[h]]),u+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(u,e,Xt),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,s,u,c,l,p,h,g;if(u=this._mode||"throw",f=this._submode||[u],n=33+16*(p=this._ndims)+(h=f.length),(s=this.__meta_dataview__)&&s.byteLength===n)return s;for(s=new se(new ne(n)),e=new Pt(s.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,s.setInt8(c,Xt?1:0),c+=1,s.setInt16(c,sr[i],Xt),fr(p,e,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)fr(o[g],e,1,c),fr(a[g]*t,e,1,c+l),c+=8;for(c+=l,fr(this._offset*t,e,1,c),c+=8,s.setInt8(c,ur[this._order]),c+=1,s.setInt8(c,cr[u]),fr(h,e,1,c+=1),c+=8,g=0;g<h;g++)s.setInt8(c,cr[f[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,s.setInt32(c,r,Xt),this.__meta_dataview__=s,s});export{hr as default};
//# sourceMappingURL=mod.js.map

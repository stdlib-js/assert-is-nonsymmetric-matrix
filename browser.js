// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var e,n,u;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!r(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(e),u||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(t){return"string"==typeof t}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,m=/\.0*e/,_=/(\..*[^0])0*e/;function v(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":l(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=p.call(n,_,"$1e"),n=p.call(n,m,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,h,"e-0$1"),t.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,b,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===s.call(t.specifier)?s.call(n):c.call(n)}function w(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function S(t,e,r){var n=e-t.length;return n<0?t:t=r?t+w(n):w(n)+t}var O=String.fromCharCode,j=isNaN,A=Array.isArray;function E(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function T(t){var e,r,n,o,a,l,c,s,p;if(!A(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",c=1,s=0;s<t.length;s++)if(f(n=t[s]))l+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,j(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function U(t){var e,r,n,i;for(r=[],i=0,n=x.exec(t);n;)(e=t.slice(i,x.lastIndex-n[0].length)).length&&r.push(e),r.push(I(n)),i=x.lastIndex,n=x.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function N(t){return"string"==typeof t}function R(t){var e,r;if(!N(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[U(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return T.apply(null,e)}var B,L=Object.prototype,V=L.toString,F=L.__defineGetter__,C=L.__defineSetter__,M=L.__lookupGetter__,k=L.__lookupSetter__;B=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(M.call(t,e)||k.call(t,e)?(n=t.__proto__,t.__proto__=L,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(t,e,r.get),a&&C&&C.call(t,e,r.set),t};var P=B;function G(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function D(t){return"boolean"==typeof t}function Y(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var $=Y();function J(){return $&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function X(t,e){return null!=t&&z.call(t,e)}var Z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof Z?Z.toStringTag:"",q=J()?function(t){var e,r,n;if(null==t)return W.call(t);r=t[H],e=X(t,H);try{t[H]=void 0}catch(e){return W.call(t)}return n=W.call(t),e?t[H]=r:delete t[H],n}:function(t){return W.call(t)},K=Boolean,Q=Boolean.prototype.toString,tt=J();function et(t){return"object"==typeof t&&(t instanceof K||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===q(t)))}function rt(t){return D(t)||et(t)}function nt(){return new Function("return this;")()}G(rt,"isPrimitive",D),G(rt,"isObject",et);var it="object"==typeof self?self:null,ot="object"==typeof window?window:null,at="object"==typeof globalThis?globalThis:null;function ut(t){if(arguments.length){if(!D(t))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return nt()}if(at)return at;if(it)return it;if(ot)return ot;throw new Error("unexpected error. Unable to resolve global object.")}var ft=ut();function lt(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function ct(t,e,r){P(t,e,{configurable:!1,enumerable:!1,get:r})}var st={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function pt(t){return Math.abs(t)}var yt=Boolean;function ht(t,e){return e&&(2===t||3===t)}function gt(t,e){return e&&(1===t||3===t)}function bt(t,e,r){var n,i,o,a,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(a=e[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]}function dt(t){return t.re}function mt(t){return t.im}function _t(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function vt(t){return"string"==typeof t}!function(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}(bt,"assign",(function(t,e,r,n){var i,o,a,u,f;for(i=t.length,o=r,a=r,f=0;f<i;f++){if(0===t[f])return n[0]=r,n[1]=r,n;(u=e[f])>0?a+=u*(t[f]-1):u<0&&(o+=u*(t[f]-1))}return n[0]=o,n[1]=a,n}));var wt=Y();function St(){return wt&&"symbol"==typeof Symbol.toStringTag}var Ot=Object.prototype.toString,jt="function"==typeof Symbol?Symbol:void 0,At="function"==typeof jt?jt.toStringTag:"",Et=St()?function(t){var e,r,n;if(null==t)return Ot.call(t);r=t[At],e=X(t,At);try{t[At]=void 0}catch(e){return Ot.call(t)}return n=Ot.call(t),e?t[At]=r:delete t[At],n}:function(t){return Ot.call(t)},Tt=String.prototype.valueOf,xt=St();function It(t){return"object"==typeof t&&(t instanceof String||(xt?function(t){try{return Tt.call(t),!0}catch(t){return!1}}(t):"[object String]"===Et(t)))}function Ut(t){return vt(t)||It(t)}_t(Ut,"isPrimitive",vt),_t(Ut,"isObject",It);var Nt=/[-\/\\^$*+?.()|[\]{}]/g,Rt=/./,Bt=ut(),Lt=Bt.document&&Bt.document.childNodes,Vt=Int8Array,Ft=Y(),Ct=Object.prototype.toString,Mt="function"==typeof Symbol?Symbol:void 0,kt="function"==typeof Mt?Mt.toStringTag:"",Pt=Ft&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return Ct.call(t);r=t[kt],e=X(t,kt);try{t[kt]=void 0}catch(e){return Ct.call(t)}return n=Ct.call(t),e?t[kt]=r:delete t[kt],n}:function(t){return Ct.call(t)};function Gt(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function Dt(){return/^\s*function\s*([^(]*)/i}var Yt=/^\s*function\s*([^(]*)/i;Gt(Dt,"REGEXP",Yt);var $t=Y(),Jt=Object.prototype.toString,Wt="function"==typeof Symbol?Symbol:void 0,zt="function"==typeof Wt?Wt.toStringTag:"",Xt=$t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return Jt.call(t);r=t[zt],e=X(t,zt);try{t[zt]=void 0}catch(e){return Jt.call(t)}return n=Jt.call(t),e?t[zt]=r:delete t[zt],n}:function(t){return Jt.call(t)},Zt=Array.isArray?Array.isArray:function(t){return"[object Array]"===Xt(t)};function Ht(t){return null!==t&&"object"==typeof t}function qt(t){var e,r,n,i;if(("Object"===(r=Pt(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Yt.exec(n.toString()))return e[1]}return Ht(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}Gt(Ht,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Zt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Ht));var Kt="function"==typeof Rt||"object"==typeof Vt||"function"==typeof Lt?function(t){return qt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?qt(t).toLowerCase():e},Qt=Y();function te(){return Qt&&"symbol"==typeof Symbol.toStringTag}var ee=Object.prototype.toString,re="function"==typeof Symbol?Symbol:void 0,ne="function"==typeof re?re.toStringTag:"",ie=te()?function(t){var e,r,n;if(null==t)return ee.call(t);r=t[ne],e=X(t,ne);try{t[ne]=void 0}catch(e){return ee.call(t)}return n=ee.call(t),e?t[ne]=r:delete t[ne],n}:function(t){return ee.call(t)},oe=RegExp.prototype.exec,ae=te();function ue(t){return"object"==typeof t&&(t instanceof RegExp||(ae?function(t){try{return oe.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===ie(t)))}function fe(t,e,r){if(!vt(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));if(vt(e))e=new RegExp(function(t){var e,r;if(!vt(t))throw new TypeError(R("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(Nt,"\\$&"):(e=(e=t.substring(1,r)).replace(Nt,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!ue(e))throw new TypeError(R("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!vt(r)&&"function"!==Kt(r))throw new TypeError(R("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var le,ce={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"},se=Y(),pe=Object.prototype.toString,ye="function"==typeof Symbol?Symbol:void 0,he="function"==typeof ye?ye.toStringTag:"",ge=se&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return pe.call(t);r=t[he],e=X(t,he);try{t[he]=void 0}catch(e){return pe.call(t)}return n=pe.call(t),e?t[he]=r:delete t[he],n}:function(t){return pe.call(t)},be="function"==typeof Uint8Array,de="function"==typeof Uint8Array?Uint8Array:null,me="function"==typeof Uint8Array?Uint8Array:void 0;le=function(){var t,e,r;if("function"!=typeof de)return!1;try{e=new de(e=[1,3.14,-3.14,256,257]),r=e,t=(be&&r instanceof Uint8Array||"[object Uint8Array]"===ge(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?me:function(){throw new Error("not implemented")};var _e,ve=le,we=Y(),Se=Object.prototype.toString,Oe="function"==typeof Symbol?Symbol:void 0,je="function"==typeof Oe?Oe.toStringTag:"",Ae=we&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return Se.call(t);r=t[je],e=X(t,je);try{t[je]=void 0}catch(e){return Se.call(t)}return n=Se.call(t),e?t[je]=r:delete t[je],n}:function(t){return Se.call(t)},Ee="function"==typeof Uint16Array,Te="function"==typeof Uint16Array?Uint16Array:null,xe="function"==typeof Uint16Array?Uint16Array:void 0;_e=function(){var t,e,r;if("function"!=typeof Te)return!1;try{e=new Te(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Ee&&r instanceof Uint16Array||"[object Uint16Array]"===Ae(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?xe:function(){throw new Error("not implemented")};var Ie,Ue={uint16:_e,uint8:ve};(Ie=new Ue.uint16(1))[0]=4660;var Ne,Re=52===new Ue.uint8(Ie.buffer)[0],Be=Y(),Le=Object.prototype.toString,Ve="function"==typeof Symbol?Symbol:void 0,Fe="function"==typeof Ve?Ve.toStringTag:"",Ce=Be&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return Le.call(t);r=t[Fe],e=X(t,Fe);try{t[Fe]=void 0}catch(e){return Le.call(t)}return n=Le.call(t),e?t[Fe]=r:delete t[Fe],n}:function(t){return Le.call(t)},Me="function"==typeof ArrayBuffer,ke=Y(),Pe=Object.prototype.toString,Ge="function"==typeof Symbol?Symbol:void 0,De="function"==typeof Ge?Ge.toStringTag:"",Ye=ke&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return Pe.call(t);r=t[De],e=X(t,De);try{t[De]=void 0}catch(e){return Pe.call(t)}return n=Pe.call(t),e?t[De]=r:delete t[De],n}:function(t){return Pe.call(t)},$e="function"==typeof Float64Array,Je="function"==typeof Float64Array?Float64Array:null,We="function"==typeof Float64Array?Float64Array:void 0;Ne=function(){var t,e,r;if("function"!=typeof Je)return!1;try{e=new Je([1,3.14,-3.14,NaN]),r=e,t=($e&&r instanceof Float64Array||"[object Float64Array]"===Ye(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?We:function(){throw new Error("not implemented")};var ze,Xe=Ne,Ze="function"==typeof ArrayBuffer?ArrayBuffer:null,He="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ze=function(){var t,e,r,n;if("function"!=typeof Ze)return!1;try{r=new Ze(16),n=r,(t=(Me&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===Ce(n))&&"function"==typeof Ze.isView)&&((e=new Xe(r))[0]=-3.14,e[1]=NaN,t=t&&Ze.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?He:function(){throw new Error("not implemented")};var qe,Ke=ze,Qe=Y(),tr=Object.prototype.toString,er="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof er?er.toStringTag:"",nr=Qe&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return tr.call(t);r=t[rr],e=X(t,rr);try{t[rr]=void 0}catch(e){return tr.call(t)}return n=tr.call(t),e?t[rr]=r:delete t[rr],n}:function(t){return tr.call(t)},ir="function"==typeof DataView,or="function"==typeof DataView?DataView:null,ar="function"==typeof DataView?DataView:void 0;qe=function(){var t,e,r,n;if("function"!=typeof or)return!1;try{r=new Ke(24),e=new or(r,8),n=e,(t=(ir&&n instanceof DataView||"[object DataView]"===nr(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?ar:function(){throw new Error("not implemented")};var ur=qe,fr="function"==typeof BigInt?BigInt:void 0,lr={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function cr(){var t;return 0===arguments.length?lr.all.slice():(t=lr[arguments[0]])?t.slice():[]}function sr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function pr(t,e,r){P(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function yr(t){return Object.keys(Object(t))}var hr,gr=void 0!==Object.keys,br=Y(),dr=Object.prototype.toString,mr="function"==typeof Symbol?Symbol:void 0,_r="function"==typeof mr?mr.toStringTag:"",vr=br&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n;if(null==t)return dr.call(t);r=t[_r],e=X(t,_r);try{t[_r]=void 0}catch(e){return dr.call(t)}return n=dr.call(t),e?t[_r]=r:delete t[_r],n}:function(t){return dr.call(t)};function wr(t){return"[object Arguments]"===vr(t)}hr=function(){return wr(arguments)}();var Sr=hr;function Or(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function jr(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function Ar(t){return"number"==typeof t}var Er=Y();function Tr(){return Er&&"symbol"==typeof Symbol.toStringTag}var xr=Object.prototype.toString,Ir="function"==typeof Symbol?Symbol:void 0,Ur="function"==typeof Ir?Ir.toStringTag:"",Nr=Tr()?function(t){var e,r,n;if(null==t)return xr.call(t);r=t[Ur],e=X(t,Ur);try{t[Ur]=void 0}catch(e){return xr.call(t)}return n=xr.call(t),e?t[Ur]=r:delete t[Ur],n}:function(t){return xr.call(t)},Rr=Number,Br=Rr.prototype.toString,Lr=Tr();function Vr(t){return"object"==typeof t&&(t instanceof Rr||(Lr?function(t){try{return Br.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Nr(t)))}function Fr(t){return Ar(t)||Vr(t)}function Cr(t){return t!=t}function Mr(t){return Ar(t)&&Cr(t)}function kr(t){return Vr(t)&&Cr(t.valueOf())}function Pr(t){return Mr(t)||kr(t)}function Gr(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}jr(Fr,"isPrimitive",Ar),jr(Fr,"isObject",Vr),Or(Pr,"isPrimitive",Mr),Or(Pr,"isObject",kr);var Dr=Number.POSITIVE_INFINITY,Yr=Rr.NEGATIVE_INFINITY,$r=Math.floor;function Jr(t){return $r(t)===t}function Wr(t){return t<Dr&&t>Yr&&Jr(t)}function zr(t){return Ar(t)&&Wr(t)}function Xr(t){return Vr(t)&&Wr(t.valueOf())}function Zr(t){return zr(t)||Xr(t)}Gr(Zr,"isPrimitive",zr),Gr(Zr,"isObject",Xr);var Hr=Object.prototype.propertyIsEnumerable,qr=!Hr.call("beep","0");function Kr(t,e){var r;return null!=t&&(!(r=Hr.call(t,e))&&qr&&Ut(t)?!Mr(e=+e)&&zr(e)&&e>=0&&e<t.length:r)}var Qr=Sr?wr:function(t){return null!==t&&"object"==typeof t&&!Zt(t)&&"number"==typeof t.length&&Jr(t.length)&&t.length>=0&&t.length<=4294967295&&X(t,"callee")&&!Kr(t,"callee")},tn=Array.prototype.slice;function en(t){return null!==t&&"object"==typeof t}!function(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}(en,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Zt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(en));var rn=Kr((function(){}),"prototype"),nn=!Kr({toString:null},"toString");function on(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Jr(t.length)&&t.length>=0&&t.length<=9007199254740991}function an(t,e,r){var n,i;if(!on(t)&&!vt(t))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!zr(r))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Pr(e)){for(;i<n;i++)if(Pr(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function un(t){return t.constructor&&t.constructor.prototype===t}var fn,ln=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],cn="undefined"==typeof window?void 0:window,sn=function(){var t;if("undefined"===Kt(cn))return!1;for(t in cn)try{-1===an(ln,t)&&X(cn,t)&&null!==cn[t]&&"object"===Kt(cn[t])&&un(cn[t])}catch(t){return!0}return!1}(),pn="undefined"!=typeof window,yn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];fn=gr?function(){return 2!==(yr(arguments)||"").length}(1,2)?function(t){return Qr(t)?yr(tn.call(t)):yr(t)}:yr:function(t){var e,r,n,i,o,a,u;if(i=[],Qr(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!X(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof t)&&!en(t))return i;r=rn&&n}for(o in t)r&&"prototype"===o||!X(t,o)||i.push(String(o));if(nn)for(e=function(t){if(!1===pn&&!sn)return un(t);try{return un(t)}catch(t){return!1}}(t),u=0;u<yn.length;u++)a=yn[u],e&&"constructor"===a||!X(t,a)||i.push(String(a));return i};var hn=fn;!function(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}(cr,"enum",sr),function(t,e){var r,n,i;for(r=hn(e),i=0;i<r.length;i++)pr(t,n=r[i],e[n])}(cr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var gn=["row-major","column-major"];function bn(){return{"row-major":1,"column-major":2}}!function(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}((function(){return gn.slice()}),"enum",bn);var dn=["throw","normalize","clamp","wrap"];function mn(){return{throw:1,clamp:2,wrap:3,normalize:4}}!function(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}((function(){return dn.slice()}),"enum",mn);var _n={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},vn={"row-major":1,"column-major":2},wn={throw:1,clamp:2,wrap:3,normalize:4},Sn=new ve(8),On=new ur(Sn.buffer);function jn(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<Sn.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=$r(t/4294967296),Re?(On.setUint32(0,o,Re),On.setUint32(4,i,Re)):(On.setUint32(0,i,Re),On.setUint32(4,o,Re)),a=0;a<Sn.length;a++)e[n]=Sn[a],n+=r;return e}!function(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}((function(t){var e,r,n,i;return e=new ve(8),0===t||(i=(4294967295&t)>>>0,n=$r(t/4294967296),r=new ur(e.buffer),Re?(r.setUint32(0,i,Re),r.setUint32(4,n,Re)):(r.setUint32(0,n,Re),r.setUint32(4,i,Re))),e}),"assign",jn);var An={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},En={"row-major":1,"column-major":2},Tn={throw:1,clamp:2,wrap:3,normalize:4};function xn(t,e,r,n,i,o){var a,u,f,l,c;if(!(this instanceof xn))return new xn(t,e,r,n,i,o);for(l=1,c=0;c<r.length;c++)l*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*l:null,this._byteLength=u,this._bytesPerElement=function(t){return st[t]||null}(t),this._buffer=e,this._dtype=t,this._length=l,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=yt(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=bt(e,r,n))[1]-o[0]+1}(l,r,n,i,this._iterationOrder),f=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=pt(t[0]),a=1;a<r;a++){if(o=pt(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:gt(f,a),COLUMN_MAJOR_CONTIGUOUS:ht(f,a),READONLY:!1},this.__meta_dataview__=null,this}function In(t){return function(t){return t instanceof xn||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length}return lt(xn,"name","ndarray"),ct(xn.prototype,"byteLength",(function(){return this._byteLength})),ct(xn.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),ct(xn.prototype,"data",(function(){return this._buffer})),ct(xn.prototype,"dtype",(function(){return this._dtype})),ct(xn.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),ct(xn.prototype,"length",(function(){return this._length})),ct(xn.prototype,"ndims",(function(){return this._ndims})),ct(xn.prototype,"offset",(function(){return this._offset})),ct(xn.prototype,"order",(function(){return this._order})),ct(xn.prototype,"shape",(function(){return this._shape.slice()})),ct(xn.prototype,"strides",(function(){return this._strides.slice()})),lt(xn.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),lt(xn.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),lt(xn.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),lt(xn.prototype,"iset",(function(t,e){var r,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),lt(xn.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=dt(i=this.iget(o))+", "+mt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=dt(i=this.iget(o))+", "+mt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=dt(i=this.iget(this._length-1-o))+", "+mt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=fe(ce[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),lt(xn.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(dt(r),mt(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),lt(xn.prototype,"__array_meta_dataview__","function"==typeof ft.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ft.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,u,f,l,c,s,p,y;if(f=this._mode||"throw",a=this._submode||[f],r=33+16*(s=this._ndims)+(p=a.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new ur(new Ke(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,l=0,u.setInt8(l,Re?1:0),l+=1,u.setInt16(l,_n[n],Re),l+=2,u.setBigInt64(l,fr(s),Re),c=8*s,l+=8,y=0;y<s;y++)u.setBigInt64(l,fr(i[y]),Re),u.setBigInt64(l+c,fr(o[y]*t),Re),l+=8;for(l+=c,u.setBigInt64(l,fr(this._offset*t),Re),l+=8,u.setInt8(l,vn[this._order]),l+=1,u.setInt8(l,wn[f]),l+=1,u.setBigInt64(l,fr(p),Re),l+=8,y=0;y<p;y++)u.setInt8(l,wn[a[y]]),l+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(l,e,Re),this.__meta_dataview__=u,u}:function(){var t,e,r,n,i,o,a,u,f,l,c,s,p,y,h;if(l=this._mode||"throw",u=this._submode||[l],n=33+16*(p=this._ndims)+(y=u.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new ur(new Ke(n)),e=new ve(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,f.setInt8(c,Re?1:0),c+=1,f.setInt16(c,An[i],Re),jn(p,e,1,c+=2),s=8*p,c+=8,h=0;h<p;h++)jn(o[h],e,1,c),jn(a[h]*t,e,1,c+s),c+=8;for(c+=s,jn(this._offset*t,e,1,c),c+=8,f.setInt8(c,En[this._order]),c+=1,f.setInt8(c,Tn[l]),jn(y,e,1,c+=1),c+=8,h=0;h<y;h++)f.setInt8(c,Tn[u[h]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(c,r,Re),this.__meta_dataview__=f,f}),function(t){var e,r,n;if(!In(t))return!1;if((e=t.shape[0])!==t.shape[1])return!0;for(r=0;r<e;r++)for(n=0;n<r;n++)if(t.get(r,n)!==t.get(n,r))return!0;return!1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isNonSymmetricMatrix=e();
//# sourceMappingURL=browser.js.map

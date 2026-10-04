"use strict";var u=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=u(function(p,a){
var f=require('@stdlib/assert-is-matrix-like/dist');function n(t){var r,e,i;if(!f(t))return!1;if(r=t.shape[0],r!==t.shape[1])return!0;for(e=0;e<r;e++)for(i=0;i<e;i++)if(t.get(e,i)!==t.get(i,e))return!0;return!1}a.exports=n
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

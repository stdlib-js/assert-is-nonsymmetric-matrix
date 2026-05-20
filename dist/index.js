"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(p,a){
var f=require('@stdlib/assert-is-matrix-like/dist');function n(e){var r,t,i;if(!f(e))return!1;if(r=e.shape[0],r!==e.shape[1])return!0;for(t=0;t<r;t++)for(i=0;i<t;i++)if(e.get(t,i)!==e.get(i,t))return!0;return!1}a.exports=n
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

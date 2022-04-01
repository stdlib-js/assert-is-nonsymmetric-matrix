// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-matrix-like@esm/index.mjs";var e=r;var t=function(r){var t,s,i;if(!e(r))return!1;if((t=r.shape[0])!==r.shape[1])return!0;for(s=0;s<t;s++)for(i=0;i<s;i++)if(r.get(s,i)!==r.get(i,s))return!0;return!1};export{t as default};
//# sourceMappingURL=index.mjs.map

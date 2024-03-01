// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-matrix-like@v0.2.1-esm/index.mjs";function e(e){var t,s,i;if(!r(e))return!1;if((t=e.shape[0])!==e.shape[1])return!0;for(s=0;s<t;s++)for(i=0;i<s;i++)if(e.get(s,i)!==e.get(i,s))return!0;return!1}export{e as default};
//# sourceMappingURL=index.mjs.map

const i=/^(\d|\.)+$/,n=/(\d|\.)+/;function f(r,{c:u=1,offset:t=0,attachPx:s=!0}={}){if(typeof r=="number"){const e=(r+t)*u;return e===0?"0":`${e}px`}else if(typeof r=="string")if(i.test(r)){const e=(Number(r)+t)*u;return s?e===0?"0":`${e}px`:`${e}`}else{const e=n.exec(r);return e?r.replace(n,String((Number(e[0])+t)*u)):r}return r}export{f};
//# sourceMappingURL=format-length-B-p6aW7q.js.map

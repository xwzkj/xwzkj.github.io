import{Y as r,Z as a}from"./index-CXOPteNE.js";const d="@@coContext",u={mounted(c,{value:t,modifiers:n}){c[d]={handler:void 0},typeof t=="function"&&(c[d].handler=t,r("clickoutside",c,t,{capture:n.capture}))},updated(c,{value:t,modifiers:n}){const e=c[d];typeof t=="function"?e.handler?e.handler!==t&&(a("clickoutside",c,e.handler,{capture:n.capture}),e.handler=t,r("clickoutside",c,t,{capture:n.capture})):(c[d].handler=t,r("clickoutside",c,t,{capture:n.capture})):e.handler&&(a("clickoutside",c,e.handler,{capture:n.capture}),e.handler=void 0)},unmounted(c,{modifiers:t}){const{handler:n}=c[d];n&&a("clickoutside",c,n,{capture:t.capture}),c[d].handler=void 0}};export{u as c};

import{d as v,t as g,x as l,n as d,A as m,e as b,u as _,g as a,E as x,aw as $,l as u,m as C}from"./index-CZd9BBRm.js";const z=/^(\d|\.)+$/,p=/(\d|\.)+/;function R(e,{c:n=1,offset:o=0,attachPx:r=!0}={}){if(typeof e=="number"){const t=(e+o)*n;return t===0?"0":`${t}px`}else if(typeof e=="string")if(z.test(e)){const t=(Number(e)+o)*n;return r?t===0?"0":`${t}px`:`${t}`}else{const t=p.exec(e);return t?e.replace(p,String((Number(t[0])+o)*n)):e}return e}const D=e=>{const{textColorBase:n,opacity1:o,opacity2:r,opacity3:t,opacity4:i,opacity5:s}=e;return{color:n,opacity1Depth:o,opacity2Depth:r,opacity3Depth:t,opacity4Depth:i,opacity5Depth:s}},N={name:"Icon",common:v,self:D},S=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),w=Object.assign(Object.assign({},m.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),O=b({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:w,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=_(e),r=m("Icon","-icon",S,N,e,n),t=a(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:c},self:f}=r.value;if(s!==void 0){const{color:h,[`opacity${s}Depth`]:y}=f;return{"--n-bezier":c,"--n-color":h,"--n-opacity":y}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),i=o?x("icon",a(()=>`${e.depth||"d"}`),t,e):void 0;return{mergedClsPrefix:n,mergedStyle:a(()=>{const{size:s,color:c}=e;return{fontSize:R(s),color:c}}),cssVars:o?void 0:t,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:n,depth:o,mergedClsPrefix:r,component:t,onRender:i,themeClass:s}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),u("i",C(this.$attrs,{role:"img",class:[`${r}-icon`,s,{[`${r}-icon--depth`]:o,[`${r}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),t?u(t):this.$slots)}}),P=(e,n)=>{const o=e.__vccOpts||e;for(const[r,t]of n)o[r]=t;return o};export{O as N,P as _,R as f};
import{j as b,o as C,a3 as P,c as g,x as $,am as a,a0 as x,Z as E,aT as L,aB as V,w as M,aU as W,B as v,C as w,u as m,P as j,S as k,L as H}from"./index-cDigE0aY.js";import{u as D,p as X,m as Y}from"./musicList-B5U-VQDf.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c,a as B,b as p,d as h,e as K,f as z,u as T,g as U,h as Z,i as A}from"./light-BgwStUPB.js";import"./isArguments-DxZ9DPgA.js";function F(){const e=b(!1);return C(()=>{e.value=!0}),P(e)}function G(e,n){return g(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const J=$({name:"BaseIconSwitchTransition",setup(e,{slots:n}){const t=F();return()=>a(x,{name:"icon-switch-transition",appear:t.value},n)}}),{cubicBezierEaseInOut:Q}=B;function S({originalTransform:e="",left:n=0,top:t=0,transition:s=`all .3s ${Q} !important`}={}){return[c("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:n,top:t,opacity:0}),c("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:n,top:t,opacity:1}),c("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:t,transition:s})]}const ee=c([c("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),p("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[h("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[S()]),h("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[S({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),h("container",`
 animation: rotator 3s linear infinite both;
 `,[h("icon",`
 height: 1em;
 width: 1em;
 `)])])]),y="1.6s",te={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},ne=$({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},te),setup(e){D("-base-loading",ee,E(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:n,strokeWidth:t,stroke:s,scale:o}=this,i=n/o;return a("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},a(J,null,{default:()=>this.show?a("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},a("div",{class:`${e}-base-loading__container`},a("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},a("g",null,a("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${i} ${i};270 ${i} ${i}`,begin:"0s",dur:y,fill:"freeze",repeatCount:"indefinite"}),a("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:i,cy:i,r:n-t/2,"stroke-dasharray":5.67*n,"stroke-dashoffset":18.48*n},a("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`,begin:"0s",dur:y,fill:"freeze",repeatCount:"indefinite"}),a("animate",{attributeName:"stroke-dashoffset",values:`${5.67*n};${1.42*n};${5.67*n}`,begin:"0s",dur:y,fill:"freeze",repeatCount:"indefinite"})))))):a("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:_}=B;function ie({name:e="fade-in",enterDuration:n="0.2s",leaveDuration:t="0.2s",enterCubicBezier:s=_,leaveCubicBezier:o=_}={}){return[c(`&.${e}-transition-enter-active`,{transition:`all ${n} ${s}!important`}),c(`&.${e}-transition-leave-active`,{transition:`all ${t} ${o}!important`}),c(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),c(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const se=e=>{const{opacityDisabled:n,heightTiny:t,heightSmall:s,heightMedium:o,heightLarge:i,heightHuge:l,primaryColor:d,fontSize:r}=e;return{fontSize:r,textColor:d,sizeTiny:t,sizeSmall:s,sizeMedium:o,sizeLarge:i,sizeHuge:l,color:d,opacitySpinning:n}},ae={name:"Spin",common:K,self:se},oe=c([c("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),p("spin-container",`
 position: relative;
 `,[p("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ie()])]),p("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),p("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[z("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),p("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),p("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[z("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),re={small:20,medium:18,large:16},le=Object.assign(Object.assign({},T.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),ce=$({name:"Spin",props:le,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=U(e),s=T("Spin","-spin",oe,ae,e,n),o=g(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:u},self:f}=s.value,{opacitySpinning:N,color:R,textColor:O}=f,I=typeof r=="number"?X(r):f[A("size",r)];return{"--n-bezier":u,"--n-opacity-spinning":N,"--n-size":I,"--n-color":R,"--n-text-color":O}}),i=t?Z("spin",g(()=>{const{size:r}=e;return typeof r=="number"?String(r):r[0]}),o,e):void 0,l=G(e,["spinning","show"]),d=b(!1);return L(r=>{let u;if(l.value){const{delay:f}=e;if(f){u=window.setTimeout(()=>{d.value=!0},f),r(()=>{clearTimeout(u)});return}}d.value=l.value}),{mergedClsPrefix:n,active:d,mergedStrokeWidth:g(()=>{const{strokeWidth:r}=e;if(r!==void 0)return r;const{size:u}=e;return re[typeof u=="number"?"medium":u]}),cssVars:t?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,n;const{$slots:t,mergedClsPrefix:s,description:o}=this,i=t.icon&&this.rotate,l=(o||t.description)&&a("div",{class:`${s}-spin-description`},o||((e=t.description)===null||e===void 0?void 0:e.call(t))),d=t.icon?a("div",{class:[`${s}-spin-body`,this.themeClass]},a("div",{class:[`${s}-spin`,i&&`${s}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),l):a("div",{class:[`${s}-spin-body`,this.themeClass]},a(ne,{clsPrefix:s,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),l);return(n=this.onRender)===null||n===void 0||n.call(this),t.default?a("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${s}-spin-content`,this.active&&`${s}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),a(x,{name:"fade-in-transition"},{default:()=>this.active?d:null})):d}}),de={key:1,class:"loading-center"},ue={__name:"search",props:["keyword"],setup(e){let n=V(),t=e,s=b("");M(t,l=>{o()},{deep:!0}),C(()=>{o()});async function o(){s.value=null;let l=await W(t.keyword);s.value=l.data.result.songs}function i(l){n.push({name:"player",query:{id:l}})}return(l,d)=>(v(),w("div",null,[m(s)?(v(),j(Y,{key:0,value:m(s),nameOnClick:i},null,8,["value"])):k("",!0),m(s)?k("",!0):(v(),w("div",de,[H(m(ce),{size:"large"})]))]))}},ve=q(ue,[["__scopeId","data-v-a3368aa6"]]);export{ve as default};

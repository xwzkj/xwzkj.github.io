import{r as E,bt as Q,w as A,o as q,a as V,bl as O,f as w,O as I,P as $,aX as W,_ as mt,W as xt,ap as bt,e as j,p as vt,bu as yt,k as nt,bv as wt,D as Y,g as $t,l as k,bw as Mt,bx as gt,L as zt,B as It}from"./index-DFzFKJ1X.js";let S=[];const ot=new WeakMap;function Bt(){S.forEach(n=>n(...ot.get(n))),S=[]}function At(n,...t){ot.set(n,t),!S.includes(n)&&S.push(n)===1&&requestAnimationFrame(Bt)}function Ct(n){const t=E(!!n.value);if(t.value)return Q(t);const e=A(n,o=>{o&&(t.value=!0,e())});return Q(t)}const Et=typeof window<"u";let B,C;const Ot=()=>{var n,t;B=Et?(t=(n=document)===null||n===void 0?void 0:n.fonts)===null||t===void 0?void 0:t.ready:void 0,C=!1,B!==void 0?B.then(()=>{C=!0}):C=!0};Ot();function Zt(n){if(C)return;let t=!1;q(()=>{C||B==null||B.then(()=>{t||n()})}),V(()=>{t=!0})}const Xt=O("n-internal-select-menu-body"),Yt=O("n-modal-body"),kt=O("n-drawer-body"),Qt=O("n-drawer"),St=O("n-popover-body"),rt="__disabled__";function it(n){const t=w(Yt,null),e=w(kt,null),o=w(St,null),r=w(Xt,null),p=E();if(typeof document<"u"){p.value=document.fullscreenElement;const d=()=>{p.value=document.fullscreenElement};q(()=>{I("fullscreenchange",document,d)}),V(()=>{$("fullscreenchange",document,d)})}return W(()=>{var d;const{to:f}=n;return f!==void 0?f===!1?rt:f===!0?p.value||"body":f:t!=null&&t.value?(d=t.value.$el)!==null&&d!==void 0?d:t.value:e!=null&&e.value?e.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:f??(p.value||"body")})}it.tdkey=rt;it.propTo={type:[String,Object,Boolean],default:void 0};function K(n,t,e="default"){const o=t[e];if(o===void 0)throw new Error(`[vueuc/${n}]: slot[${e}] is empty.`);return o()}function P(n,t=!0,e=[]){return n.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&e.push(mt(String(o)));return}if(Array.isArray(o)){P(o,t,e);return}if(o.type===xt){if(o.children===null)return;Array.isArray(o.children)&&P(o.children,t,e)}else o.type!==bt&&e.push(o)}}),e}function N(n,t,e="default"){const o=t[e];if(o===void 0)throw new Error(`[vueuc/${n}]: slot[${e}] is empty.`);const r=P(o());if(r.length===1)return r[0];throw new Error(`[vueuc/${n}]: slot[${e}] should have exactly one child.`)}let y=null;function st(){if(y===null&&(y=document.getElementById("v-binder-view-measurer"),y===null)){y=document.createElement("div"),y.id="v-binder-view-measurer";const{style:n}=y;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(y)}return y.getBoundingClientRect()}function Vt(n,t){const e=st();return{top:t,left:n,height:0,width:0,right:e.width-n,bottom:e.height-t}}function F(n){const t=n.getBoundingClientRect(),e=st();return{left:t.left-e.left,top:t.top-e.top,bottom:e.height+e.top-t.bottom,right:e.width+e.left-t.right,width:t.width,height:t.height}}function jt(n){return n.nodeType===9?null:n.parentNode}function lt(n){if(n===null)return null;const t=jt(n);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:e,overflowX:o,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(e+r+o))return t}return lt(t)}const Nt=j({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var t;vt("VBinder",(t=yt())===null||t===void 0?void 0:t.proxy);const e=w("VBinder",null),o=E(null),r=s=>{o.value=s,e&&n.syncTargetWithParent&&e.setTargetRef(s)};let p=[];const d=()=>{let s=o.value;for(;s=lt(s),s!==null;)p.push(s);for(const x of p)I("scroll",x,b,!0)},f=()=>{for(const s of p)$("scroll",s,b,!0);p=[]},l=new Set,m=s=>{l.size===0&&d(),l.has(s)||l.add(s)},v=s=>{l.has(s)&&l.delete(s),l.size===0&&f()},b=()=>{At(i)},i=()=>{l.forEach(s=>s())},u=new Set,h=s=>{u.size===0&&I("resize",window,c),u.has(s)||u.add(s)},a=s=>{u.has(s)&&u.delete(s),u.size===0&&$("resize",window,c)},c=()=>{u.forEach(s=>s())};return V(()=>{$("resize",window,c),f()}),{targetRef:o,setTargetRef:r,addScrollListener:m,removeScrollListener:v,addResizeListener:h,removeResizeListener:a}},render(){return K("binder",this.$slots)}}),Rt=j({name:"Target",setup(){const{setTargetRef:n,syncTarget:t}=w("VBinder");return{syncTarget:t,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:t}=this;return n?nt(N("follower",this.$slots),[[t]]):N("follower",this.$slots)}}),g="@@coContext",te={mounted(n,{value:t,modifiers:e}){n[g]={handler:void 0},typeof t=="function"&&(n[g].handler=t,I("clickoutside",n,t,{capture:e.capture}))},updated(n,{value:t,modifiers:e}){const o=n[g];typeof t=="function"?o.handler?o.handler!==t&&($("clickoutside",n,o.handler,{capture:e.capture}),o.handler=t,I("clickoutside",n,t,{capture:e.capture})):(n[g].handler=t,I("clickoutside",n,t,{capture:e.capture})):o.handler&&($("clickoutside",n,o.handler,{capture:e.capture}),o.handler=void 0)},unmounted(n,{modifiers:t}){const{handler:e}=n[g];e&&$("clickoutside",n,e,{capture:t.capture}),n[g].handler=void 0}};function Lt(n,t){console.error(`[vdirs/${n}]: ${t}`)}class Tt{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,e){const{elementZIndex:o}=this;if(e!==void 0){t.style.zIndex=`${e}`,o.delete(t);return}const{nextZIndex:r}=this;o.has(t)&&o.get(t)+1===this.nextZIndex||(t.style.zIndex=`${r}`,o.set(t,r),this.nextZIndex=r+1,this.squashState())}unregister(t,e){const{elementZIndex:o}=this;o.has(t)?o.delete(t):e===void 0&&Lt("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((e,o)=>e[1]-o[1]),this.nextZIndex=2e3,t.forEach(e=>{const o=e[0],r=this.nextZIndex++;`${r}`!==o.style.zIndex&&(o.style.zIndex=`${r}`)})}}const _=new Tt,z="@@ziContext",Ft={mounted(n,t){const{value:e={}}=t,{zIndex:o,enabled:r}=e;n[z]={enabled:!!r,initialized:!1},r&&(_.ensureZIndex(n,o),n[z].initialized=!0)},updated(n,t){const{value:e={}}=t,{zIndex:o,enabled:r}=e,p=n[z].enabled;r&&!p&&(_.ensureZIndex(n,o),n[z].initialized=!0),n[z].enabled=!!r},unmounted(n,t){if(!n[z].initialized)return;const{value:e={}}=t,{zIndex:o}=e;_.unregister(n,o)}},{c:Z}=wt(),_t="vueuc-style",Dt=j({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:Ct(Y(n,"show")),mergedTo:$t(()=>{const{to:t}=n;return t??"body"})}},render(){return this.showTeleport?this.disabled?K("lazy-teleport",this.$slots):k(Mt,{disabled:this.disabled,to:this.mergedTo},K("lazy-teleport",this.$slots)):null}}),X={top:"bottom",bottom:"top",left:"right",right:"left"},R={start:"end",center:"center",end:"start"},D={top:"height",bottom:"height",left:"width",right:"width"},Wt={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Kt={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Pt={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},tt={top:!0,bottom:!1,left:!0,right:!1},et={top:"end",bottom:"start",left:"end",right:"start"};function qt(n,t,e,o,r,p){if(!r||p)return{placement:n,top:0,left:0};const[d,f]=n.split("-");let l=f??"center",m={top:0,left:0};const v=(u,h,a)=>{let c=0,s=0;const x=e[u]-t[h]-t[u];return x>0&&o&&(a?s=tt[h]?x:-x:c=tt[h]?x:-x),{left:c,top:s}},b=d==="left"||d==="right";if(l!=="center"){const u=Pt[n],h=X[u],a=D[u];if(e[a]>t[a]){if(t[u]+t[a]<e[a]){const c=(e[a]-t[a])/2;t[u]<c||t[h]<c?t[u]<t[h]?(l=R[f],m=v(a,h,b)):m=v(a,u,b):l="center"}}else e[a]<t[a]&&t[h]<0&&t[u]>t[h]&&(l=R[f])}else{const u=d==="bottom"||d==="top"?"left":"top",h=X[u],a=D[u],c=(e[a]-t[a])/2;(t[u]<c||t[h]<c)&&(t[u]>t[h]?(l=et[u],m=v(a,u,b)):(l=et[h],m=v(a,h,b)))}let i=d;return t[d]<e[D[d]]&&t[d]<t[X[d]]&&(i=X[d]),{placement:l!=="center"?`${i}-${l}`:i,left:m.left,top:m.top}}function Ut(n,t){return t?Kt[n]:Wt[n]}function Gt(n,t,e,o,r,p){if(p)switch(n){case"bottom-start":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left+e.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(e.top-t.top+e.height/2)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(e.top-t.top+e.height/2)}px`,left:`${Math.round(e.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left+e.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+e.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+e.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+e.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+e.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+e.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(e.top-t.top+e.height/2+o)}px`,left:`${Math.round(e.left-t.left+e.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(e.top-t.top+e.height/2+o)}px`,left:`${Math.round(e.left-t.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+e.width/2+r)}px`,transform:"translateX(-50%)"}}}const Ht=Z([Z(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Z(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Z("> *",{pointerEvents:"all"})])]),ee=j({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const t=w("VBinder"),e=W(()=>n.enabled!==void 0?n.enabled:n.show),o=E(null),r=E(null),p=()=>{const{syncTrigger:i}=n;i.includes("scroll")&&t.addScrollListener(l),i.includes("resize")&&t.addResizeListener(l)},d=()=>{t.removeScrollListener(l),t.removeResizeListener(l)};q(()=>{e.value&&(l(),p())});const f=gt();Ht.mount({id:"vueuc/binder",head:!0,anchorMetaName:_t,ssr:f}),V(()=>{d()}),Zt(()=>{e.value&&l()});const l=()=>{if(!e.value)return;const i=o.value;if(i===null)return;const u=t.targetRef,{x:h,y:a,overlap:c}=n,s=h!==void 0&&a!==void 0?Vt(h,a):F(u);i.style.setProperty("--v-target-width",`${Math.round(s.width)}px`),i.style.setProperty("--v-target-height",`${Math.round(s.height)}px`);const{width:x,minWidth:L,placement:U,internalShift:ut,flip:dt}=n;i.setAttribute("v-placement",U),c?i.setAttribute("v-overlap",""):i.removeAttribute("v-overlap");const{style:M}=i;x==="target"?M.width=`${s.width}px`:x!==void 0?M.width=x:M.width="",L==="target"?M.minWidth=`${s.width}px`:L!==void 0?M.minWidth=L:M.minWidth="";const at=F(i),pt=F(r.value),{left:G,top:H,placement:T}=qt(U,s,at,ut,dt,c),J=Ut(T,c),{left:ht,top:ft,transform:ct}=Gt(T,pt,s,H,G,c);i.setAttribute("v-placement",T),i.style.setProperty("--v-offset-left",`${Math.round(G)}px`),i.style.setProperty("--v-offset-top",`${Math.round(H)}px`),i.style.transform=`translateX(${ht}) translateY(${ft}) ${ct}`,i.style.setProperty("--v-transform-origin",J),i.style.transformOrigin=J};A(e,i=>{i?(p(),m()):d()});const m=()=>{zt().then(l).catch(i=>console.error(i))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(i=>{A(Y(n,i),l)}),["teleportDisabled"].forEach(i=>{A(Y(n,i),m)}),A(Y(n,"syncTrigger"),i=>{i.includes("resize")?t.addResizeListener(l):t.removeResizeListener(l),i.includes("scroll")?t.addScrollListener(l):t.removeScrollListener(l)});const v=It(),b=W(()=>{const{to:i}=n;if(i!==void 0)return i;v.value});return{VBinder:t,mergedEnabled:e,offsetContainerRef:r,followerRef:o,mergedTo:b,syncPosition:l}},render(){return k(Dt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,t;const e=k("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[k("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n))]);return this.zindexable?nt(e,[[Ft,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):e}})}});export{Nt as B,Dt as L,Rt as V,kt as a,ee as b,te as c,Qt as d,Yt as m,St as p,it as u,Ft as z};
//# sourceMappingURL=Follower-Dytfln3z.js.map
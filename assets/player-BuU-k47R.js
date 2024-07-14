import{M as We,_ as Ne,S as De,p as Ue,a as je,b as Ae,c as Xe,d as Ye,e as Ve}from"./marqueePlus-B3h5Wfwc.js";import{_ as qe,a as Ke}from"./heart-outlined-D7XMHqcI.js";import{r as $,o as be,w as Z,a as K,i as Ge,b as Je,c as Qe,d as Ze,s as et,e as ee,f as ve,g as I,u as pe,h as tt,j as ot,p as q,k as Q,v as re,l as m,T as we,m as rt,S as ye,n as s,q as G,t as x,x as E,y as W,z as nt,A as _e,B as it,C as ne,D as ie,E as st,F as O,G as at,N as lt,H as dt,I as ct,J as ut,K as P,L as J,M as c,O as _,P as d,Q as X,R as T,U as Y,V,W as se,X as ht,Y as ae,Z as mt,_ as ft,$ as gt,a0 as bt,a1 as vt,a2 as pt}from"./index-Bf3o3SW5.js";import{f as le,_ as wt,N as yt}from"./plugin-vueexport-helper-BZKo6wsw.js";import{d as te,c as _t,a as St,p as Ct,m as xt,L as zt,z as $t}from"./Follower-BnTPvjqB.js";import{F as kt}from"./index-BQ8m1GQG.js";import"./fade-in-scale-up.cssr-BNWqIrJn.js";const Bt=new WeakSet;function Rt(t){return!Bt.has(t)}let N=0,de="",ce="",ue="",he="";const me=$("0px");function Et(t){if(typeof document>"u")return;const e=document.documentElement;let o,h=!1;const a=()=>{e.style.marginRight=de,e.style.overflow=ce,e.style.overflowX=ue,e.style.overflowY=he,me.value="0px"};be(()=>{o=Z(t,p=>{if(p){if(!N){const u=window.innerWidth-e.offsetWidth;u>0&&(de=e.style.marginRight,e.style.marginRight=`${u}px`,me.value=`${u}px`),ce=e.style.overflow,ue=e.style.overflowX,he=e.style.overflowY,e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden"}h=!0,N++}else N--,N||a(),h=!1},{immediate:!0})}),K(()=>{o==null||o(),h&&(N--,N||a(),h=!1)})}const oe=$(!1),fe=()=>{oe.value=!0},ge=()=>{oe.value=!1};let A=0;const Tt=()=>(Ge&&(Je(()=>{A||(window.addEventListener("compositionstart",fe),window.addEventListener("compositionend",ge)),A++}),K(()=>{A<=1?(window.removeEventListener("compositionstart",fe),window.removeEventListener("compositionend",ge),A=0):A--})),oe),It=t=>{const{modalColor:e,textColor1:o,textColor2:h,boxShadow3:a,lineHeight:p,fontWeightStrong:u,dividerColor:w,closeColorHover:f,closeColorPressed:n,closeIconColor:k,closeIconColorHover:B,closeIconColorPressed:R,borderRadius:g,primaryColorHover:y}=t;return{bodyPadding:"16px 24px",borderRadius:g,headerPadding:"16px 24px",footerPadding:"16px 24px",color:e,textColor:h,titleTextColor:o,titleFontSize:"18px",titleFontWeight:u,boxShadow:a,lineHeight:p,headerBorderBottom:`1px solid ${w}`,footerBorderTop:`1px solid ${w}`,closeIconColor:k,closeIconColorHover:B,closeIconColorPressed:R,closeSize:"22px",closeIconSize:"18px",closeColorHover:f,closeColorPressed:n,closeBorderRadius:g,resizableTriggerColorHover:y}},Ht=Qe({name:"Drawer",common:Ze,peers:{Scrollbar:et},self:It}),Mt=ee({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(t){const e=$(!!t.show),o=$(null),h=ve(te);let a=0,p="",u=null;const w=$(!1),f=$(!1),n=I(()=>t.placement==="top"||t.placement==="bottom"),{mergedClsPrefixRef:k,mergedRtlRef:B}=pe(t),R=tt("Drawer",B,k),g=i=>{f.value=!0,a=n.value?i.clientY:i.clientX,p=document.body.style.cursor,document.body.style.cursor=n.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",M),document.body.addEventListener("mouseleave",r),document.body.addEventListener("mouseup",S)},y=()=>{u!==null&&(window.clearTimeout(u),u=null),f.value?w.value=!0:u=window.setTimeout(()=>{w.value=!0},300)},L=()=>{u!==null&&(window.clearTimeout(u),u=null),w.value=!1},{doUpdateHeight:D,doUpdateWidth:U}=h,j=i=>{const{maxWidth:v}=t;if(v&&i>v)return v;const{minWidth:C}=t;return C&&i<C?C:i},H=i=>{const{maxHeight:v}=t;if(v&&i>v)return v;const{minHeight:C}=t;return C&&i<C?C:i},M=i=>{var v,C;if(f.value)if(n.value){let z=((v=o.value)===null||v===void 0?void 0:v.offsetHeight)||0;const F=a-i.clientY;z+=t.placement==="bottom"?F:-F,z=H(z),D(z),a=i.clientY}else{let z=((C=o.value)===null||C===void 0?void 0:C.offsetWidth)||0;const F=a-i.clientX;z+=t.placement==="right"?F:-F,z=j(z),U(z),a=i.clientX}},S=()=>{f.value&&(a=0,f.value=!1,document.body.style.cursor=p,document.body.removeEventListener("mousemove",M),document.body.removeEventListener("mouseup",S),document.body.removeEventListener("mouseleave",r))},r=S;ot(()=>{t.show&&(e.value=!0)}),Z(()=>t.show,i=>{i||S()}),K(()=>{S()});const l=I(()=>{const{show:i}=t,v=[[re,i]];return t.showMask||v.push([_t,t.onClickoutside,void 0,{capture:!0}]),v});function b(){var i;e.value=!1,(i=t.onAfterLeave)===null||i===void 0||i.call(t)}return Et(I(()=>t.blockScroll&&e.value)),q(St,o),q(Ct,null),q(xt,null),{bodyRef:o,rtlEnabled:R,mergedClsPrefix:h.mergedClsPrefixRef,isMounted:h.isMountedRef,mergedTheme:h.mergedThemeRef,displayed:e,transitionName:I(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[t.placement]),handleAfterLeave:b,bodyDirectives:l,handleMousedownResizeTrigger:g,handleMouseenterResizeTrigger:y,handleMouseleaveResizeTrigger:L,isDragging:f,isHoverOnResizeTrigger:w}},render(){const{$slots:t,mergedClsPrefix:e}=this;return this.displayDirective==="show"||this.displayed||this.show?Q(m("div",{role:"none"},m(kt,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>m(we,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Q(m("div",rt(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${e}-drawer`,this.rtlEnabled&&`${e}-drawer--rtl`,`${e}-drawer--${this.placement}-placement`,this.isDragging&&`${e}-drawer--unselectable`,this.nativeScrollbar&&`${e}-drawer--native-scrollbar`]}),[this.resizable?m("div",{class:[`${e}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${e}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?m("div",{class:[`${e}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},t):m(ye,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${e}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),t)]),this.bodyDirectives)})})),[[re,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ft,cubicBezierEaseOut:Ot}=G;function Pt({duration:t="0.3s",leaveDuration:e="0.2s",name:o="slide-in-from-right"}={}){return[s(`&.${o}-transition-leave-active`,{transition:`transform ${e} ${Ft}`}),s(`&.${o}-transition-enter-active`,{transition:`transform ${t} ${Ot}`}),s(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),s(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),s(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),s(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Lt,cubicBezierEaseOut:Wt}=G;function Nt({duration:t="0.3s",leaveDuration:e="0.2s",name:o="slide-in-from-left"}={}){return[s(`&.${o}-transition-leave-active`,{transition:`transform ${e} ${Lt}`}),s(`&.${o}-transition-enter-active`,{transition:`transform ${t} ${Wt}`}),s(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),s(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),s(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),s(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Dt,cubicBezierEaseOut:Ut}=G;function jt({duration:t="0.3s",leaveDuration:e="0.2s",name:o="slide-in-from-top"}={}){return[s(`&.${o}-transition-leave-active`,{transition:`transform ${e} ${Dt}`}),s(`&.${o}-transition-enter-active`,{transition:`transform ${t} ${Ut}`}),s(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),s(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),s(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),s(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:At,cubicBezierEaseOut:Xt}=G;function Yt({duration:t="0.3s",leaveDuration:e="0.2s",name:o="slide-in-from-bottom"}={}){return[s(`&.${o}-transition-leave-active`,{transition:`transform ${e} ${At}`}),s(`&.${o}-transition-enter-active`,{transition:`transform ${t} ${Xt}`}),s(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),s(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),s(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),s(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const Vt=s([x("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Pt(),Nt(),jt(),Yt(),E("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),E("native-scrollbar",[x("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),W("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[E("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),x("drawer-content-wrapper",`
 box-sizing: border-box;
 `),x("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[E("native-scrollbar",[x("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),x("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),x("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),x("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[W("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),x("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),E("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[W("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),E("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[W("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),E("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[W("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),E("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[W("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),s("body",[s(">",[x("drawer-container",`
 position: fixed;
 `)])]),x("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[s("> *",`
 pointer-events: all;
 `)]),x("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[E("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),nt({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),qt=Object.assign(Object.assign({},_e.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Kt=ee({name:"Drawer",inheritAttrs:!1,props:qt,setup(t){const{mergedClsPrefixRef:e,namespaceRef:o,inlineThemeDisabled:h}=pe(t),a=it(),p=_e("Drawer","-drawer",Vt,Ht,t,e),u=$(t.defaultWidth),w=$(t.defaultHeight),f=ne(ie(t,"width"),u),n=ne(ie(t,"height"),w),k=I(()=>{const{placement:r}=t;return r==="top"||r==="bottom"?"":le(f.value)}),B=I(()=>{const{placement:r}=t;return r==="left"||r==="right"?"":le(n.value)}),R=r=>{const{onUpdateWidth:l,"onUpdate:width":b}=t;l&&O(l,r),b&&O(b,r),u.value=r},g=r=>{const{onUpdateHeight:l,"onUpdate:width":b}=t;l&&O(l,r),b&&O(b,r),w.value=r},y=I(()=>[{width:k.value,height:B.value},t.drawerStyle||""]);function L(r){const{onMaskClick:l,maskClosable:b}=t;b&&H(!1),l&&l(r)}function D(r){L(r)}const U=Tt();function j(r){var l;(l=t.onEsc)===null||l===void 0||l.call(t),t.show&&t.closeOnEsc&&Rt(r)&&!U.value&&H(!1)}function H(r){const{onHide:l,onUpdateShow:b,"onUpdate:show":i}=t;b&&O(b,r),i&&O(i,r),l&&!r&&O(l,r)}q(te,{isMountedRef:a,mergedThemeRef:p,mergedClsPrefixRef:e,doUpdateShow:H,doUpdateHeight:g,doUpdateWidth:R});const M=I(()=>{const{common:{cubicBezierEaseInOut:r,cubicBezierEaseIn:l,cubicBezierEaseOut:b},self:{color:i,textColor:v,boxShadow:C,lineHeight:z,headerPadding:F,footerPadding:Se,borderRadius:Ce,bodyPadding:xe,titleFontSize:ze,titleTextColor:$e,titleFontWeight:ke,headerBorderBottom:Be,footerBorderTop:Re,closeIconColor:Ee,closeIconColorHover:Te,closeIconColorPressed:Ie,closeColorHover:He,closeColorPressed:Me,closeIconSize:Fe,closeSize:Oe,closeBorderRadius:Pe,resizableTriggerColorHover:Le}}=p.value;return{"--n-line-height":z,"--n-color":i,"--n-border-radius":Ce,"--n-text-color":v,"--n-box-shadow":C,"--n-bezier":r,"--n-bezier-out":b,"--n-bezier-in":l,"--n-header-padding":F,"--n-body-padding":xe,"--n-footer-padding":Se,"--n-title-text-color":$e,"--n-title-font-size":ze,"--n-title-font-weight":ke,"--n-header-border-bottom":Be,"--n-footer-border-top":Re,"--n-close-icon-color":Ee,"--n-close-icon-color-hover":Te,"--n-close-icon-color-pressed":Ie,"--n-close-size":Oe,"--n-close-color-hover":He,"--n-close-color-pressed":Me,"--n-close-icon-size":Fe,"--n-close-border-radius":Pe,"--n-resize-trigger-color-hover":Le}}),S=h?st("drawer",void 0,M,t):void 0;return{mergedClsPrefix:e,namespace:o,mergedBodyStyle:y,handleOutsideClick:D,handleMaskClick:L,handleEsc:j,mergedTheme:p,cssVars:h?void 0:M,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,isMounted:a}},render(){const{mergedClsPrefix:t}=this;return m(zt,{to:this.to,show:this.show},{default:()=>{var e;return(e=this.onRender)===null||e===void 0||e.call(this),Q(m("div",{class:[`${t}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?m(we,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?m("div",{"aria-hidden":!0,class:[`${t}-drawer-mask`,this.showMask==="transparent"&&`${t}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,m(Mt,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[$t,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Gt={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Jt=ee({name:"DrawerContent",props:Gt,setup(){const t=ve(te,null);t||at("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:e}=t;function o(){e(!1)}return{handleCloseClick:o,mergedTheme:t.mergedThemeRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{title:t,mergedClsPrefix:e,nativeScrollbar:o,mergedTheme:h,bodyClass:a,bodyStyle:p,bodyContentClass:u,bodyContentStyle:w,headerClass:f,headerStyle:n,footerClass:k,footerStyle:B,scrollbarProps:R,closable:g,$slots:y}=this;return m("div",{role:"none",class:[`${e}-drawer-content`,o&&`${e}-drawer-content--native-scrollbar`]},y.header||t||g?m("div",{class:[`${e}-drawer-header`,f],style:n,role:"none"},m("div",{class:`${e}-drawer-header__main`,role:"heading","aria-level":"1"},y.header!==void 0?y.header():t),g&&m(lt,{onClick:this.handleCloseClick,clsPrefix:e,class:`${e}-drawer-header__close`,absolute:!0})):null,o?m("div",{class:[`${e}-drawer-body`,a],style:p,role:"none"},m("div",{class:[`${e}-drawer-body-content-wrapper`,u],style:w,role:"none"},y)):m(ye,Object.assign({themeOverrides:h.peerOverrides.Scrollbar,theme:h.peers.Scrollbar},R,{class:`${e}-drawer-body`,contentClass:[`${e}-drawer-body-content-wrapper`,u],contentStyle:w}),y),y.footer?m("div",{class:[`${e}-drawer-footer`,k],style:B,role:"none"},y.footer()):null)}}),Qt=t=>(bt("data-v-6abb55d7"),t=t(),vt(),t),Zt={id:"outer"},eo=Qt(()=>c("div",{id:"background"},null,-1)),to={id:"content"},oo={class:"column",id:"column-player"},ro={id:"container-player"},no={id:"music-name"},io={id:"music-artist"},so={id:"player-centerblock"},ao={id:"music-img-container"},lo=["alt","src"],co={id:"music-progress"},uo={id:"btn-control"},ho={id:"btn-like",class:"button"},mo={id:"btn-play-control"},fo={id:"btn-prev",class:"button"},go={id:"btn-pause",class:"button"},bo={id:"btn-next",class:"button"},vo={id:"btn-list",class:"button"},po={class:"drawer"},wo={class:"column",id:"column-lyric"},yo={class:"lyric-list"},_o=["id"],So={class:"lyric-roma"},Co={class:"lyric-tran"},xo={__name:"player",setup(t){pt(f=>({"1d169402":d(p)})),dt();let e=ct(),{currentMusic:o}=ut(e),h=$(),a=$(!1),p=$(""),u=NaN;be(async()=>{Z(()=>o.value.currentLyricIndex,f=>{var n;console.log("当前歌词改变"),h.value.scrollTo({top:((n=document.getElementById("lrc-"+f))==null?void 0:n.offsetTop)-200,behavior:"smooth"})},{deep:!0})}),K(()=>{clearInterval(u)});function w(){let f=ht(document.getElementById("music-img"),2);p.value=`linear-gradient(${f[0]}, ${f[1]})`}return(f,n)=>{const k=Ne,B=qe,R=Ke,g=yt,y=je,L=Ae,D=Xe,U=Ye,j=Ve,H=Jt,M=Kt,S=De;return P(),J("div",Zt,[eo,c("div",to,[c("div",oo,[c("div",ro,[c("div",no,[_(We,{html:d(e).nameWithTns},null,8,["html"])]),c("div",io,X(d(o).artist),1),c("div",so,[c("div",ao,[c("img",{alt:"专辑图片-"+d(o).name,src:d(o).picurl,id:"music-img",onLoad:w,crossorigin:"anonymous"},null,40,lo)]),c("div",co,[_(k,{value:d(e).musicStatus.currentTime,"onUpdate:value":[n[0]||(n[0]=r=>d(e).musicStatus.currentTime=r),n[1]||(n[1]=r=>d(e).seek(r))],max:d(e).musicStatus.duration,tooltip:!1,"show-tooltip":!1},null,8,["value","max"])]),c("div",uo,[c("div",ho,[_(g,{size:"2.5rem",class:"icon"},{default:T(()=>{var r,l;return[(r=d(o))!=null&&r.isLiked?V("",!0):(P(),Y(B,{key:0,onClick:n[2]||(n[2]=b=>ae(d(o).id,!0))})),(l=d(o))!=null&&l.isLiked?(P(),Y(R,{key:1,onClick:n[3]||(n[3]=b=>ae(d(o).id,!1))})):V("",!0)]}),_:1})]),c("div",mo,[c("div",fo,[_(g,{size:"4rem",class:"icon",onClick:d(e).prev},{default:T(()=>[_(y)]),_:1},8,["onClick"])]),c("div",go,[d(e).musicStatus.paused?(P(),Y(g,{key:0,size:"4rem",class:"icon",onClick:n[4]||(n[4]=()=>d(e).play())},{default:T(()=>[_(L)]),_:1})):V("",!0),d(e).musicStatus.paused?V("",!0):(P(),Y(g,{key:1,size:"4rem",class:"icon",onClick:n[5]||(n[5]=()=>d(e).pause())},{default:T(()=>[_(D)]),_:1}))]),c("div",bo,[_(g,{size:"4rem",class:"icon",onClick:d(e).next},{default:T(()=>[_(U)]),_:1},8,["onClick"])])]),c("div",vo,[_(g,{size:"2.5rem",class:"icon",onClick:n[6]||(n[6]=()=>{se(a)?a.value=!d(a):a=!d(a)})},{default:T(()=>[_(j)]),_:1})])])])]),c("div",po,[_(M,{show:d(a),"onUpdate:show":n[7]||(n[7]=r=>se(a)?a.value=r:a=r),placement:"bottom",to:"#column-player",height:"70%","show-mask":"transparent"},{default:T(()=>[_(H,{closable:!0,"native-scrollbar":!1,title:"播放列表"},{default:T(()=>[_(Ue)]),_:1})]),_:1},8,["show"])])]),c("div",wo,[_(S,{id:"container-lyric",ref_key:"lyricScrollbarRef",ref:h},{default:T(()=>[c("ul",yo,[(P(!0),J(mt,null,ft(d(o).lyric,(r,l)=>(P(),J("div",{key:l,class:gt({"lyric-active":d(o).currentLyricIndex==l})},[c("li",{class:"lyric-lrc",id:"lrc-"+l},X(r.lrc),9,_o),c("li",So,X(r.roma),1),c("li",Co,X(r.tran),1)],2))),128))])]),_:1},512)])])])}}},Io=wt(xo,[["__scopeId","data-v-6abb55d7"]]);export{Io as default};

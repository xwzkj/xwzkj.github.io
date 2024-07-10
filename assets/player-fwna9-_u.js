import{M as Ae,_ as Xe,a as Ye,b as Ve,c as qe,d as Ke,e as Ge}from"./marqueePlus-rmQy1b7_.js";import{_ as Je,a as Qe}from"./heart-outlined-Bb2TfC_8.js";import{r as z,o as _e,w as te,a as G,i as Ze,b as et,c as tt,d as ot,s as rt,e as J,f as ye,g as O,u as we,h as nt,j as st,p as K,k as ee,v as ie,l as m,T as Se,m as it,S as oe,n as d,q as Q,t as x,x as I,y as N,z as at,A as re,B as lt,C as ae,D as le,E as dt,F as P,G as ct,N as ut,H as Ce,I as $,J as A,K as a,L as xe,M as $e,O as D,P as B,Q as Z,R as U,U as L,V as h,_ as ht,W as mt,X as ft,Y as w,Z as de,$ as gt,a0 as ce,a1 as bt,a2 as vt,a3 as pt,a4 as _t}from"./index-C8Rv2UfX.js";import{f as ue,_ as ze,N as yt}from"./plugin-vueexport-helper-DPNJMZh_.js";import{d as ne,c as wt,a as St,p as Ct,m as xt,L as $t,z as zt}from"./Follower-CWHqNtVs.js";import{F as kt}from"./index-BKKAxPWD.js";import"./fade-in-scale-up.cssr-Czw88tqU.js";const Bt=new WeakSet;function Rt(t){return!Bt.has(t)}let j=0,he="",me="",fe="",ge="";const be=z("0px");function Et(t){if(typeof document>"u")return;const e=document.documentElement;let o,n=!1;const c=()=>{e.style.marginRight=he,e.style.overflow=me,e.style.overflowX=fe,e.style.overflowY=ge,be.value="0px"};_e(()=>{o=te(t,g=>{if(g){if(!j){const s=window.innerWidth-e.offsetWidth;s>0&&(he=e.style.marginRight,e.style.marginRight=`${s}px`,be.value=`${s}px`),me=e.style.overflow,fe=e.style.overflowX,ge=e.style.overflowY,e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden"}n=!0,j++}else j--,j||c(),n=!1},{immediate:!0})}),G(()=>{o==null||o(),n&&(j--,j||c(),n=!1)})}const se=z(!1),ve=()=>{se.value=!0},pe=()=>{se.value=!1};let q=0;const Tt=()=>(Ze&&(et(()=>{q||(window.addEventListener("compositionstart",ve),window.addEventListener("compositionend",pe)),q++}),G(()=>{q<=1?(window.removeEventListener("compositionstart",ve),window.removeEventListener("compositionend",pe),q=0):q--})),se),It=t=>{const{modalColor:e,textColor1:o,textColor2:n,boxShadow3:c,lineHeight:g,fontWeightStrong:s,dividerColor:b,closeColorHover:f,closeColorPressed:i,closeIconColor:R,closeIconColorHover:E,closeIconColorPressed:T,borderRadius:v,primaryColorHover:y}=t;return{bodyPadding:"16px 24px",borderRadius:v,headerPadding:"16px 24px",footerPadding:"16px 24px",color:e,textColor:n,titleTextColor:o,titleFontSize:"18px",titleFontWeight:s,boxShadow:c,lineHeight:g,headerBorderBottom:`1px solid ${b}`,footerBorderTop:`1px solid ${b}`,closeIconColor:R,closeIconColorHover:E,closeIconColorPressed:T,closeSize:"22px",closeIconSize:"18px",closeColorHover:f,closeColorPressed:i,closeBorderRadius:v,resizableTriggerColorHover:y}},Ot=tt({name:"Drawer",common:ot,peers:{Scrollbar:rt},self:It}),Ht=J({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(t){const e=z(!!t.show),o=z(null),n=ye(ne);let c=0,g="",s=null;const b=z(!1),f=z(!1),i=O(()=>t.placement==="top"||t.placement==="bottom"),{mergedClsPrefixRef:R,mergedRtlRef:E}=we(t),T=nt("Drawer",E,R),v=l=>{f.value=!0,c=i.value?l.clientY:l.clientX,g=document.body.style.cursor,document.body.style.cursor=i.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",M),document.body.addEventListener("mouseleave",r),document.body.addEventListener("mouseup",S)},y=()=>{s!==null&&(window.clearTimeout(s),s=null),f.value?b.value=!0:s=window.setTimeout(()=>{b.value=!0},300)},W=()=>{s!==null&&(window.clearTimeout(s),s=null),b.value=!1},{doUpdateHeight:X,doUpdateWidth:Y}=n,V=l=>{const{maxWidth:_}=t;if(_&&l>_)return _;const{minWidth:C}=t;return C&&l<C?C:l},H=l=>{const{maxHeight:_}=t;if(_&&l>_)return _;const{minHeight:C}=t;return C&&l<C?C:l},M=l=>{var _,C;if(f.value)if(i.value){let k=((_=o.value)===null||_===void 0?void 0:_.offsetHeight)||0;const F=c-l.clientY;k+=t.placement==="bottom"?F:-F,k=H(k),X(k),c=l.clientY}else{let k=((C=o.value)===null||C===void 0?void 0:C.offsetWidth)||0;const F=c-l.clientX;k+=t.placement==="right"?F:-F,k=V(k),Y(k),c=l.clientX}},S=()=>{f.value&&(c=0,f.value=!1,document.body.style.cursor=g,document.body.removeEventListener("mousemove",M),document.body.removeEventListener("mouseup",S),document.body.removeEventListener("mouseleave",r))},r=S;st(()=>{t.show&&(e.value=!0)}),te(()=>t.show,l=>{l||S()}),G(()=>{S()});const u=O(()=>{const{show:l}=t,_=[[ie,l]];return t.showMask||_.push([wt,t.onClickoutside,void 0,{capture:!0}]),_});function p(){var l;e.value=!1,(l=t.onAfterLeave)===null||l===void 0||l.call(t)}return Et(O(()=>t.blockScroll&&e.value)),K(St,o),K(Ct,null),K(xt,null),{bodyRef:o,rtlEnabled:T,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:e,transitionName:O(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[t.placement]),handleAfterLeave:p,bodyDirectives:u,handleMousedownResizeTrigger:v,handleMouseenterResizeTrigger:y,handleMouseleaveResizeTrigger:W,isDragging:f,isHoverOnResizeTrigger:b}},render(){const{$slots:t,mergedClsPrefix:e}=this;return this.displayDirective==="show"||this.displayed||this.show?ee(m("div",{role:"none"},m(kt,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>m(Se,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>ee(m("div",it(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${e}-drawer`,this.rtlEnabled&&`${e}-drawer--rtl`,`${e}-drawer--${this.placement}-placement`,this.isDragging&&`${e}-drawer--unselectable`,this.nativeScrollbar&&`${e}-drawer--native-scrollbar`]}),[this.resizable?m("div",{class:[`${e}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${e}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?m("div",{class:[`${e}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},t):m(oe,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${e}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),t)]),this.bodyDirectives)})})),[[ie,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Mt,cubicBezierEaseOut:Ft}=Q;function Pt({duration:t="0.3s",leaveDuration:e="0.2s",name:o="slide-in-from-right"}={}){return[d(`&.${o}-transition-leave-active`,{transition:`transform ${e} ${Mt}`}),d(`&.${o}-transition-enter-active`,{transition:`transform ${t} ${Ft}`}),d(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),d(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),d(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),d(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Lt,cubicBezierEaseOut:Wt}=Q;function Nt({duration:t="0.3s",leaveDuration:e="0.2s",name:o="slide-in-from-left"}={}){return[d(`&.${o}-transition-leave-active`,{transition:`transform ${e} ${Lt}`}),d(`&.${o}-transition-enter-active`,{transition:`transform ${t} ${Wt}`}),d(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),d(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),d(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),d(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:jt,cubicBezierEaseOut:Dt}=Q;function Ut({duration:t="0.3s",leaveDuration:e="0.2s",name:o="slide-in-from-top"}={}){return[d(`&.${o}-transition-leave-active`,{transition:`transform ${e} ${jt}`}),d(`&.${o}-transition-enter-active`,{transition:`transform ${t} ${Dt}`}),d(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),d(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),d(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),d(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:At,cubicBezierEaseOut:Xt}=Q;function Yt({duration:t="0.3s",leaveDuration:e="0.2s",name:o="slide-in-from-bottom"}={}){return[d(`&.${o}-transition-leave-active`,{transition:`transform ${e} ${At}`}),d(`&.${o}-transition-enter-active`,{transition:`transform ${t} ${Xt}`}),d(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),d(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),d(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),d(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const Vt=d([x("drawer",`
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
 `,[Pt(),Nt(),Ut(),Yt(),I("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),I("native-scrollbar",[x("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),N("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[I("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),x("drawer-content-wrapper",`
 box-sizing: border-box;
 `),x("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[I("native-scrollbar",[x("drawer-body-content-wrapper",`
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
 `,[N("close",`
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
 `)]),I("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[N("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),I("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[N("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),I("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[N("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),I("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[N("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),d("body",[d(">",[x("drawer-container",`
 position: fixed;
 `)])]),x("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[d("> *",`
 pointer-events: all;
 `)]),x("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[I("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),at({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),qt=Object.assign(Object.assign({},re.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Kt=J({name:"Drawer",inheritAttrs:!1,props:qt,setup(t){const{mergedClsPrefixRef:e,namespaceRef:o,inlineThemeDisabled:n}=we(t),c=lt(),g=re("Drawer","-drawer",Vt,Ot,t,e),s=z(t.defaultWidth),b=z(t.defaultHeight),f=ae(le(t,"width"),s),i=ae(le(t,"height"),b),R=O(()=>{const{placement:r}=t;return r==="top"||r==="bottom"?"":ue(f.value)}),E=O(()=>{const{placement:r}=t;return r==="left"||r==="right"?"":ue(i.value)}),T=r=>{const{onUpdateWidth:u,"onUpdate:width":p}=t;u&&P(u,r),p&&P(p,r),s.value=r},v=r=>{const{onUpdateHeight:u,"onUpdate:width":p}=t;u&&P(u,r),p&&P(p,r),b.value=r},y=O(()=>[{width:R.value,height:E.value},t.drawerStyle||""]);function W(r){const{onMaskClick:u,maskClosable:p}=t;p&&H(!1),u&&u(r)}function X(r){W(r)}const Y=Tt();function V(r){var u;(u=t.onEsc)===null||u===void 0||u.call(t),t.show&&t.closeOnEsc&&Rt(r)&&!Y.value&&H(!1)}function H(r){const{onHide:u,onUpdateShow:p,"onUpdate:show":l}=t;p&&P(p,r),l&&P(l,r),u&&!r&&P(u,r)}K(ne,{isMountedRef:c,mergedThemeRef:g,mergedClsPrefixRef:e,doUpdateShow:H,doUpdateHeight:v,doUpdateWidth:T});const M=O(()=>{const{common:{cubicBezierEaseInOut:r,cubicBezierEaseIn:u,cubicBezierEaseOut:p},self:{color:l,textColor:_,boxShadow:C,lineHeight:k,headerPadding:F,footerPadding:ke,borderRadius:Be,bodyPadding:Re,titleFontSize:Ee,titleTextColor:Te,titleFontWeight:Ie,headerBorderBottom:Oe,footerBorderTop:He,closeIconColor:Me,closeIconColorHover:Fe,closeIconColorPressed:Pe,closeColorHover:Le,closeColorPressed:We,closeIconSize:Ne,closeSize:je,closeBorderRadius:De,resizableTriggerColorHover:Ue}}=g.value;return{"--n-line-height":k,"--n-color":l,"--n-border-radius":Be,"--n-text-color":_,"--n-box-shadow":C,"--n-bezier":r,"--n-bezier-out":p,"--n-bezier-in":u,"--n-header-padding":F,"--n-body-padding":Re,"--n-footer-padding":ke,"--n-title-text-color":Te,"--n-title-font-size":Ee,"--n-title-font-weight":Ie,"--n-header-border-bottom":Oe,"--n-footer-border-top":He,"--n-close-icon-color":Me,"--n-close-icon-color-hover":Fe,"--n-close-icon-color-pressed":Pe,"--n-close-size":je,"--n-close-color-hover":Le,"--n-close-color-pressed":We,"--n-close-icon-size":Ne,"--n-close-border-radius":De,"--n-resize-trigger-color-hover":Ue}}),S=n?dt("drawer",void 0,M,t):void 0;return{mergedClsPrefix:e,namespace:o,mergedBodyStyle:y,handleOutsideClick:X,handleMaskClick:W,handleEsc:V,mergedTheme:g,cssVars:n?void 0:M,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,isMounted:c}},render(){const{mergedClsPrefix:t}=this;return m($t,{to:this.to,show:this.show},{default:()=>{var e;return(e=this.onRender)===null||e===void 0||e.call(this),ee(m("div",{class:[`${t}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?m(Se,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?m("div",{"aria-hidden":!0,class:[`${t}-drawer-mask`,this.showMask==="transparent"&&`${t}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,m(Ht,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[zt,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Gt={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Jt=J({name:"DrawerContent",props:Gt,setup(){const t=ye(ne,null);t||ct("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:e}=t;function o(){e(!1)}return{handleCloseClick:o,mergedTheme:t.mergedThemeRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{title:t,mergedClsPrefix:e,nativeScrollbar:o,mergedTheme:n,bodyClass:c,bodyStyle:g,bodyContentClass:s,bodyContentStyle:b,headerClass:f,headerStyle:i,footerClass:R,footerStyle:E,scrollbarProps:T,closable:v,$slots:y}=this;return m("div",{role:"none",class:[`${e}-drawer-content`,o&&`${e}-drawer-content--native-scrollbar`]},y.header||t||v?m("div",{class:[`${e}-drawer-header`,f],style:i,role:"none"},m("div",{class:`${e}-drawer-header__main`,role:"heading","aria-level":"1"},y.header!==void 0?y.header():t),v&&m(ut,{onClick:this.handleCloseClick,clsPrefix:e,class:`${e}-drawer-header__close`,absolute:!0})):null,o?m("div",{class:[`${e}-drawer-body`,c],style:g,role:"none"},m("div",{class:[`${e}-drawer-body-content-wrapper`,s],style:b,role:"none"},y)):m(oe,Object.assign({themeOverrides:n.peerOverrides.Scrollbar,theme:n.peers.Scrollbar},T,{class:`${e}-drawer-body`,contentClass:[`${e}-drawer-body-content-wrapper`,s],contentStyle:b}),y),y.footer?m("div",{class:[`${e}-drawer-footer`,R],style:E,role:"none"},y.footer()):null)}}),Qt=Object.assign(Object.assign({},re.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number}),Zt=J({name:"Scrollbar",props:Qt,setup(){const t=z(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var n;(n=t.value)===null||n===void 0||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;(n=t.value)===null||n===void 0||n.scrollBy(o[0],o[1])}}),{scrollbarInstRef:t})},render(){return m(oe,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),eo=["onClick"],to=["src","alt"],oo={class:"text"},ro={class:"name"},no={class:"tns"},so={class:"artist"},io={__name:"playinglist",setup(t){const e=Ce();function o(n){e.playlistIndex=n,e.play(!0)}return(n,c)=>{const g=ht;return $(),A("div",null,[a("ul",null,[($(!0),A(xe,null,$e(h(e).playlist,(s,b)=>($(),A("li",{key:s.id,onClick:f=>o(b)},[a("img",{class:"playinglist-img",src:s.picurl+"?param=80y80",alt:s.name,loading:"lazy"},null,8,to),a("div",oo,[a("div",ro,[s.fee==1?($(),D(g,{key:0,type:"warning",size:"small",bordered:!1},{default:B(()=>[Z("VIP")]),_:1})):U("",!0),s.fee==4?($(),D(g,{key:1,type:"info",size:"small",bordered:!1},{default:B(()=>[Z("数字专辑")]),_:1})):U("",!0),Z(" "+L(s.name),1)]),a("div",no,L(s.tns),1),a("div",so,L(s.artist),1)])],8,eo))),128))])])}}},ao=ze(io,[["__scopeId","data-v-26376234"]]),lo=t=>(vt("data-v-6abb55d7"),t=t(),pt(),t),co={id:"outer"},uo=lo(()=>a("div",{id:"background"},null,-1)),ho={id:"content"},mo={class:"column",id:"column-player"},fo={id:"container-player"},go={id:"music-name"},bo={id:"music-artist"},vo={id:"player-centerblock"},po={id:"music-img-container"},_o=["alt","src"],yo={id:"music-progress"},wo={id:"btn-control"},So={id:"btn-like",class:"button"},Co={id:"btn-play-control"},xo={id:"btn-prev",class:"button"},$o={id:"btn-pause",class:"button"},zo={id:"btn-next",class:"button"},ko={id:"btn-list",class:"button"},Bo={class:"drawer"},Ro={class:"column",id:"column-lyric"},Eo={class:"lyric-list"},To=["id"],Io={class:"lyric-roma"},Oo={class:"lyric-tran"},Ho={__name:"player",setup(t){_t(f=>({"1d169402":h(g)})),mt();let e=Ce(),{currentMusic:o}=ft(e),n=z(),c=z(!1),g=z(""),s=NaN;_e(async()=>{te(()=>o.value.currentLyricIndex,f=>{var i;console.log("当前歌词改变"),n.value.scrollTo({top:((i=document.getElementById("lrc-"+f))==null?void 0:i.offsetTop)-200,behavior:"smooth"})},{deep:!0})}),G(()=>{clearInterval(s)});function b(){let f=gt(document.getElementById("music-img"),2);g.value=`linear-gradient(${f[0]}, ${f[1]})`}return(f,i)=>{const R=Xe,E=Je,T=Qe,v=yt,y=Ye,W=Ve,X=qe,Y=Ke,V=Ge,H=Jt,M=Kt,S=Zt;return $(),A("div",co,[uo,a("div",ho,[a("div",mo,[a("div",fo,[a("div",go,[w(Ae,{html:h(e).nameWithTns},null,8,["html"])]),a("div",bo,L(h(o).artist),1),a("div",vo,[a("div",po,[a("img",{alt:"专辑图片-"+h(o).name,src:h(o).picurl,id:"music-img",onLoad:b,crossorigin:"anonymous"},null,40,_o)]),a("div",yo,[w(R,{value:h(e).musicStatus.currentTime,"onUpdate:value":[i[0]||(i[0]=r=>h(e).musicStatus.currentTime=r),i[1]||(i[1]=r=>h(e).seek(r))],max:h(e).musicStatus.duration,tooltip:!1,"show-tooltip":!1},null,8,["value","max"])]),a("div",wo,[a("div",So,[w(v,{size:"2.5rem",class:"icon"},{default:B(()=>{var r,u;return[(r=h(o))!=null&&r.isLiked?U("",!0):($(),D(E,{key:0,onClick:i[2]||(i[2]=p=>ce(h(o).id,!0))})),(u=h(o))!=null&&u.isLiked?($(),D(T,{key:1,onClick:i[3]||(i[3]=p=>ce(h(o).id,!1))})):U("",!0)]}),_:1})]),a("div",Co,[a("div",xo,[w(v,{size:"4rem",class:"icon",onClick:h(e).prev},{default:B(()=>[w(y)]),_:1},8,["onClick"])]),a("div",$o,[h(e).musicStatus.paused?($(),D(v,{key:0,size:"4rem",class:"icon",onClick:i[4]||(i[4]=()=>h(e).play())},{default:B(()=>[w(W)]),_:1})):U("",!0),h(e).musicStatus.paused?U("",!0):($(),D(v,{key:1,size:"4rem",class:"icon",onClick:i[5]||(i[5]=()=>h(e).pause())},{default:B(()=>[w(X)]),_:1}))]),a("div",zo,[w(v,{size:"4rem",class:"icon",onClick:h(e).next},{default:B(()=>[w(Y)]),_:1},8,["onClick"])])]),a("div",ko,[w(v,{size:"2.5rem",class:"icon",onClick:i[6]||(i[6]=()=>{de(c)?c.value=!h(c):c=!h(c)})},{default:B(()=>[w(V)]),_:1})])])])]),a("div",Bo,[w(M,{show:h(c),"onUpdate:show":i[7]||(i[7]=r=>de(c)?c.value=r:c=r),placement:"bottom",to:"#column-player",height:"70%","show-mask":"transparent"},{default:B(()=>[w(H,{closable:!0,"native-scrollbar":!1,title:"播放列表"},{default:B(()=>[w(ao)]),_:1})]),_:1},8,["show"])])]),a("div",Ro,[w(S,{id:"container-lyric",ref_key:"lyricScrollbarRef",ref:n},{default:B(()=>[a("ul",Eo,[($(!0),A(xe,null,$e(h(o).lyric,(r,u)=>($(),A("div",{key:u,class:bt({"lyric-active":h(o).currentLyricIndex==u})},[a("li",{class:"lyric-lrc",id:"lrc-"+u},L(r.lrc),9,To),a("li",Io,L(r.roma),1),a("li",Oo,L(r.tran),1)],2))),128))])]),_:1},512)])])])}}},Do=ze(Ho,[["__scopeId","data-v-6abb55d7"]]);export{Do as default};

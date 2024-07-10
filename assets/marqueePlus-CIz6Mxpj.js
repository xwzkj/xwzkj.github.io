import{d as eo,a7 as oo,n as D,t as a,x as m,y as W,a8 as to,a9 as no,e as ao,A as Ce,u as ro,r as g,aa as lo,g as k,D as io,C as so,w as be,ab as ne,a as co,E as ge,B as uo,l as v,ac as ho,T as fo,F as K,ad as X,ae as Y,I as B,J as V,K as C,o as vo,af as mo,ag as bo,k as pe,v as we,V as H}from"./index-CZd9BBRm.js";import{f as xe}from"./fade-in-scale-up.cssr-DG2pHuHD.js";import{u as ae,B as go,V as po,b as wo}from"./Follower-SBdGANnU.js";import{_ as xo}from"./plugin-vueexport-helper-DDwWvZMz.js";const _o={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},ko=n=>{const l="rgba(0, 0, 0, .85)",b="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:c,primaryColor:s,baseColor:d,cardColor:y,modalColor:p,popoverColor:z,borderRadius:F,fontSize:E,opacityDisabled:I}=n;return Object.assign(Object.assign({},_o),{fontSize:E,markFontSize:E,railColor:c,railColorHover:c,fillColor:s,fillColorHover:s,opacityDisabled:I,handleColor:"#FFF",dotColor:y,dotColorModal:p,dotColorPopover:z,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:l,indicatorBoxShadow:b,indicatorTextColor:d,indicatorBorderRadius:F,dotBorder:`2px solid ${c}`,dotBorderActive:`2px solid ${s}`,dotBoxShadow:""})},Co={name:"Slider",common:eo,self:ko};function _e(n){return window.TouchEvent&&n instanceof window.TouchEvent}function ke(){const n=new Map,l=b=>c=>{n.set(b,c)};return oo(()=>{n.clear()}),[n,l]}const yo=D([a("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[m("reverse",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),m("vertical",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),a("slider-marks",[a("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),m("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[a("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[a("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),a("slider-rail",`
 height: 100%;
 `,[W("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),m("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),a("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[a("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),a("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[a("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),m("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[a("slider-handle",`
 cursor: not-allowed;
 `)]),m("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),D("&:hover",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[W("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),m("active",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[W("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),a("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[a("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),a("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[W("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),a("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[a("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[a("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[D("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),D("&:focus",[a("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[D("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),a("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[m("transition-disabled",[a("slider-dot","transition: none;")]),a("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[m("active","border: var(--n-dot-border-active);")])])]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[xe()]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[m("top",`
 margin-bottom: 12px;
 `),m("right",`
 margin-left: 12px;
 `),m("bottom",`
 margin-top: 12px;
 `),m("left",`
 margin-right: 12px;
 `),xe()]),to(a("slider",[a("slider-dot","background-color: var(--n-dot-color-modal);")])),no(a("slider",[a("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Ro=0,zo=Object.assign(Object.assign({},Ce.props),{to:ae.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),nt=ao({name:"Slider",props:zo,setup(n){const{mergedClsPrefixRef:l,namespaceRef:b,inlineThemeDisabled:c}=ro(n),s=Ce("Slider","-slider",yo,Co,n,l),d=g(null),[y,p]=ke(),[z,F]=ke(),E=g(new Set),I=lo(n),{mergedDisabledRef:A}=I,re=k(()=>{const{step:e}=n;if(Number(e)<=0||e==="mark")return 0;const o=e.toString();let t=0;return o.includes(".")&&(t=o.length-o.indexOf(".")-1),t}),J=g(n.defaultValue),ye=io(n,"value"),G=so(ye,J),w=k(()=>{const{value:e}=G;return(n.range?e:[e]).map(he)}),le=k(()=>w.value.length>2),Re=k(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),ie=k(()=>{const{marks:e}=n;return e?Object.keys(e).map(parseFloat):null}),x=g(-1),se=g(-1),S=g(-1),M=g(!1),j=g(!1),Q=k(()=>{const{vertical:e,reverse:o}=n;return e?o?"top":"bottom":o?"right":"left"}),ze=k(()=>{if(le.value)return;const e=w.value,o=P(n.range?Math.min(...e):n.min),t=P(n.range?Math.max(...e):e[0]),{value:r}=Q;return n.vertical?{[r]:`${o}%`,height:`${t-o}%`}:{[r]:`${o}%`,width:`${t-o}%`}}),Se=k(()=>{const e=[],{marks:o}=n;if(o){const t=w.value.slice();t.sort((h,f)=>h-f);const{value:r}=Q,{value:i}=le,{range:u}=n,_=i?()=>!1:h=>u?h>=t[0]&&h<=t[t.length-1]:h<=t[0];for(const h of Object.keys(o)){const f=Number(h);e.push({active:_(f),label:o[h],style:{[r]:`${P(f)}%`}})}}return e});function Me(e,o){const t=P(e),{value:r}=Q;return{[r]:`${t}%`,zIndex:o===x.value?1:0}}function de(e){return n.showTooltip||S.value===e||x.value===e&&M.value}function Te(e){return M.value?!(x.value===e&&se.value===e):!0}function $e(e){var o;~e&&(x.value=e,(o=y.get(e))===null||o===void 0||o.focus())}function Be(){z.forEach((e,o)=>{de(o)&&e.syncPosition()})}function ce(e){const{"onUpdate:value":o,onUpdateValue:t}=n,{nTriggerFormInput:r,nTriggerFormChange:i}=I;t&&K(t,e),o&&K(o,e),J.value=e,r(),i()}function ue(e){const{range:o}=n;if(o){if(Array.isArray(e)){const{value:t}=w;e.join()!==t.join()&&ce(e)}}else Array.isArray(e)||w.value[0]!==e&&ce(e)}function Z(e,o){if(n.range){const t=w.value.slice();t.splice(o,1,e),ue(t)}else ue(e)}function ee(e,o,t){const r=t!==void 0;t||(t=e-o>0?1:-1);const i=ie.value||[],{step:u}=n;if(u==="mark"){const f=N(e,i.concat(o),r?t:void 0);return f?f.value:o}if(u<=0)return o;const{value:_}=re;let h;if(r){const f=Number((o/u).toFixed(_)),R=Math.floor(f),oe=f>R?R:R-1,te=f<R?R:R+1;h=N(o,[Number((oe*u).toFixed(_)),Number((te*u).toFixed(_)),...i],t)}else{const f=De(e);h=N(e,[...i,f])}return h?he(h.value):o}function he(e){return Math.min(n.max,Math.max(n.min,e))}function P(e){const{max:o,min:t}=n;return(e-t)/(o-t)*100}function Ve(e){const{max:o,min:t}=n;return t+(o-t)*e}function De(e){const{step:o,min:t}=n;if(Number(o)<=0||o==="mark")return e;const r=Math.round((e-t)/o)*o+t;return Number(r.toFixed(re.value))}function N(e,o=ie.value,t){if(!(o!=null&&o.length))return null;let r=null,i=-1;for(;++i<o.length;){const u=o[i]-e,_=Math.abs(u);(t===void 0||u*t>0)&&(r===null||_<r.distance)&&(r={index:i,distance:_,value:o[i]})}return r}function fe(e){const o=d.value;if(!o)return;const t=_e(e)?e.touches[0]:e,r=o.getBoundingClientRect();let i;return n.vertical?i=(r.bottom-t.clientY)/r.height:i=(t.clientX-r.left)/r.width,n.reverse&&(i=1-i),Ve(i)}function He(e){if(A.value||!n.keyboard)return;const{vertical:o,reverse:t}=n;switch(e.key){case"ArrowUp":e.preventDefault(),U(o&&t?-1:1);break;case"ArrowRight":e.preventDefault(),U(!o&&t?-1:1);break;case"ArrowDown":e.preventDefault(),U(o&&t?1:-1);break;case"ArrowLeft":e.preventDefault(),U(!o&&t?1:-1);break}}function U(e){const o=x.value;if(o===-1)return;const{step:t}=n,r=w.value[o],i=Number(t)<=0||t==="mark"?r:r+t*e;Z(ee(i,r,e>0?1:-1),o)}function Fe(e){var o,t;if(A.value||!_e(e)&&e.button!==Ro)return;const r=fe(e);if(r===void 0)return;const i=w.value.slice(),u=n.range?(t=(o=N(r,i))===null||o===void 0?void 0:o.index)!==null&&t!==void 0?t:-1:0;u!==-1&&(e.preventDefault(),$e(u),Ee(),Z(ee(r,w.value[u]),u))}function Ee(){M.value||(M.value=!0,n.onDragstart&&K(n.onDragstart),X("touchend",document,L),X("mouseup",document,L),X("touchmove",document,q),X("mousemove",document,q))}function O(){M.value&&(M.value=!1,n.onDragend&&K(n.onDragend),Y("touchend",document,L),Y("mouseup",document,L),Y("touchmove",document,q),Y("mousemove",document,q))}function q(e){const{value:o}=x;if(!M.value||o===-1){O();return}const t=fe(e);t!==void 0&&Z(ee(t,w.value[o]),o)}function L(){O()}function Ie(e){x.value=e,A.value||(S.value=e)}function Ae(e){x.value===e&&(x.value=-1,O()),S.value===e&&(S.value=-1)}function je(e){S.value=e}function Pe(e){S.value===e&&(S.value=-1)}be(x,(e,o)=>void ne(()=>se.value=o)),be(G,()=>{if(n.marks){if(j.value)return;j.value=!0,ne(()=>{j.value=!1})}ne(Be)}),co(()=>{O()});const ve=k(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:t,fillColor:r,fillColorHover:i,handleColor:u,opacityDisabled:_,dotColor:h,dotColorModal:f,handleBoxShadow:R,handleBoxShadowHover:oe,handleBoxShadowActive:te,handleBoxShadowFocus:Ne,dotBorder:Ue,dotBoxShadow:Oe,railHeight:qe,railWidthVertical:Le,handleSize:We,dotHeight:Ke,dotWidth:Xe,dotBorderRadius:Ye,fontSize:Je,dotBorderActive:Ge,dotColorPopover:Qe},common:{cubicBezierEaseInOut:Ze}}=s.value;return{"--n-bezier":Ze,"--n-dot-border":Ue,"--n-dot-border-active":Ge,"--n-dot-border-radius":Ye,"--n-dot-box-shadow":Oe,"--n-dot-color":h,"--n-dot-color-modal":f,"--n-dot-color-popover":Qe,"--n-dot-height":Ke,"--n-dot-width":Xe,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":Je,"--n-handle-box-shadow":R,"--n-handle-box-shadow-active":te,"--n-handle-box-shadow-focus":Ne,"--n-handle-box-shadow-hover":oe,"--n-handle-color":u,"--n-handle-size":We,"--n-opacity-disabled":_,"--n-rail-color":o,"--n-rail-color-hover":t,"--n-rail-height":qe,"--n-rail-width-vertical":Le,"--n-mark-font-size":e}}),T=c?ge("slider",void 0,ve,n):void 0,me=k(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:t,indicatorTextColor:r,indicatorBorderRadius:i}}=s.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":t,"--n-indicator-color":o,"--n-indicator-text-color":r}}),$=c?ge("slider-indicator",void 0,me,n):void 0;return{mergedClsPrefix:l,namespace:b,uncontrolledValue:J,mergedValue:G,mergedDisabled:A,mergedPlacement:Re,isMounted:uo(),adjustedTo:ae(n),dotTransitionDisabled:j,markInfos:Se,isShowTooltip:de,shouldKeepTooltipTransition:Te,handleRailRef:d,setHandleRefs:p,setFollowerRefs:F,fillStyle:ze,getHandleStyle:Me,activeIndex:x,arrifiedValues:w,followerEnabledIndexSet:E,handleRailMouseDown:Fe,handleHandleFocus:Ie,handleHandleBlur:Ae,handleHandleMouseEnter:je,handleHandleMouseLeave:Pe,handleRailKeyDown:He,indicatorCssVars:c?void 0:me,indicatorThemeClass:$==null?void 0:$.themeClass,indicatorOnRender:$==null?void 0:$.onRender,cssVars:c?void 0:ve,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){var n;const{mergedClsPrefix:l,themeClass:b,formatTooltip:c}=this;return(n=this.onRender)===null||n===void 0||n.call(this),v("div",{class:[`${l}-slider`,b,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},v("div",{class:`${l}-slider-rail`},v("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?v("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(s=>v("div",{key:s.label,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:s.active}],style:s.style}))):null,v("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((s,d)=>{const y=this.isShowTooltip(d);return v(go,null,{default:()=>[v(po,null,{default:()=>v("div",{ref:this.setHandleRefs(d),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":s,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(s,d),onFocus:()=>{this.handleHandleFocus(d)},onBlur:()=>{this.handleHandleBlur(d)},onMouseenter:()=>{this.handleHandleMouseEnter(d)},onMouseleave:()=>{this.handleHandleMouseLeave(d)}},ho(this.$slots.thumb,()=>[v("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&v(wo,{ref:this.setFollowerRefs(d),show:y,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===ae.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>v(fo,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var p;return y?((p=this.indicatorOnRender)===null||p===void 0||p.call(this),v("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof c=="function"?c(s):s)):null}})})]})})),this.marks?v("div",{class:`${l}-slider-marks`},this.markInfos.map(s=>v("div",{key:s.label,class:`${l}-slider-mark`,style:s.style},s.label))):null))}}),So={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Mo=C("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M2 3h18M2 10h13M2 17h7m9.25 2c0 1.657-1.4 3-3.125 3S12 20.657 12 19s1.4-3 3.125-3s3.125 1.343 3.125 3m0 0v-9c.417.6.75 3.12 3.75 3.6",color:"currentColor"},null,-1),To=[Mo];function $o(n,l){return B(),V("svg",So,[...To])}const at={name:"hugeicons-playlist03",render:$o},Bo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Vo=C("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 6s6 4.419 6 6s-6 6-6 6",color:"currentColor"},null,-1),Do=[Vo];function Ho(n,l){return B(),V("svg",Bo,[...Do])}const rt={name:"hugeicons-arrow-right01",render:Ho},Fo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Eo=C("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 7c0-1.414 0-2.121.44-2.56C4.878 4 5.585 4 7 4s2.121 0 2.56.44C10 4.878 10 5.585 10 7v10c0 1.414 0 2.121-.44 2.56C9.122 20 8.415 20 7 20s-2.121 0-2.56-.44C4 19.122 4 18.415 4 17zm10 0c0-1.414 0-2.121.44-2.56C14.878 4 15.585 4 17 4s2.121 0 2.56.44C20 4.878 20 5.585 20 7v10c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C14 19.122 14 18.415 14 17z",color:"currentColor"},null,-1),Io=[Eo];function Ao(n,l){return B(),V("svg",Fo,[...Io])}const lt={name:"hugeicons-pause",render:Ao},jo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Po=C("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M18.89 12.846c-.353 1.343-2.023 2.292-5.364 4.19c-3.23 1.835-4.845 2.752-6.146 2.384a3.25 3.25 0 0 1-1.424-.841C5 17.614 5 15.743 5 12s0-5.614.956-6.579a3.25 3.25 0 0 1 1.424-.84c1.301-.37 2.916.548 6.146 2.383c3.34 1.898 5.011 2.847 5.365 4.19a3.3 3.3 0 0 1 0 1.692",color:"currentColor"},null,-1),No=[Po];function Uo(n,l){return B(),V("svg",jo,[...No])}const it={name:"hugeicons-play",render:Uo},Oo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},qo=C("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 6s-6 4.419-6 6s6 6 6 6",color:"currentColor"},null,-1),Lo=[qo];function Wo(n,l){return B(),V("svg",Oo,[...Lo])}const st={name:"hugeicons-arrow-left01",render:Wo},Ko={class:"marquee-outer"},Xo={class:"marquee-container"},Yo=["innerHTML"],Jo=["innerHTML"],Go=["innerHTML"],Qo={__name:"marqueePlus",props:{html:String},setup(n){let l=n,b=g(null),c=g(null),s=g(null),d=g(!1);const y=new ResizeObserver(()=>{p()});vo(()=>{p(),c.value&&y.observe(c.value)}),mo(()=>{p()}),bo(()=>{y.disconnect()});function p(){if(b.value!=null&&c.value!=null&&s.value!=null){let z=Math.max(b.value.offsetWidth,s.value.offsetWidth);d.value=z>c.value.offsetWidth,d.value&&c.value.style.setProperty("--marquee-duration",z/80+"s")}else d.value=!1,console.log("marquee 判断 未挂载",b.value,c.value)}return(z,F)=>(B(),V("div",{class:"marquee-sizer",ref_key:"sizerEle",ref:c},[pe(C("div",Ko,[C("div",Xo,[C("div",{class:"marquee-text1 marquee-content",ref_key:"text1Ele",ref:b,innerHTML:H(l).html},null,8,Yo),C("div",{class:"marquee-text2 marquee-content",innerHTML:H(l).html},null,8,Jo)])],512),[[we,H(d)]]),pe(C("div",{class:"marquee-static-text",ref_key:"staticTextEle",ref:s,innerHTML:H(l).html},null,8,Go),[[we,!H(d)]])],512))}},dt=xo(Qo,[["__scopeId","data-v-64834ff0"]]);export{dt as M,nt as _,st as a,it as b,lt as c,rt as d,at as e};

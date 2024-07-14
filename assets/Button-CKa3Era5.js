import{I as X,D as ao,b8 as To,P as $o,r as N,b as wo,R as Ho,E as D,H as p,bp as zo,b5 as co,bh as Do,B as Io,J as I,K as x,a4 as so,bv as Bo,bw as Eo,C as uo,bx as Fo,b1 as Go,aX as Ro,O as Wo,x as V,N as ko,br as Oo,T as Mo,a$ as lo,by as jo,X as No,ao as t,bz as q,bA as io,aZ as _o,bB as Ko,am as Lo}from"./index-CXOPteNE.js";const Qo=X("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Vo=ao({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){To("-base-wave",Qo,$o(e,"clsPrefix"));const C=N(null),y=N(!1);let h=null;return wo(()=>{h!==null&&window.clearTimeout(h)}),{active:y,selfRef:C,play(){h!==null&&(window.clearTimeout(h),y.value=!1,h=null),Ho(()=>{var g;(g=C.value)===null||g===void 0||g.offsetHeight,y.value=!0,h=window.setTimeout(()=>{y.value=!1,h=null},1e3)})}}},render(){const{clsPrefix:e}=this;return D("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:G}=zo;function qo({duration:e=".2s",delay:C=".1s"}={}){return[p("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),p("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),p("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${G},
 max-width ${e} ${G} ${C},
 margin-left ${e} ${G} ${C},
 margin-right ${e} ${G} ${C};
 `),p("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${G} ${C},
 max-width ${e} ${G},
 margin-left ${e} ${G},
 margin-right ${e} ${G};
 `)]}function W(e){return co(e,[255,255,255,.16])}function A(e){return co(e,[0,0,0,.12])}const Ao=Do("n-button-group"),Xo={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},Yo=e=>{const{heightTiny:C,heightSmall:y,heightMedium:h,heightLarge:g,borderRadius:k,fontSizeTiny:M,fontSizeSmall:j,fontSizeMedium:Y,fontSizeLarge:J,opacityDisabled:U,textColor2:m,textColor3:Z,primaryColorHover:c,primaryColorPressed:S,borderColor:_,primaryColor:H,baseColor:s,infoColor:z,infoColorHover:v,infoColorPressed:r,successColor:l,successColorHover:b,successColorPressed:o,warningColor:T,warningColorHover:P,warningColorPressed:E,errorColor:$,errorColorHover:u,errorColorPressed:F,fontWeight:B,buttonColor2:O,buttonColor2Hover:w,buttonColor2Pressed:i,fontWeightStrong:K}=e;return Object.assign(Object.assign({},Xo),{heightTiny:C,heightSmall:y,heightMedium:h,heightLarge:g,borderRadiusTiny:k,borderRadiusSmall:k,borderRadiusMedium:k,borderRadiusLarge:k,fontSizeTiny:M,fontSizeSmall:j,fontSizeMedium:Y,fontSizeLarge:J,opacityDisabled:U,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:O,colorSecondaryHover:w,colorSecondaryPressed:i,colorTertiary:O,colorTertiaryHover:w,colorTertiaryPressed:i,colorQuaternary:"#0000",colorQuaternaryHover:w,colorQuaternaryPressed:i,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:m,textColorTertiary:Z,textColorHover:c,textColorPressed:S,textColorFocus:c,textColorDisabled:m,textColorText:m,textColorTextHover:c,textColorTextPressed:S,textColorTextFocus:c,textColorTextDisabled:m,textColorGhost:m,textColorGhostHover:c,textColorGhostPressed:S,textColorGhostFocus:c,textColorGhostDisabled:m,border:`1px solid ${_}`,borderHover:`1px solid ${c}`,borderPressed:`1px solid ${S}`,borderFocus:`1px solid ${c}`,borderDisabled:`1px solid ${_}`,rippleColor:H,colorPrimary:H,colorHoverPrimary:c,colorPressedPrimary:S,colorFocusPrimary:c,colorDisabledPrimary:H,textColorPrimary:s,textColorHoverPrimary:s,textColorPressedPrimary:s,textColorFocusPrimary:s,textColorDisabledPrimary:s,textColorTextPrimary:H,textColorTextHoverPrimary:c,textColorTextPressedPrimary:S,textColorTextFocusPrimary:c,textColorTextDisabledPrimary:m,textColorGhostPrimary:H,textColorGhostHoverPrimary:c,textColorGhostPressedPrimary:S,textColorGhostFocusPrimary:c,textColorGhostDisabledPrimary:H,borderPrimary:`1px solid ${H}`,borderHoverPrimary:`1px solid ${c}`,borderPressedPrimary:`1px solid ${S}`,borderFocusPrimary:`1px solid ${c}`,borderDisabledPrimary:`1px solid ${H}`,rippleColorPrimary:H,colorInfo:z,colorHoverInfo:v,colorPressedInfo:r,colorFocusInfo:v,colorDisabledInfo:z,textColorInfo:s,textColorHoverInfo:s,textColorPressedInfo:s,textColorFocusInfo:s,textColorDisabledInfo:s,textColorTextInfo:z,textColorTextHoverInfo:v,textColorTextPressedInfo:r,textColorTextFocusInfo:v,textColorTextDisabledInfo:m,textColorGhostInfo:z,textColorGhostHoverInfo:v,textColorGhostPressedInfo:r,textColorGhostFocusInfo:v,textColorGhostDisabledInfo:z,borderInfo:`1px solid ${z}`,borderHoverInfo:`1px solid ${v}`,borderPressedInfo:`1px solid ${r}`,borderFocusInfo:`1px solid ${v}`,borderDisabledInfo:`1px solid ${z}`,rippleColorInfo:z,colorSuccess:l,colorHoverSuccess:b,colorPressedSuccess:o,colorFocusSuccess:b,colorDisabledSuccess:l,textColorSuccess:s,textColorHoverSuccess:s,textColorPressedSuccess:s,textColorFocusSuccess:s,textColorDisabledSuccess:s,textColorTextSuccess:l,textColorTextHoverSuccess:b,textColorTextPressedSuccess:o,textColorTextFocusSuccess:b,textColorTextDisabledSuccess:m,textColorGhostSuccess:l,textColorGhostHoverSuccess:b,textColorGhostPressedSuccess:o,textColorGhostFocusSuccess:b,textColorGhostDisabledSuccess:l,borderSuccess:`1px solid ${l}`,borderHoverSuccess:`1px solid ${b}`,borderPressedSuccess:`1px solid ${o}`,borderFocusSuccess:`1px solid ${b}`,borderDisabledSuccess:`1px solid ${l}`,rippleColorSuccess:l,colorWarning:T,colorHoverWarning:P,colorPressedWarning:E,colorFocusWarning:P,colorDisabledWarning:T,textColorWarning:s,textColorHoverWarning:s,textColorPressedWarning:s,textColorFocusWarning:s,textColorDisabledWarning:s,textColorTextWarning:T,textColorTextHoverWarning:P,textColorTextPressedWarning:E,textColorTextFocusWarning:P,textColorTextDisabledWarning:m,textColorGhostWarning:T,textColorGhostHoverWarning:P,textColorGhostPressedWarning:E,textColorGhostFocusWarning:P,textColorGhostDisabledWarning:T,borderWarning:`1px solid ${T}`,borderHoverWarning:`1px solid ${P}`,borderPressedWarning:`1px solid ${E}`,borderFocusWarning:`1px solid ${P}`,borderDisabledWarning:`1px solid ${T}`,rippleColorWarning:T,colorError:$,colorHoverError:u,colorPressedError:F,colorFocusError:u,colorDisabledError:$,textColorError:s,textColorHoverError:s,textColorPressedError:s,textColorFocusError:s,textColorDisabledError:s,textColorTextError:$,textColorTextHoverError:u,textColorTextPressedError:F,textColorTextFocusError:u,textColorTextDisabledError:m,textColorGhostError:$,textColorGhostHoverError:u,textColorGhostPressedError:F,textColorGhostFocusError:u,textColorGhostDisabledError:$,borderError:`1px solid ${$}`,borderHoverError:`1px solid ${u}`,borderPressedError:`1px solid ${F}`,borderFocusError:`1px solid ${u}`,borderDisabledError:`1px solid ${$}`,rippleColorError:$,waveOpacity:"0.6",fontWeight:B,fontWeightStrong:K})},Jo={name:"Button",common:Io,self:Yo},Uo=p([X("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[I("color",[x("border",{borderColor:"var(--n-border-color)"}),I("disabled",[x("border",{borderColor:"var(--n-border-color-disabled)"})]),so("disabled",[p("&:focus",[x("state-border",{borderColor:"var(--n-border-color-focus)"})]),p("&:hover",[x("state-border",{borderColor:"var(--n-border-color-hover)"})]),p("&:active",[x("state-border",{borderColor:"var(--n-border-color-pressed)"})]),I("pressed",[x("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),I("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[x("border",{border:"var(--n-border-disabled)"})]),so("disabled",[p("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[x("state-border",{border:"var(--n-border-focus)"})]),p("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[x("state-border",{border:"var(--n-border-hover)"})]),p("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[x("state-border",{border:"var(--n-border-pressed)"})]),I("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[x("state-border",{border:"var(--n-border-pressed)"})])]),I("loading","cursor: wait;"),X("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[I("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Bo&&"MozBoxSizing"in document.createElement("div").style?p("&::moz-focus-inner",{border:0}):null,x("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),x("border",{border:"var(--n-border)"}),x("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),x("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[X("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Eo({top:"50%",originalTransform:"translateY(-50%)"})]),qo()]),x("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[p("~",[x("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),I("block",`
 display: flex;
 width: 100%;
 `),I("dashed",[x("border, state-border",{borderStyle:"dashed !important"})]),I("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),p("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),p("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Zo=Object.assign(Object.assign({},uo.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Fo}}),ee=ao({name:"Button",props:Zo,setup(e){const C=N(null),y=N(null),h=N(!1),g=Go(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),k=Ro(Ao,{}),{mergedSizeRef:M}=Wo({},{defaultSize:"medium",mergedSize:r=>{const{size:l}=e;if(l)return l;const{size:b}=k;if(b)return b;const{mergedSize:o}=r||{};return o?o.value:"medium"}}),j=V(()=>e.focusable&&!e.disabled),Y=r=>{var l;j.value||r.preventDefault(),!e.nativeFocusBehavior&&(r.preventDefault(),!e.disabled&&j.value&&((l=C.value)===null||l===void 0||l.focus({preventScroll:!0})))},J=r=>{var l;if(!e.disabled&&!e.loading){const{onClick:b}=e;b&&No(b,r),e.text||(l=y.value)===null||l===void 0||l.play()}},U=r=>{switch(r.key){case"Enter":if(!e.keyboard)return;h.value=!1}},m=r=>{switch(r.key){case"Enter":if(!e.keyboard||e.loading){r.preventDefault();return}h.value=!0}},Z=()=>{h.value=!1},{inlineThemeDisabled:c,mergedClsPrefixRef:S,mergedRtlRef:_}=ko(e),H=uo("Button","-button",Uo,Jo,e,S),s=Oo("Button",_,S),z=V(()=>{const r=H.value,{common:{cubicBezierEaseInOut:l,cubicBezierEaseOut:b},self:o}=r,{rippleDuration:T,opacityDisabled:P,fontWeight:E,fontWeightStrong:$}=o,u=M.value,{dashed:F,type:B,ghost:O,text:w,color:i,round:K,circle:oo,textColor:R,secondary:bo,tertiary:to,quaternary:xo,strong:ho}=e,fo={"font-weight":ho?$:E};let a={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const L=B==="tertiary",no=B==="default",n=L?"default":B;if(w){const d=R||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":d||o[t("textColorText",n)],"--n-text-color-hover":d?W(d):o[t("textColorTextHover",n)],"--n-text-color-pressed":d?A(d):o[t("textColorTextPressed",n)],"--n-text-color-focus":d?W(d):o[t("textColorTextHover",n)],"--n-text-color-disabled":d||o[t("textColorTextDisabled",n)]}}else if(O||F){const d=R||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":i||o[t("rippleColor",n)],"--n-text-color":d||o[t("textColorGhost",n)],"--n-text-color-hover":d?W(d):o[t("textColorGhostHover",n)],"--n-text-color-pressed":d?A(d):o[t("textColorGhostPressed",n)],"--n-text-color-focus":d?W(d):o[t("textColorGhostHover",n)],"--n-text-color-disabled":d||o[t("textColorGhostDisabled",n)]}}else if(bo){const d=no?o.textColor:L?o.textColorTertiary:o[t("color",n)],f=i||d,Q=B!=="default"&&B!=="tertiary";a={"--n-color":Q?q(f,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":Q?q(f,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":Q?q(f,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":Q?q(f,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":f,"--n-text-color-hover":f,"--n-text-color-pressed":f,"--n-text-color-focus":f,"--n-text-color-disabled":f}}else if(to||xo){const d=no?o.textColor:L?o.textColorTertiary:o[t("color",n)],f=i||d;to?(a["--n-color"]=o.colorTertiary,a["--n-color-hover"]=o.colorTertiaryHover,a["--n-color-pressed"]=o.colorTertiaryPressed,a["--n-color-focus"]=o.colorSecondaryHover,a["--n-color-disabled"]=o.colorTertiary):(a["--n-color"]=o.colorQuaternary,a["--n-color-hover"]=o.colorQuaternaryHover,a["--n-color-pressed"]=o.colorQuaternaryPressed,a["--n-color-focus"]=o.colorQuaternaryHover,a["--n-color-disabled"]=o.colorQuaternary),a["--n-ripple-color"]="#0000",a["--n-text-color"]=f,a["--n-text-color-hover"]=f,a["--n-text-color-pressed"]=f,a["--n-text-color-focus"]=f,a["--n-text-color-disabled"]=f}else a={"--n-color":i||o[t("color",n)],"--n-color-hover":i?W(i):o[t("colorHover",n)],"--n-color-pressed":i?A(i):o[t("colorPressed",n)],"--n-color-focus":i?W(i):o[t("colorFocus",n)],"--n-color-disabled":i||o[t("colorDisabled",n)],"--n-ripple-color":i||o[t("rippleColor",n)],"--n-text-color":R||(i?o.textColorPrimary:L?o.textColorTertiary:o[t("textColor",n)]),"--n-text-color-hover":R||(i?o.textColorHoverPrimary:o[t("textColorHover",n)]),"--n-text-color-pressed":R||(i?o.textColorPressedPrimary:o[t("textColorPressed",n)]),"--n-text-color-focus":R||(i?o.textColorFocusPrimary:o[t("textColorFocus",n)]),"--n-text-color-disabled":R||(i?o.textColorDisabledPrimary:o[t("textColorDisabled",n)])};let eo={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};w?eo={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:eo={"--n-border":o[t("border",n)],"--n-border-hover":o[t("borderHover",n)],"--n-border-pressed":o[t("borderPressed",n)],"--n-border-focus":o[t("borderFocus",n)],"--n-border-disabled":o[t("borderDisabled",n)]};const{[t("height",u)]:ro,[t("fontSize",u)]:vo,[t("padding",u)]:po,[t("paddingRound",u)]:Co,[t("iconSize",u)]:yo,[t("borderRadius",u)]:go,[t("iconMargin",u)]:mo,waveOpacity:Po}=o,So={"--n-width":oo&&!w?ro:"initial","--n-height":w?"initial":ro,"--n-font-size":vo,"--n-padding":oo||w?"initial":K?Co:po,"--n-icon-size":yo,"--n-icon-margin":mo,"--n-border-radius":w?"initial":oo||K?ro:go};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":l,"--n-bezier-ease-out":b,"--n-ripple-duration":T,"--n-opacity-disabled":P,"--n-wave-opacity":Po},fo),a),eo),So)}),v=c?Mo("button",V(()=>{let r="";const{dashed:l,type:b,ghost:o,text:T,color:P,round:E,circle:$,textColor:u,secondary:F,tertiary:B,quaternary:O,strong:w}=e;l&&(r+="a"),o&&(r+="b"),T&&(r+="c"),E&&(r+="d"),$&&(r+="e"),F&&(r+="f"),B&&(r+="g"),O&&(r+="h"),w&&(r+="i"),P&&(r+="j"+io(P)),u&&(r+="k"+io(u));const{value:i}=M;return r+="l"+i[0],r+="m"+b[0],r}),z,e):void 0;return{selfElRef:C,waveElRef:y,mergedClsPrefix:S,mergedFocusable:j,mergedSize:M,showBorder:g,enterPressed:h,rtlEnabled:s,handleMousedown:Y,handleKeydown:m,handleBlur:Z,handleKeyup:U,handleClick:J,customColorCssVars:V(()=>{const{color:r}=e;if(!r)return null;const l=W(r);return{"--n-border-color":r,"--n-border-color-hover":l,"--n-border-color-pressed":A(r),"--n-border-color-focus":l,"--n-border-color-disabled":r}}),cssVars:c?void 0:z,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{mergedClsPrefix:e,tag:C,onRender:y}=this;y==null||y();const h=lo(this.$slots.default,g=>g&&D("span",{class:`${e}-button__content`},g));return D(C,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&h,D(jo,{width:!0},{default:()=>lo(this.$slots.icon,g=>(this.loading||this.renderIcon||g)&&D("span",{class:`${e}-button__icon`,style:{margin:_o(this.$slots.default)?"0":""}},D(Ko,null,{default:()=>this.loading?D(Lo,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):D("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():g)})))}),this.iconPlacement==="left"&&h,this.text?null:D(Vo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?D("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?D("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});export{ee as B,Jo as b};

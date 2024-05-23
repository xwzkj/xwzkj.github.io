import{a7 as Ye,U as Xe,H as we,i as V,y as he,q as A,v as Ke,r as X,a9 as K,d as D,a2 as m,X as Se,C as J,z as Re,f as Ge}from"./@vue-D_0RU2Tl.js";import{m as te,u as Je}from"./lodash-es-BZZZw3H7.js";import{r as ke,s as ne,c as Y,a as R,g as Ze,p as qe}from"./seemly-DmzweY-y.js";import{p as Qe,u as se}from"./@css-render-DWdI-o_L.js";import{C as eo,e as oo}from"./css-render-BDrvWz3H.js";import{m as ve}from"./@emotion-WldOFDRm.js";import{i as ro,u as to}from"./vooks-CX8wCwuJ.js";function ze(t,...n){if(Array.isArray(t))t.forEach(i=>ze(i,...n));else return t(...n)}function Pe(t,n){throw new Error(`[naive/${t}]: ${n}`)}function $e(t){return t.some(n=>Ye(n)?!(n.type===Xe||n.type===we&&!$e(n.children)):!0)?t:null}function me(t,n){const i=t&&$e(t());return n(i||null)}function be(t){return t.replace(/#|\(|\)|,|\s|\./g,"_")}const no="n",ie=`.${no}-`,io="__",so="--",Me=eo(),Ee=Qe({blockPrefix:ie,elementPrefix:io,modifierPrefix:so});Me.use(Ee);const{c:y,find:sr}=Me,{cB:P,cE:k,cM:w,cNotM:U}=Ee;function lo(t){return y(({props:{bPrefix:n}})=>`${n||ie}modal, ${n||ie}drawer`,[t])}function ao(t){return y(({props:{bPrefix:n}})=>`${n||ie}popover`,[t])}function N(t,n){return t+(n==="default"?"":n.replace(/^[a-z]/,i=>i.toUpperCase()))}const le={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:co,fontFamily:uo,lineHeight:ho}=le,Ie=y("body",`
 margin: 0;
 font-size: ${co};
 font-family: ${uo};
 line-height: ${ho};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[y("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),Z="n-config-provider",G="naive-ui-style";function F(t,n,i,d,a,c){const e=se(),o=V(Z,null);if(i){const s=()=>{const l=c==null?void 0:c.value;i.mount({id:l===void 0?n:l+n,head:!0,props:{bPrefix:l?`.${l}-`:void 0},anchorMetaName:G,ssr:e}),o!=null&&o.preflightStyleDisabled||Ie.mount({id:"n-global",head:!0,anchorMetaName:G,ssr:e})};e?s():he(s)}return A(()=>{var s;const{theme:{common:l,self:p,peers:u={}}={},themeOverrides:h={},builtinThemeOverrides:f={}}=a,{common:x,peers:b}=h,{common:g=void 0,[t]:{common:C=void 0,self:S=void 0,peers:E={}}={}}=(o==null?void 0:o.mergedThemeRef.value)||{},{common:$=void 0,[t]:M={}}=(o==null?void 0:o.mergedThemeOverridesRef.value)||{},{common:I,peers:T={}}=M,H=te({},l||C||g||d.common,$,I,x),z=te((s=p||S||d.self)===null||s===void 0?void 0:s(H),f,M,h);return{common:H,self:z,peers:te({},d.peers,E,u),peerOverrides:te({},f.peers,T,b)}})}F.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const fo="n";function q(t={},n={defaultBordered:!0}){const i=V(Z,null);return{inlineThemeDisabled:i==null?void 0:i.inlineThemeDisabled,mergedRtlRef:i==null?void 0:i.mergedRtlRef,mergedComponentPropsRef:i==null?void 0:i.mergedComponentPropsRef,mergedBreakpointsRef:i==null?void 0:i.mergedBreakpointsRef,mergedBorderedRef:A(()=>{var d,a;const{bordered:c}=t;return c!==void 0?c:(a=(d=i==null?void 0:i.mergedBorderedRef.value)!==null&&d!==void 0?d:n.defaultBordered)!==null&&a!==void 0?a:!0}),mergedClsPrefixRef:i?i.mergedClsPrefixRef:Ke(fo),namespaceRef:A(()=>i==null?void 0:i.mergedNamespaceRef.value)}}function fe(t,n,i){if(!n)return;const d=se(),a=V(Z,null),c=()=>{const e=i.value;n.mount({id:e===void 0?t:e+t,head:!0,anchorMetaName:G,props:{bPrefix:e?`.${e}-`:void 0},ssr:d}),a!=null&&a.preflightStyleDisabled||Ie.mount({id:"n-global",head:!0,anchorMetaName:G,ssr:d})};d?c():he(c)}function Q(t,n,i,d){var a;i||Pe("useThemeClass","cssVarsRef is not passed");const c=(a=V(Z,null))===null||a===void 0?void 0:a.mergedThemeHashRef,e=X(""),o=se();let r;const s=`__${t}`,l=()=>{let p=s;const u=n?n.value:void 0,h=c==null?void 0:c.value;h&&(p+="-"+h),u&&(p+="-"+u);const{themeOverrides:f,builtinThemeOverrides:x}=d;f&&(p+="-"+ve(JSON.stringify(f))),x&&(p+="-"+ve(JSON.stringify(x))),e.value=p,r=()=>{const b=i.value;let g="";for(const C in b)g+=`${C}: ${b[C]};`;y(`.${p}`,g).mount({id:p,ssr:o}),r=void 0}};return K(()=>{l()}),{themeClass:e,onRender:()=>{r==null||r()}}}function Be(t,n,i){if(!n)return;const d=se(),a=A(()=>{const{value:e}=n;if(!e)return;const o=e[t];if(o)return o}),c=()=>{K(()=>{const{value:e}=i,o=`${e}${t}Rtl`;if(oo(o,d))return;const{value:r}=a;r&&r.style.mount({id:o,head:!0,anchorMetaName:G,props:{bPrefix:e?`.${e}-`:void 0},ssr:d})})};return d?c():he(c),a}function po(t,n){return D({name:Je(t),setup(){var i;const d=(i=V(Z,null))===null||i===void 0?void 0:i.mergedIconsRef;return()=>{var a;const c=(a=d==null?void 0:d.value)===null||a===void 0?void 0:a[t];return c?c():n}}})}const go=po("close",m("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},m("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},m("g",{fill:"currentColor","fill-rule":"nonzero"},m("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),vo=D({name:"BaseIconSwitchTransition",setup(t,{slots:n}){const i=ro();return()=>m(Se,{name:"icon-switch-transition",appear:i.value},n)}}),mo=P("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[y("svg",`
 height: 1em;
 width: 1em;
 `)]),bo=D({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(t){fe("-base-icon",mo,J(t,"clsPrefix"))},render(){return m("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Co=P("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[w("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),y("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),U("disabled",[y("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),y("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),y("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),y("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),y("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),w("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),w("round",[y("&::before",`
 border-radius: 50%;
 `)])]),xo=D({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(t){return fe("-base-close",Co,J(t,"clsPrefix")),()=>{const{clsPrefix:n,disabled:i,absolute:d,round:a,isButtonTag:c}=t;return m(c?"button":"div",{type:c?"button":void 0,tabindex:i||!t.focusable?-1:0,"aria-disabled":i,"aria-label":"close",role:c?void 0:"button",disabled:i,class:[`${n}-base-close`,d&&`${n}-base-close--absolute`,i&&`${n}-base-close--disabled`,a&&`${n}-base-close--round`],onMousedown:o=>{t.focusable||o.preventDefault()},onClick:t.onClick},m(bo,{clsPrefix:n},{default:()=>m(go,null)}))}}}),{cubicBezierEaseInOut:yo}=le;function Ce({originalTransform:t="",left:n=0,top:i=0,transition:d=`all .3s ${yo} !important`}={}){return[y("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:t+" scale(0.75)",left:n,top:i,opacity:0}),y("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:n,top:i,opacity:1}),y("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:i,transition:d})]}const wo=y([y("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),P("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[k("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Ce()]),k("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ce({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),k("container",`
 animation: rotator 3s linear infinite both;
 `,[k("icon",`
 height: 1em;
 width: 1em;
 `)])])]),de="1.6s",So={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Ro=D({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},So),setup(t){fe("-base-loading",wo,J(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:n,strokeWidth:i,stroke:d,scale:a}=this,c=n/a;return m("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},m(vo,null,{default:()=>this.show?m("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},m("div",{class:`${t}-base-loading__container`},m("svg",{class:`${t}-base-loading__icon`,viewBox:`0 0 ${2*c} ${2*c}`,xmlns:"http://www.w3.org/2000/svg",style:{color:d}},m("g",null,m("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${c} ${c};270 ${c} ${c}`,begin:"0s",dur:de,fill:"freeze",repeatCount:"indefinite"}),m("circle",{class:`${t}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:c,cy:c,r:n-i/2,"stroke-dasharray":5.67*n,"stroke-dashoffset":18.48*n},m("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${c} ${c};135 ${c} ${c};450 ${c} ${c}`,begin:"0s",dur:de,fill:"freeze",repeatCount:"indefinite"}),m("animate",{attributeName:"stroke-dashoffset",values:`${5.67*n};${1.42*n};${5.67*n}`,begin:"0s",dur:de,fill:"freeze",repeatCount:"indefinite"})))))):m("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}}),v={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},ko=ke(v.neutralBase),Ne=ke(v.neutralInvertBase),zo="rgba("+Ne.slice(0,3).join(", ")+", ";function xe(t){return zo+String(t)+")"}function B(t){const n=Array.from(Ne);return n[3]=Number(t),Y(ko,n)}const ee=Object.assign(Object.assign({name:"common"},le),{baseColor:v.neutralBase,primaryColor:v.primaryDefault,primaryColorHover:v.primaryHover,primaryColorPressed:v.primaryActive,primaryColorSuppl:v.primarySuppl,infoColor:v.infoDefault,infoColorHover:v.infoHover,infoColorPressed:v.infoActive,infoColorSuppl:v.infoSuppl,successColor:v.successDefault,successColorHover:v.successHover,successColorPressed:v.successActive,successColorSuppl:v.successSuppl,warningColor:v.warningDefault,warningColorHover:v.warningHover,warningColorPressed:v.warningActive,warningColorSuppl:v.warningSuppl,errorColor:v.errorDefault,errorColorHover:v.errorHover,errorColorPressed:v.errorActive,errorColorSuppl:v.errorSuppl,textColorBase:v.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:B(v.alpha4),placeholderColor:B(v.alpha4),placeholderColorDisabled:B(v.alpha5),iconColor:B(v.alpha4),iconColorHover:ne(B(v.alpha4),{lightness:.75}),iconColorPressed:ne(B(v.alpha4),{lightness:.9}),iconColorDisabled:B(v.alpha5),opacity1:v.alpha1,opacity2:v.alpha2,opacity3:v.alpha3,opacity4:v.alpha4,opacity5:v.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:B(Number(v.alphaClose)),closeIconColorHover:B(Number(v.alphaClose)),closeIconColorPressed:B(Number(v.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:B(v.alpha4),clearColorHover:ne(B(v.alpha4),{lightness:.75}),clearColorPressed:ne(B(v.alpha4),{lightness:.9}),scrollbarColor:xe(v.alphaScrollbar),scrollbarColorHover:xe(v.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:B(v.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:v.neutralPopover,tableColor:v.neutralCard,cardColor:v.neutralCard,modalColor:v.neutralModal,bodyColor:v.neutralBody,tagColor:"#eee",avatarColor:B(v.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:B(v.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:v.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),{cubicBezierEaseInOut:ye}=le;function Po({name:t="fade-in",enterDuration:n="0.2s",leaveDuration:i="0.2s",enterCubicBezier:d=ye,leaveCubicBezier:a=ye}={}){return[y(`&.${t}-transition-enter-active`,{transition:`all ${n} ${d}!important`}),y(`&.${t}-transition-leave-active`,{transition:`all ${i} ${a}!important`}),y(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0}),y(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`,{opacity:1})]}const $o={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"},Mo=t=>{const{textColor2:n,primaryColorHover:i,primaryColorPressed:d,primaryColor:a,infoColor:c,successColor:e,warningColor:o,errorColor:r,baseColor:s,borderColor:l,opacityDisabled:p,tagColor:u,closeIconColor:h,closeIconColorHover:f,closeIconColorPressed:x,borderRadiusSmall:b,fontSizeMini:g,fontSizeTiny:C,fontSizeSmall:S,fontSizeMedium:E,heightMini:$,heightTiny:M,heightSmall:I,heightMedium:T,closeColorHover:H,closeColorPressed:z,buttonColor2Hover:O,buttonColor2Pressed:j,fontWeightStrong:_}=t;return Object.assign(Object.assign({},$o),{closeBorderRadius:b,heightTiny:$,heightSmall:M,heightMedium:I,heightLarge:T,borderRadius:b,opacityDisabled:p,fontSizeTiny:g,fontSizeSmall:C,fontSizeMedium:S,fontSizeLarge:E,fontWeightStrong:_,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:s,colorCheckable:"#0000",colorHoverCheckable:O,colorPressedCheckable:j,colorChecked:a,colorCheckedHover:i,colorCheckedPressed:d,border:`1px solid ${l}`,textColor:n,color:u,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:f,closeIconColorPressed:x,closeColorHover:H,closeColorPressed:z,borderPrimary:`1px solid ${R(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:R(a,{alpha:.12}),colorBorderedPrimary:R(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:R(a,{alpha:.12}),closeColorPressedPrimary:R(a,{alpha:.18}),borderInfo:`1px solid ${R(c,{alpha:.3})}`,textColorInfo:c,colorInfo:R(c,{alpha:.12}),colorBorderedInfo:R(c,{alpha:.1}),closeIconColorInfo:c,closeIconColorHoverInfo:c,closeIconColorPressedInfo:c,closeColorHoverInfo:R(c,{alpha:.12}),closeColorPressedInfo:R(c,{alpha:.18}),borderSuccess:`1px solid ${R(e,{alpha:.3})}`,textColorSuccess:e,colorSuccess:R(e,{alpha:.12}),colorBorderedSuccess:R(e,{alpha:.1}),closeIconColorSuccess:e,closeIconColorHoverSuccess:e,closeIconColorPressedSuccess:e,closeColorHoverSuccess:R(e,{alpha:.12}),closeColorPressedSuccess:R(e,{alpha:.18}),borderWarning:`1px solid ${R(o,{alpha:.35})}`,textColorWarning:o,colorWarning:R(o,{alpha:.15}),colorBorderedWarning:R(o,{alpha:.12}),closeIconColorWarning:o,closeIconColorHoverWarning:o,closeIconColorPressedWarning:o,closeColorHoverWarning:R(o,{alpha:.12}),closeColorPressedWarning:R(o,{alpha:.18}),borderError:`1px solid ${R(r,{alpha:.23})}`,textColorError:r,colorError:R(r,{alpha:.1}),colorBorderedError:R(r,{alpha:.08}),closeIconColorError:r,closeIconColorHoverError:r,closeIconColorPressedError:r,closeColorHoverError:R(r,{alpha:.12}),closeColorPressedError:R(r,{alpha:.18})})},Eo={name:"Tag",common:ee,self:Mo},Io={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Bo=P("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[w("strong",`
 font-weight: var(--n-font-weight-strong);
 `),k("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),k("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),k("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),k("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),w("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[k("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),k("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),w("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),w("icon, avatar",[w("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),w("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),w("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[U("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[U("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[U("checked","color: var(--n-text-color-pressed-checkable);")])]),w("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[U("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),No=Object.assign(Object.assign(Object.assign({},F.props),Io),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Ao="n-tag",lr=D({name:"Tag",props:No,setup(t){const n=X(null),{mergedBorderedRef:i,mergedClsPrefixRef:d,inlineThemeDisabled:a,mergedRtlRef:c}=q(t),e=F("Tag","-tag",Bo,Eo,t,d);Re(Ao,{roundRef:J(t,"round")});function o(h){if(!t.disabled&&t.checkable){const{checked:f,onCheckedChange:x,onUpdateChecked:b,"onUpdate:checked":g}=t;b&&b(!f),g&&g(!f),x&&x(!f)}}function r(h){if(t.triggerClickOnClose||h.stopPropagation(),!t.disabled){const{onClose:f}=t;f&&ze(f,h)}}const s={setTextContent(h){const{value:f}=n;f&&(f.textContent=h)}},l=Be("Tag",c,d),p=A(()=>{const{type:h,size:f,color:{color:x,textColor:b}={}}=t,{common:{cubicBezierEaseInOut:g},self:{padding:C,closeMargin:S,borderRadius:E,opacityDisabled:$,textColorCheckable:M,textColorHoverCheckable:I,textColorPressedCheckable:T,textColorChecked:H,colorCheckable:z,colorHoverCheckable:O,colorPressedCheckable:j,colorChecked:_,colorCheckedHover:W,colorCheckedPressed:oe,closeBorderRadius:ae,fontWeightStrong:ce,[N("colorBordered",h)]:He,[N("closeSize",f)]:Te,[N("closeIconSize",f)]:Oe,[N("fontSize",f)]:Le,[N("height",f)]:pe,[N("color",h)]:De,[N("textColor",h)]:Fe,[N("border",h)]:_e,[N("closeIconColor",h)]:ge,[N("closeIconColorHover",h)]:je,[N("closeIconColorPressed",h)]:Ue,[N("closeColorHover",h)]:We,[N("closeColorPressed",h)]:Ve}}=e.value,re=Ze(S);return{"--n-font-weight-strong":ce,"--n-avatar-size-override":`calc(${pe} - 8px)`,"--n-bezier":g,"--n-border-radius":E,"--n-border":_e,"--n-close-icon-size":Oe,"--n-close-color-pressed":Ve,"--n-close-color-hover":We,"--n-close-border-radius":ae,"--n-close-icon-color":ge,"--n-close-icon-color-hover":je,"--n-close-icon-color-pressed":Ue,"--n-close-icon-color-disabled":ge,"--n-close-margin-top":re.top,"--n-close-margin-right":re.right,"--n-close-margin-bottom":re.bottom,"--n-close-margin-left":re.left,"--n-close-size":Te,"--n-color":x||(i.value?He:De),"--n-color-checkable":z,"--n-color-checked":_,"--n-color-checked-hover":W,"--n-color-checked-pressed":oe,"--n-color-hover-checkable":O,"--n-color-pressed-checkable":j,"--n-font-size":Le,"--n-height":pe,"--n-opacity-disabled":$,"--n-padding":C,"--n-text-color":b||Fe,"--n-text-color-checkable":M,"--n-text-color-checked":H,"--n-text-color-hover-checkable":I,"--n-text-color-pressed-checkable":T}}),u=a?Q("tag",A(()=>{let h="";const{type:f,size:x,color:{color:b,textColor:g}={}}=t;return h+=f[0],h+=x[0],b&&(h+=`a${be(b)}`),g&&(h+=`b${be(g)}`),i.value&&(h+="c"),h}),p,t):void 0;return Object.assign(Object.assign({},s),{rtlEnabled:l,mergedClsPrefix:d,contentRef:n,mergedBordered:i,handleClick:o,handleCloseClick:r,cssVars:a?void 0:p,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender})},render(){var t,n;const{mergedClsPrefix:i,rtlEnabled:d,closable:a,color:{borderColor:c}={},round:e,onRender:o,$slots:r}=this;o==null||o();const s=me(r.avatar,p=>p&&m("div",{class:`${i}-tag__avatar`},p)),l=me(r.icon,p=>p&&m("div",{class:`${i}-tag__icon`},p));return m("div",{class:[`${i}-tag`,this.themeClass,{[`${i}-tag--rtl`]:d,[`${i}-tag--strong`]:this.strong,[`${i}-tag--disabled`]:this.disabled,[`${i}-tag--checkable`]:this.checkable,[`${i}-tag--checked`]:this.checkable&&this.checked,[`${i}-tag--round`]:e,[`${i}-tag--avatar`]:s,[`${i}-tag--icon`]:l,[`${i}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},l||s,m("span",{class:`${i}-tag__content`,ref:"contentRef"},(n=(t=this.$slots).default)===null||n===void 0?void 0:n.call(t)),!this.checkable&&a?m(xo,{clsPrefix:i,class:`${i}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:e,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?m("div",{class:`${i}-tag__border`,style:{borderColor:c}}):null)}}),Ho=t=>{const{textColor1:n,dividerColor:i,fontWeightStrong:d}=t;return{textColor:n,color:i,fontWeight:d}},To={name:"Divider",common:ee,self:Ho},Oo=P("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[U("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[U("no-title",`
 display: flex;
 align-items: center;
 `)]),k("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),w("title-position-left",[k("line",[w("left",{width:"28px"})])]),w("title-position-right",[k("line",[w("right",{width:"28px"})])]),w("dashed",[k("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),w("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),k("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),U("dashed",[k("line",{backgroundColor:"var(--n-color)"})]),w("dashed",[k("line",{borderColor:"var(--n-color)"})]),w("vertical",{backgroundColor:"var(--n-color)"})]),Lo=Object.assign(Object.assign({},F.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),ar=D({name:"Divider",props:Lo,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=q(t),d=F("Divider","-divider",Oo,To,t,n),a=A(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:o,textColor:r,fontWeight:s}}=d.value;return{"--n-bezier":e,"--n-color":o,"--n-text-color":r,"--n-font-weight":s}}),c=i?Q("divider",void 0,a,t):void 0;return{mergedClsPrefix:n,cssVars:i?void 0:a,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var t;const{$slots:n,titlePlacement:i,vertical:d,dashed:a,cssVars:c,mergedClsPrefix:e}=this;return(t=this.onRender)===null||t===void 0||t.call(this),m("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:d,[`${e}-divider--no-title`]:!n.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${i}`]:n.default&&i}],style:c},d?null:m("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!d&&n.default?m(we,null,m("div",{class:`${e}-divider__title`},this.$slots),m("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),Do=t=>{const{textColor2:n,cardColor:i,modalColor:d,popoverColor:a,dividerColor:c,borderRadius:e,fontSize:o,hoverColor:r}=t;return{textColor:n,color:i,colorHover:r,colorModal:d,colorHoverModal:Y(d,r),colorPopover:a,colorHoverPopover:Y(a,r),borderColor:c,borderColorModal:Y(d,c),borderColorPopover:Y(a,c),borderRadius:e,fontSize:o}},Fo={name:"List",common:ee,self:Do},_o=t=>{const{opacityDisabled:n,heightTiny:i,heightSmall:d,heightMedium:a,heightLarge:c,heightHuge:e,primaryColor:o,fontSize:r}=t;return{fontSize:r,textColor:o,sizeTiny:i,sizeSmall:d,sizeMedium:a,sizeLarge:c,sizeHuge:e,color:o,opacitySpinning:n}},jo={name:"Spin",common:ee,self:_o},Uo=y([P("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[w("show-divider",[P("list-item",[y("&:not(:last-child)",[k("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),w("clickable",[P("list-item",`
 cursor: pointer;
 `)]),w("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),w("hoverable",[P("list-item",`
 border-radius: var(--n-border-radius);
 `,[y("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[k("divider",`
 background-color: transparent;
 `)])])]),w("bordered, hoverable",[P("list-item",`
 padding: 12px 20px;
 `),k("header, footer",`
 padding: 12px 20px;
 `)]),k("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[y("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),P("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[k("prefix",`
 margin-right: 20px;
 flex: 0;
 `),k("suffix",`
 margin-left: 20px;
 flex: 0;
 `),k("main",`
 flex: 1;
 `),k("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),lo(P("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),ao(P("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Wo=Object.assign(Object.assign({},F.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),Ae="n-list",cr=D({name:"List",props:Wo,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedRtlRef:d}=q(t),a=Be("List",d,n),c=F("List","-list",Uo,Fo,t,n);Re(Ae,{showDividerRef:J(t,"showDivider"),mergedClsPrefixRef:n});const e=A(()=>{const{common:{cubicBezierEaseInOut:r},self:{fontSize:s,textColor:l,color:p,colorModal:u,colorPopover:h,borderColor:f,borderColorModal:x,borderColorPopover:b,borderRadius:g,colorHover:C,colorHoverModal:S,colorHoverPopover:E}}=c.value;return{"--n-font-size":s,"--n-bezier":r,"--n-text-color":l,"--n-color":p,"--n-border-radius":g,"--n-border-color":f,"--n-border-color-modal":x,"--n-border-color-popover":b,"--n-color-modal":u,"--n-color-popover":h,"--n-color-hover":C,"--n-color-hover-modal":S,"--n-color-hover-popover":E}}),o=i?Q("list",void 0,e,t):void 0;return{mergedClsPrefix:n,rtlEnabled:a,cssVars:i?void 0:e,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var t;const{$slots:n,mergedClsPrefix:i,onRender:d}=this;return d==null||d(),m("ul",{class:[`${i}-list`,this.rtlEnabled&&`${i}-list--rtl`,this.bordered&&`${i}-list--bordered`,this.showDivider&&`${i}-list--show-divider`,this.hoverable&&`${i}-list--hoverable`,this.clickable&&`${i}-list--clickable`,this.themeClass],style:this.cssVars},n.header?m("div",{class:`${i}-list__header`},n.header()):null,(t=n.default)===null||t===void 0?void 0:t.call(n),n.footer?m("div",{class:`${i}-list__footer`},n.footer()):null)}}),dr=D({name:"ListItem",setup(){const t=V(Ae,null);return t||Pe("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:t.showDividerRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:n}=this;return m("li",{class:`${n}-list-item`},t.prefix?m("div",{class:`${n}-list-item__prefix`},t.prefix()):null,t.default?m("div",{class:`${n}-list-item__main`},t):null,t.suffix?m("div",{class:`${n}-list-item__suffix`},t.suffix()):null,this.showDivider&&m("div",{class:`${n}-list-item__divider`}))}}),Vo=y([P("qr-code",`
 background: #fff;
 border-radius: var(--n-border-radius);
 display: inline-flex;
 `)]),Yo=t=>({borderRadius:t.borderRadius}),Xo={name:"QrCode",common:ee,self:Yo};var L;(function(t){class n{static encodeText(e,o){const r=t.QrSegment.makeSegments(e);return n.encodeSegments(r,o)}static encodeBinary(e,o){const r=t.QrSegment.makeBytes(e);return n.encodeSegments([r],o)}static encodeSegments(e,o,r=1,s=40,l=-1,p=!0){if(!(n.MIN_VERSION<=r&&r<=s&&s<=n.MAX_VERSION)||l<-1||l>7)throw new RangeError("Invalid value");let u,h;for(u=r;;u++){const g=n.getNumDataCodewords(u,o)*8,C=a.getTotalBits(e,u);if(C<=g){h=C;break}if(u>=s)throw new RangeError("Data too long")}for(const g of[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH])p&&h<=n.getNumDataCodewords(u,g)*8&&(o=g);const f=[];for(const g of e){i(g.mode.modeBits,4,f),i(g.numChars,g.mode.numCharCountBits(u),f);for(const C of g.getData())f.push(C)}const x=n.getNumDataCodewords(u,o)*8;i(0,Math.min(4,x-f.length),f),i(0,(8-f.length%8)%8,f);for(let g=236;f.length<x;g^=253)i(g,8,f);const b=[];for(;b.length*8<f.length;)b.push(0);return f.forEach((g,C)=>b[C>>>3]|=g<<7-(C&7)),new n(u,o,b,l)}constructor(e,o,r,s){if(this.version=e,this.errorCorrectionLevel=o,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(s<-1||s>7)throw new RangeError("Mask value out of range");this.size=e*4+17;const l=[];for(let u=0;u<this.size;u++)l.push(!1);for(let u=0;u<this.size;u++)this.modules.push(l.slice()),this.isFunction.push(l.slice());this.drawFunctionPatterns();const p=this.addEccAndInterleave(r);if(this.drawCodewords(p),s===-1){let u=1e9;for(let h=0;h<8;h++){this.applyMask(h),this.drawFormatBits(h);const f=this.getPenaltyScore();f<u&&(s=h,u=f),this.applyMask(h)}}this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}getModule(e,o){return e>=0&&e<this.size&&o>=0&&o<this.size&&this.modules[o][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2===0),this.setFunctionModule(r,6,r%2===0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),o=e.length;for(let r=0;r<o;r++)for(let s=0;s<o;s++)r===0&&s===0||r===0&&s===o-1||r===o-1&&s===0||this.drawAlignmentPattern(e[r],e[s]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const o=this.errorCorrectionLevel.formatBits<<3|e;let r=o;for(let l=0;l<10;l++)r=r<<1^(r>>>9)*1335;const s=(o<<10|r)^21522;for(let l=0;l<=5;l++)this.setFunctionModule(8,l,d(s,l));this.setFunctionModule(8,7,d(s,6)),this.setFunctionModule(8,8,d(s,7)),this.setFunctionModule(7,8,d(s,8));for(let l=9;l<15;l++)this.setFunctionModule(14-l,8,d(s,l));for(let l=0;l<8;l++)this.setFunctionModule(this.size-1-l,8,d(s,l));for(let l=8;l<15;l++)this.setFunctionModule(8,this.size-15+l,d(s,l));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let r=0;r<12;r++)e=e<<1^(e>>>11)*7973;const o=this.version<<12|e;for(let r=0;r<18;r++){const s=d(o,r),l=this.size-11+r%3,p=Math.floor(r/3);this.setFunctionModule(l,p,s),this.setFunctionModule(p,l,s)}}drawFinderPattern(e,o){for(let r=-4;r<=4;r++)for(let s=-4;s<=4;s++){const l=Math.max(Math.abs(s),Math.abs(r)),p=e+s,u=o+r;p>=0&&p<this.size&&u>=0&&u<this.size&&this.setFunctionModule(p,u,l!==2&&l!==4)}}drawAlignmentPattern(e,o){for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++)this.setFunctionModule(e+s,o+r,Math.max(Math.abs(s),Math.abs(r))!==1)}setFunctionModule(e,o,r){this.modules[o][e]=r,this.isFunction[o][e]=!0}addEccAndInterleave(e){const o=this.version,r=this.errorCorrectionLevel;if(e.length!==n.getNumDataCodewords(o,r))throw new RangeError("Invalid argument");const s=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][o],l=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][o],p=Math.floor(n.getNumRawDataModules(o)/8),u=s-p%s,h=Math.floor(p/s),f=[],x=n.reedSolomonComputeDivisor(l);for(let g=0,C=0;g<s;g++){const S=e.slice(C,C+h-l+(g<u?0:1));C+=S.length;const E=n.reedSolomonComputeRemainder(S,x);g<u&&S.push(0),f.push(S.concat(E))}const b=[];for(let g=0;g<f[0].length;g++)f.forEach((C,S)=>{(g!==h-l||S>=u)&&b.push(C[g])});return b}drawCodewords(e){if(e.length!==Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let o=0;for(let r=this.size-1;r>=1;r-=2){r===6&&(r=5);for(let s=0;s<this.size;s++)for(let l=0;l<2;l++){const p=r-l,h=(r+1&2)===0?this.size-1-s:s;!this.isFunction[h][p]&&o<e.length*8&&(this.modules[h][p]=d(e[o>>>3],7-(o&7)),o++)}}}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let o=0;o<this.size;o++)for(let r=0;r<this.size;r++){let s;switch(e){case 0:s=(r+o)%2===0;break;case 1:s=o%2===0;break;case 2:s=r%3===0;break;case 3:s=(r+o)%3===0;break;case 4:s=(Math.floor(r/3)+Math.floor(o/2))%2===0;break;case 5:s=r*o%2+r*o%3===0;break;case 6:s=(r*o%2+r*o%3)%2===0;break;case 7:s=((r+o)%2+r*o%3)%2===0;break;default:throw new Error("Unreachable")}!this.isFunction[o][r]&&s&&(this.modules[o][r]=!this.modules[o][r])}}getPenaltyScore(){let e=0;for(let l=0;l<this.size;l++){let p=!1,u=0;const h=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[l][f]===p?(u++,u===5?e+=n.PENALTY_N1:u>5&&e++):(this.finderPenaltyAddHistory(u,h),p||(e+=this.finderPenaltyCountPatterns(h)*n.PENALTY_N3),p=this.modules[l][f],u=1);e+=this.finderPenaltyTerminateAndCount(p,u,h)*n.PENALTY_N3}for(let l=0;l<this.size;l++){let p=!1,u=0;const h=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][l]===p?(u++,u===5?e+=n.PENALTY_N1:u>5&&e++):(this.finderPenaltyAddHistory(u,h),p||(e+=this.finderPenaltyCountPatterns(h)*n.PENALTY_N3),p=this.modules[f][l],u=1);e+=this.finderPenaltyTerminateAndCount(p,u,h)*n.PENALTY_N3}for(let l=0;l<this.size-1;l++)for(let p=0;p<this.size-1;p++){const u=this.modules[l][p];u===this.modules[l][p+1]&&u===this.modules[l+1][p]&&u===this.modules[l+1][p+1]&&(e+=n.PENALTY_N2)}let o=0;for(const l of this.modules)o=l.reduce((p,u)=>p+(u?1:0),o);const r=this.size*this.size,s=Math.ceil(Math.abs(o*20-r*10)/r)-1;return e+=s*n.PENALTY_N4,e}getAlignmentPatternPositions(){if(this.version===1)return[];{const e=Math.floor(this.version/7)+2,o=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6];for(let s=this.size-7;r.length<e;s-=o)r.splice(1,0,s);return r}}static getNumRawDataModules(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");let o=(16*e+128)*e+64;if(e>=2){const r=Math.floor(e/7)+2;o-=(25*r-10)*r-55,e>=7&&(o-=36)}return o}static getNumDataCodewords(e,o){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[o.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");const o=[];for(let s=0;s<e-1;s++)o.push(0);o.push(1);let r=1;for(let s=0;s<e;s++){for(let l=0;l<o.length;l++)o[l]=n.reedSolomonMultiply(o[l],r),l+1<o.length&&(o[l]^=o[l+1]);r=n.reedSolomonMultiply(r,2)}return o}static reedSolomonComputeRemainder(e,o){const r=o.map(s=>0);for(const s of e){const l=s^r.shift();r.push(0),o.forEach((p,u)=>r[u]^=n.reedSolomonMultiply(p,l))}return r}static reedSolomonMultiply(e,o){if(e>>>8||o>>>8)throw new RangeError("Byte out of range");let r=0;for(let s=7;s>=0;s--)r=r<<1^(r>>>7)*285,r^=(o>>>s&1)*e;return r}finderPenaltyCountPatterns(e){const o=e[1],r=o>0&&e[2]===o&&e[3]===o*3&&e[4]===o&&e[5]===o;return(r&&e[0]>=o*4&&e[6]>=o?1:0)+(r&&e[6]>=o*4&&e[0]>=o?1:0)}finderPenaltyTerminateAndCount(e,o,r){return e&&(this.finderPenaltyAddHistory(o,r),o=0),o+=this.size,this.finderPenaltyAddHistory(o,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,o){o[0]===0&&(e+=this.size),o.pop(),o.unshift(e)}}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=n;function i(c,e,o){if(e<0||e>31||c>>>e)throw new RangeError("Value out of range");for(let r=e-1;r>=0;r--)o.push(c>>>r&1)}function d(c,e){return(c>>>e&1)!==0}class a{static makeBytes(e){const o=[];for(const r of e)i(r,8,o);return new a(a.Mode.BYTE,e.length,o)}static makeNumeric(e){if(!a.isNumeric(e))throw new RangeError("String contains non-numeric characters");const o=[];for(let r=0;r<e.length;){const s=Math.min(e.length-r,3);i(parseInt(e.substr(r,s),10),s*3+1,o),r+=s}return new a(a.Mode.NUMERIC,e.length,o)}static makeAlphanumeric(e){if(!a.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");const o=[];let r;for(r=0;r+2<=e.length;r+=2){let s=a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;s+=a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),i(s,11,o)}return r<e.length&&i(a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,o),new a(a.Mode.ALPHANUMERIC,e.length,o)}static makeSegments(e){return e===""?[]:a.isNumeric(e)?[a.makeNumeric(e)]:a.isAlphanumeric(e)?[a.makeAlphanumeric(e)]:[a.makeBytes(a.toUtf8ByteArray(e))]}static makeEci(e){const o=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,o);else if(e<16384)i(2,2,o),i(e,14,o);else if(e<1e6)i(6,3,o),i(e,21,o);else throw new RangeError("ECI assignment value out of range");return new a(a.Mode.ECI,0,o)}static isNumeric(e){return a.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return a.ALPHANUMERIC_REGEX.test(e)}constructor(e,o,r){if(this.mode=e,this.numChars=o,this.bitData=r,o<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}getData(){return this.bitData.slice()}static getTotalBits(e,o){let r=0;for(const s of e){const l=s.mode.numCharCountBits(o);if(s.numChars>=1<<l)return 1/0;r+=4+l+s.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);const o=[];for(let r=0;r<e.length;r++)e.charAt(r)!=="%"?o.push(e.charCodeAt(r)):(o.push(parseInt(e.substr(r+1,2),16)),r+=2);return o}}a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+./:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=a})(L||(L={}));(function(t){(function(n){class i{constructor(a,c){this.ordinal=a,this.formatBits=c}}i.LOW=new i(0,1),i.MEDIUM=new i(1,0),i.QUARTILE=new i(2,3),i.HIGH=new i(3,2),n.Ecc=i})(t.QrCode||(t.QrCode={}))})(L||(L={}));(function(t){(function(n){class i{constructor(a,c){this.modeBits=a,this.numBitsCharCount=c}numCharCountBits(a){return this.numBitsCharCount[Math.floor((a+7)/17)]}}i.NUMERIC=new i(1,[10,12,14]),i.ALPHANUMERIC=new i(2,[9,11,13]),i.BYTE=new i(4,[8,16,16]),i.KANJI=new i(8,[8,10,12]),i.ECI=new i(7,[0,0,0]),n.Mode=i})(t.QrSegment||(t.QrSegment={}))})(L||(L={}));const Ko={L:L.QrCode.Ecc.LOW,M:L.QrCode.Ecc.MEDIUM,Q:L.QrCode.Ecc.QUARTILE,H:L.QrCode.Ecc.HIGH},Go=Object.assign(Object.assign({},F.props),{value:String,color:{type:String,default:"#000"},backgroundColor:{type:String,default:"#FFF"},iconSrc:String,iconSize:{type:Number,default:40},iconBackgroundColor:{type:String,default:"#FFF"},iconBorderRadius:{type:Number,default:4},size:{type:Number,default:100},padding:{type:[Number,String],default:12},errorCorrectionLevel:{type:String,default:"M"},type:{type:String,default:"canvas"}}),ue=2,ur=D({name:"QrCode",props:Go,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=q(t),d=F("QrCode","-qr-code",Vo,Xo,t,n),a=A(()=>({"--n-border-radius":d.value.self.borderRadius})),c=i?Q("qr-code",void 0,a,t):void 0,e=X(),o=A(()=>{var u;const h=Ko[t.errorCorrectionLevel];return L.QrCode.encodeText((u=t.value)!==null&&u!==void 0?u:"-",h)});Ge(()=>{const u=X(0);let h=null;K(()=>{t.type!=="svg"&&(u.value,r(o.value,t.size,t.color,t.backgroundColor,h?{icon:h,iconBorderRadius:t.iconBorderRadius,iconSize:t.iconSize,iconBackgroundColor:t.iconBackgroundColor}:null))}),K(()=>{if(t.type==="svg")return;const{iconSrc:f}=t;if(f){let x=!1;const b=new Image;return b.src=f,b.onload=()=>{x||(h=b,u.value++)},()=>{x=!0}}})});function r(u,h,f,x,b){const g=e.value;if(!g)return;const C=h*ue,S=u.size,E=C/S;g.width=C,g.height=C;const $=g.getContext("2d");if($){$.clearRect(0,0,g.width,g.height);for(let M=0;M<u.size;M++)for(let I=0;I<u.size;I++){$.fillStyle=u.getModule(I,M)?f:x;const T=Math.floor(I*E),H=Math.ceil((I+1)*E),z=Math.floor(M*E),O=Math.ceil((M+1)*E);$.fillRect(T,z,H-T,O-z)}if(b){const{icon:M,iconBackgroundColor:I,iconBorderRadius:T,iconSize:H}=b,z=H*ue,O=(g.width-z)/2,j=(g.height-z)/2;$.fillStyle=I,$.beginPath(),$.roundRect(O,j,z,z,T*ue),$.fill();const _=M.width/M.height,W=_>=1?z:z*_,oe=_<=1?z:z/_,ae=O+(z-W)/2,ce=j+(z-oe)/2;$.drawImage(M,ae,ce,W,oe)}}}function s(u,h=0){const f=[];return u.forEach(function(x,b){let g=null;x.forEach(function(C,S){if(!C&&g!==null){f.push(`M${g+h} ${b+h}h${S-g}v1H${g+h}z`),g=null;return}if(S===x.length-1){if(!C)return;g===null?f.push(`M${S+h},${b+h} h1v1H${S+h}z`):f.push(`M${g+h},${b+h} h${S+1-g}v1H${g+h}z`);return}C&&g===null&&(g=S)})}),f.join("")}function l(u,h,f){const x=u.getModules(),b=x.length,g=x;let C="";const S=`<path fill="transparent" d="M0,0 h${b}v${b}H0z" shape-rendering="crispEdges"></path>`,E=`<path fill="${t.color}" d="${s(g,0)}" shape-rendering="crispEdges"></path>`;let $="";if(f){const{iconSrc:M,iconSize:I}=f,H=Math.floor(h*.1),z=b/h,O=(I||H)*z,j=(I||H)*z,_=x.length/2-j/2,W=x.length/2-O/2;$+=`<image href="${M}" width="${j}" height="${O}" x="${_}" y="${W}" preserveAspectRatio="none"></image>`}return C+=S,C+=E,C+=$,{innerHtml:C,numCells:b}}const p=A(()=>l(o.value,t.size,t.iconSrc?{iconSrc:t.iconSrc,iconBorderRadius:t.iconBorderRadius,iconSize:t.iconSize,iconBackgroundColor:t.iconBackgroundColor}:null));return{canvasRef:e,mergedClsPrefix:n,cssVars:i?void 0:a,themeClass:c==null?void 0:c.themeClass,svgInfo:p}},render(){const{mergedClsPrefix:t,backgroundColor:n,padding:i,cssVars:d,themeClass:a,size:c,type:e}=this;return m("div",{class:[`${t}-qr-code`,a],style:Object.assign({padding:typeof i=="number"?`${i}px`:i,backgroundColor:n,width:`${c}px`,height:`${c}px`},d)},e==="canvas"?m("canvas",{ref:"canvasRef",style:{width:`${c}px`,height:`${c}px`}}):m("svg",{height:c,width:c,viewBox:`0 0 ${this.svgInfo.numCells} ${this.svgInfo.numCells}`,role:"img",innerHTML:this.svgInfo.innerHtml}))}}),Jo=y([y("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),P("spin-container",`
 position: relative;
 `,[P("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Po()])]),P("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),P("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[w("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),P("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),P("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[w("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Zo={small:20,medium:18,large:16},qo=Object.assign(Object.assign({},F.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),hr=D({name:"Spin",props:qo,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=q(t),d=F("Spin","-spin",Jo,jo,t,n),a=A(()=>{const{size:r}=t,{common:{cubicBezierEaseInOut:s},self:l}=d.value,{opacitySpinning:p,color:u,textColor:h}=l,f=typeof r=="number"?qe(r):l[N("size",r)];return{"--n-bezier":s,"--n-opacity-spinning":p,"--n-size":f,"--n-color":u,"--n-text-color":h}}),c=i?Q("spin",A(()=>{const{size:r}=t;return typeof r=="number"?String(r):r[0]}),a,t):void 0,e=to(t,["spinning","show"]),o=X(!1);return K(r=>{let s;if(e.value){const{delay:l}=t;if(l){s=window.setTimeout(()=>{o.value=!0},l),r(()=>{clearTimeout(s)});return}}o.value=e.value}),{mergedClsPrefix:n,active:o,mergedStrokeWidth:A(()=>{const{strokeWidth:r}=t;if(r!==void 0)return r;const{size:s}=t;return Zo[typeof s=="number"?"medium":s]}),cssVars:i?void 0:a,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var t,n;const{$slots:i,mergedClsPrefix:d,description:a}=this,c=i.icon&&this.rotate,e=(a||i.description)&&m("div",{class:`${d}-spin-description`},a||((t=i.description)===null||t===void 0?void 0:t.call(i))),o=i.icon?m("div",{class:[`${d}-spin-body`,this.themeClass]},m("div",{class:[`${d}-spin`,c&&`${d}-spin--rotate`],style:i.default?"":this.cssVars},i.icon()),e):m("div",{class:[`${d}-spin-body`,this.themeClass]},m(Ro,{clsPrefix:d,style:i.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${d}-spin`}),e);return(n=this.onRender)===null||n===void 0||n.call(this),i.default?m("div",{class:[`${d}-spin-container`,this.themeClass],style:this.cssVars},m("div",{class:[`${d}-spin-content`,this.active&&`${d}-spin-content--spinning`,this.contentClass],style:this.contentStyle},i),m(Se,{name:"fade-in-transition"},{default:()=>this.active?o:null})):o}});export{hr as N,ur as a,lr as b,dr as c,ar as d,cr as e};

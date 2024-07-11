import{t as f,n as y,y as k,e as E,u as gt,bf as Nt,l as u,c as Ot,d as jt,bg as Lt,bh as J,bi as O,bj as Q,bk as ne,bl as j,bm as he,bn as oe,r as _,ad as pe,ae as ge,g as V,bo as Zt,f as bt,j as mt,ar as Gt,bp as ke,bq as Le,br as Ze,bs as Ge,aD as Kt,x as nt,aa as Xt,bt as Yt,A as vt,p as Jt,D as De,C as ot,w as xt,E as Qt,B as Wt,b4 as er,T as tr,k as rr,F as Ce,az as it,ab as ar,I as We,J as et,K as ae,Y as z,P as x,bu as ze,V as kt,W as nr,am as Te,Q as F,Z as or,bv as ir}from"./index-CiBibxjP.js";import{_ as yt,N as lr}from"./plugin-vueexport-helper-Bcv8_rOQ.js";import{b as sr,B as fe}from"./Button-BEhVFeVs.js";import{_ as ur}from"./Card-n_MwDkZG.js";import{f as dr}from"./fade-in-scale-up.cssr-C3KCT7C5.js";import{u as Ke,B as cr,V as fr,b as hr,c as pr}from"./Follower-CqcCaWUm.js";function wt(e,r,t){r/=100,t/=100;const a=r*Math.min(t,1-t)+t;return[e,a?(2-2*t/a)*100:0,a*100]}function $e(e,r,t){r/=100,t/=100;const a=t-t*r/2,n=Math.min(a,1-a);return[e,n?(t-a)/n*100:0,a*100]}function X(e,r,t){r/=100,t/=100;let a=(n,o=(n+e/60)%6)=>t-t*r*Math.max(Math.min(o,4-o,1),0);return[a(5)*255,a(3)*255,a(1)*255]}function Xe(e,r,t){e/=255,r/=255,t/=255;let a=Math.max(e,r,t),n=a-Math.min(e,r,t),o=n&&(a==e?(r-t)/n:a==r?2+(t-e)/n:4+(e-r)/n);return[60*(o<0?o+6:o),a&&n/a*100,a*100]}function Ye(e,r,t){e/=255,r/=255,t/=255;let a=Math.max(e,r,t),n=a-Math.min(e,r,t),o=1-Math.abs(a+a-n-1),s=n&&(a==e?(r-t)/n:a==r?2+(t-e)/n:4+(e-r)/n);return[60*(s<0?s+6:s),o?n/o*100:0,(a+a-n)*50]}function Je(e,r,t){r/=100,t/=100;let a=r*Math.min(t,1-t),n=(o,s=(o+e/30)%12)=>t-a*Math.max(Math.min(s-3,9-s,1),-1);return[n(0)*255,n(8)*255,n(4)*255]}const gr=f("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[y(">",[f("input",[y("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),f("button",[y("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[k("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),y("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[k("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),y("*",[y("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[y(">",[f("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),f("base-selection",[f("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),f("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),k("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),y("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[y(">",[f("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),f("base-selection",[f("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),f("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),k("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),br={},mr=E({name:"InputGroup",props:br,setup(e){const{mergedClsPrefixRef:r}=gt(e);return Nt("-input-group",gr,r),{mergedClsPrefix:r}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:`${e}-input-group`},this.$slots)}}),vr=e=>{const{fontSize:r,boxShadow2:t,popoverColor:a,textColor2:n,borderRadius:o,borderColor:s,heightSmall:l,heightMedium:d,heightLarge:w,fontSizeSmall:S,fontSizeMedium:v,fontSizeLarge:T,dividerColor:L}=e;return{panelFontSize:r,boxShadow:t,color:a,textColor:n,borderRadius:o,border:`1px solid ${s}`,heightSmall:l,heightMedium:d,heightLarge:w,fontSizeSmall:S,fontSizeMedium:v,fontSizeLarge:T,dividerColor:L}},xr=Ot({name:"ColorPicker",common:jt,peers:{Input:Lt,Button:sr},self:vr});function kr(e,r){switch(e[0]){case"hex":return r?"#000000FF":"#000000";case"rgb":return r?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return r?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return r?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ye(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function yr(e){return e=Math.round(e),e>=360?359:e<0?0:e}function wr(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Cr={rgb:{hex(e){return J(O(e))},hsl(e){const[r,t,a,n]=O(e);return Q([...Ye(r,t,a),n])},hsv(e){const[r,t,a,n]=O(e);return ne([...Xe(r,t,a),n])}},hex:{rgb(e){return j(O(e))},hsl(e){const[r,t,a,n]=O(e);return Q([...Ye(r,t,a),n])},hsv(e){const[r,t,a,n]=O(e);return ne([...Xe(r,t,a),n])}},hsl:{hex(e){const[r,t,a,n]=he(e);return J([...Je(r,t,a),n])},rgb(e){const[r,t,a,n]=he(e);return j([...Je(r,t,a),n])},hsv(e){const[r,t,a,n]=he(e);return ne([...wt(r,t,a),n])}},hsv:{hex(e){const[r,t,a,n]=oe(e);return J([...X(r,t,a),n])},rgb(e){const[r,t,a,n]=oe(e);return j([...X(r,t,a),n])},hsl(e){const[r,t,a,n]=oe(e);return Q([...$e(r,t,a),n])}}};function Ct(e,r,t){return t=t||ye(e),t?t===r?e:Cr[t][r](e):null}const ce="12px",Sr=12,te="6px",_r=6,Ar="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Ur=E({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const r=_(null);function t(o){r.value&&(pe("mousemove",document,a),pe("mouseup",document,n),a(o))}function a(o){const{value:s}=r;if(!s)return;const{width:l,left:d}=s.getBoundingClientRect(),w=yr((o.clientX-d-_r)/(l-Sr)*360);e.onUpdateHue(w)}function n(){var o;ge("mousemove",document,a),ge("mouseup",document,n),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:r,handleMouseDown:t}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,style:{height:ce,borderRadius:te}},u("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Ar,height:ce,borderRadius:te,position:"relative"},onMousedown:this.handleMouseDown},u("div",{style:{position:"absolute",left:te,right:te,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${te})`,borderRadius:te,width:ce,height:ce}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:te,width:ce,height:ce}})))))}}),me="12px",Mr=12,re="6px",$r=E({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const r=_(null);function t(o){!r.value||!e.rgba||(pe("mousemove",document,a),pe("mouseup",document,n),a(o))}function a(o){const{value:s}=r;if(!s)return;const{width:l,left:d}=s.getBoundingClientRect(),w=(o.clientX-d)/(l-Mr);e.onUpdateAlpha(wr(w))}function n(){var o;ge("mousemove",document,a),ge("mouseup",document,n),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:r,railBackgroundImage:V(()=>{const{rgba:o}=e;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:t}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:me,borderRadius:re},onMousedown:this.handleMouseDown},u("div",{style:{borderRadius:re,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},u("div",{class:`${e}-color-picker-checkboard`}),u("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&u("div",{style:{position:"absolute",left:re,right:re,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${re})`,borderRadius:re,width:me,height:me}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:j(this.rgba),borderRadius:re,width:me,height:me}}))))}}),Se="12px",_e="6px",Rr=E({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const r=_(null);function t(o){r.value&&(pe("mousemove",document,a),pe("mouseup",document,n),a(o))}function a(o){const{value:s}=r;if(!s)return;const{width:l,height:d,left:w,bottom:S}=s.getBoundingClientRect(),v=(S-o.clientY)/d,T=(o.clientX-w)/l,L=100*(T>1?1:T<0?0:T),ie=100*(v>1?1:v<0?0:v);e.onUpdateSV(L,ie)}function n(){var o;ge("mousemove",document,a),ge("mouseup",document,n),(o=e.onComplete)===null||o===void 0||o.call(e)}return{palleteRef:r,handleColor:V(()=>{const{rgba:o}=e;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:t}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},u("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),u("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&u("div",{class:`${e}-color-picker-handle`,style:{width:Se,height:Se,borderRadius:_e,left:`calc(${this.displayedSv[0]}% - ${_e})`,bottom:`calc(${this.displayedSv[1]}% - ${_e})`}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:_e,width:Se,height:Se}})))}}),tt=Zt("n-color-picker");function Ir(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function Vr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Pr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Fr(e){const r=e.trim();return/^#[0-9a-fA-F]+$/.test(r)?[4,5,7,9].includes(r.length):!1}function Dr(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const zr={paddingSmall:"0 4px"},lt=E({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const r=_(""),{themeRef:t}=bt(tt,null);mt(()=>{r.value=a()});function a(){const{value:s}=e;if(s===null)return"";const{label:l}=e;return l==="HEX"?s:l==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function n(s){r.value=s}function o(s){let l,d;switch(e.label){case"HEX":d=Fr(s),d&&e.onUpdateValue(s),r.value=a();break;case"H":l=Vr(s),l===!1?r.value=a():e.onUpdateValue(l);break;case"S":case"L":case"V":l=Pr(s),l===!1?r.value=a():e.onUpdateValue(l);break;case"A":l=Dr(s),l===!1?r.value=a():e.onUpdateValue(l);break;case"R":case"G":case"B":l=Ir(s),l===!1?r.value=a():e.onUpdateValue(l);break}}return{mergedTheme:t,inputValue:r,handleInputChange:o,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return u(Gt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:zr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Tr=E({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(r,t){const{showAlpha:a}=e;if(e.mode==="hex"){e.onUpdateValue((a?J:ke)(t));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[r]=t,e.onUpdateValue((a?ne:Ge)(n));break;case"rgb":n[r]=t,e.onUpdateValue((a?j:Ze)(n));break;case"hsl":n[r]=t,e.onUpdateValue((a?Q:Le)(n));break}}}},render(){const{clsPrefix:e,modes:r}=this;return u("div",{class:`${e}-color-picker-input`},u("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:r.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),u(mr,null,{default:()=>{const{mode:t,valueArr:a,showAlpha:n}=this;if(t==="hex"){let o=null;try{o=a===null?null:(n?J:ke)(a)}catch{}return u(lt,{label:"HEX",showAlpha:n,value:o,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(t+(n?"a":"")).split("").map((o,s)=>u(lt,{label:o.toUpperCase(),value:a===null?null:a[s],onUpdateValue:l=>{this.handleUnitUpdateValue(s,l)}}))}}))}}),Br=E({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:r,renderLabelRef:t}=bt(tt,null);return()=>{const{hsla:a,value:n,clsPrefix:o,onClick:s,disabled:l}=e,d=r.label||t.value;return u("div",{class:[`${o}-color-picker-trigger`,l&&`${o}-color-picker-trigger--disabled`],onClick:l?void 0:s},u("div",{class:`${o}-color-picker-trigger__fill`},u("div",{class:`${o}-color-picker-checkboard`}),u("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:a?Q(a):""}}),n&&a?u("div",{class:`${o}-color-picker-trigger__value`,style:{color:a[2]>50||a[3]<.5?"black":"white"}},d?d(n):n):null))}}});function Er(e,r){if(r==="hsv"){const[t,a,n,o]=oe(e);return j([...X(t,a,n),o])}return e}function Hr(e){const r=document.createElement("canvas").getContext("2d");return r?(r.fillStyle=e,r.fillStyle):"#000000"}const qr=E({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const r=V(()=>e.swatches.map(o=>{const s=ye(o);return{value:o,mode:s,legalValue:Er(o,s)}}));function t(o){const{mode:s}=e;let{value:l,mode:d}=o;return d||(d="hex",/^[a-zA-Z]+$/.test(l)?l=Hr(l):(Kt("color-picker",`color ${l} in swatches is invalid.`),l="#000000")),d===s?l:Ct(l,s,d)}function a(o){e.onUpdateColor(t(o))}function n(o,s){o.key==="Enter"&&a(s)}return{parsedSwatchesRef:r,handleSwatchSelect:a,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(r=>u("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(r)},onKeydown:t=>{this.handleSwatchKeyDown(t,r)}},u("div",{class:`${e}-color-picker-swatch__fill`,style:{background:r.legalValue}}))))}}),Nr=E({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const r=ye(e);return!!(!e||r&&r!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function r(t){var a;const n=t.target.value;(a=e.onUpdateColor)===null||a===void 0||a.call(e,Ct(n.toUpperCase(),e.mode,"hex")),t.stopPropagation()}return{handleChange:r}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-preview__preview`},u("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),u("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Or=y([f("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),f("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[dr(),f("input",`
 text-align: center;
 `)]),f("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[y("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[k("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),y("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),f("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[k("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),f("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[k("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[nt("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),f("color-picker-preview",`
 display: flex;
 `,[k("sliders",`
 flex: 1 0 auto;
 `),k("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),k("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),k("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),f("color-picker-input",`
 display: flex;
 align-items: center;
 `,[f("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),k("mode",`
 width: 72px;
 text-align: center;
 `)]),f("color-picker-control",`
 padding: 12px;
 `),f("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[f("button","margin-left: 8px;")]),f("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[k("value",`
 white-space: nowrap;
 position: relative;
 `),k("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),nt("disabled","cursor: not-allowed"),f("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[y("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),f("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[f("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[k("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),y("&:focus",`
 outline: none;
 `,[k("fill",[y("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),jr=Object.assign(Object.assign({},vt.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ke.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Lr=E({name:"ColorPicker",props:jr,setup(e,{slots:r}){const t=_(null);let a=null;const n=Xt(e),{mergedSizeRef:o,mergedDisabledRef:s}=n,{localeRef:l}=Yt("global"),{mergedClsPrefixRef:d,namespaceRef:w,inlineThemeDisabled:S}=gt(e),v=vt("ColorPicker","-color-picker",Or,xr,e,d);Jt(tt,{themeRef:v,renderLabelRef:De(e,"renderLabel"),colorPickerSlots:r});const T=_(e.defaultShow),L=ot(De(e,"show"),T);function ie(i){const{onUpdateShow:c,"onUpdate:show":p}=e;c&&Ce(c,i),p&&Ce(p,i),T.value=i}const{defaultValue:rt}=e,at=_(rt===void 0?kr(e.modes,e.showAlpha):rt),A=ot(De(e,"value"),at),le=_([A.value]),H=_(0),Re=V(()=>ye(A.value)),{modes:At}=e,B=_(ye(A.value)||At[0]||"rgb");function Ut(){const{modes:i}=e,{value:c}=B,p=i.findIndex(g=>g===c);~p?B.value=i[(p+1)%i.length]:B.value="rgb"}let $,R,se,ue,Z,G,K,I;const be=V(()=>{const{value:i}=A;if(!i)return null;switch(Re.value){case"hsv":return oe(i);case"hsl":return[$,R,se,I]=he(i),[...wt($,R,se),I];case"rgb":case"hex":return[Z,G,K,I]=O(i),[...Xe(Z,G,K),I]}}),W=V(()=>{const{value:i}=A;if(!i)return null;switch(Re.value){case"rgb":case"hex":return O(i);case"hsv":return[$,R,ue,I]=oe(i),[...X($,R,ue),I];case"hsl":return[$,R,se,I]=he(i),[...Je($,R,se),I]}}),Ie=V(()=>{const{value:i}=A;if(!i)return null;switch(Re.value){case"hsl":return he(i);case"hsv":return[$,R,ue,I]=oe(i),[...$e($,R,ue),I];case"rgb":case"hex":return[Z,G,K,I]=O(i),[...Ye(Z,G,K),I]}}),Mt=V(()=>{switch(B.value){case"rgb":case"hex":return W.value;case"hsv":return be.value;case"hsl":return Ie.value}}),we=_(0),Ve=_(1),Pe=_([0,0]);function $t(i,c){const{value:p}=be,g=we.value,b=p?p[3]:1;Pe.value=[i,c];const{showAlpha:h}=e;switch(B.value){case"hsv":m((h?ne:Ge)([g,i,c,b]),"cursor");break;case"hsl":m((h?Q:Le)([...$e(g,i,c),b]),"cursor");break;case"rgb":m((h?j:Ze)([...X(g,i,c),b]),"cursor");break;case"hex":m((h?J:ke)([...X(g,i,c),b]),"cursor");break}}function Rt(i){we.value=i;const{value:c}=be;if(!c)return;const[,p,g,b]=c,{showAlpha:h}=e;switch(B.value){case"hsv":m((h?ne:Ge)([i,p,g,b]),"cursor");break;case"rgb":m((h?j:Ze)([...X(i,p,g),b]),"cursor");break;case"hex":m((h?J:ke)([...X(i,p,g),b]),"cursor");break;case"hsl":m((h?Q:Le)([...$e(i,p,g),b]),"cursor");break}}function It(i){switch(B.value){case"hsv":[$,R,ue]=be.value,m(ne([$,R,ue,i]),"cursor");break;case"rgb":[Z,G,K]=W.value,m(j([Z,G,K,i]),"cursor");break;case"hex":[Z,G,K]=W.value,m(J([Z,G,K,i]),"cursor");break;case"hsl":[$,R,se]=Ie.value,m(Q([$,R,se,i]),"cursor");break}Ve.value=i}function m(i,c){c==="cursor"?a=i:a=null;const{nTriggerFormChange:p,nTriggerFormInput:g}=n,{onUpdateValue:b,"onUpdate:value":h}=e;b&&Ce(b,i),h&&Ce(h,i),p(),g(),at.value=i}function Vt(i){m(i,"input"),ar(de)}function de(i=!0){const{value:c}=A;if(c){const{nTriggerFormChange:p,nTriggerFormInput:g}=n,{onComplete:b}=e;b&&b(c);const{value:h}=le,{value:U}=H;i&&(h.splice(U+1,h.length,c),H.value=U+1),p(),g()}}function Pt(){const{value:i}=H;i-1<0||(m(le.value[i-1],"input"),de(!1),H.value=i-1)}function Ft(){const{value:i}=H;i<0||i+1>=le.value.length||(m(le.value[i+1],"input"),de(!1),H.value=i+1)}function Dt(){m(null,"input"),ie(!1)}function zt(){const{value:i}=A,{onConfirm:c}=e;c&&c(i),ie(!1)}const Tt=V(()=>H.value>=1),Bt=V(()=>{const{value:i}=le;return i.length>1&&H.value<i.length-1});xt(L,i=>{i||(le.value=[A.value],H.value=0)}),mt(()=>{if(!(a&&a===A.value)){const{value:i}=be;i&&(we.value=i[0],Ve.value=i[3],Pe.value=[i[1],i[2]])}a=null});const Fe=V(()=>{const{value:i}=o,{common:{cubicBezierEaseInOut:c},self:{textColor:p,color:g,panelFontSize:b,boxShadow:h,border:U,borderRadius:C,dividerColor:ee,[it("height",i)]:Ht,[it("fontSize",i)]:qt}}=v.value;return{"--n-bezier":c,"--n-text-color":p,"--n-color":g,"--n-panel-font-size":b,"--n-font-size":qt,"--n-box-shadow":h,"--n-border":U,"--n-border-radius":C,"--n-height":Ht,"--n-divider-color":ee}}),q=S?Qt("color-picker",V(()=>o.value[0]),Fe,e):void 0;function Et(){var i;const{value:c}=W,{value:p}=we,{internalActions:g,modes:b,actions:h}=e,{value:U}=v,{value:C}=d;return u("div",{class:[`${C}-color-picker-panel`,q==null?void 0:q.themeClass.value],onDragstart:ee=>{ee.preventDefault()},style:S?void 0:Fe.value},u("div",{class:`${C}-color-picker-control`},u(Rr,{clsPrefix:C,rgba:c,displayedHue:p,displayedSv:Pe.value,onUpdateSV:$t,onComplete:de}),u("div",{class:`${C}-color-picker-preview`},u("div",{class:`${C}-color-picker-preview__sliders`},u(Ur,{clsPrefix:C,hue:p,onUpdateHue:Rt,onComplete:de}),e.showAlpha?u($r,{clsPrefix:C,rgba:c,alpha:Ve.value,onUpdateAlpha:It,onComplete:de}):null),e.showPreview?u(Nr,{clsPrefix:C,mode:B.value,color:W.value&&ke(W.value),onUpdateColor:ee=>{m(ee,"input")}}):null),u(Tr,{clsPrefix:C,showAlpha:e.showAlpha,mode:B.value,modes:b,onUpdateMode:Ut,value:A.value,valueArr:Mt.value,onUpdateValue:Vt}),((i=e.swatches)===null||i===void 0?void 0:i.length)&&u(qr,{clsPrefix:C,mode:B.value,swatches:e.swatches,onUpdateColor:ee=>{m(ee,"input")}})),h!=null&&h.length?u("div",{class:`${C}-color-picker-action`},h.includes("confirm")&&u(fe,{size:"small",onClick:zt,theme:U.peers.Button,themeOverrides:U.peerOverrides.Button},{default:()=>l.value.confirm}),h.includes("clear")&&u(fe,{size:"small",onClick:Dt,disabled:!A.value,theme:U.peers.Button,themeOverrides:U.peerOverrides.Button},{default:()=>l.value.clear})):null,r.action?u("div",{class:`${C}-color-picker-action`},{default:r.action}):g?u("div",{class:`${C}-color-picker-action`},g.includes("undo")&&u(fe,{size:"small",onClick:Pt,disabled:!Tt.value,theme:U.peers.Button,themeOverrides:U.peerOverrides.Button},{default:()=>l.value.undo}),g.includes("redo")&&u(fe,{size:"small",onClick:Ft,disabled:!Bt.value,theme:U.peers.Button,themeOverrides:U.peerOverrides.Button},{default:()=>l.value.redo})):null)}return{mergedClsPrefix:d,namespace:w,selfRef:t,hsla:Ie,rgba:W,mergedShow:L,mergedDisabled:s,isMounted:Wt(),adjustedTo:Ke(e),mergedValue:A,handleTriggerClick(){ie(!0)},handleClickOutside(i){var c;!((c=t.value)===null||c===void 0)&&c.contains(er(i))||ie(!1)},renderPanel:Et,cssVars:S?void 0:Fe,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender}},render(){const{$slots:e,mergedClsPrefix:r,onRender:t}=this;return t==null||t(),u("div",{class:[this.themeClass,`${r}-color-picker`],ref:"selfRef",style:this.cssVars},u(cr,null,{default:()=>[u(fr,null,{default:()=>u(Br,{clsPrefix:r,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),u(hr,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ke.tdkey,to:this.adjustedTo},{default:()=>u(tr,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?rr(this.renderPanel(),[[pr,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});function P(e,r){Zr(e)&&(e="100%");var t=Gr(e);return e=r===360?e:Math.min(r,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*r),10)/100),Math.abs(e-r)<1e-6?1:(r===360?e=(e<0?e%r+r:e%r)/parseFloat(String(r)):e=e%r/parseFloat(String(r)),e)}function Zr(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Gr(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Kr(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ae(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Be(e){return e.length===1?"0"+e:String(e)}function Xr(e,r,t){return{r:P(e,255)*255,g:P(r,255)*255,b:P(t,255)*255}}function Ee(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(r-e)*(6*t):t<1/2?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function Yr(e,r,t){var a,n,o;if(e=P(e,360),r=P(r,100),t=P(t,100),r===0)n=t,o=t,a=t;else{var s=t<.5?t*(1+r):t+r-t*r,l=2*t-s;a=Ee(l,s,e+1/3),n=Ee(l,s,e),o=Ee(l,s,e-1/3)}return{r:a*255,g:n*255,b:o*255}}function Jr(e,r,t){e=P(e,255),r=P(r,255),t=P(t,255);var a=Math.max(e,r,t),n=Math.min(e,r,t),o=0,s=a,l=a-n,d=a===0?0:l/a;if(a===n)o=0;else{switch(a){case e:o=(r-t)/l+(r<t?6:0);break;case r:o=(t-e)/l+2;break;case t:o=(e-r)/l+4;break}o/=6}return{h:o,s:d,v:s}}function Qr(e,r,t){e=P(e,360)*6,r=P(r,100),t=P(t,100);var a=Math.floor(e),n=e-a,o=t*(1-r),s=t*(1-n*r),l=t*(1-(1-n)*r),d=a%6,w=[t,s,o,o,l,t][d],S=[l,t,t,s,o,o][d],v=[o,o,l,t,t,s][d];return{r:w*255,g:S*255,b:v*255}}function Wr(e,r,t,a){var n=[Be(Math.round(e).toString(16)),Be(Math.round(r).toString(16)),Be(Math.round(t).toString(16))];return n.join("")}function st(e){return M(e)/255}function M(e){return parseInt(e,16)}var ut={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ve(e){var r={r:0,g:0,b:0},t=1,a=null,n=null,o=null,s=!1,l=!1;return typeof e=="string"&&(e=ra(e)),typeof e=="object"&&(N(e.r)&&N(e.g)&&N(e.b)?(r=Xr(e.r,e.g,e.b),s=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):N(e.h)&&N(e.s)&&N(e.v)?(a=Ae(e.s),n=Ae(e.v),r=Qr(e.h,a,n),s=!0,l="hsv"):N(e.h)&&N(e.s)&&N(e.l)&&(a=Ae(e.s),o=Ae(e.l),r=Yr(e.h,a,o),s=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=Kr(t),{ok:s,format:e.format||l,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:t}}var ea="[-\\+]?\\d+%?",ta="[-\\+]?\\d*\\.\\d+%?",Y="(?:".concat(ta,")|(?:").concat(ea,")"),He="[\\s|\\(]+(".concat(Y,")[,|\\s]+(").concat(Y,")[,|\\s]+(").concat(Y,")\\s*\\)?"),qe="[\\s|\\(]+(".concat(Y,")[,|\\s]+(").concat(Y,")[,|\\s]+(").concat(Y,")[,|\\s]+(").concat(Y,")\\s*\\)?"),D={CSS_UNIT:new RegExp(Y),rgb:new RegExp("rgb"+He),rgba:new RegExp("rgba"+qe),hsl:new RegExp("hsl"+He),hsla:new RegExp("hsla"+qe),hsv:new RegExp("hsv"+He),hsva:new RegExp("hsva"+qe),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ra(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var r=!1;if(ut[e])e=ut[e],r=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=D.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=D.rgba.exec(e),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=D.hsl.exec(e),t?{h:t[1],s:t[2],l:t[3]}:(t=D.hsla.exec(e),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=D.hsv.exec(e),t?{h:t[1],s:t[2],v:t[3]}:(t=D.hsva.exec(e),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=D.hex8.exec(e),t?{r:M(t[1]),g:M(t[2]),b:M(t[3]),a:st(t[4]),format:r?"name":"hex8"}:(t=D.hex6.exec(e),t?{r:M(t[1]),g:M(t[2]),b:M(t[3]),format:r?"name":"hex"}:(t=D.hex4.exec(e),t?{r:M(t[1]+t[1]),g:M(t[2]+t[2]),b:M(t[3]+t[3]),a:st(t[4]+t[4]),format:r?"name":"hex8"}:(t=D.hex3.exec(e),t?{r:M(t[1]+t[1]),g:M(t[2]+t[2]),b:M(t[3]+t[3]),format:r?"name":"hex"}:!1)))))))))}function N(e){return!!D.CSS_UNIT.exec(String(e))}var Ue=2,dt=.16,aa=.05,na=.05,oa=.15,St=5,_t=4,ia=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function ct(e){var r=e.r,t=e.g,a=e.b,n=Jr(r,t,a);return{h:n.h*360,s:n.s,v:n.v}}function Me(e){var r=e.r,t=e.g,a=e.b;return"#".concat(Wr(r,t,a))}function la(e,r,t){var a=t/100,n={r:(r.r-e.r)*a+e.r,g:(r.g-e.g)*a+e.g,b:(r.b-e.b)*a+e.b};return n}function ft(e,r,t){var a;return Math.round(e.h)>=60&&Math.round(e.h)<=240?a=t?Math.round(e.h)-Ue*r:Math.round(e.h)+Ue*r:a=t?Math.round(e.h)+Ue*r:Math.round(e.h)-Ue*r,a<0?a+=360:a>=360&&(a-=360),a}function ht(e,r,t){if(e.h===0&&e.s===0)return e.s;var a;return t?a=e.s-dt*r:r===_t?a=e.s+dt:a=e.s+aa*r,a>1&&(a=1),t&&r===St&&a>.1&&(a=.1),a<.06&&(a=.06),Number(a.toFixed(2))}function pt(e,r,t){var a;return t?a=e.v+na*r:a=e.v-oa*r,a>1&&(a=1),Number(a.toFixed(2))}function Qe(e){for(var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[],a=ve(e),n=St;n>0;n-=1){var o=ct(a),s=Me(ve({h:ft(o,n,!0),s:ht(o,n,!0),v:pt(o,n,!0)}));t.push(s)}t.push(Me(a));for(var l=1;l<=_t;l+=1){var d=ct(a),w=Me(ve({h:ft(d,l),s:ht(d,l),v:pt(d,l)}));t.push(w)}return r.theme==="dark"?ia.map(function(S){var v=S.index,T=S.opacity,L=Me(la(ve(r.backgroundColor||"#141414"),ve(t[v]),T*100));return L}):t}var Ne={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Oe={},je={};Object.keys(Ne).forEach(function(e){Oe[e]=Qe(Ne[e]),Oe[e].primary=Oe[e][5],je[e]=Qe(Ne[e],{theme:"dark",backgroundColor:"#141414"}),je[e].primary=je[e][5]});const sa={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ua=ae("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M11.1 3.002c-3.648.007-5.56.096-6.78 1.317C3.002 5.637 3.002 7.758 3.002 12s0 6.363 1.318 7.681s3.438 1.318 7.68 1.318s6.363 0 7.681-1.318c1.221-1.22 1.31-3.132 1.317-6.78m-.518-9.384l-5.548 5.534m5.549-5.534c-.494-.494-3.822-.448-4.525-.438m4.525.438c.494.495.448 3.826.438 4.53",color:"currentColor"},null,-1),da=[ua];function ca(e,r){return We(),et("svg",sa,[...da])}const fa={name:"hugeicons-link-square01",render:ca},ha={class:"setting-item-outer"},pa={class:"setting-item"},ga={class:"title"},ba={class:"t1"},ma={class:"t2"},va={class:"action"},xa={__name:"settingItem",props:["actionOnClick"],setup(e){let r=e;return(t,a)=>{const n=fa,o=lr,s=fe,l=ur;return We(),et("div",ha,[z(l,null,{default:x(()=>[ae("div",pa,[ae("div",ga,[ae("div",ba,[ze(t.$slots,"t1",{},void 0,!0)]),ae("div",ma,[ze(t.$slots,"t2",{},void 0,!0)])]),ae("div",va,[ze(t.$slots,"action",{},()=>[z(s,{class:"button",secondary:"",circle:"",type:"primary",onClick:kt(r).actionOnClick},{icon:x(()=>[z(o,null,{default:x(()=>[z(n)]),_:1})]),_:1},8,["onClick"])],!0)])])]),_:3})])}}},xe=yt(xa,[["__scopeId","data-v-2d1729d3"]]),ka={class:"setting"},ya={__name:"setting",setup(e){let r=_(""),t=nr();function a(){t.logout(),Te("退出登录~")}function n(){Te("开始尝试更新用户信息了喔"),document.cookie=prompt("输入包含MUSIC_U字段的cookie"),t.updateByCookie()}function o(){Te("开始更新，成功后会有提示"),t.updateByCookie()}function s(){let l=document.cookie+" "+t.cookie;alert(l)}return xt(r,l=>{let d=Qe(l);ir.emit("changeTheme",{common:{primaryColor:d[5],primaryColorHover:d[4],primaryColorSuppl:d[4],primaryColorPressed:d[6]}})}),(l,d)=>{const w=Lr,S=fe;return We(),et("div",null,[ae("div",ka,[z(xe,{actionOnClick:n},{t1:x(()=>[F("手动输入cookie来登录")]),t2:x(()=>[F("奇奇怪怪的登录方式")]),_:1}),z(xe,{actionOnClick:o},{t1:x(()=>[F("马上更新用户信息！")]),t2:x(()=>[F("每三分钟自动更新")]),_:1}),z(xe,{actionOnClick:s},{t1:x(()=>[F("查看当前的cookie")]),t2:x(()=>[F("言简意赅")]),_:1}),z(xe,null,{t1:x(()=>[F("颜色-primary")]),t2:x(()=>[F("自定义！好耶")]),action:x(()=>[z(w,{class:"color-picker",value:kt(r),"onUpdate:value":d[0]||(d[0]=v=>or(r)?r.value=v:r=v),"show-alpha":!1,modes:["hex"]},null,8,["value"])]),_:1}),z(xe,null,{t1:x(()=>[F("退出登录")]),t2:x(()=>[F("拜拜~")]),action:x(()=>[z(S,{class:"button",type:"error",secondary:"",onClick:a},{default:x(()=>[F("退出登录")]),_:1})]),_:1})])])}}},Ma=yt(ya,[["__scopeId","data-v-d8be9ec9"]]);export{Ma as default};

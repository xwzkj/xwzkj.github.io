import{f as Te,aF as Se,aG as ke,aH as re,aI as Ve,a as Ie,aJ as Ze,c as v,l as qe,g as Re,j as k,s as J,w as Q,aj as je,e as et,p as Le,q as Ee,a6 as tt,d as ne,ax as Ce,aK as nt,V as ae,x as $e,aL as at,aM as ot,z as Pe,aN as st,aO as lt,aP as rt,aQ as it,U as N,o as ut,ab as dt,Z as ct,B as m,C as S,S as h,J as oe,D as b,u as a,y as X,al as T,P as E,Q as A,az as Y,af as O,R as se,L as pt,aR as ft,ai as vt,N as mt,a5 as G,F as ht,_ as gt,I as ze,X as yt}from"./index-OS7v5Vwz.js";import{i as Be,s as bt,o as xt,a as wt,b as Ae,c as St}from"./isArguments-I_hyfNLX.js";import{b as It,c as Et}from"./use-form-item-CrEXh3yC.js";import{u as Ct,a as Pt}from"./use-form-common-props-CEc8WKjy.js";const zt=()=>Te&&/firefox/i.test(window.navigator.userAgent);function Ft(e,o){for(var l=-1,n=o.length,s=e.length;++l<n;)e[s+l]=o[l];return e}var Fe=Se?Se.isConcatSpreadable:void 0;function Nt(e){return ke(e)||Be(e)||!!(Fe&&e&&e[Fe])}function Tt(e,o,l,n,s){var r=-1,i=e.length;for(l||(l=Nt),s||(s=[]);++r<i;){var f=e[r];l(f)?Ft(s,f):s[s.length]=f}return s}function kt(e){var o=e==null?0:e.length;return o?Tt(e):[]}function Vt(e){return bt(xt(e,void 0,kt),e+"")}function Rt(e,o){return e!=null&&o in Object(e)}function Lt(e,o,l){o=re(o,e);for(var n=-1,s=o.length,r=!1;++n<s;){var i=Ve(o[n]);if(!(r=e!=null&&l(e,i)))break;e=e[i]}return r||++n!=s?r:(s=e==null?0:e.length,!!s&&wt(s)&&Ae(i,s)&&(ke(e)||Be(e)))}function $t(e,o){return e!=null&&Lt(e,o,Rt)}function Bt(e){return e==null}function At(e,o,l,n){if(!Ie(e))return e;o=re(o,e);for(var s=-1,r=o.length,i=r-1,f=e;f!=null&&++s<r;){var p=Ve(o[s]),y=l;if(p==="__proto__"||p==="constructor"||p==="prototype")return e;if(s!=i){var x=f[p];y=void 0,y===void 0&&(y=Ie(x)?x:Ae(o[s+1])?[]:{})}St(f,p,y),f=f[p]}return e}function Ot(e,o,l){for(var n=-1,s=o.length,r={};++n<s;){var i=o[n],f=Ze(e,i);l(f,i)&&At(r,re(i,e),f)}return r}function Mt(e,o){return Ot(e,o,function(l,n){return $t(e,n)})}var Ht=Vt(function(e,o){return e==null?{}:Mt(e,o)});class Dt extends Error{constructor(o){super(o),this.name="ElementPlusError"}}function fn(e,o){throw new Dt(`[${e}] ${o}`)}function vn(e,o){}const le="update:modelValue",mn="change",hn="input",Kt=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),_t=["class","style"],Ut=/^on[A-Z]/,Wt=(e={})=>{const{excludeListeners:o=!1,excludeKeys:l}=e,n=v(()=>((l==null?void 0:l.value)||[]).concat(_t)),s=Re();return s?v(()=>{var r;return qe(Object.entries((r=s.proxy)==null?void 0:r.$attrs).filter(([i])=>!n.value.includes(i)&&!(o&&Ut.test(i))))}):v(()=>({}))};function Xt(e){const o=k();function l(){if(e.value==null)return;const{selectionStart:s,selectionEnd:r,value:i}=e.value;if(s==null||r==null)return;const f=i.slice(0,Math.max(0,s)),p=i.slice(Math.max(0,r));o.value={selectionStart:s,selectionEnd:r,value:i,beforeTxt:f,afterTxt:p}}function n(){if(e.value==null||o.value==null)return;const{value:s}=e.value,{beforeTxt:r,afterTxt:i,selectionStart:f}=o.value;if(r==null||i==null||f==null)return;let p=s.length;if(s.endsWith(i))p=s.length-i.length;else if(s.startsWith(r))p=r.length;else{const y=r[f-1],x=s.indexOf(y,f-1);x!==-1&&(p=x+1)}e.value.setSelectionRange(p,p)}return[l,n]}function Yt(e,{afterFocus:o,beforeBlur:l,afterBlur:n}={}){const s=Re(),{emit:r}=s,i=J(),f=k(!1),p=c=>{f.value||(f.value=!0,r("focus",c),o==null||o())},y=c=>{var V;et(l)&&l(c)||c.relatedTarget&&((V=i.value)!=null&&V.contains(c.relatedTarget))||(f.value=!1,r("blur",c),n==null||n())},x=()=>{var c;(c=e.value)==null||c.focus()};return Q(i,c=>{c&&c.setAttribute("tabindex","-1")}),je(i,"click",x),{wrapperRef:i,isFocused:f,handleFocus:p,handleBlur:y}}const Gt=Le({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),Jt=e=>Ht(Gt,e);let w;const Qt=`
  height:0 !important;
  visibility:hidden !important;
  ${zt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Zt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function qt(e){const o=window.getComputedStyle(e),l=o.getPropertyValue("box-sizing"),n=Number.parseFloat(o.getPropertyValue("padding-bottom"))+Number.parseFloat(o.getPropertyValue("padding-top")),s=Number.parseFloat(o.getPropertyValue("border-bottom-width"))+Number.parseFloat(o.getPropertyValue("border-top-width"));return{contextStyle:Zt.map(i=>`${i}:${o.getPropertyValue(i)}`).join(";"),paddingSize:n,borderSize:s,boxSizing:l}}function Ne(e,o=1,l){var n;w||(w=document.createElement("textarea"),document.body.appendChild(w));const{paddingSize:s,borderSize:r,boxSizing:i,contextStyle:f}=qt(e);w.setAttribute("style",`${f};${Qt}`),w.value=e.value||e.placeholder||"";let p=w.scrollHeight;const y={};i==="border-box"?p=p+r:i==="content-box"&&(p=p-s),w.value="";const x=w.scrollHeight-s;if(Ee(o)){let c=x*o;i==="border-box"&&(c=c+s+r),p=Math.max(c,p),y.minHeight=`${c}px`}if(Ee(l)){let c=x*l;i==="border-box"&&(c=c+s+r),p=Math.min(c,p)}return y.height=`${p}px`,(n=w.parentNode)==null||n.removeChild(w),w=void 0,y}const jt=Le({id:{type:String,default:void 0},size:tt,disabled:Boolean,modelValue:{type:ne([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ne([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ne([Object,Array,String]),default:()=>nt({})},autofocus:{type:Boolean,default:!1},...Jt(["ariaLabel"])}),en={[le]:e=>ae(e),input:e=>ae(e),change:e=>ae(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},tn=["role"],nn=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],an=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],on=$e({name:"ElInput",inheritAttrs:!1}),sn=$e({...on,props:jt,emits:en,setup(e,{expose:o,emit:l}){const n=e,s=at(),r=ot(),i=v(()=>{const t={};return n.containerRole==="combobox"&&(t["aria-haspopup"]=s["aria-haspopup"],t["aria-owns"]=s["aria-owns"],t["aria-expanded"]=s["aria-expanded"]),t}),f=v(()=>[n.type==="textarea"?ue.b():d.b(),d.m(ie.value),d.is("disabled",P.value),d.is("exceed",De.value),{[d.b("group")]:r.prepend||r.append,[d.bm("group","append")]:r.append,[d.bm("group","prepend")]:r.prepend,[d.m("prefix")]:r.prefix||n.prefixIcon,[d.m("suffix")]:r.suffix||n.suffixIcon||n.clearable||n.showPassword,[d.bm("suffix","password-clear")]:U.value&&j.value,[d.b("hidden")]:n.type==="hidden"},s.class]),p=v(()=>[d.e("wrapper"),d.is("focus",q.value)]),y=Wt({excludeKeys:v(()=>Object.keys(i.value))}),{form:x,formItem:c}=It(),{inputId:V}=Et(n,{formItemContext:c}),ie=Ct(),P=Pt(),d=Pe("input"),ue=Pe("textarea"),M=J(),I=J(),Z=k(!1),R=k(!1),H=k(!1),de=k(),D=J(n.inputStyle),z=v(()=>M.value||I.value),{wrapperRef:Oe,isFocused:q,handleFocus:K,handleBlur:_}=Yt(z,{afterBlur(){var t;n.validateEvent&&((t=c==null?void 0:c.validate)==null||t.call(c,"blur").catch(u=>void 0))}}),ce=v(()=>{var t;return(t=x==null?void 0:x.statusIcon)!=null?t:!1}),L=v(()=>(c==null?void 0:c.validateState)||""),pe=v(()=>L.value&&st[L.value]),Me=v(()=>H.value?lt:rt),He=v(()=>[s.style]),fe=v(()=>[n.inputStyle,D.value,{resize:n.resize}]),C=v(()=>Bt(n.modelValue)?"":String(n.modelValue)),U=v(()=>n.clearable&&!P.value&&!n.readonly&&!!C.value&&(q.value||Z.value)),j=v(()=>n.showPassword&&!P.value&&!n.readonly&&!!C.value&&(!!C.value||q.value)),F=v(()=>n.showWordLimit&&!!n.maxlength&&(n.type==="text"||n.type==="textarea")&&!P.value&&!n.readonly&&!n.showPassword),ee=v(()=>C.value.length),De=v(()=>!!F.value&&ee.value>Number(n.maxlength)),Ke=v(()=>!!r.suffix||!!n.suffixIcon||U.value||n.showPassword||F.value||!!L.value&&ce.value),[_e,Ue]=Xt(M);it(I,t=>{if(We(),!F.value||n.resize!=="both")return;const u=t[0],{width:g}=u.contentRect;de.value={right:`calc(100% - ${g+15+6}px)`}});const $=()=>{const{type:t,autosize:u}=n;if(!(!Te||t!=="textarea"||!I.value))if(u){const g=ze(u)?u.minRows:void 0,W=ze(u)?u.maxRows:void 0,we=Ne(I.value,g,W);D.value={overflowY:"hidden",...we},N(()=>{I.value.offsetHeight,D.value=we})}else D.value={minHeight:Ne(I.value).minHeight}},We=(t=>{let u=!1;return()=>{var g;if(u||!n.autosize)return;((g=I.value)==null?void 0:g.offsetParent)===null||(t(),u=!0)}})($),B=()=>{const t=z.value,u=n.formatter?n.formatter(C.value):C.value;!t||t.value===u||(t.value=u)},te=async t=>{_e();let{value:u}=t.target;if(n.formatter&&(u=n.parser?n.parser(u):u),!R.value){if(u===C.value){B();return}l(le,u),l("input",u),await N(),B(),Ue()}},ve=t=>{l("change",t.target.value)},me=t=>{l("compositionstart",t),R.value=!0},he=t=>{var u;l("compositionupdate",t);const g=(u=t.target)==null?void 0:u.value,W=g[g.length-1]||"";R.value=!Kt(W)},ge=t=>{l("compositionend",t),R.value&&(R.value=!1,te(t))},Xe=()=>{H.value=!H.value,ye()},ye=async()=>{var t;await N(),(t=z.value)==null||t.focus()},Ye=()=>{var t;return(t=z.value)==null?void 0:t.blur()},Ge=t=>{Z.value=!1,l("mouseleave",t)},Je=t=>{Z.value=!0,l("mouseenter",t)},be=t=>{l("keydown",t)},Qe=()=>{var t;(t=z.value)==null||t.select()},xe=()=>{l(le,""),l("change",""),l("clear"),l("input","")};return Q(()=>n.modelValue,()=>{var t;N(()=>$()),n.validateEvent&&((t=c==null?void 0:c.validate)==null||t.call(c,"change").catch(u=>void 0))}),Q(C,()=>B()),Q(()=>n.type,async()=>{await N(),B(),$()}),ut(()=>{!n.formatter&&n.parser,B(),N($)}),dt({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},v(()=>!!n.label)),o({input:M,textarea:I,ref:z,textareaStyle:fe,autosize:ct(n,"autosize"),focus:ye,blur:Ye,select:Qe,clear:xe,resizeTextarea:$}),(t,u)=>(m(),S("div",se(a(i),{class:a(f),style:a(He),role:t.containerRole,onMouseenter:Je,onMouseleave:Ge}),[h(" input "),t.type!=="textarea"?(m(),S(oe,{key:0},[h(" prepend slot "),t.$slots.prepend?(m(),S("div",{key:0,class:b(a(d).be("group","prepend"))},[X(t.$slots,"prepend")],2)):h("v-if",!0),T("div",{ref_key:"wrapperRef",ref:Oe,class:b(a(p))},[h(" prefix slot "),t.$slots.prefix||t.prefixIcon?(m(),S("span",{key:0,class:b(a(d).e("prefix"))},[T("span",{class:b(a(d).e("prefix-inner"))},[X(t.$slots,"prefix"),t.prefixIcon?(m(),E(a(O),{key:0,class:b(a(d).e("icon"))},{default:A(()=>[(m(),E(Y(t.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),T("input",se({id:a(V),ref_key:"input",ref:M,class:a(d).e("inner")},a(y),{minlength:t.minlength,maxlength:t.maxlength,type:t.showPassword?H.value?"text":"password":t.type,disabled:a(P),readonly:t.readonly,autocomplete:t.autocomplete,tabindex:t.tabindex,"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,style:t.inputStyle,form:t.form,autofocus:t.autofocus,onCompositionstart:me,onCompositionupdate:he,onCompositionend:ge,onInput:te,onFocus:u[0]||(u[0]=(...g)=>a(K)&&a(K)(...g)),onBlur:u[1]||(u[1]=(...g)=>a(_)&&a(_)(...g)),onChange:ve,onKeydown:be}),null,16,nn),h(" suffix slot "),a(Ke)?(m(),S("span",{key:1,class:b(a(d).e("suffix"))},[T("span",{class:b(a(d).e("suffix-inner"))},[!a(U)||!a(j)||!a(F)?(m(),S(oe,{key:0},[X(t.$slots,"suffix"),t.suffixIcon?(m(),E(a(O),{key:0,class:b(a(d).e("icon"))},{default:A(()=>[(m(),E(Y(t.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),a(U)?(m(),E(a(O),{key:1,class:b([a(d).e("icon"),a(d).e("clear")]),onMousedown:vt(a(mt),["prevent"]),onClick:xe},{default:A(()=>[pt(a(ft))]),_:1},8,["class","onMousedown"])):h("v-if",!0),a(j)?(m(),E(a(O),{key:2,class:b([a(d).e("icon"),a(d).e("password")]),onClick:Xe},{default:A(()=>[(m(),E(Y(a(Me))))]),_:1},8,["class"])):h("v-if",!0),a(F)?(m(),S("span",{key:3,class:b(a(d).e("count"))},[T("span",{class:b(a(d).e("count-inner"))},G(a(ee))+" / "+G(t.maxlength),3)],2)):h("v-if",!0),a(L)&&a(pe)&&a(ce)?(m(),E(a(O),{key:4,class:b([a(d).e("icon"),a(d).e("validateIcon"),a(d).is("loading",a(L)==="validating")])},{default:A(()=>[(m(),E(Y(a(pe))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),t.$slots.append?(m(),S("div",{key:1,class:b(a(d).be("group","append"))},[X(t.$slots,"append")],2)):h("v-if",!0)],64)):(m(),S(oe,{key:1},[h(" textarea "),T("textarea",se({id:a(V),ref_key:"textarea",ref:I,class:a(ue).e("inner")},a(y),{minlength:t.minlength,maxlength:t.maxlength,tabindex:t.tabindex,disabled:a(P),readonly:t.readonly,autocomplete:t.autocomplete,style:a(fe),"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,form:t.form,autofocus:t.autofocus,onCompositionstart:me,onCompositionupdate:he,onCompositionend:ge,onInput:te,onFocus:u[2]||(u[2]=(...g)=>a(K)&&a(K)(...g)),onBlur:u[3]||(u[3]=(...g)=>a(_)&&a(_)(...g)),onChange:ve,onKeydown:be}),null,16,an),a(F)?(m(),S("span",{key:0,style:ht(de.value),class:b(a(d).e("count"))},G(a(ee))+" / "+G(t.maxlength),7)):h("v-if",!0)],64))],16,tn))}});var ln=gt(sn,[["__file","input.vue"]]);const gn=yt(ln);export{mn as C,gn as E,hn as I,le as U,vn as d,Bt as i,fn as t,Jt as u};

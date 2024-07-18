import{C as Y,I as n,J as z,bq as Q,K as i,L as a,M as X,N as Z,E as ee,O as oe,D as _,br as re,c as E,an as w,bs as te,U as ne,G as s,a$ as h,Y as de,bt as v,bu as ae}from"./index-43uRkwmN.js";const ie={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},le=o=>{const{primaryColor:u,borderRadius:g,lineHeight:e,fontSize:c,cardColor:b,textColor2:x,textColor1:p,dividerColor:d,fontWeightStrong:t,closeIconColor:r,closeIconColorHover:l,closeIconColorPressed:C,closeColorHover:m,closeColorPressed:S,modalColor:y,boxShadow1:$,popoverColor:k,actionColor:f}=o;return Object.assign(Object.assign({},ie),{lineHeight:e,color:b,colorModal:y,colorPopover:k,colorTarget:u,colorEmbedded:f,colorEmbeddedModal:f,colorEmbeddedPopover:f,textColor:x,titleTextColor:p,borderColor:d,actionColor:f,titleFontWeight:t,closeColorHover:m,closeColorPressed:S,closeBorderRadius:g,closeIconColor:r,closeIconColorHover:l,closeIconColorPressed:C,fontSizeSmall:c,fontSizeMedium:c,fontSizeLarge:c,fontSizeHuge:c,boxShadow:$,borderRadius:g})},se={name:"Card",common:Y,self:le},ce=n([z("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Q({background:"var(--n-color-modal)"}),i("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[n(">",[a("content",{paddingTop:"var(--n-padding-bottom)"})])]),i("content-soft-segmented",[n(">",[a("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),i("footer-segmented",[n(">",[a("footer",{paddingTop:"var(--n-padding-bottom)"})])]),i("footer-soft-segmented",[n(">",[a("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[z("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[a("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),a("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),a("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),a("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),a("content","flex: 1; min-width: 0;"),a("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),a("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),z("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),i("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),i("action-segmented",[n(">",[a("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("content-segmented, content-soft-segmented",[n(">",[a("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("footer-segmented, footer-soft-segmented",[n(">",[a("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("embedded",`
 background-color: var(--n-color-embedded);
 `)]),X(z("card",`
 background: var(--n-color-modal);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Z(z("card",`
 background: var(--n-color-popover);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),be={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},ge=Object.assign(Object.assign({},_.props),be),me=ee({name:"Card",props:ge,setup(o){const u=()=>{const{onClose:t}=o;t&&de(t)},{inlineThemeDisabled:g,mergedClsPrefixRef:e,mergedRtlRef:c}=oe(o),b=_("Card","-card",ce,se,o,e),x=re("Card",c,e),p=E(()=>{const{size:t}=o,{self:{color:r,colorModal:l,colorTarget:C,textColor:m,titleTextColor:S,titleFontWeight:y,borderColor:$,actionColor:k,borderRadius:f,lineHeight:F,closeIconColor:P,closeIconColorHover:T,closeIconColorPressed:R,closeColorHover:B,closeColorPressed:M,closeBorderRadius:O,closeIconSize:H,closeSize:I,boxShadow:j,colorPopover:L,colorEmbedded:V,colorEmbeddedModal:W,colorEmbeddedPopover:N,[w("padding",t)]:D,[w("fontSize",t)]:K,[w("titleFontSize",t)]:q},common:{cubicBezierEaseInOut:A}}=b.value,{top:G,left:J,bottom:U}=te(D);return{"--n-bezier":A,"--n-border-radius":f,"--n-color":r,"--n-color-modal":l,"--n-color-popover":L,"--n-color-embedded":V,"--n-color-embedded-modal":W,"--n-color-embedded-popover":N,"--n-color-target":C,"--n-text-color":m,"--n-line-height":F,"--n-action-color":k,"--n-title-text-color":S,"--n-title-font-weight":y,"--n-close-icon-color":P,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":R,"--n-close-color-hover":B,"--n-close-color-pressed":M,"--n-border-color":$,"--n-box-shadow":j,"--n-padding-top":G,"--n-padding-bottom":U,"--n-padding-left":J,"--n-font-size":K,"--n-title-font-size":q,"--n-close-size":I,"--n-close-icon-size":H,"--n-close-border-radius":O}}),d=g?ne("card",E(()=>o.size[0]),p,o):void 0;return{rtlEnabled:x,mergedClsPrefix:e,mergedTheme:b,handleCloseClick:u,cssVars:g?void 0:p,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:o,bordered:u,hoverable:g,mergedClsPrefix:e,rtlEnabled:c,onRender:b,embedded:x,tag:p,$slots:d}=this;return b==null||b(),s(p,{class:[`${e}-card`,this.themeClass,x&&`${e}-card--embedded`,{[`${e}-card--rtl`]:c,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:u,[`${e}-card--hoverable`]:g}],style:this.cssVars,role:this.role},h(d.cover,t=>{const r=this.cover?v([this.cover()]):t;return r&&s("div",{class:`${e}-card-cover`,role:"none"},r)}),h(d.header,t=>{const{title:r}=this,l=r?v(typeof r=="function"?[r()]:[r]):t;return l||this.closable?s("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},s("div",{class:`${e}-card-header__main`,role:"heading"},l),h(d["header-extra"],C=>{const m=this.headerExtra?v([this.headerExtra()]):C;return m&&s("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&s(ae,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),h(d.default,t=>{const{content:r}=this,l=r?v(typeof r=="function"?[r()]:[r]):t;return l&&s("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)}),h(d.footer,t=>{const r=this.footer?v([this.footer()]):t;return r&&s("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),h(d.action,t=>{const r=this.action?v([this.action()]):t;return r&&s("div",{class:`${e}-card__action`,role:"none"},r)}))}});export{me as _};

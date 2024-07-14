import{B as Q,H as n,I as z,bq as U,J as i,K as a,L as Y,M as Z,D as oo,N as eo,C as _,br as ro,x as E,T as to,E as s,a$ as h,X as no,ao as w,bs as ao,bt as v,bu as io}from"./index-CXOPteNE.js";const lo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},so=e=>{const{primaryColor:u,borderRadius:g,lineHeight:o,fontSize:c,cardColor:b,textColor2:x,textColor1:p,dividerColor:d,fontWeightStrong:t,closeIconColor:r,closeIconColorHover:l,closeIconColorPressed:C,closeColorHover:m,closeColorPressed:S,modalColor:y,boxShadow1:$,popoverColor:k,actionColor:f}=e;return Object.assign(Object.assign({},lo),{lineHeight:o,color:b,colorModal:y,colorPopover:k,colorTarget:u,colorEmbedded:f,colorEmbeddedModal:f,colorEmbeddedPopover:f,textColor:x,titleTextColor:p,borderColor:d,actionColor:f,titleFontWeight:t,closeColorHover:m,closeColorPressed:S,closeBorderRadius:g,closeIconColor:r,closeIconColorHover:l,closeIconColorPressed:C,fontSizeSmall:c,fontSizeMedium:c,fontSizeLarge:c,fontSizeHuge:c,boxShadow:$,borderRadius:g})},co={name:"Card",common:Q,self:so},bo=n([z("card",`
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
 `,[U({background:"var(--n-color-modal)"}),i("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[n(">",[a("content",{paddingTop:"var(--n-padding-bottom)"})])]),i("content-soft-segmented",[n(">",[a("content",`
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
 `)]),Y(z("card",`
 background: var(--n-color-modal);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Z(z("card",`
 background: var(--n-color-popover);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),go={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},po=Object.assign(Object.assign({},_.props),go),fo=oo({name:"Card",props:po,setup(e){const u=()=>{const{onClose:t}=e;t&&no(t)},{inlineThemeDisabled:g,mergedClsPrefixRef:o,mergedRtlRef:c}=eo(e),b=_("Card","-card",bo,co,e,o),x=ro("Card",c,o),p=E(()=>{const{size:t}=e,{self:{color:r,colorModal:l,colorTarget:C,textColor:m,titleTextColor:S,titleFontWeight:y,borderColor:$,actionColor:k,borderRadius:f,lineHeight:T,closeIconColor:F,closeIconColorHover:P,closeIconColorPressed:R,closeColorHover:B,closeColorPressed:M,closeBorderRadius:H,closeIconSize:I,closeSize:O,boxShadow:j,colorPopover:L,colorEmbedded:V,colorEmbeddedModal:W,colorEmbeddedPopover:N,[w("padding",t)]:D,[w("fontSize",t)]:K,[w("titleFontSize",t)]:q},common:{cubicBezierEaseInOut:A}}=b.value,{top:J,left:X,bottom:G}=ao(D);return{"--n-bezier":A,"--n-border-radius":f,"--n-color":r,"--n-color-modal":l,"--n-color-popover":L,"--n-color-embedded":V,"--n-color-embedded-modal":W,"--n-color-embedded-popover":N,"--n-color-target":C,"--n-text-color":m,"--n-line-height":T,"--n-action-color":k,"--n-title-text-color":S,"--n-title-font-weight":y,"--n-close-icon-color":F,"--n-close-icon-color-hover":P,"--n-close-icon-color-pressed":R,"--n-close-color-hover":B,"--n-close-color-pressed":M,"--n-border-color":$,"--n-box-shadow":j,"--n-padding-top":J,"--n-padding-bottom":G,"--n-padding-left":X,"--n-font-size":K,"--n-title-font-size":q,"--n-close-size":O,"--n-close-icon-size":I,"--n-close-border-radius":H}}),d=g?to("card",E(()=>e.size[0]),p,e):void 0;return{rtlEnabled:x,mergedClsPrefix:o,mergedTheme:b,handleCloseClick:u,cssVars:g?void 0:p,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:e,bordered:u,hoverable:g,mergedClsPrefix:o,rtlEnabled:c,onRender:b,embedded:x,tag:p,$slots:d}=this;return b==null||b(),s(p,{class:[`${o}-card`,this.themeClass,x&&`${o}-card--embedded`,{[`${o}-card--rtl`]:c,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:u,[`${o}-card--hoverable`]:g}],style:this.cssVars,role:this.role},h(d.cover,t=>{const r=this.cover?v([this.cover()]):t;return r&&s("div",{class:`${o}-card-cover`,role:"none"},r)}),h(d.header,t=>{const{title:r}=this,l=r?v(typeof r=="function"?[r()]:[r]):t;return l||this.closable?s("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},s("div",{class:`${o}-card-header__main`,role:"heading"},l),h(d["header-extra"],C=>{const m=this.headerExtra?v([this.headerExtra()]):C;return m&&s("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&s(io,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),h(d.default,t=>{const{content:r}=this,l=r?v(typeof r=="function"?[r()]:[r]):t;return l&&s("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)}),h(d.footer,t=>{const r=this.footer?v([this.footer()]):t;return r&&s("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),h(d.action,t=>{const r=this.action?v([this.action()]):t;return r&&s("div",{class:`${o}-card__action`,role:"none"},r)}))}});export{fo as _};

import{d as U,n,t as z,bw as X,x as i,y as a,a8 as Y,a9 as Z,e as ee,u as oe,A as _,h as re,g as $,E as te,l as s,b6 as f,F as ne,az as E,bx as de,by as v,N as ae}from"./index-CD6o7Giz.js";const ie={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},le=o=>{const{primaryColor:u,borderRadius:g,lineHeight:e,fontSize:c,cardColor:b,textColor2:x,textColor1:p,dividerColor:d,fontWeightStrong:t,closeIconColor:r,closeIconColorHover:l,closeIconColorPressed:C,closeColorHover:h,closeColorPressed:S,modalColor:y,boxShadow1:w,popoverColor:k,actionColor:m}=o;return Object.assign(Object.assign({},ie),{lineHeight:e,color:b,colorModal:y,colorPopover:k,colorTarget:u,colorEmbedded:m,colorEmbeddedModal:m,colorEmbeddedPopover:m,textColor:x,titleTextColor:p,borderColor:d,actionColor:m,titleFontWeight:t,closeColorHover:h,closeColorPressed:S,closeBorderRadius:g,closeIconColor:r,closeIconColorHover:l,closeIconColorPressed:C,fontSizeSmall:c,fontSizeMedium:c,fontSizeLarge:c,fontSizeHuge:c,boxShadow:w,borderRadius:g})},se={name:"Card",common:U,self:le},ce=n([z("card",`
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
 `,[X({background:"var(--n-color-modal)"}),i("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[n(">",[a("content",{paddingTop:"var(--n-padding-bottom)"})])]),i("content-soft-segmented",[n(">",[a("content",`
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
 `)]))]),be={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},ge=Object.assign(Object.assign({},_.props),be),he=ee({name:"Card",props:ge,setup(o){const u=()=>{const{onClose:t}=o;t&&ne(t)},{inlineThemeDisabled:g,mergedClsPrefixRef:e,mergedRtlRef:c}=oe(o),b=_("Card","-card",ce,se,o,e),x=re("Card",c,e),p=$(()=>{const{size:t}=o,{self:{color:r,colorModal:l,colorTarget:C,textColor:h,titleTextColor:S,titleFontWeight:y,borderColor:w,actionColor:k,borderRadius:m,lineHeight:F,closeIconColor:P,closeIconColorHover:T,closeIconColorPressed:R,closeColorHover:B,closeColorPressed:M,closeBorderRadius:H,closeIconSize:O,closeSize:j,boxShadow:I,colorPopover:V,colorEmbedded:L,colorEmbeddedModal:W,colorEmbeddedPopover:N,[E("padding",t)]:A,[E("fontSize",t)]:D,[E("titleFontSize",t)]:K},common:{cubicBezierEaseInOut:q}}=b.value,{top:G,left:J,bottom:Q}=de(A);return{"--n-bezier":q,"--n-border-radius":m,"--n-color":r,"--n-color-modal":l,"--n-color-popover":V,"--n-color-embedded":L,"--n-color-embedded-modal":W,"--n-color-embedded-popover":N,"--n-color-target":C,"--n-text-color":h,"--n-line-height":F,"--n-action-color":k,"--n-title-text-color":S,"--n-title-font-weight":y,"--n-close-icon-color":P,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":R,"--n-close-color-hover":B,"--n-close-color-pressed":M,"--n-border-color":w,"--n-box-shadow":I,"--n-padding-top":G,"--n-padding-bottom":Q,"--n-padding-left":J,"--n-font-size":D,"--n-title-font-size":K,"--n-close-size":j,"--n-close-icon-size":O,"--n-close-border-radius":H}}),d=g?te("card",$(()=>o.size[0]),p,o):void 0;return{rtlEnabled:x,mergedClsPrefix:e,mergedTheme:b,handleCloseClick:u,cssVars:g?void 0:p,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:o,bordered:u,hoverable:g,mergedClsPrefix:e,rtlEnabled:c,onRender:b,embedded:x,tag:p,$slots:d}=this;return b==null||b(),s(p,{class:[`${e}-card`,this.themeClass,x&&`${e}-card--embedded`,{[`${e}-card--rtl`]:c,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:u,[`${e}-card--hoverable`]:g}],style:this.cssVars,role:this.role},f(d.cover,t=>{const r=this.cover?v([this.cover()]):t;return r&&s("div",{class:`${e}-card-cover`,role:"none"},r)}),f(d.header,t=>{const{title:r}=this,l=r?v(typeof r=="function"?[r()]:[r]):t;return l||this.closable?s("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},s("div",{class:`${e}-card-header__main`,role:"heading"},l),f(d["header-extra"],C=>{const h=this.headerExtra?v([this.headerExtra()]):C;return h&&s("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},h)}),this.closable&&s(ae,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),f(d.default,t=>{const{content:r}=this,l=r?v(typeof r=="function"?[r()]:[r]):t;return l&&s("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)}),f(d.footer,t=>{const r=this.footer?v([this.footer()]):t;return r&&s("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),f(d.action,t=>{const r=this.action?v([this.action()]):t;return r&&s("div",{class:`${e}-card__action`,role:"none"},r)}))}});export{he as _};

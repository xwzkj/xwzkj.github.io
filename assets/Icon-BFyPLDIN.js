import{d as g,t as y,x as l,n as d,A as p,e as v,u as b,g as a,E as C,as as _,l as m,m as $}from"./index-CERPLgqX.js";import{f as z}from"./plugin-vueexport-helper-CtyYQGco.js";const x=e=>{const{textColorBase:o,opacity1:i,opacity2:s,opacity3:r,opacity4:n,opacity5:t}=e;return{color:o,opacity1Depth:i,opacity2Depth:s,opacity3Depth:r,opacity4Depth:n,opacity5Depth:t}},D={name:"Icon",common:g,self:x},R=y("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),S=Object.assign(Object.assign({},p.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),w=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:S,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=b(e),s=p("Icon","-icon",R,D,e,o),r=a(()=>{const{depth:t}=e,{common:{cubicBezierEaseInOut:c},self:h}=s.value;if(t!==void 0){const{color:u,[`opacity${t}Depth`]:f}=h;return{"--n-bezier":c,"--n-color":u,"--n-opacity":f}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),n=i?C("icon",a(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:a(()=>{const{size:t,color:c}=e;return{fontSize:z(t),color:c}}),cssVars:i?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:i,mergedClsPrefix:s,component:r,onRender:n,themeClass:t}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&_("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),m("i",$(this.$attrs,{role:"img",class:[`${s}-icon`,t,{[`${s}-icon--depth`]:i,[`${s}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?m(r):this.$slots)}});export{w as N};

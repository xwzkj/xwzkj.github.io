import{K as n,L as r,M as e,a2 as x,r as m,a3 as k,P as t,O as i,R as u,a5 as V,Q as p,at as I,au as w,a0 as S,a1 as D}from"./index-Bf3o3SW5.js";import{_ as $,N as H}from"./plugin-vueexport-helper-BZKo6wsw.js";import{_ as M}from"./Ellipsis-BXfB_ttU.js";const N={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},z=e("path",{fill:"currentColor",d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H4V5zM4 21V10h16v11z"},null,-1),B=e("path",{fill:"currentColor",d:"M4 5.01h16V8H4z",opacity:".3"},null,-1),b=[z,B];function L(o,s){return n(),r("svg",N,[...b])}const R={name:"ic-twotone-calendar-today",render:L},q=o=>(S("data-v-675c3624"),o=o(),D(),o),E=["src"],F={class:"item-card-name"},K={class:"item-card-date-box"},O={class:"item-card-date"},P=q(()=>e("div",{class:"item-card-name"},"每日推荐",-1)),Q={__name:"itemCard",props:["imgurl","text","click","isDailySongs"],setup(o){x(c=>({"226a5fa6":t(l)}));let s=o,l=m("rgb(173,213,239)"),_=m(null),g=new Date().getDate();function h(){let c=I(_.value,!0);l.value=w(c,[255,255,255],.4,!1,!0)}const v=k();return(c,a)=>{const f=M,y=R,C=H;return t(s).isDailySongs?(n(),r("div",{key:1,class:"item-card-outer",onClick:a[1]||(a[1]=d=>t(v).push({name:"playlist",query:{isDailySongs:!0}}))},[e("div",K,[i(C,{size:"11rem",class:"item-card-icon"},{default:u(()=>[i(y),e("div",O,p(t(g)),1)]),_:1})]),P])):(n(),r("div",{key:0,onClick:a[0]||(a[0]=(...d)=>t(s).click&&t(s).click(...d)),class:"item-card-outer"},[e("img",{class:"item-card-img",src:t(s).imgurl+"?param=200y200",crossorigin:"anonymous",ref_key:"itemCardImg",ref:_,onLoad:h},null,40,E),e("div",F,[i(f,{"line-clamp":2},{default:u(()=>[V(p(t(s).text),1)]),_:1})])]))}}},G=$(Q,[["__scopeId","data-v-675c3624"]]);export{G as i};

import{E as t,f as u}from"./element-plus-oyuo57Ko.js";import{a as m}from"./index-CHGFc8Af.js";import{o as l,c as _,M as s,K as c,ak as a}from"./@vue-D3pvTY_l.js";import"./@element-plus-BCXCoKlP.js";import"./@ctrl-r5W6hzzQ.js";import"./@vueuse-DNwJiFAQ.js";import"./lodash-es-BGGVqKTz.js";import"./@popperjs-D9SI2xQl.js";import"./pinia-kgQhn9yY.js";import"./colorthief-KyleDAT0.js";import"./axios-B4uVmeYG.js";import"./vue-router-D7nK3hD1.js";const N={__name:"setting",setup(f){let e=m();function i(){e.$reset(),e.clearStorage(),document.cookie="MUSIC_U=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",t({message:"好了哦",type:"success"})}function r(){document.cookie=prompt("输入包含MUSIC_U字段的cookie"),e.updateByCookie(),t({message:"好了哦",type:"success"})}function n(){t({message:"好了哦",type:"success"})}function p(){e.updateByCookie(),t({message:"好了哦",type:"success"})}return(k,d)=>{const o=u;return l(),_("div",null,[s(o,{onClick:i},{default:c(()=>[a("退出登录")]),_:1}),s(o,{onClick:r},{default:c(()=>[a("输入cookie登录")]),_:1}),s(o,{onClick:n},{default:c(()=>[a("弹出一个message")]),_:1}),s(o,{onClick:p},{default:c(()=>[a("马上更新用户信息")]),_:1})])}}};export{N as default};

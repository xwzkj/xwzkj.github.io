import{V as B,ae as C,r as m,w as N,o as U,b5 as x,b6 as A,Q as l,R as i,a1 as a,U as s,$ as r,a0 as c,W as V,X as b,a6 as u,Z as v,Y as L,_ as g,a2 as M}from"./index-DFzFKJ1X.js";import{m as T,_ as $}from"./musicList--0Am0Kld.js";import{_ as z}from"./plugin-vueexport-helper-DlAUqK2U.js";import{B as P}from"./Button-CJDSgELR.js";import"./use-compitable-7sCR8ExB.js";import"./heart-outlined-B_qXFK3D.js";import"./Card-_h8Pb26W.js";import"./Icon-aJGFugRl.js";import"./format-length-B-p6aW7q.js";const R={key:"playlst-content"},E={id:"playlistDetail"},F=["src"],O={id:"playlistInfo"},Q={id:"playlistName"},W={key:0,id:"playlistAuthor"},X=["src"],Y={id:"playlistAuthorName"},Z={id:"playlistTagContainer"},j={id:"playlistDesc"},q={id:"playlistControler"},G={id:"playlistMusicList"},H={class:"playlist-spin",key:"playlst-spin"},J={__name:"playlist",props:["id","isDailySongs"],setup(h){const n=B(),_=C();let o=m(!1),t=m([]),p=h;N(p,()=>{console.log("playlist组件props被更新"),t.value={},y()},{deep:!0}),U(()=>{console.log("playlist组件被挂载"),y()});async function y(){if(p.isDailySongs){let e=await x(),d=new Date;t.value={tracks:e.data.data.dailySongs,name:`${d.getMonth()+1}/${d.getDate()} 每日推荐`,description:"根据你的音乐口味生成，每天06:00更新",coverImgUrl:e.data.data.dailySongs[0].al.picUrl,tags:["每日推荐"]}}else{let e=await A(p.id);t.value=e.data.playlist}}async function f(){o.value=!0,await n.playlistInit(null,t.value.tracks),n.play(!0),_.push({name:"player"}),o.value=!1}async function k(e){o.value=!0,await n.addMusic([e],0,!0),n.play(!0),_.push({name:"player"}),o.value=!1}return(e,d)=>{const w=M,D=P,S=$;return l(),i("div",null,[a(t).tracks&&!a(o)?(l(),i("div",R,[s("div",E,[a(t).coverImgUrl?(l(),i("img",{key:0,id:"playlistImg",src:a(t).coverImgUrl},null,8,F)):r("",!0),s("div",O,[s("div",Q,c(a(t).name),1),a(t).creator?(l(),i("div",W,[s("img",{id:"playlistAuthorAvatar",src:a(t).creator.avatarUrl},null,8,X),s("div",Y,c(a(t).creator.nickname),1),s("span",Z,[(l(!0),i(V,null,b(a(t).tags,I=>(l(),L(w,{type:"success",size:"small",class:"playlistTag"},{default:v(()=>[g(c(I),1)]),_:2},1024))),256))])])):r("",!0),s("div",j,c(a(t).description),1),s("div",q,[u(D,{onClick:f},{default:v(()=>[g("播放全部")]),_:1})])])]),s("div",G,[u(T,{value:a(t).tracks,nameOnClick:k},null,8,["value"])])])):r("",!0),!a(t).tracks||a(o)?(l(),i("div",H,[u(S,{size:"large"})])):r("",!0)])}}},rt=z(J,[["__scopeId","data-v-aff4b919"]]);export{rt as default};
//# sourceMappingURL=playlist-xe8wE8di.js.map
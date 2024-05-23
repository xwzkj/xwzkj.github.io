const __vite__fileDeps=["scripts/player-DQz3vqjA.js","scripts/@vue-D_0RU2Tl.js","scripts/element-plus-CohCRYw0.js","scripts/@element-plus-ChLHN-JF.js","scripts/@ctrl-r5W6hzzQ.js","scripts/@vueuse-BHQltXxO.js","scripts/lodash-es-BZZZw3H7.js","scripts/@popperjs-D9SI2xQl.js","assets/element-plus-8cc_KJSR.css","scripts/plugin-vueexport-helper-DlAUqK2U.js","scripts/pinia-BPHYnNsg.js","scripts/colorthief-KyleDAT0.js","scripts/axios-B4uVmeYG.js","scripts/vue-router-DG80t9WM.js","assets/player-B6vYtC-f.css","scripts/container-CBmzi4fj.js","assets/container-3CKRddhf.css","scripts/home-B1SK_-td.js","assets/home-DThx2Pw3.css","scripts/search-uRWtSTnS.js","scripts/musicList-CgmwBuIu.js","scripts/naive-ui-D592rHB_.js","scripts/seemly-DmzweY-y.js","scripts/@css-render-DWdI-o_L.js","scripts/css-render-BDrvWz3H.js","scripts/@emotion-WldOFDRm.js","scripts/vooks-CX8wCwuJ.js","assets/musicList-BJmHeYzz.css","assets/search-gLe8iQjW.css","scripts/login-BtY8boGH.js","assets/login-CcoSX7vy.css","scripts/account-DHXNp5JN.js","assets/account-CgQ04KVE.css","scripts/playlist-BsUXU7ZX.js","assets/playlist-DKMSkHhp.css","scripts/setting-D4ps4E5J.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ae as E,u as w,af as C,o as m,J as d,K as I,ag as T,L as h,G as L,a4 as O}from"./@vue-D_0RU2Tl.js";import{d as P,c as A}from"./pinia-BPHYnNsg.js";import{o as y}from"./colorthief-KyleDAT0.js";import{a as _}from"./axios-B4uVmeYG.js";import{E as $}from"./element-plus-CohCRYw0.js";import{c as b,a as q}from"./vue-router-DG80t9WM.js";import"./@element-plus-ChLHN-JF.js";import"./@ctrl-r5W6hzzQ.js";import"./@vueuse-BHQltXxO.js";import"./lodash-es-BZZZw3H7.js";import"./@popperjs-D9SI2xQl.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();let D="https://api.xwzkj.top";_.defaults.withCredentials=!0;let R=_.create({baseURL:D,timeout:2e4,withCredentials:!0});function s(e){return e.url+="?timestamp="+Date.now(),e.method=="post"?e.data={...e.data,cookie:localStorage.getItem("cookie")}:e.method=="get"&&(e.params={...e.data,cookie:localStorage.getItem("cookie")}),R.request(e)}function U(){return s({url:"/login/status",method:"post"})}function V(e){return s({url:"/user/playlist",method:"post",params:{uid:e}})}function B(e){return s({url:"/likelist",method:"post",params:{uid:e}})}function M(){return s({url:"/vip/info",method:"post"})}function a0(){return s({url:"/login/qr/key",method:"post"})}function i0(e){return s({url:"/login/qr/create",method:"post",data:{key:e}})}function n0(e){return s({url:"/login/qr/check",method:"get",params:{key:e}})}function s0(e){return s({url:"/song/detail",method:"post",params:{ids:e}})}function l0(e,o){return s({url:"/song/url/v1",method:"post",params:{id:e,level:o}})}function u0(e){return s({url:"/lyric/new",method:"post",params:{id:e}})}function c0(){return s({url:"/recommend/songs",method:"post"})}function p0(e){return s({url:"/playlist/detail",method:"post",params:{id:e}})}function m0(e){return s({url:"/cloudsearch",method:"post",data:{keywords:e}})}function d0(e,o,t=!1){let a=new y().getPalette(e,o);if(t)return a;let r=[];for(let i=0;i<a.length;i++)r[i]=`rgb(${a[i][0]},${a[i][1]},${a[i][2]})`;return r}function f0(e,o=!1){let l=new y().getColor(e);return o?l:`rgb(${l[0]},${l[1]},${l[2]})`}function j(e,o,t=.5,l=!1,a=!1){let r=Math.round(e[0]+(o[0]-e[0])*t),i=Math.round(e[1]+(o[1]-e[1])*t),n=Math.round(e[2]+(o[2]-e[2])*t);if(r=Math.min(r,255),i=Math.min(i,255),n=Math.min(n,255),r<125&&i<125&&n<125&&a){let u=j([r,i,n],[255,255,255],.45,!0,!0);r=u[0],i=u[1],n=u[2]}return l?[r,i,n]:`rgb(${r},${i},${n})`}function h0(e){let o=Math.floor(e/6e4),t=Math.floor(e/1e3%60);return o<10&&(o="0"+o),t<10&&(t="0"+t),`${o}:${t}`}function g0(e){return e.map(t=>t.name).join("、")}const y0={province:{11e4:"北京市",12e4:"天津市",13e4:"河北省",14e4:"山西省",15e4:"内蒙古自治区",21e4:"辽宁省",22e4:"吉林省",23e4:"黑龙江省",31e4:"上海市",32e4:"江苏省",33e4:"浙江省",34e4:"安徽省",35e4:"福建省",36e4:"江西省",37e4:"山东省",41e4:"河南省",42e4:"湖北省",43e4:"湖南省",44e4:"广东省",45e4:"广西壮族自治区",46e4:"海南省",5e5:"重庆市",51e4:"四川省",52e4:"贵州省",53e4:"云南省",54e4:"西藏自治区",61e4:"陕西省",62e4:"甘肃省",63e4:"青海省",64e4:"宁夏回族自治区",65e4:"新疆维吾尔自治区"},city:{110101:"东城区",110102:"西城区",110105:"朝阳区",110106:"丰台区",110107:"石景山区",110108:"海淀区",110109:"门头沟区",110111:"房山区",110112:"通州区",110113:"顺义区",110114:"昌平区",110115:"大兴区",110116:"怀柔区",110117:"平谷区",110118:"密云区",110119:"延庆区",120101:"和平区",120102:"河东区",120103:"河西区",120104:"南开区",120105:"河北区",120106:"红桥区",120110:"东丽区",120111:"西青区",120112:"津南区",120113:"北辰区",120114:"武清区",120115:"宝坻区",120116:"滨海新区",120117:"宁河区",120118:"静海区",120119:"蓟州区",130100:"石家庄市",130200:"唐山市",130300:"秦皇岛市",130400:"邯郸市",130500:"邢台市",130600:"保定市",130700:"张家口市",130800:"承德市",130900:"沧州市",131e3:"廊坊市",131100:"衡水市",140100:"太原市",140200:"大同市",140300:"阳泉市",140400:"长治市",140500:"晋城市",140600:"朔州市",140700:"晋中市",140800:"运城市",140900:"忻州市",141e3:"临汾市",141100:"吕梁市",150100:"呼和浩特市",150200:"包头市",150300:"乌海市",150400:"赤峰市",150500:"通辽市",150600:"鄂尔多斯市",150700:"呼伦贝尔市",150800:"巴彦淖尔市",150900:"乌兰察布市",152200:"兴安盟",152500:"锡林郭勒盟",152900:"阿拉善盟",210100:"沈阳市",210200:"大连市",210300:"鞍山市",210400:"抚顺市",210500:"本溪市",210600:"丹东市",210700:"锦州市",210800:"营口市",210900:"阜新市",211e3:"辽阳市",211100:"盘锦市",211200:"铁岭市",211300:"朝阳市",211400:"葫芦岛市",220100:"长春市",220200:"吉林市",220300:"四平市",220400:"辽源市",220500:"通化市",220600:"白山市",220700:"松原市",220800:"白城市",222400:"延边朝鲜族自治州",230100:"哈尔滨市",230200:"齐齐哈尔市",230300:"鸡西市",230400:"鹤岗市",230500:"双鸭山市",230600:"大庆市",230700:"伊春市",230800:"佳木斯市",230900:"七台河市",231e3:"牡丹江市",231100:"黑河市",231200:"绥化市",232700:"大兴安岭地区",310101:"黄浦区",310104:"徐汇区",310105:"长宁区",310106:"静安区",310107:"普陀区",310109:"虹口区",310110:"杨浦区",310112:"闵行区",310113:"宝山区",310114:"嘉定区",310115:"浦东新区",310116:"金山区",310117:"松江区",310118:"青浦区",310120:"奉贤区",310151:"崇明区",320100:"南京市",320200:"无锡市",320300:"徐州市",320400:"常州市",320500:"苏州市",320600:"南通市",320700:"连云港市",320800:"淮安市",320900:"盐城市",321e3:"扬州市",321100:"镇江市",321200:"泰州市",321300:"宿迁市",330100:"杭州市",330200:"宁波市",330300:"温州市",330400:"嘉兴市",330500:"湖州市",330600:"绍兴市",330700:"金华市",330800:"衢州市",330900:"舟山市",331e3:"台州市",331100:"丽水市",340100:"合肥市",340200:"芜湖市",340300:"蚌埠市",340400:"淮南市",340500:"马鞍山市",340600:"淮北市",340700:"铜陵市",340800:"安庆市",341e3:"黄山市",341100:"滁州市",341200:"阜阳市",341300:"宿州市",341500:"六安市",341600:"亳州市",341700:"池州市",341800:"宣城市",350100:"福州市",350200:"厦门市",350300:"莆田市",350400:"三明市",350500:"泉州市",350600:"漳州市",350700:"南平市",350800:"龙岩市",350900:"宁德市",360100:"南昌市",360200:"景德镇市",360300:"萍乡市",360400:"九江市",360500:"新余市",360600:"鹰潭市",360700:"赣州市",360800:"吉安市",360900:"宜春市",361e3:"抚州市",361100:"上饶市",370100:"济南市",370200:"青岛市",370300:"淄博市",370400:"枣庄市",370500:"东营市",370600:"烟台市",370700:"潍坊市",370800:"济宁市",370900:"泰安市",371e3:"威海市",371100:"日照市",371300:"临沂市",371400:"德州市",371500:"聊城市",371600:"滨州市",371700:"菏泽市",410100:"郑州市",410200:"开封市",410300:"洛阳市",410400:"平顶山市",410500:"安阳市",410600:"鹤壁市",410700:"新乡市",410800:"焦作市",410900:"濮阳市",411e3:"许昌市",411100:"漯河市",411200:"三门峡市",411300:"南阳市",411400:"商丘市",411500:"信阳市",411600:"周口市",411700:"驻马店市",419001:"济源市",420100:"武汉市",420200:"黄石市",420300:"十堰市",420500:"宜昌市",420600:"襄阳市",420700:"鄂州市",420800:"荆门市",420900:"孝感市",421e3:"荆州市",421100:"黄冈市",421200:"咸宁市",421300:"随州市",422800:"恩施土家族苗族自治州",429004:"仙桃市",429005:"潜江市",429006:"天门市",429021:"神农架林区",430100:"长沙市",430200:"株洲市",430300:"湘潭市",430400:"衡阳市",430500:"邵阳市",430600:"岳阳市",430700:"常德市",430800:"张家界市",430900:"益阳市",431e3:"郴州市",431100:"永州市",431200:"怀化市",431300:"娄底市",433100:"湘西土家族苗族自治州",440100:"广州市",440200:"韶关市",440300:"深圳市",440400:"珠海市",440500:"汕头市",440600:"佛山市",440700:"江门市",440800:"湛江市",440900:"茂名市",441200:"肇庆市",441300:"惠州市",441400:"梅州市",441500:"汕尾市",441600:"河源市",441700:"阳江市",441800:"清远市",441900:"东莞市",442e3:"中山市",445100:"潮州市",445200:"揭阳市",445300:"云浮市",450100:"南宁市",450200:"柳州市",450300:"桂林市",450400:"梧州市",450500:"北海市",450600:"防城港市",450700:"钦州市",450800:"贵港市",450900:"玉林市",451e3:"百色市",451100:"贺州市",451200:"河池市",451300:"来宾市",451400:"崇左市",460100:"海口市",460200:"三亚市",460300:"三沙市",460400:"儋州市",469001:"五指山市",469002:"琼海市",469005:"文昌市",469006:"万宁市",469007:"东方市",469021:"定安县",469022:"屯昌县",469023:"澄迈县",469024:"临高县",469025:"白沙黎族自治县",469026:"昌江黎族自治县",469027:"乐东黎族自治县",469028:"陵水黎族自治县",469029:"保亭黎族苗族自治县",469030:"琼中黎族苗族自治县",500101:"万州区",500102:"涪陵区",500103:"渝中区",500104:"大渡口区",500105:"江北区",500106:"沙坪坝区",500107:"九龙坡区",500108:"南岸区",500109:"北碚区",500110:"綦江区",500111:"大足区",500112:"渝北区",500113:"巴南区",500114:"黔江区",500115:"长寿区",500116:"江津区",500117:"合川区",500118:"永川区",500119:"南川区",500120:"璧山区",500151:"铜梁区",500152:"潼南区",500153:"荣昌区",500154:"开州区",500155:"梁平区",500156:"武隆区",500229:"城口县",500230:"丰都县",500231:"垫江县",500233:"忠县",500235:"云阳县",500236:"奉节县",500237:"巫山县",500238:"巫溪县",500240:"石柱土家族自治县",500241:"秀山土家族苗族自治县",500242:"酉阳土家族苗族自治县",500243:"彭水苗族土家族自治县",510100:"成都市",510300:"自贡市",510400:"攀枝花市",510500:"泸州市",510600:"德阳市",510700:"绵阳市",510800:"广元市",510900:"遂宁市",511e3:"内江市",511100:"乐山市",511300:"南充市",511400:"眉山市",511500:"宜宾市",511600:"广安市",511700:"达州市",511800:"雅安市",511900:"巴中市",512e3:"资阳市",513200:"阿坝藏族羌族自治州",513300:"甘孜藏族自治州",513400:"凉山彝族自治州",520100:"贵阳市",520200:"六盘水市",520300:"遵义市",520400:"安顺市",520500:"毕节市",520600:"铜仁市",522300:"黔西南布依族苗族自治州",522600:"黔东南苗族侗族自治州",522700:"黔南布依族苗族自治州",530100:"昆明市",530300:"曲靖市",530400:"玉溪市",530500:"保山市",530600:"昭通市",530700:"丽江市",530800:"普洱市",530900:"临沧市",532300:"楚雄彝族自治州",532500:"红河哈尼族彝族自治州",532600:"文山壮族苗族自治州",532800:"西双版纳傣族自治州",532900:"大理白族自治州",533100:"德宏傣族景颇族自治州",533300:"怒江傈僳族自治州",533400:"迪庆藏族自治州",540100:"拉萨市",540200:"日喀则市",540300:"昌都市",540400:"林芝市",540500:"山南市",540600:"那曲市",542500:"阿里地区",610100:"西安市",610200:"铜川市",610300:"宝鸡市",610400:"咸阳市",610500:"渭南市",610600:"延安市",610700:"汉中市",610800:"榆林市",610900:"安康市",611e3:"商洛市",620100:"兰州市",620200:"嘉峪关市",620300:"金昌市",620400:"白银市",620500:"天水市",620600:"武威市",620700:"张掖市",620800:"平凉市",620900:"酒泉市",621e3:"庆阳市",621100:"定西市",621200:"陇南市",622900:"临夏回族自治州",623e3:"甘南藏族自治州",630100:"西宁市",630200:"海东市",632200:"海北藏族自治州",632300:"黄南藏族自治州",632500:"海南藏族自治州",632600:"果洛藏族自治州",632700:"玉树藏族自治州",632800:"海西蒙古族藏族自治州",640100:"银川市",640200:"石嘴山市",640300:"吴忠市",640400:"固原市",640500:"中卫市",650100:"乌鲁木齐市",650200:"克拉玛依市",650400:"吐鲁番市",650500:"哈密市",652300:"昌吉回族自治州",652700:"博尔塔拉蒙古自治州",652800:"巴音郭楞蒙古自治州",652900:"阿克苏地区",653e3:"克孜勒苏柯尔克孜自治州",653100:"喀什地区",653200:"和田地区",654e3:"伊犁哈萨克自治州",654200:"塔城地区",654300:"阿勒泰地区",659001:"石河子市",659002:"阿拉尔市",659003:"图木舒克市",659004:"五家渠市",659005:"北屯市",659006:"铁门关市",659007:"双河市",659008:"可克达拉市",659009:"昆玉市",659010:"胡杨河市",659011:"新星市",659012:"白杨市"}},x=P("user",{state:()=>({isLogin:!1,name:"",avatar:"",vipIcon:"",vipexpire:"",province:"",city:"",cookie:"",uid:"",playlists:[],likedSongs:[],updateTime:""}),actions:{async updateByCookie(e){let o=document.cookie.match("MUSIC_U=[^;]+;");if(e==null&&o[0]!=null)e=document.cookie;else{console.log("没有cookie更新个毛的用户信息啊");return}localStorage.setItem("cookie",e.match("MUSIC_U=[^;]+;")),this.cookie=e,this.isLogin=!0;let t=await U();t.data.data.code==200&&(this.name=t.data.data.profile.nickname,this.avatar=t.data.data.profile.avatarUrl,this.uid=t.data.data.profile.userId,this.province=t.data.data.profile.province,this.city=t.data.data.profile.city),t=await V(this.uid),t.data.code==200&&(this.playlists=t.data.playlist),t=await B(this.uid),t.data.code==200&&(this.likedSongs=t.data.ids),t=await M(),t.data.code==200&&(this.vipIcon=t.data.data.associator.iconUrl,this.vipexpire=t.data.data.associator.expireTime),this.updateTime=Date.now(),this.storeToStorage(),$({message:"已同步用户信息",type:"success",duration:1e3}),console.log("pinia updatedByCookie")},updateByStorage(){let e=JSON.parse(localStorage.getItem("user"));this.updateByObj(e),console.log("pinia updatedByStorage")},updateByObj(e){for(let o in e)this[o]=e[o]},storeToStorage(){let e=E(this),o={};for(let t in e)t.slice(0,1)!="_"&&t.slice(0,1)!="$"&&typeof e[t]!="function"&&(o[t]=w(e[t]));localStorage.setItem("user",JSON.stringify(o)),console.log("pinia storeToStorage")},clearStorage(){localStorage.removeItem("user"),console.log("pinia clearStorage")}}}),N={__name:"App",setup(e){let o=x();return o.updateByStorage(),o.isLogin===!0&&Date.now()-o.updateTime>1e3*60*3&&o.updateByCookie(),(t,l)=>{const a=C("router-view");return m(),d(a,null,{default:I(({Component:r})=>[t.$route.meta.keepAlive?(m(),d(T,{key:0},[t.$route.meta.keepAlive?(m(),d(h(r),{key:t.$route.name})):L("",!0)],1024)):(m(),d(h(r),{key:t.$route.name}))]),_:1})}}},K="modulepreload",F=function(e){return"/"+e},g={},p=function(o,t,l){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.all(t.map(n=>{if(n=F(n),n in g)return;g[n]=!0;const u=n.endsWith(".css"),v=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${v}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":K,u||(c.as="script",c.crossOrigin=""),c.href=n,i&&c.setAttribute("nonce",i),document.head.appendChild(c),u)return new Promise((k,S)=>{c.addEventListener("load",k),c.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${n}`)))})}))}return a.then(()=>o()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},J=b({history:q(),routes:[{name:"player",path:"/player",component:()=>p(()=>import("./player-DQz3vqjA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])),props:e=>e.query,meta:{keepAlive:!0}},{path:"/",redirect:"/home"},{name:"root",path:"/",component:()=>p(()=>import("./container-CBmzi4fj.js"),__vite__mapDeps([15,2,1,3,4,5,6,7,8,13,10,11,12,16])),children:[{name:"home",path:"home",component:()=>p(()=>import("./home-B1SK_-td.js"),__vite__mapDeps([17,13,1,9,18])),props:e=>e.query,meta:{keepAlive:!0}},{name:"search",path:"search",component:()=>p(()=>import("./search-uRWtSTnS.js"),__vite__mapDeps([19,13,1,20,9,21,6,22,23,24,25,26,27,10,11,12,2,3,4,5,7,8,28])),props:e=>e.query,meta:{keepAlive:!0}},{name:"login",path:"login",component:()=>p(()=>import("./login-BtY8boGH.js"),__vite__mapDeps([29,13,1,9,21,6,22,23,24,25,26,10,11,12,2,3,4,5,7,8,30])),props:e=>e.query},{name:"account",path:"account",component:()=>p(()=>import("./account-DHXNp5JN.js"),__vite__mapDeps([31,1,13,2,3,4,5,6,7,8,9,10,11,12,32])),props:e=>e.query,meta:{keepAlive:!0}},{name:"playlist",path:"playlist",component:()=>p(()=>import("./playlist-BsUXU7ZX.js"),__vite__mapDeps([33,2,1,3,4,5,6,7,8,13,20,9,21,22,23,24,25,26,27,10,11,12,34])),props:e=>e.query,meta:{keepAlive:!0}},{name:"setting",path:"setting",component:()=>p(()=>import("./setting-D4ps4E5J.js"),__vite__mapDeps([35,2,1,3,4,5,6,7,8,10,11,12,13])),props:e=>e.query,meta:{keepAlive:!0}}]}]});let f=O(N),Q=A();f.use(Q);f.use(J);f.mount("#app");export{l0 as a,a0 as b,m0 as c,i0 as d,n0 as e,f0 as f,d0 as g,y0 as h,g0 as i,h0 as j,u0 as l,j as m,p0 as p,c0 as r,s0 as s,x as u};

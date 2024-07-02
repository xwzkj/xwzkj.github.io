import{d as oe,t as ne,ag as K,y as z,x as P,e as se,A as G,u as ie,g as X,E as re,l as B,W as ue,n as he,r as x,o as ae,j as Q,Q as $,R as F,U as E,a3 as fe,ae as ge,a as me,ah as ve,ai as pe,aj as we,ak as ee,a1 as R,Y as Ce,$ as q,_ as H,a0 as Ee,a6 as y,Z as k,a7 as T,k as Y,v as V,a5 as j,al as _e,am as te,an as Me,ao as Re,ab as be,ac as ye}from"./index-wHdteBg8.js";import{_ as Ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as Ae}from"./Button-BBQDg6LA.js";import{N as Ie}from"./Icon-CCdpSWnK.js";import"./format-length-B-p6aW7q.js";const ke=l=>{const{textColor1:i,dividerColor:c,fontWeightStrong:m}=l;return{textColor:i,color:c,fontWeight:m}},Pe={name:"Divider",common:oe,self:ke},Be=ne("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[K("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[K("no-title",`
 display: flex;
 align-items: center;
 `)]),z("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),P("title-position-left",[z("line",[P("left",{width:"28px"})])]),P("title-position-right",[z("line",[P("right",{width:"28px"})])]),P("dashed",[z("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),P("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),z("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),K("dashed",[z("line",{backgroundColor:"var(--n-color)"})]),P("dashed",[z("line",{borderColor:"var(--n-color)"})]),P("vertical",{backgroundColor:"var(--n-color)"})]),Se=Object.assign(Object.assign({},G.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),ze=se({name:"Divider",props:Se,setup(l){const{mergedClsPrefixRef:i,inlineThemeDisabled:c}=ie(l),m=G("Divider","-divider",Be,Pe,l,i),u=X(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:o,textColor:t,fontWeight:n}}=m.value;return{"--n-bezier":e,"--n-color":o,"--n-text-color":t,"--n-font-weight":n}}),g=c?re("divider",void 0,u,l):void 0;return{mergedClsPrefix:i,cssVars:c?void 0:u,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var l;const{$slots:i,titlePlacement:c,vertical:m,dashed:u,cssVars:g,mergedClsPrefix:e}=this;return(l=this.onRender)===null||l===void 0||l.call(this),B("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:m,[`${e}-divider--no-title`]:!i.default,[`${e}-divider--dashed`]:u,[`${e}-divider--title-position-${c}`]:i.default&&c}],style:g},m?null:B("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!m&&i.default?B(ue,null,B("div",{class:`${e}-divider__title`},this.$slots),B("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),xe=he([ne("qr-code",`
 background: #fff;
 border-radius: var(--n-border-radius);
 display: inline-flex;
 `)]),$e=l=>({borderRadius:l.borderRadius}),Le={name:"QrCode",common:oe,self:$e};var A;(function(l){class i{static encodeText(e,o){const t=l.QrSegment.makeSegments(e);return i.encodeSegments(t,o)}static encodeBinary(e,o){const t=l.QrSegment.makeBytes(e);return i.encodeSegments([t],o)}static encodeSegments(e,o,t=1,n=40,s=-1,f=!0){if(!(i.MIN_VERSION<=t&&t<=n&&n<=i.MAX_VERSION)||s<-1||s>7)throw new RangeError("Invalid value");let r,a;for(r=t;;r++){const h=i.getNumDataCodewords(r,o)*8,v=u.getTotalBits(e,r);if(v<=h){a=v;break}if(r>=n)throw new RangeError("Data too long")}for(const h of[i.Ecc.MEDIUM,i.Ecc.QUARTILE,i.Ecc.HIGH])f&&a<=i.getNumDataCodewords(r,h)*8&&(o=h);const d=[];for(const h of e){c(h.mode.modeBits,4,d),c(h.numChars,h.mode.numCharCountBits(r),d);for(const v of h.getData())d.push(v)}const w=i.getNumDataCodewords(r,o)*8;c(0,Math.min(4,w-d.length),d),c(0,(8-d.length%8)%8,d);for(let h=236;d.length<w;h^=253)c(h,8,d);const p=[];for(;p.length*8<d.length;)p.push(0);return d.forEach((h,v)=>p[v>>>3]|=h<<7-(v&7)),new i(r,o,p,s)}constructor(e,o,t,n){if(this.version=e,this.errorCorrectionLevel=o,this.modules=[],this.isFunction=[],e<i.MIN_VERSION||e>i.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;const s=[];for(let r=0;r<this.size;r++)s.push(!1);for(let r=0;r<this.size;r++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const f=this.addEccAndInterleave(t);if(this.drawCodewords(f),n===-1){let r=1e9;for(let a=0;a<8;a++){this.applyMask(a),this.drawFormatBits(a);const d=this.getPenaltyScore();d<r&&(n=a,r=d),this.applyMask(a)}}this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}getModule(e,o){return e>=0&&e<this.size&&o>=0&&o<this.size&&this.modules[o][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2===0),this.setFunctionModule(t,6,t%2===0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),o=e.length;for(let t=0;t<o;t++)for(let n=0;n<o;n++)t===0&&n===0||t===0&&n===o-1||t===o-1&&n===0||this.drawAlignmentPattern(e[t],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const o=this.errorCorrectionLevel.formatBits<<3|e;let t=o;for(let s=0;s<10;s++)t=t<<1^(t>>>9)*1335;const n=(o<<10|t)^21522;for(let s=0;s<=5;s++)this.setFunctionModule(8,s,m(n,s));this.setFunctionModule(8,7,m(n,6)),this.setFunctionModule(8,8,m(n,7)),this.setFunctionModule(7,8,m(n,8));for(let s=9;s<15;s++)this.setFunctionModule(14-s,8,m(n,s));for(let s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,m(n,s));for(let s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,m(n,s));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;const o=this.version<<12|e;for(let t=0;t<18;t++){const n=m(o,t),s=this.size-11+t%3,f=Math.floor(t/3);this.setFunctionModule(s,f,n),this.setFunctionModule(f,s,n)}}drawFinderPattern(e,o){for(let t=-4;t<=4;t++)for(let n=-4;n<=4;n++){const s=Math.max(Math.abs(n),Math.abs(t)),f=e+n,r=o+t;f>=0&&f<this.size&&r>=0&&r<this.size&&this.setFunctionModule(f,r,s!==2&&s!==4)}}drawAlignmentPattern(e,o){for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,o+t,Math.max(Math.abs(n),Math.abs(t))!==1)}setFunctionModule(e,o,t){this.modules[o][e]=t,this.isFunction[o][e]=!0}addEccAndInterleave(e){const o=this.version,t=this.errorCorrectionLevel;if(e.length!==i.getNumDataCodewords(o,t))throw new RangeError("Invalid argument");const n=i.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][o],s=i.ECC_CODEWORDS_PER_BLOCK[t.ordinal][o],f=Math.floor(i.getNumRawDataModules(o)/8),r=n-f%n,a=Math.floor(f/n),d=[],w=i.reedSolomonComputeDivisor(s);for(let h=0,v=0;h<n;h++){const C=e.slice(v,v+a-s+(h<r?0:1));v+=C.length;const N=i.reedSolomonComputeRemainder(C,w);h<r&&C.push(0),d.push(C.concat(N))}const p=[];for(let h=0;h<d[0].length;h++)d.forEach((v,C)=>{(h!==a-s||C>=r)&&p.push(v[h])});return p}drawCodewords(e){if(e.length!==Math.floor(i.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let o=0;for(let t=this.size-1;t>=1;t-=2){t===6&&(t=5);for(let n=0;n<this.size;n++)for(let s=0;s<2;s++){const f=t-s,a=(t+1&2)===0?this.size-1-n:n;!this.isFunction[a][f]&&o<e.length*8&&(this.modules[a][f]=m(e[o>>>3],7-(o&7)),o++)}}}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let o=0;o<this.size;o++)for(let t=0;t<this.size;t++){let n;switch(e){case 0:n=(t+o)%2===0;break;case 1:n=o%2===0;break;case 2:n=t%3===0;break;case 3:n=(t+o)%3===0;break;case 4:n=(Math.floor(t/3)+Math.floor(o/2))%2===0;break;case 5:n=t*o%2+t*o%3===0;break;case 6:n=(t*o%2+t*o%3)%2===0;break;case 7:n=((t+o)%2+t*o%3)%2===0;break;default:throw new Error("Unreachable")}!this.isFunction[o][t]&&n&&(this.modules[o][t]=!this.modules[o][t])}}getPenaltyScore(){let e=0;for(let s=0;s<this.size;s++){let f=!1,r=0;const a=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[s][d]===f?(r++,r===5?e+=i.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,a),f||(e+=this.finderPenaltyCountPatterns(a)*i.PENALTY_N3),f=this.modules[s][d],r=1);e+=this.finderPenaltyTerminateAndCount(f,r,a)*i.PENALTY_N3}for(let s=0;s<this.size;s++){let f=!1,r=0;const a=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[d][s]===f?(r++,r===5?e+=i.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,a),f||(e+=this.finderPenaltyCountPatterns(a)*i.PENALTY_N3),f=this.modules[d][s],r=1);e+=this.finderPenaltyTerminateAndCount(f,r,a)*i.PENALTY_N3}for(let s=0;s<this.size-1;s++)for(let f=0;f<this.size-1;f++){const r=this.modules[s][f];r===this.modules[s][f+1]&&r===this.modules[s+1][f]&&r===this.modules[s+1][f+1]&&(e+=i.PENALTY_N2)}let o=0;for(const s of this.modules)o=s.reduce((f,r)=>f+(r?1:0),o);const t=this.size*this.size,n=Math.ceil(Math.abs(o*20-t*10)/t)-1;return e+=n*i.PENALTY_N4,e}getAlignmentPatternPositions(){if(this.version===1)return[];{const e=Math.floor(this.version/7)+2,o=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,t=[6];for(let n=this.size-7;t.length<e;n-=o)t.splice(1,0,n);return t}}static getNumRawDataModules(e){if(e<i.MIN_VERSION||e>i.MAX_VERSION)throw new RangeError("Version number out of range");let o=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;o-=(25*t-10)*t-55,e>=7&&(o-=36)}return o}static getNumDataCodewords(e,o){return Math.floor(i.getNumRawDataModules(e)/8)-i.ECC_CODEWORDS_PER_BLOCK[o.ordinal][e]*i.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");const o=[];for(let n=0;n<e-1;n++)o.push(0);o.push(1);let t=1;for(let n=0;n<e;n++){for(let s=0;s<o.length;s++)o[s]=i.reedSolomonMultiply(o[s],t),s+1<o.length&&(o[s]^=o[s+1]);t=i.reedSolomonMultiply(t,2)}return o}static reedSolomonComputeRemainder(e,o){const t=o.map(n=>0);for(const n of e){const s=n^t.shift();t.push(0),o.forEach((f,r)=>t[r]^=i.reedSolomonMultiply(f,s))}return t}static reedSolomonMultiply(e,o){if(e>>>8||o>>>8)throw new RangeError("Byte out of range");let t=0;for(let n=7;n>=0;n--)t=t<<1^(t>>>7)*285,t^=(o>>>n&1)*e;return t}finderPenaltyCountPatterns(e){const o=e[1],t=o>0&&e[2]===o&&e[3]===o*3&&e[4]===o&&e[5]===o;return(t&&e[0]>=o*4&&e[6]>=o?1:0)+(t&&e[6]>=o*4&&e[0]>=o?1:0)}finderPenaltyTerminateAndCount(e,o,t){return e&&(this.finderPenaltyAddHistory(o,t),o=0),o+=this.size,this.finderPenaltyAddHistory(o,t),this.finderPenaltyCountPatterns(t)}finderPenaltyAddHistory(e,o){o[0]===0&&(e+=this.size),o.pop(),o.unshift(e)}}i.MIN_VERSION=1,i.MAX_VERSION=40,i.PENALTY_N1=3,i.PENALTY_N2=3,i.PENALTY_N3=40,i.PENALTY_N4=10,i.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],i.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],l.QrCode=i;function c(g,e,o){if(e<0||e>31||g>>>e)throw new RangeError("Value out of range");for(let t=e-1;t>=0;t--)o.push(g>>>t&1)}function m(g,e){return(g>>>e&1)!==0}class u{static makeBytes(e){const o=[];for(const t of e)c(t,8,o);return new u(u.Mode.BYTE,e.length,o)}static makeNumeric(e){if(!u.isNumeric(e))throw new RangeError("String contains non-numeric characters");const o=[];for(let t=0;t<e.length;){const n=Math.min(e.length-t,3);c(parseInt(e.substr(t,n),10),n*3+1,o),t+=n}return new u(u.Mode.NUMERIC,e.length,o)}static makeAlphanumeric(e){if(!u.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");const o=[];let t;for(t=0;t+2<=e.length;t+=2){let n=u.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t))*45;n+=u.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),c(n,11,o)}return t<e.length&&c(u.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,o),new u(u.Mode.ALPHANUMERIC,e.length,o)}static makeSegments(e){return e===""?[]:u.isNumeric(e)?[u.makeNumeric(e)]:u.isAlphanumeric(e)?[u.makeAlphanumeric(e)]:[u.makeBytes(u.toUtf8ByteArray(e))]}static makeEci(e){const o=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)c(e,8,o);else if(e<16384)c(2,2,o),c(e,14,o);else if(e<1e6)c(6,3,o),c(e,21,o);else throw new RangeError("ECI assignment value out of range");return new u(u.Mode.ECI,0,o)}static isNumeric(e){return u.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return u.ALPHANUMERIC_REGEX.test(e)}constructor(e,o,t){if(this.mode=e,this.numChars=o,this.bitData=t,o<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}getData(){return this.bitData.slice()}static getTotalBits(e,o){let t=0;for(const n of e){const s=n.mode.numCharCountBits(o);if(n.numChars>=1<<s)return 1/0;t+=4+s+n.bitData.length}return t}static toUtf8ByteArray(e){e=encodeURI(e);const o=[];for(let t=0;t<e.length;t++)e.charAt(t)!=="%"?o.push(e.charCodeAt(t)):(o.push(parseInt(e.substr(t+1,2),16)),t+=2);return o}}u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+./:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",l.QrSegment=u})(A||(A={}));(function(l){(function(i){class c{constructor(u,g){this.ordinal=u,this.formatBits=g}}c.LOW=new c(0,1),c.MEDIUM=new c(1,0),c.QUARTILE=new c(2,3),c.HIGH=new c(3,2),i.Ecc=c})(l.QrCode||(l.QrCode={}))})(A||(A={}));(function(l){(function(i){class c{constructor(u,g){this.modeBits=u,this.numBitsCharCount=g}numCharCountBits(u){return this.numBitsCharCount[Math.floor((u+7)/17)]}}c.NUMERIC=new c(1,[10,12,14]),c.ALPHANUMERIC=new c(2,[9,11,13]),c.BYTE=new c(4,[8,16,16]),c.KANJI=new c(8,[8,10,12]),c.ECI=new c(7,[0,0,0]),i.Mode=c})(l.QrSegment||(l.QrSegment={}))})(A||(A={}));const Oe={L:A.QrCode.Ecc.LOW,M:A.QrCode.Ecc.MEDIUM,Q:A.QrCode.Ecc.QUARTILE,H:A.QrCode.Ecc.HIGH},Te=Object.assign(Object.assign({},G.props),{value:String,color:{type:String,default:"#000"},backgroundColor:{type:String,default:"#FFF"},iconSrc:String,iconSize:{type:Number,default:40},iconBackgroundColor:{type:String,default:"#FFF"},iconBorderRadius:{type:Number,default:4},size:{type:Number,default:100},padding:{type:[Number,String],default:12},errorCorrectionLevel:{type:String,default:"M"},type:{type:String,default:"canvas"}}),J=2,Fe=se({name:"QrCode",props:Te,setup(l){const{mergedClsPrefixRef:i,inlineThemeDisabled:c}=ie(l),m=G("QrCode","-qr-code",xe,Le,l,i),u=X(()=>({"--n-border-radius":m.value.self.borderRadius})),g=c?re("qr-code",void 0,u,l):void 0,e=x(),o=X(()=>{var r;const a=Oe[l.errorCorrectionLevel];return A.QrCode.encodeText((r=l.value)!==null&&r!==void 0?r:"-",a)});ae(()=>{const r=x(0);let a=null;Q(()=>{l.type!=="svg"&&(r.value,t(o.value,l.size,l.color,l.backgroundColor,a?{icon:a,iconBorderRadius:l.iconBorderRadius,iconSize:l.iconSize,iconBackgroundColor:l.iconBackgroundColor}:null))}),Q(()=>{if(l.type==="svg")return;const{iconSrc:d}=l;if(d){let w=!1;const p=new Image;return p.src=d,p.onload=()=>{w||(a=p,r.value++)},()=>{w=!0}}})});function t(r,a,d,w,p){const h=e.value;if(!h)return;const v=a*J,C=r.size,N=v/C;h.width=v,h.height=v;const b=h.getContext("2d");if(b){b.clearRect(0,0,h.width,h.height);for(let _=0;_<r.size;_++)for(let I=0;I<r.size;I++){b.fillStyle=r.getModule(I,_)?d:w;const D=Math.floor(I*N),L=Math.ceil((I+1)*N),M=Math.floor(_*N),S=Math.ceil((_+1)*N);b.fillRect(D,M,L-D,S-M)}if(p){const{icon:_,iconBackgroundColor:I,iconBorderRadius:D,iconSize:L}=p,M=L*J,S=(h.width-M)/2,U=(h.height-M)/2;b.fillStyle=I,b.beginPath(),b.roundRect(S,U,M,M,D*J),b.fill();const O=_.width/_.height,W=O>=1?M:M*O,Z=O<=1?M:M/O,ce=S+(M-W)/2,de=U+(M-Z)/2;b.drawImage(_,ce,de,W,Z)}}}function n(r,a=0){const d=[];return r.forEach(function(w,p){let h=null;w.forEach(function(v,C){if(!v&&h!==null){d.push(`M${h+a} ${p+a}h${C-h}v1H${h+a}z`),h=null;return}if(C===w.length-1){if(!v)return;h===null?d.push(`M${C+a},${p+a} h1v1H${C+a}z`):d.push(`M${h+a},${p+a} h${C+1-h}v1H${h+a}z`);return}v&&h===null&&(h=C)})}),d.join("")}function s(r,a,d){const w=r.getModules(),p=w.length,h=w;let v="";const C=`<path fill="transparent" d="M0,0 h${p}v${p}H0z" shape-rendering="crispEdges"></path>`,N=`<path fill="${l.color}" d="${n(h,0)}" shape-rendering="crispEdges"></path>`;let b="";if(d){const{iconSrc:_,iconSize:I}=d,L=Math.floor(a*.1),M=p/a,S=(I||L)*M,U=(I||L)*M,O=w.length/2-U/2,W=w.length/2-S/2;b+=`<image href="${_}" width="${U}" height="${S}" x="${O}" y="${W}" preserveAspectRatio="none"></image>`}return v+=C,v+=N,v+=b,{innerHtml:v,numCells:p}}const f=X(()=>s(o.value,l.size,l.iconSrc?{iconSrc:l.iconSrc,iconBorderRadius:l.iconBorderRadius,iconSize:l.iconSize,iconBackgroundColor:l.iconBackgroundColor}:null));return{canvasRef:e,mergedClsPrefix:i,cssVars:c?void 0:u,themeClass:g==null?void 0:g.themeClass,svgInfo:f}},render(){const{mergedClsPrefix:l,backgroundColor:i,padding:c,cssVars:m,themeClass:u,size:g,type:e}=this;return B("div",{class:[`${l}-qr-code`,u],style:Object.assign({padding:typeof c=="number"?`${c}px`:c,backgroundColor:i,width:`${g}px`,height:`${g}px`},m)},e==="canvas"?B("canvas",{ref:"canvasRef",style:{width:`${g}px`,height:`${g}px`}}):B("svg",{height:g,width:g,viewBox:`0 0 ${this.svgInfo.numCells} ${this.svgInfo.numCells}`,role:"img",innerHTML:this.svgInfo.innerHtml}))}}),De={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ue=E("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",color:"currentColor"},[E("path",{d:"M22 13.49c-.275 4.243-3.613 7.623-7.805 7.9c-1.43.095-2.923.095-4.35 0a4.9 4.9 0 0 1-1.488-.339c-.513-.21-.77-.316-.9-.3c-.131.016-.32.155-.699.434c-.667.49-1.508.844-2.755.813c-.63-.015-.945-.023-1.086-.263s.034-.572.386-1.237c.487-.922.796-1.978.328-2.823c-.806-1.208-1.49-2.639-1.59-4.184a20 20 0 0 1 0-2.52c.274-4.243 3.613-7.622 7.804-7.9a33 33 0 0 1 2.676-.067M8.5 15h7m-7-5H12"}),E("path",{d:"M16.737 5.176v-1.39c0-.206.009-.414.083-.606c.195-.51.715-1.179 1.66-1.179c.944 0 1.484.669 1.68 1.18c.073.191.082.399.082.604v1.39M16.807 11h3.386c.997 0 1.805-.807 1.805-1.802V7.196c0-.995-.808-1.802-1.805-1.802h-3.386c-.997 0-1.805.807-1.805 1.802v2.001c0 .995.808 1.802 1.805 1.802"})],-1),He=[Ue];function Ye(l,i){return $(),F("svg",De,[...He])}const Ve={name:"hugeicons-message-lock01",render:Ye},je={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},We=E("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",color:"currentColor"},[E("path",{d:"M14.491 15.5h.009m-5 0h.009m-5.241 3.345c.225 1.67 1.608 2.979 3.292 3.056c1.416.065 2.855.099 4.44.099s3.024-.034 4.44-.1c1.684-.076 3.067-1.385 3.292-3.055c.147-1.09.268-2.207.268-3.345s-.121-2.255-.268-3.345c-.225-1.67-1.608-2.979-3.292-3.056A95 95 0 0 0 12 9c-1.585 0-3.024.034-4.44.1c-1.684.076-3.067 1.385-3.292 3.055C4.12 13.245 4 14.362 4 15.5s.121 2.255.268 3.345"}),E("path",{d:"M7.5 9V6.5a4.5 4.5 0 0 1 9 0V9"})],-1),Xe=[We];function Ge(l,i){return $(),F("svg",je,[...Xe])}const Ke={name:"hugeicons-square-lock-password",render:Ge},qe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Je=E("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",color:"currentColor"},[E("path",{d:"M5 9c0-3.3 0-4.95 1.025-5.975S8.7 2 12 2s4.95 0 5.975 1.025S19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975S15.3 22 12 22s-4.95 0-5.975-1.025S5 18.3 5 15zm6 10h2"}),E("path",{d:"m9 2l.089.534c.193 1.157.29 1.736.686 2.088C10.19 4.989 10.776 5 12 5s1.81-.01 2.225-.378c.397-.352.493-.93.686-2.088L15 2"})],-1),Ze=[Je];function Qe(l,i){return $(),F("svg",qe,[...Ze])}const et={name:"hugeicons-smart-phone01",render:Qe},le=l=>(be("data-v-07f5c57d"),l=l(),ye(),l),tt={class:"login-container"},ot={class:"login"},nt={class:"login-row-qr"},st={class:"login-qr"},it={key:1,style:{"text-align":"center",color:"lightgray"}},rt=le(()=>E("br",null,null,-1)),at={key:2},lt={class:"login-row-passwd"},ct={class:"login-passwd"},dt=le(()=>E("div",{style:{width:"100%"}},[E("div",{style:{"font-size":"1.5rem"}},"登录")],-1)),ut={class:"login-input-container"},ht={class:"login-input-container"},ft={__name:"login",setup(l){let i=fe(),c=ge(),m=x(""),u=x("等待扫码"),g,e=x(""),o=x(""),t=x("sms");ae(()=>{n()}),me(()=>{clearInterval(g)});async function n(){let a=await ve();a=a.data.data.unikey;let d=await pe(a);u.value="等待扫码",m.value=d.data.data.qrurl,g=setInterval(()=>{we(a).then(w=>{w.data.code==800&&(clearInterval(g),u.value="二维码已失效",n()),w.data.code==801&&(u.value="等待扫码"),w.data.code==802&&(u.value="正在授权"),w.data.code==803&&(u.value="授权成功",clearInterval(g),r(w.data.cookie))})},3e3)}async function s(){if(e.value.length!=11){j("请输入十一位国内号码");return}if(o.value=="")return;let a;if(t.value=="sms"){if(a=await _e(e.value,o.value),a.data.code!=200){j(JSON.stringify(a.data));return}a=await te(e.value,null,o.value)}t.value=="passwd"&&(a=await te(e.value,o.value)),a.data.code==200?r(a.data.cookie):j(JSON.stringify(a.data))}async function f(){if(e.value.length!=11){j("请输入十一位国内号码");return}let a;a=await Me(e.value),a.data.code==200?ee(a.data.message):j(JSON.stringify(a.data))}async function r(a){ee("登陆成功~"),i.updateByCookie(a),c.push({name:"account"})}return(a,d)=>{const w=et,p=Ie,h=Re,v=Ke,C=Ve,N=Ae,b=ze;return $(),F("div",tt,[E("div",ot,[E("div",nt,[E("div",st,[R(m)!=""?($(),Ce(R(Fe),{key:0,value:R(m),size:200},null,8,["value"])):q("",!0),R(m)==""?($(),F("span",it,[H("等待生成二维码"),rt,H("若长时间未生成 大概是炸了")])):q("",!0),R(m)!=""?($(),F("span",at,Ee(R(u)),1)):q("",!0)])]),E("div",lt,[E("div",ct,[dt,E("div",ut,[y(h,{value:R(e),"onUpdate:value":d[0]||(d[0]=_=>T(e)?e.value=_:e=_),class:"login-input",clearable:!0,placeholder:"请输入手机号"},{prefix:k(()=>[y(p,{size:"1.2rem"},{default:k(()=>[y(w)]),_:1})]),_:1},8,["value"])]),E("div",ht,[y(h,{value:R(o),"onUpdate:value":d[1]||(d[1]=_=>T(o)?o.value=_:o=_),class:"login-input",type:R(t)=="passwd"?"password":"text",placeholder:R(t)=="passwd"?"请输入密码":"请输入验证码"},{prefix:k(()=>[y(p,{size:"1.2rem"},{default:k(()=>[Y(y(v,null,null,512),[[V,R(t)=="passwd"]]),Y(y(C,null,null,512),[[V,R(t)=="sms"]])]),_:1})]),_:1},8,["value","type","placeholder"]),Y(y(N,{onClick:f},{default:k(()=>[H("获取验证码")]),_:1},512),[[V,R(t)=="sms"]])]),y(N,{style:{width:"100%"},onClick:s},{default:k(()=>[H("登录")]),_:1}),y(b,{class:"login-divider"},{default:k(()=>[H("或者")]),_:1}),E("div",null,[Y(y(p,{size:"1.5rem",class:"login-icon login-method-icon",onClick:d[2]||(d[2]=_=>{T(t)?t.value="passwd":t="passwd",T(o)?o.value="":o=""})},{default:k(()=>[y(v)]),_:1},512),[[V,R(t)!="passwd"]]),Y(y(p,{size:"1.5rem",class:"login-icon login-method-icon",onClick:d[3]||(d[3]=_=>{T(t)?t.value="sms":t="sms",T(o)?o.value="":o=""})},{default:k(()=>[y(C)]),_:1},512),[[V,R(t)!="sms"]])])])])])])}}},Ct=Ne(ft,[["__scopeId","data-v-07f5c57d"]]);export{Ct as default};

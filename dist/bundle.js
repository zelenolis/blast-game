(()=>{"use strict";var t={208:(t,n,e)=>{e.d(n,{A:()=>d});var o=e(601),r=e.n(o),c=e(314),i=e.n(c),l=e(417),a=e.n(l),f=new URL(e(824),e.b),s=i()(r()),u=a()(f);s.push([t.id,`@font-face {\n    font-family: 'Scary';\n    src: url(${u});\n}\n\nbody {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    background: #292c33;\n}\n\n#container {\n    margin: 0;\n    width: 90vw;\n    max-width: 1280px;\n    height: 90vh;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n#loading-message {\n    font-size: 48px;\n    color: white;\n    animation: blink 1s infinite;\n    text-align: center;\n    margin-top: 20%;\n  }\n  \n  @keyframes blink {\n    0% { opacity: 1; }\n    50% { opacity: 0; }\n    100% { opacity: 1; }\n  }`,""]);const d=s},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,c){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(i[a]=!0)}for(var f=0;f<t.length;f++){var s=[].concat(t[f]);o&&i[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},417:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var c={},i=[],l=0;l<t.length;l++){var a=t[l],f=o.base?a[0]+o.base:a[0],s=c[f]||0,u="".concat(f," ").concat(s);c[f]=s+1;var d=e(u),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var h=r(p,o);o.byIndex=l,n.splice(l,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var c=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<c.length;i++){var l=e(c[i]);n[l].references--}for(var a=o(t,r),f=0;f<c.length;f++){var s=e(c[f]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}c=a}}},659:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var c=e.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},824:(t,n,e)=>{t.exports=e.p+"d4787dc9133ee3dd5361.ttf"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var c=n[o]={id:o,exports:{}};return t[o](c,c.exports,e),c.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,e.nc=void 0,e.d({},{l:()=>Vt});var o=e(72),r=e.n(o),c=e(825),i=e.n(c),l=e(659),a=e.n(l),f=e(56),s=e.n(f),u=e(540),d=e.n(u),p=e(113),h=e.n(p),m=e(208),y={};y.styleTagTransform=h(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d(),r()(m.A,y),m.A&&m.A.locals&&m.A.locals;const g=e.p+"6a06472a4947d1b30841.jpg";function v(t){return t>700?70:t/10}const w="#292c33",b="white",x="#C76E00",S="Chartreuse",R="black",A=.15,I=.3;function M(){const t=.7*v(Yt);return[0+t,0+t,t,t]}function P(){return[0,0,Yt*I,zt*A]}function k(){return[Yt*I+10,30,Yt-2*Yt*I-20,zt*A-60]}function T(){return[Yt-Yt*I,0,Yt*I,zt*A]}function E(){if(Yt>zt||Yt+.3*Yt+40>zt){const t=.7*zt;return[(Yt-t)/2,.15*zt,t]}return[0,.15*zt,Yt]}function C(){const t=E();return[Yt*I+10,zt*A+t[2]+10,Yt-2*Yt*I-20,zt*A-20]}function $(){const t=E(),n=.7*v(Yt);return[0+n,zt*A*1.5+t[2]-10,n,n]}const q=[];class j{constructor(t,n,e){this.x=t,this.y=n,this.color=e}}function B(){do{q.length=0;for(let t=0;t<3;t++)for(let n=0;n<3;n++)q.push(new j(t,n,F()))}while(Ht())}function F(){return 20===1+Math.floor(20*Math.random())?0:1+Math.floor(5*Math.random())}const L=e.p+"297dc91e528692dcb2e1.png",N=e.p+"fb003ce54c04e708fcd5.png",O=e.p+"ff8429617fdb44b1b0ae.png",U=e.p+"e811d40009732ed5ad93.png",_=e.p+"93c78e7ce35612a09d39.png",H=e.p+"1f868d4b196c05260a7d.png",W=e.p+"9cc8c0de2259f3dadc5d.png",X=e.p+"8b6faa4615172405f96f.png",Y=e.p+"30915bbe78be66904368.png",z=e.p+"9eae5b09e98b934e75b7.png",D=e.p+"b4963b05a33e8968d1e1.png",G=e.p+"39f8f6f563247ac91c1b315e09cfc7bb.mp3",J=e.p+"e5a17785cab4e7936dd4e9ec51f702a0.mp3",Q=e.p+"87f5fe79939b040ada1b2076ffe2dc20.mp3",V=e.p+"18c05ed8a325484274ba14f1c1dc11fc.mp3",K=e.p+"a122acb35607ab6351141958db76a436.mp3",Z=e.p+"ea698daf2bffd6897e2d17116e04e6d5.mp3",tt=e.p+"e0b2db53d6284c9a520e917ed8fc7a5a.mp3",nt=new Audio(G);nt.volume=.5;const et=new Audio(J);et.volume=.5;const ot=new Audio(Q);ot.volume=.5;const rt=new Audio(V);rt.volume=.5;const ct=new Audio(K);ct.volume=.5;const it=new Audio(Z);it.volume=.5;const lt=new Audio(tt);lt.volume=.5;let at=!1;function ft(){at&&ct.play()}async function st(){at&&rt.play()}async function ut(){rt.pause(),rt.currentTime=0}function dt(){at=!at,at||ut()}function pt(){return at}const ht={1:L,2:N,3:O,4:U,5:_,6:H,7:W,8:X,0:Y};function mt(t,n,e){return new Promise((o=>{!function(t,n,e){Dt.fillStyle=w,Dt.fillRect(t,n,e,e)}(t,n,e);const r=new Image;r.src=z,r.onload=function(){Dt.drawImage(r,t,n,e,e),o()}}))}function yt(t,n,e){return new Promise((o=>{const r=vt(t,n),c=new Image;c.src=ht[e];let i=0;c.onload=function(){!function t(){const n=(r[2]-i)/2;Dt.fillStyle=w,Dt.fillRect(r[0],r[1],r[2],r[2]),Dt.drawImage(c,r[0]+n,r[1]+n,i,i),i+=10,i<r[2]?requestAnimationFrame(t):(Dt.fillRect(r[0],r[1],r[2],r[2]),Dt.drawImage(c,r[0],r[1],r[2],r[2]),at&&nt.play(),o())}()}}))}function gt(t,n,e,o){const r=vt(t,n),c=r[0],i=r[1],l=r[2];return async function(t,n,e,o,r){return new Promise((c=>{const i=new Image;i.src=ht[r];let l=0;i.onload=function(){!function r(){Dt.fillStyle=w,Dt.fillRect(t,n+l,e,e),Dt.drawImage(i,t,n+l,e,e),l>0&&Dt.fillRect(t,n,e,l),l+=15,l<=o?requestAnimationFrame(r):(Dt.fillStyle=w,Dt.fillRect(t,n+o,e,e),Dt.drawImage(i,t,n+o,e,e),c())}()}}))}(c,i,l,l*e,o)}function vt(t,n){const e=E(),o=e[2]/Math.sqrt(q.length);return[t*o+e[0],n*o+e[1],o]}function wt(t,n){return new Promise((e=>{const o=vt(t,n),r=new Image;r.src=D;let c=0;r.onload=function(){!function t(){const n=(o[2]-c)/2;Dt.fillStyle=w,Dt.fillRect(o[0],o[1],o[2],o[2]),Dt.drawImage(r,o[0]+n,o[1]+n,c,c),c+=10,c<o[2]?requestAnimationFrame(t):(Dt.fillRect(o[0],o[1],o[2],o[2]),e())}()}}))}function bt(t,n){const e=[];for(let o of t){let t=!1;for(let e of n)if(e.x===o.x&&e.y===o.y){t=!0;break}t||e.push({...o})}return e}const xt=e.p+"ea1debd134db3729aa95.png",St=e.p+"9a6b98da7d234e045f19.png",Rt={1:L,2:N,3:O,4:U,5:_,6:H,7:W,8:X,0:Y};function At(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;document.fonts.load('10pt "Scary"').then((()=>{const o=v(Yt)/1.5;Dt.font=`${o}px Scary`;const r=Dt.measureText(t).width,c=n[0]+(n[2]-r)/2,i=1+n[1]+(n[3]+o)/2;Dt.textAlign="start",Dt.textBaseline="bottom",Dt.fillStyle=e,Dt.fillText(t,c,i)}))}function It(){const t=E();Dt.fillStyle=w,Dt.fillRect(t[0],t[1],t[2],t[2]);for(let n of q)Mt(n,t)}function Mt(t,n){const e=n[2]/Math.sqrt(q.length),o=n[0]+t.x*e,r=n[1]+t.y*e,c=new Image;c.onload=function(){Dt.drawImage(c,o,r,e,e)},c.src=Rt[t.color]}function Pt(){const t=$();Dt.fillStyle=x,Dt.fillRect(t[0],t[1],t[2],t[2]);const n=new Image;n.src=pt()?xt:St,n.onload=function(){Dt.drawImage(n,t[0],t[1],t[2],t[2])}}let kt=0,Tt=0;function Et(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;const e=C();Dt.strokeStyle=t,Dt.fillStyle=t,Dt.beginPath(),Dt.roundRect(e[0],e[1],e[2],e[3],[10]),Dt.stroke(),Dt.fill(),At(`remix (${_t()})`,e,n)}let Ct=0,$t=0,qt=0;function jt(t){return new Promise((n=>{$t+=t,qt+=t;const e=Math.floor(10*Math.pow(1.5,Ct));!function(t,n){n>=t&&(Ct+=1,$t=0)}(e,$t),function(t,n){Ct>kt&&(kt=Ct,Tt=0,function(){const t=P();Dt.fillStyle=x,Dt.fillRect(t[0],t[1],t[2],t[3]),At(`'lvl. ${kt}`,t),Dt.fillStyle=w}()),async function(t,n){const e=k();Dt.fillStyle=w,Dt.strokeStyle=w,Dt.beginPath(),Dt.roundRect(e[0],e[1],e[2],e[3],[10]),Dt.stroke(),Dt.fill(),await function(t,n,e){return new Promise((o=>{!function r(){Dt.fillStyle=S,Dt.strokeStyle=S,Dt.beginPath(),Dt.roundRect(t[0],t[1],t[2]*(Tt/e),t[3],[10]),Dt.fill(),Tt+=1,Tt<n?requestAnimationFrame(r):(Tt=n,o())}()}))}(e,t,n)}(t,n),function(){const t=T();Dt.fillStyle=x,Dt.fillRect(t[0],t[1],t[2],t[3]),At(`scr ${qt}`,t),Dt.fillStyle=w}()}($t,e),n()}))}async function Bt(){const t=[];at&&lt.play();for(let n of q)t.push(wt(n.x,n.y));await Promise.all(t),B(),It(),await jt(q.length)}function Ft(t,n,e){const o=[],r=[{dx:1,dy:0},{dx:0,dy:1},{dx:-1,dy:0},{dx:0,dy:-1}];for(let c of r){const r=t+c.dx,i=n+c.dy,l=q.find((t=>t.x===r&&t.y===i));l&&l.color===e&&o.push(l)}return o}async function Lt(t,n){const e=q.find((e=>e.x===t&&e.y===n));if(!e)return;const o=[],r=[e],c=new Set([`${t},${n}`]);for(;r.length>0;){const t=r.shift();o.push(t);const n=Ft(t.x,t.y,e.color);for(let t of n){const n=`${t.x},${t.y}`;c.has(n)||(c.add(n),r.push(t))}}await async function(t,n){const e=[],o=E(),r=o[2]/Math.sqrt(n);for(let n of t)e.push(mt(n.x*r+o[0],n.y*r+o[1],r));await Promise.all(e)}(o,q.length),async function(t){for(let n=0;n<3;n++){const e=t.filter((t=>t.x===n));if(e.length>0){const t=q.filter((t=>t.x===n));await Nt(bt(t,e),n)}}await async function(){await new Promise((t=>{for(let n=0;n<q.length;n++){if(0===q[n].color)return void t(!1);if(Ft(q[n].x,q[n].y,q[n].color).length>0)return void t(!1)}Ot<1?t(!0):(ft(),Et(S,R),t(!1))}))&&(st(),function(){const t=[0,0,Yt,zt];Dt.globalAlpha=.5,Dt.fillStyle=w,Dt.fillRect(t[0],t[1],t[2],t[3]),At("GAME OVER",t,b),Dt.globalAlpha=1}(),Vt(),B(),kt=0,Tt=0,Ut())}()}(o)}async function Nt(t,n){const e=[];let o=0;const r=[];for(let n=2;n>=0;n--){let c=t.find((t=>t.y===n));c?(o>0&&r.push(gt(c.x,c.y,o,c.color)),c.y=n+o,e.push(c)):o++}await Promise.all(r),await jt(o),e.reverse(),await async function(t,n){const e=3-t.length;for(let o=0;o<e;o++){const e={x:n,y:o,color:F()};await yt(e.x,e.y,e.color),t.unshift(e)}var o;await(o=t,new Promise((t=>{for(let t of o)for(let n of q)t.x===n.x&&t.y===n.y&&t.color!==n.color&&(n.color=t.color);t()})))}(e,n)}let Ot=0;function Ut(){Ot=3}function _t(){return Ot}function Ht(){for(let t=0;t<q.length;t++)if(Ft(q[t].x,q[t].y,q[t].color).length>0)return!1;return ft(),!0}const Wt=document.getElementById("container"),Xt=document.createElement("canvas");Wt.appendChild(Xt);const Yt=Xt.width=Wt.offsetWidth,zt=Xt.height=Wt.offsetHeight,Dt=Xt.getContext("2d");function Gt(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;Dt.fillStyle=t,Dt.fillRect(0,0,Yt,zt)}function Jt(){const t=M();!function(t){Dt.fillStyle=w,Dt.fillRect(t[0],t[1],t[2],t[3],[10])}(t),Dt.strokeStyle=pt()?w:b,Dt.lineWidth=3,Dt.fillStyle=pt()?b:w,Dt.beginPath(),Dt.roundRect(t[0],t[1],t[2],t[3],[10]),Dt.stroke(),Dt.fill()}window.addEventListener("load",(function(){document.getElementById("loading-message").remove()}));let Qt="init";function Vt(){Qt="init"}!async function(){Gt(w),await new Promise((t=>{const n=new Image;n.onload=function(){Yt>zt?Dt.drawImage(n,0,zt-Yt,Yt,Yt):Dt.drawImage(n,0,0,zt,zt),t()},n.src=g})),function(){const t=M(),n=.7*v(Yt);document.fonts.load('10pt "Scary"').then((()=>{Dt.font=`${n}px Scary`,Dt.fillStyle=b,Dt.textAlign="left",Dt.textBaseline="top",Dt.fillText("Sound",t[0]+2*n,t[1]+6),Jt()}))}(),document.fonts.load('10pt "Scary"').then((()=>{Dt.font=`${v(Yt)}px Scary`,Dt.fillStyle=b,Dt.textAlign="center",Dt.fillText("click to start",Yt/2,zt-zt/2)})),Ut()}(),B(),Xt.addEventListener("click",(function(t){switch(Qt){case"init":if(function(t){const n=Xt.getBoundingClientRect(),e=t.clientX-n.left,o=t.clientY-n.top,r=M();return e>r[0]&&e<r[0]+r[2]&&o>r[1]&&o<r[1]+r[2]&&(dt(),st(),Jt(),!0)}(t))return;Gt(),function(){const t=E();Dt.fillStyle=w,Dt.fillRect(t[0],t[1],t[2],t[2]),function(){const t=P();Dt.fillStyle=x,Dt.fillRect(t[0],t[1],t[2],t[3]),At("lvl. 0",t)}(),function(){const t=k();Dt.fillStyle=w,Dt.strokeStyle=w,Dt.beginPath(),Dt.roundRect(t[0],t[1],t[2],t[3],[10]),Dt.stroke(),Dt.fill()}(),function(){const t=T();Dt.fillStyle=x,Dt.fillRect(t[0],t[1],t[2],t[3]),At("scr 0",t)}(),function(){const t=C();Dt.strokeStyle=w,Dt.fillStyle=w,Dt.beginPath(),Dt.roundRect(t[0],t[1],t[2],t[3],[10]),Dt.stroke(),Dt.fill(),At(`remix (${_t()})`,t)}(),Pt();for(let n of q)Mt(n,t)}(),ut(),at&&it.play(),Qt="game";break;case"game":!function(t){const n=Xt.getBoundingClientRect();!function(t,n){const e=E(),o=C(),r=$();if(t>r[0]&&t<r[0]+r[2]&&n>r[1]&&n<r[1]+r[2]&&(dt(),Pt()),t>e[0]&&t<e[0]+e[2]&&n>e[1]&&n<e[1]+e[2]&&function(t,n,e){const o=e[2]/Math.sqrt(q.length);!function(t,n){for(let e of q)if(e.x===t&&e.y===n){if(0===e.color)return void Bt();if(0===Ft(t,n,e.color).length)return void(at&&ot.play());Lt(t,n),at&&et.play()}}(Math.floor((t-e[0])/o),Math.floor((n-e[1])/o))}(t,n,e),t>o[0]&&t<o[0]+o[2]&&n>o[1]&&n<o[1]+o[3]){if(_t()<1)return;Ot-=1,function(){const t=q.map((t=>t.color));for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1)),o=t[n];t[n]=t[e],t[e]=o}q.forEach(((n,e)=>{n.color=t[e]}))}(),It(),Ht()?Et(S,R):Et()}}(t.clientX-n.left,t.clientY-n.top)}(t)}}))})();
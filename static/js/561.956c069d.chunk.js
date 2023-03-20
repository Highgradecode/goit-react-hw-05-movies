/*! For license information please see 561.956c069d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[561],{1256:function(e,t,r){r.d(t,{FL:function(){return s},JN:function(){return c},Pt:function(){return d},tx:function(){return l},zv:function(){return u}});var n=r(5861),a=r(4687),o=r.n(a),i=r(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"bfb089247bb1d6067836437ecb783621"};var c=function(){var e=(0,n.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/trending/movie/week");case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",console.log("Something was wrong: ".concat(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",console.log("Something was wrong: ".concat(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",console.log("Something was wrong: ".concat(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",console.log("Something was wrong: ".concat(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/search/movie",{params:{query:t}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",console.log("Something was wrong: ".concat(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},1561:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(9439),a=r(1256),o=r(2791),i=r(1087),c=r(7689),s=r(9142);function u(e,t,r){return(t=(0,s.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(){return p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)};var f,h=function(e){var t=e.animate,r=void 0===t||t,n=e.animateBegin,a=e.backgroundColor,i=void 0===a?"#f5f6f7":a,c=e.backgroundOpacity,s=void 0===c?1:c,u=e.baseUrl,l=void 0===u?"":u,d=e.children,f=e.foregroundColor,h=void 0===f?"#eee":f,g=e.foregroundOpacity,m=void 0===g?1:g,v=e.gradientRatio,b=void 0===v?2:v,x=e.gradientDirection,y=void 0===x?"left-right":x,w=e.uniqueKey,j=e.interval,O=void 0===j?.25:j,k=e.rtl,E=void 0!==k&&k,Z=e.speed,P=void 0===Z?1.2:Z,S=e.style,C=void 0===S?{}:S,_=e.title,N=void 0===_?"Loading...":_,U=e.beforeMask,D=void 0===U?null:U,F=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),L=w||Math.random().toString(36).substring(6),T=L+"-diff",B=L+"-animated-diff",R=L+"-aria",q=E?{transform:"scaleX(-1)"}:null,G="0; "+O+"; 1",M=P+"s",I="top-bottom"===y?"rotate(90)":void 0;return(0,o.createElement)("svg",p({"aria-labelledby":R,role:"img",style:p(p({},C),q)},F),N?(0,o.createElement)("title",{id:R},N):null,D&&(0,o.isValidElement)(D)?D:null,(0,o.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+T+")",style:{fill:"url("+l+"#"+B+")"}}),(0,o.createElement)("defs",null,(0,o.createElement)("clipPath",{id:T},d),(0,o.createElement)("linearGradient",{id:B,gradientTransform:I},(0,o.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:s},r&&(0,o.createElement)("animate",{attributeName:"offset",values:-b+"; "+-b+"; 1",keyTimes:G,dur:M,repeatCount:"indefinite",begin:n})),(0,o.createElement)("stop",{offset:"50%",stopColor:h,stopOpacity:m},r&&(0,o.createElement)("animate",{attributeName:"offset",values:-b/2+"; "+-b/2+"; "+(1+b/2),keyTimes:G,dur:M,repeatCount:"indefinite",begin:n})),(0,o.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:s},r&&(0,o.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+b),keyTimes:G,dur:M,repeatCount:"indefinite",begin:n})))))},g=function(e){return e.children?(0,o.createElement)(h,p({},e)):(0,o.createElement)(m,p({},e))},m=function(e){return(0,o.createElement)(g,p({viewBox:"0 0 476 124"},e),(0,o.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,o.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},v=g,b=r(184),x=function(e){return(0,b.jsxs)(v,d(d({speed:2,width:400,height:600,viewBox:"0 0 400 600",backgroundColor:"#2e6b32",foregroundColor:"#ecebeb"},e),{},{children:[(0,b.jsx)("rect",{x:"31",y:"3",rx:"5",ry:"5",width:"544",height:"388"}),(0,b.jsx)("rect",{x:"71",y:"405",rx:"5",ry:"5",width:"288",height:"32"}),(0,b.jsx)("rect",{x:"53",y:"456",rx:"5",ry:"5",width:"321",height:"101"}),(0,b.jsx)("rect",{x:"85",y:"571",rx:"10",ry:"10",width:"69",height:"21"}),(0,b.jsx)("rect",{x:"269",y:"571",rx:"10",ry:"10",width:"69",height:"21"})]}))},y=r(168),w=r(7402).default.div(f||(f=(0,y.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 16px;\n\n.button{\n    padding: 4px;\n    background-color: green;\n    width: 75px;\n    border: 1px solid black;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    color: white;\n\n    :hover,\n    :focus{\n        background-color: red;\n    }\n}\n\n.poster{\n    margin: 0 auto;\n}\n\n.user-score{\n    margin: 0 auto;\n}\n\nh2{\n    margin: 0 auto;\n}\n\n.genres{\n    margin: 0 auto;\n}\n\n.additional-info-buttons-list{\n    display: flex;\n    gap: 30px;\n    justify-content: space-evenly;\n}\n\n"]))),j=function(){var e=(0,c.UO)().movieId,t=(0,o.useState)(null),r=(0,n.Z)(t,2),s=r[0],u=r[1],l=(0,o.useState)(null),d=(0,n.Z)(l,2),p=d[0],f=d[1],h=(0,o.useState)(null),g=(0,n.Z)(h,2),m=g[0],v=g[1],y=(0,o.useState)(null),j=(0,n.Z)(y,2),O=j[0],k=j[1],E=(0,o.useState)(null),Z=(0,n.Z)(E,2),P=Z[0],S=Z[1],C=(0,o.useState)(null),_=(0,n.Z)(C,2),N=_[0],U=_[1],D=(0,o.useState)(!1),F=(0,n.Z)(D,2),L=F[0],T=F[1];(0,o.useEffect)((function(){(0,a.FL)(e).then((function(e){var t=e.title,r=e.overview,n=e.genres,a=e.poster_path,o=e.release_date,i=e.vote_average;u(t),f(r),v(n.map((function(e){return e.name})).join(", ")),k(a),S(new Date(o).getFullYear()),U((10*i).toFixed()+"%")})).catch((function(e){return console.log(e)})).finally((function(){return T(!0)}))}),[e]);var B=(0,c.TH)(),R=function(){return B.state?B.state.comeFromPage:null};return L?(0,b.jsxs)(w,{children:[R()&&(0,b.jsx)(i.rU,{className:"button",to:R(),children:"Go back"}),(0,b.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/original/".concat(O),width:400,height:545,alt:"".concat(s," poster")}),(0,b.jsx)("h2",{children:"".concat(s," (").concat(P,")")}),(0,b.jsxs)("p",{className:"user-score",children:["User score: ",(0,b.jsx)("span",{children:N})]}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:p}),(0,b.jsx)("h2",{children:"Genres"}),(0,b.jsx)("p",{className:"genres",children:m}),(0,b.jsx)("h2",{children:"Additional information"}),(0,b.jsxs)("ul",{className:"additional-info-buttons-list",children:[(0,b.jsx)("li",{children:(0,b.jsx)(i.rU,{className:"button",to:"/movies/".concat(e,"/cast"),state:{comeFromPage:R()},children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(i.rU,{className:"button",to:"/movies/".concat(e,"/reviews"),state:{comeFromPage:R()},children:"Reviews"})})]}),(0,b.jsx)(o.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(c.j3,{})})]}):(0,b.jsx)(x,{})}}}]);
//# sourceMappingURL=561.956c069d.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[472],{1256:function(n,r,t){t.d(r,{FL:function(){return i},JN:function(){return o},Pt:function(){return l},tx:function(){return p},zv:function(){return s}});var e=t(5861),a=t(4687),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"bfb089247bb1d6067836437ecb783621"};var o=function(){var n=(0,e.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/trending/movie/week");case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",console.log("Something was wrong: ".concat(n.t0)));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(r));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",console.log("Something was wrong: ".concat(n.t0)));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(r,"/credits"));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",console.log("Something was wrong: ".concat(n.t0)));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(r,"/reviews"));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",console.log("Something was wrong: ".concat(n.t0)));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/search/movie",{params:{query:r}});case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",console.log("Something was wrong: ".concat(n.t0)));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}()},1472:function(n,r,t){t.r(r),t.d(r,{default:function(){return h}});var e,a=t(3433),c=t(9439),u=t(7689),o=t(1256),i=t(2791),s=t(168),p=t(7402).default.li(e||(e=(0,s.Z)(["\ndisplay: flex;\nalign-items: center;\nwidth: 300px;\nmargin: 0 auto;\npadding: 16px;\nborder: 1px solid green;\nborder-radius: 10px;\n\nimg{\n    border-radius: 5px;\n    margin-right: 30px;\n}\n\n\n\n\n:not(:last-child){\n    margin-bottom: 16px;\n}\n"]))),l=t(184),f=function(n){var r=n.name,t=n.character,e=n.profile_path;return(0,l.jsxs)(p,{children:[(0,l.jsx)("img",{src:e&&"https://image.tmdb.org/t/p/original/".concat(e),width:100,height:150,alt:r}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:r}),(0,l.jsx)("p",{children:"Character: ".concat(t)})]})]})},h=function(){var n=(0,u.UO)().movieId,r=(0,i.useState)(null),t=(0,c.Z)(r,2),e=t[0],s=t[1],p=(0,i.useState)(null),h=(0,c.Z)(p,2),d=h[0],v=h[1];return(0,i.useEffect)((function(){(0,o.zv)(n).then((function(n){var r=n.cast;return r.length>0&&s((0,a.Z)(r))})).catch((function(n){return console.log(n)})).finally((function(){return!e&&v("Actors didn't find")}))}),[n]),e?(0,l.jsx)("ul",{children:e.map((function(n){var r=n.name,t=n.character,e=n.profile_path,a=n.id;return(0,l.jsx)(f,{name:r,character:t,profile_path:e},a)}))}):(0,l.jsx)("b",{children:d})}}}]);
//# sourceMappingURL=472.3847834e.chunk.js.map
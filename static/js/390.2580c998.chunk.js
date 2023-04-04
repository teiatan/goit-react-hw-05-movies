"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{390:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return u}});var r=e(439),c=e(791),o=e(689),a=e(172),i=e(368),s=e(184);function u(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],u=t[1],h=(0,o.UO)().movieID;return(0,c.useEffect)((function(){a.E.getMovieActors(h).then((function(n){var t=n.cast.map((function(n){return{name:n.name,character:n.character,id:n.credit_id,photo:n.profile_path}}));u(t)}))}),[h]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.H3,{className:"isHidden",children:"Actors"}),0===e.length?(0,s.jsx)(i.P,{children:"There is no information about actors"}):(0,s.jsx)(i.Ul,{children:e.map((function(n){return(0,s.jsxs)(i.Li,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{children:n.name}),(0,s.jsxs)("p",{children:["Character: ",n.character]})]}),(0,s.jsx)(i.E,{src:n.photo?"https://www.themoviedb.org/t/p/original/".concat(n.photo):"https://i.ibb.co/dPBdjhT/actor-plug.png",alt:n.name})]},n.id)}))})]})}},368:function(n,t,e){e.d(t,{E:function(){return h},H3:function(){return f},Li:function(){return l},P:function(){return v},Ul:function(){return p}});var r,c,o,a,i,s=e(168),u=e(934),h=u.Z.img(r||(r=(0,s.Z)(["\n    width: 100%;\n    border-radius: 20px;\n    margin-top: 10px;\n"]))),p=u.Z.ul(c||(c=(0,s.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 10px;\n"]))),l=u.Z.li(o||(o=(0,s.Z)(["\n    width: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 15px;\n    background-color: #ffd567;\n    border-radius: 20px;\n    //border: 10px solid pink;\n    margin-top: 20px;\n    text-align: center;\n"]))),f=u.Z.h3(a||(a=(0,s.Z)(["\n    color: rgb(20, 150, 144);\n    font-size: 40px;\n    text-align: center;\n    padding: 10px;\n"]))),v=u.Z.p(i||(i=(0,s.Z)(["\n   color: #1e2a06;\n   font-size: 40px;\n   text-align: center;\n   font-weight: 600;\n   margin: 30px;\n"])))},172:function(n,t,e){function r(n,t,e,r,c,o,a){try{var i=n[o](a),s=i.value}catch(u){return void e(u)}i.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var a=n.apply(t,e);function i(n){r(a,c,o,i,s,"next",n)}function s(n){r(a,c,o,i,s,"throw",n)}i(void 0)}))}}e.d(t,{E:function(){return h}});var o=e(671),a=e(144),i=e(687),s=e.n(i),u=function(){function n(){(0,o.Z)(this,n),this.apiKey="d31c9faeabd85b83726848cf0b50c5a1",this.baseUrl="https://api.themoviedb.org/3",this.mostPoularUrl="/trending/movie/day",this.byKeyWordUrl="/search/company",this.wholeMovieInformationUrl="/movie/",this.actorsUrl="/movies/",this.viewsUrl="/movie/"}return(0,a.Z)(n,[{key:"getMostPopularMovies",value:function(){var n=c(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=[],n.prev=1,n.next=4,fetch("".concat(this.baseUrl).concat(this.mostPoularUrl,"?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){t=n.results}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log("fetch error: ".concat(n.t0));case 9:return n.abrupt("return",t);case 11:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(){return n.apply(this,arguments)}}()},{key:"getMoviesByKeyWord",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(this.apiKey,"&query=").concat(t)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log("fetch error: ".concat(n.t0));case 9:return console.log(e),n.abrupt("return",e);case 12:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()},{key:"getWholeMovieInformation",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl).concat(this.wholeMovieInformationUrl).concat(t,"?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",e);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl).concat(this.wholeMovieInformationUrl).concat(t,"?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",e);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl,"/movie/").concat(t,"/reviews?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",e);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieActors",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl,"/movie/").concat(t,"/credits?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",e);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()}]),n}(),h=new u}}]);
//# sourceMappingURL=390.2580c998.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{545:function(n,e,t){t.d(e,{O:function(){return w}});var r,o,c,a,i,s,u=t(168),h=t(934),p=t(87),l=h.Z.h2(r||(r=(0,u.Z)(["\n    color: #1e2a06;\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 800;\n    font-size: 40px;\n"]))),f=(0,h.Z)(p.rU)(o||(o=(0,u.Z)(["\n\n"]))),v=h.Z.ul(c||(c=(0,u.Z)(["\n    display: flex;\n    flex-direction: column;\n    color: #1e2a06;\n\n    @media screen and (min-width: 768px) {\n        flex-direction: row;\n        justify-content: space-around;\n        flex-wrap: wrap;\n    }\n"]))),d=h.Z.li(a||(a=(0,u.Z)(["\n    width: 100%;\n    background-color: #ffd567;\n    border-radius: 20px;\n    padding: 20px;\n    box-sizing: border-box;\n    margin-top: 10px;\n    color: #1e2a06;\n    @media screen and (min-width: 768px) {\n        width: 375px;\n    }\n\n    @media screen and (min-width: 1200px) {\n        margin-top: 28px;\n    }\n"]))),x=h.Z.div(i||(i=(0,u.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n"]))),m=h.Z.img(s||(s=(0,u.Z)(["\n    border-radius: 20px;\n"]))),y=t(184);function w(n){var e=n.title,t=n.movies,r=n.goBack;return(0,y.jsxs)(y.Fragment,{children:[e&&(0,y.jsx)(l,{children:e}),(0,y.jsx)(v,{children:t.map((function(n){return(0,y.jsx)(d,{children:(0,y.jsxs)(f,{to:"/movies/".concat(n.id),state:{from:r},children:[(0,y.jsx)(m,{src:"https://www.themoviedb.org/t/p/original/".concat(n.poster_path),alt:n.title}),(0,y.jsxs)(x,{children:[(0,y.jsx)("h3",{children:n.title}),(0,y.jsx)("p",{children:n.release_date})]})]})},n.id)}))})]})}},415:function(n,e,t){t.r(e),t.d(e,{Home:function(){return s}});var r=t(439),o=t(791),c=t(545),a=t(172),i=t(184);function s(){var n=(0,o.useState)([]),e=(0,r.Z)(n,2),t=e[0],s=e[1];return(0,o.useEffect)((function(){a.E.getMostPopularMovies().then((function(n){return s(n)}))}),[]),(0,i.jsx)(c.O,{title:"Trending today",movies:t,goBack:"/"})}},172:function(n,e,t){function r(n,e,t,r,o,c,a){try{var i=n[c](a),s=i.value}catch(u){return void t(u)}i.done?e(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,c){var a=n.apply(e,t);function i(n){r(a,o,c,i,s,"next",n)}function s(n){r(a,o,c,i,s,"throw",n)}i(void 0)}))}}t.d(e,{E:function(){return h}});var c=t(671),a=t(144),i=t(687),s=t.n(i),u=function(){function n(){(0,c.Z)(this,n),this.apiKey="d31c9faeabd85b83726848cf0b50c5a1",this.baseUrl="https://api.themoviedb.org/3",this.mostPoularUrl="/trending/movie/day",this.byKeyWordUrl="/search/company",this.wholeMovieInformationUrl="/movie/",this.actorsUrl="/movies/",this.viewsUrl="/movie/"}return(0,a.Z)(n,[{key:"getMostPopularMovies",value:function(){var n=o(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[],n.prev=1,n.next=4,fetch("".concat(this.baseUrl).concat(this.mostPoularUrl,"?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){e=n.results}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log("fetch error: ".concat(n.t0));case 9:return n.abrupt("return",e);case 11:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(){return n.apply(this,arguments)}}()},{key:"getMoviesByKeyWord",value:function(){var n=o(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=null,n.prev=1,n.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(this.apiKey,"&query=").concat(e)).then((function(n){return n.json()})).then((function(n){return t=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log("fetch error: ".concat(n.t0));case 9:return console.log(t),n.abrupt("return",t);case 12:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(e){return n.apply(this,arguments)}}()},{key:"getWholeMovieInformation",value:function(){var n=o(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl).concat(this.wholeMovieInformationUrl).concat(e,"?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return t=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",t);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var n=o(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl).concat(this.wholeMovieInformationUrl).concat(e,"?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return t=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",t);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var n=o(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl,"/movie/").concat(e,"/reviews?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return t=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",t);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieActors",value:function(){var n=o(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl,"/movie/").concat(e,"/credits?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return t=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",t);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(e){return n.apply(this,arguments)}}()}]),n}(),h=new u}}]);
//# sourceMappingURL=415.0bee5426.chunk.js.map
(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],h=0,d=[];h<i.length;h++)o=i[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00a3":function(t,e,a){},"03e6":function(t,e,a){"use strict";var n=a("5251"),s=a.n(n);s.a},"0c19":function(t,e,a){},1922:function(t,e,a){"use strict";var n=a("80dd"),s=a.n(n);s.a},"1dea":function(t,e,a){},3866:function(t,e,a){"use strict";var n=a("1dea"),s=a.n(n);s.a},"456c":function(t,e,a){"use strict";var n=a("4c88"),s=a.n(n);s.a},"4c88":function(t,e,a){},5251:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Nutheader",{attrs:{brand:"Nutbed",user:t.username,urlBaseInit:t.urlBase},on:{updateUrlBase:t.handleUpdateUrlBase,dropToken:t.handleDropToken,getToken:t.handleGetToken,changeSource:t.handleChangeSource}}),a("Nutbody",{attrs:{source:t.username?t.source:"Home",urlBase:t.urlBase,token:t.token}})],1)},r=[],o=(a("96cf"),a("1da1")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nutheader"},[a("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v(t._s(t.brand))]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.handleClickSource}},[t._v("Home")])]),t.user?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.handleClickSource}},[t._v("Nrenvip")])]):t._e(),t.user?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.handleClickSource}},[t._v("Avzyz")])]):t._e(),t.user?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.handleClickSource}},[t._v("Sezyz")])]):t._e(),t.user?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.handleClickSource}},[t._v("Suduzyz")])]):t._e(),t.user?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.handleClickSource}},[t._v("Btos")])]):t._e()]),t.user?a("form",{staticClass:"form-inline my-1 my-xs-0"},[a("h5",[t._v("欢迎回来，"+t._s(t.user)+"！")]),a("button",{staticClass:"btn btn-outline-success my-2 my-xs-0",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.handleLogout(e)}}},[t._v("注销")])]):a("form",{staticClass:"form-inline my-1 my-xs-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.urlInput,expression:"urlInput"}],staticClass:"form-control mr-xs-2",attrs:{type:"text",placeholder:"source url","aria-label":"urlInput"},domProps:{value:t.urlInput},on:{input:function(e){e.target.composing||(t.urlInput=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control mr-xs-2",attrs:{type:"text",placeholder:"username","aria-label":"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control mr-xs-2",attrs:{type:"password",placeholder:"password","aria-label":"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("button",{staticClass:"btn btn-outline-success my-2 my-xs-0",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=(a("2ca0"),a("c5ec")),u=a.n(l),h={name:"Nutheader",props:{brand:String,user:String,urlBaseInit:String},watch:{urlBaseInit:function(t){this.urlInput=t}},data:function(){return{username:"",password:"",urlInput:""}},computed:{userUrl:function(){return this.urlBase+"/users"},loginUrl:function(){return this.userUrl+"/login"},urlBase:function(){var t=this.urlInput;return this.urlInput&&!this.urlInput.startsWith("http://")&&(t="http://"+t),t}},methods:{handleClickSource:function(t){var e=t.target.text;this.$emit("changeSource",e)},handleLogin:function(){var t=this;this.$emit("updateUrlBase",this.urlBase),this.username&&this.password&&u.a.post(this.loginUrl,{username:this.username,password:this.password}).then((function(e){e.success&&t.$emit("getToken",e.token)}))},handleLogout:function(){this.$emit("dropToken")}}},d=h,g=(a("7bd3"),a("2877")),p=Object(g["a"])(d,i,c,!1,null,"4150fb17",null),f=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nutbody"},[a(t.source,{tag:"component",attrs:{urlBase:t.urlBase,token:t.token}})],1)},m=[],k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"display-3"},[t._v("Nut,bed!")]),a("p",{staticClass:"lead"},[t._v("This is a private website, you will enjoy yourself here!")]),a("hr",{staticClass:"my-4"}),a("p",[t._v("It is easy to enjoy, pink website.")]),a("p",{staticClass:"lead"},[a("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"#",role:"button"}},[t._v("Learn more")])])])])}],_={name:"Home",props:{}},y=_,C=(a("86c9"),Object(g["a"])(y,k,b,!1,null,"7cec0ee0",null)),w=C.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nrenvip"},[a("button",{staticClass:"btn",on:{click:function(e){t.hidden=!t.hidden}}},[t._v("显示演员列表")]),a("Category",{attrs:{hidden:t.hidden,list:t.actors},on:{search:t.handleSearch}}),a("Info",{attrs:{keyword:t.keyword||"全部",page:t.page,totalPage:t.totalPage}}),a("Searcher",{on:{search:t.handleSearch}}),a("Pager",{attrs:{page:t.page,totalPage:t.totalPage},on:{changePage:t.handleChangePage}}),a("div",{staticClass:"container list"},[a("div",{staticClass:"row"},t._l(t.docs,(function(e,n){return a("div",{key:e.number,staticClass:"col-lg-3 col-md-4 col-sm-6 col-xs-12 card"},[a("h4",[t._v(t._s(n+1))]),a("img",{staticStyle:{width:"100%"},attrs:{src:t.imgUrl+e.number+"?token="+t.token}}),a("div",[t._v("演员："+t._s(e.name))]),a("div",[t._v("番号："+t._s(e.number))]),a("button",{staticClass:"btn btn-info",on:{click:function(e){return t.handleClickShowRes(n)}}},[t.showIndex==n?a("span",[t._v("收起资源")]):a("span",[t._v("显示资源("+t._s(e.resources.length||0)+")")])]),t.showIndex==n?a("div",{staticClass:"resources"},[a("ul",t._l(e.resources,(function(e,n){return a("li",{key:e.magnetlink},[a("h5",[t._v(t._s(n+1))]),a("div",[t._v("标题："+t._s(e.title))]),a("div",[t._v("类型："+t._s(e.type))]),a("div",[t._v("创建："+t._s(e.ctime))]),a("div",[t._v("大小："+t._s(e.filesize))]),a("div",[t._v("热度："+t._s(e.hot))]),a("div",[t._v("最近："+t._s(e.lastd))]),a("div",{staticClass:"link"},[t._v(" 磁力： "),a("a",{attrs:{href:e.magnetlink}},[t._v(t._s(e.magnetlink))])]),a("div",{staticClass:"link"},[t._v(" 迅雷： "),a("a",{attrs:{href:e.thunderlink}},[t._v(t._s(e.thunderlink))])])])})),0),a("button",{staticClass:"btn btn-info",on:{click:t.handleClickShowRes}},[t._v("收起资源")])]):t._e()])})),0)]),a("Searcher",{on:{search:t.handleSearch}}),a("Pager",{attrs:{page:t.page,totalPage:t.totalPage},on:{changePage:t.handleChangePage}}),a("Info",{attrs:{keyword:t.keyword||"全部",page:t.page,totalPage:t.totalPage}})],1)},S=[],x=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("h2",[t._v(" "+t._s(t.keyword)+":第"+t._s(t.page)+"页/共"+t._s(t.totalPage)+"页 ")])])}),I=[],B=(a("a9e3"),{name:"Info",props:{keyword:String,page:Number,totalPage:Number}}),U=B,T=(a("bbfc"),Object(g["a"])(U,x,I,!1,null,"571ec6ae",null)),z=T.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pager"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination pagination-sm justify-content-center"},[a("li",{staticClass:"page-item"},[t.page-1>0?a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.handleClickPage(t.page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])]):t._e()]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleClickPage(1)}}},[t._v("首")])]),t._l(t.pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:e==t.page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.handleClickPage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleClickPage(t.totalPage)}}},[t._v("尾")])]),a("li",{staticClass:"page-item"},[t.page+1<=t.totalPage?a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.handleClickPage(t.page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])]):t._e()])],2)]),a("div",{staticClass:"input-group mb-3 justify-content-center"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.gotoPage,expression:"gotoPage",modifiers:{number:!0}}],staticClass:"jump",attrs:{type:"number",placeholder:"goto page","aria-label":"goto page","aria-describedby":"basic-addon2"},domProps:{value:t.gotoPage},on:{input:function(e){e.target.composing||(t.gotoPage=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.handleClickJump}},[t._v("跳转")])])])])},O=[],$={name:"Pager",props:{page:Number,totalPage:Number},data:function(){return{gotoPage:0}},computed:{pages:function(){for(var t=[],e=this.page-2;e<=this.page+2;e++)e>0&&e<=this.totalPage&&t.push(e);return t}},methods:{handleClickPage:function(t){t!=this.page&&this.$emit("changePage",t)},handleClickJump:function(){this.gotoPage||(this.gotoPage=Math.floor(Math.random()*this.totalPage)+1),this.$emit("changePage",this.gotoPage),this.gotoPage=0}}},N=$,E=(a("8ca6"),Object(g["a"])(N,j,O,!1,null,"70299dc0",null)),M=E.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"searcher"},[a("div",{staticClass:"input-group mb-3 justify-content-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"jump",attrs:{type:"text",placeholder:"keyword","aria-label":"keyword","aria-describedby":"basic-addon2"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.handleClickSearch}},[t._v("搜索")])])])])},A=[],H={name:"Searcher",props:{},data:function(){return{keyword:""}},methods:{handleClickSearch:function(){this.$emit("search",this.keyword)}}},L=H,R=(a("1922"),Object(g["a"])(L,D,A,!1,null,"6047b68c",null)),G=R.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},[t.hidden?t._e():a("ul",t._l(t.list,(function(e){return a("li",{key:e},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.handleClickItem(e)}}},[t._v(t._s(e))])])})),0)])},q=[],W={name:"Category",props:{list:Array,hidden:Boolean},methods:{handleClickItem:function(t){this.$emit("search",t)}}},F=W,K=(a("89b2"),Object(g["a"])(F,J,q,!1,null,"3659d679",null)),Q=K.exports,V={name:"Nrenvip",components:{Info:z,Pager:M,Searcher:G,Category:Q},props:{urlBase:String,token:String},computed:{url:function(){return this.urlBase+"/nrenvip"},totalPage:function(){return Math.ceil(this.count/this.countPerPage)},actorUrl:function(){return this.url+"/actors"},countUrl:function(){return this.url+"/count"},imgUrl:function(){return this.url+"/img/"}},data:function(){return{count:0,keyword:"",page:1,countPerPage:12,docs:[],showIndex:null,actors:[],hidden:!0}},created:function(){this.getActors(),this.getCount(),this.getContent()},methods:{getActors:function(){var t=this;u.a.get(this.actorUrl,{token:this.token}).then((function(e){e.success&&(t.actors=e.actors)})).catch((function(t){window.console.log(t)}))},getCount:function(){var t=this;u.a.get("".concat(this.countUrl,"?keyword=").concat(this.keyword),{token:this.token}).then((function(e){e.success&&(t.count=e.count)})).catch((function(t){window.console.log(t)}))},getContent:function(){var t=this;u.a.get("".concat(this.url,"?keyword=").concat(this.keyword,"&page=").concat(this.page,"&countPerPage=").concat(this.countPerPage),{token:this.token}).then((function(e){e.success&&(t.docs=e.docs)})).catch((function(t){window.console.log(t)}))},handleClickShowRes:function(t){window.console.log(t),this.showIndex==t?this.showIndex=null:this.showIndex=t},handleChangePage:function(t){this.page=t,this.getContent(),window.scrollTo(0,0)},handleSearch:function(t){this.keyword=t,this.page=1,this.getCount(),this.getContent(),this.hidden=!0,window.scrollTo(0,0)}}},X=V,Y=(a("d12f"),Object(g["a"])(X,P,S,!1,null,"246d32a4",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"avzyz"},[a("Category",{attrs:{list:t.categories,hidden:!1},on:{search:t.handleSearch}}),a("Info",{attrs:{keyword:t.keyword||"全部",page:t.page,totalPage:t.totalPage}}),a("Searcher",{on:{search:t.handleSearch}}),a("Pager",{attrs:{page:t.page,totalPage:t.totalPage},on:{changePage:t.handleChangePage}}),a("div",{staticClass:"container list"},[a("div",{staticClass:"row"},t._l(t.docs,(function(e,n){return a("div",{key:e.title,staticClass:"col-lg-3 col-md-4 col-sm-6 col-xs-12 card"},[a("h4",[t._v(t._s(n+1))]),a("img",{staticStyle:{width:"100%"},attrs:{src:t.imgUrl+e.title+"?token="+t.token}}),a("div",[t._v("【标题】："+t._s(e.title))]),a("div",[t._v("【分类】："+t._s(e.category))]),a("div",[t._v("【时间】："+t._s(e.updatetime))]),a("div",[t._v(" 【简介】： "),a("span",{domProps:{innerHTML:t._s(e.intro.replace("<img","<img class=img-fluid"))}})]),a("div",{staticClass:"cut"},[t._v(" 【xflink】： "),a("ul",t._l(e.xfurl,(function(e,n){return a("li",{key:e},[a("a",{attrs:{href:e}},[t._v(t._s(n+1)+"."+t._s(e))])])})),0)])])})),0)]),a("Searcher",{on:{search:t.handleSearch}}),a("Pager",{attrs:{page:t.page,totalPage:t.totalPage},on:{changePage:t.handleChangePage}}),a("Info",{attrs:{keyword:t.keyword||"全部",page:t.page,totalPage:t.totalPage}})],1)},et=[],at={name:"Avzyz",props:{urlBase:String,token:String},components:{Category:Q,Info:z,Searcher:G,Pager:M},data:function(){return{count:0,keyword:"",page:1,countPerPage:12,docs:[],categories:[]}},computed:{url:function(){return this.urlBase+"/avzyz"},totalPage:function(){return Math.ceil(this.count/this.countPerPage)},categoryUrl:function(){return this.url+"/category"},countUrl:function(){return this.url+"/count"},imgUrl:function(){return this.url+"/img/"}},created:function(){this.getCategories(),this.getCount(),this.getContent()},methods:{getCategories:function(){var t=this;u.a.get(this.categoryUrl,{token:this.token}).then((function(e){e.success&&(t.categories=e.categories)})).catch((function(t){window.console.log(t)}))},getCount:function(){var t=this;u.a.get("".concat(this.countUrl,"?keyword=").concat(this.keyword),{token:this.token}).then((function(e){e.success&&(t.count=e.count)})).catch((function(t){window.console.log(t)}))},getContent:function(){var t=this;u.a.get("".concat(this.url,"?keyword=").concat(this.keyword,"&page=").concat(this.page,"&countPerPage=").concat(this.countPerPage),{token:this.token}).then((function(e){e.success&&(t.docs=e.docs)})).catch((function(t){window.console.log(t)}))},handleSearch:function(t){this.keyword=t,this.page=1,this.getCount(),this.getContent(),window.scrollTo(0,0)},handleChangePage:function(t){this.page=t,this.getContent(),window.scrollTo(0,0)}}},nt=at,st=(a("97c2"),Object(g["a"])(nt,tt,et,!1,null,"839c695a",null)),rt=st.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sezyz"},[a("Category",{attrs:{list:t.categories,hidden:!1},on:{search:t.handleSearch}}),a("Info",{attrs:{keyword:t.keyword||"全部",page:t.page,totalPage:t.totalPage}}),a("Searcher",{on:{search:t.handleSearch}}),a("Pager",{attrs:{page:t.page,totalPage:t.totalPage},on:{changePage:t.handleChangePage}}),a("div",{staticClass:"container list"},[a("div",{staticClass:"row"},t._l(t.docs,(function(e,n){return a("div",{key:e.title,staticClass:"col-lg-3 col-md-4 col-sm-6 col-xs-12 card"},[a("h4",[t._v(t._s(n+1))]),a("img",{staticStyle:{width:"100%"},attrs:{src:t.imgUrl+e.title+"?token="+t.token}}),a("div",[t._v("【标题】："+t._s(e.title))]),a("div",[t._v("【分类】："+t._s(e.category))]),a("div",[t._v("【时间】："+t._s(e.updatetime))]),a("div",[t._v(" 【简介】： "),a("span",{domProps:{innerHTML:t._s(e.intro.replace("<img","<img class=img-fluid"))}})]),a("div",{staticClass:"cut"},[t._v(" 【xflink】： "),a("ul",t._l(e.xfurl,(function(e,n){return a("li",{key:e},[a("a",{attrs:{href:e}},[t._v(t._s(n+1)+"."+t._s(e))])])})),0)])])})),0)]),a("Searcher",{on:{search:t.handleSearch}}),a("Pager",{attrs:{page:t.page,totalPage:t.totalPage},on:{changePage:t.handleChangePage}}),a("Info",{attrs:{keyword:t.keyword||"全部",page:t.page,totalPage:t.totalPage}})],1)},it=[],ct={name:"Sezyz",props:{urlBase:String,token:String},components:{Category:Q,Info:z,Searcher:G,Pager:M},data:function(){return{count:0,keyword:"",page:1,countPerPage:12,docs:[],categories:[]}},computed:{url:function(){return this.urlBase+"/sezyz"},totalPage:function(){return Math.ceil(this.count/this.countPerPage)},categoryUrl:function(){return this.url+"/category"},countUrl:function(){return this.url+"/count"},imgUrl:function(){return this.url+"/img/"}},created:function(){this.getCategories(),this.getCount(),this.getContent()},methods:{getCategories:function(){var t=this;u.a.get(this.categoryUrl,{token:this.token}).then((function(e){e.success&&(t.categories=e.categories)})).catch((function(t){window.console.log(t)}))},getCount:function(){var t=this;u.a.get("".concat(this.countUrl,"?keyword=").concat(this.keyword),{token:this.token}).then((function(e){e.success&&(t.count=e.count)})).catch((function(t){window.console.log(t)}))},getContent:function(){var t=this;u.a.get("".concat(this.url,"?keyword=").concat(this.keyword,"&page=").concat(this.page,"&countPerPage=").concat(this.countPerPage),{token:this.token}).then((function(e){e.success&&(t.docs=e.docs)})).catch((function(t){window.console.log(t)}))},handleSearch:function(t){this.keyword=t,this.page=1,this.getCount(),this.getContent(),window.scrollTo(0,0)},handleChangePage:function(t){this.page=t,this.getContent(),window.scrollTo(0,0)}}},lt=ct,ut=(a("3866"),Object(g["a"])(lt,ot,it,!1,null,"3a853753",null)),ht=ut.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suduzyz"},[a("Category",{attrs:{list:t.categories,hidden:!1},on:{search:t.handleSearch}}),a("Info",{attrs:{keyword:t.keyword||"全部",page:t.page,totalPage:t.totalPage}}),a("Searcher",{on:{search:t.handleSearch}}),a("Pager",{attrs:{page:t.page,totalPage:t.totalPage},on:{changePage:t.handleChangePage}}),a("div",{staticClass:"container list"},[a("div",{staticClass:"row"},t._l(t.docs,(function(e,n){return a("div",{key:e.title,staticClass:"col-lg-3 col-md-4 col-sm-6 col-xs-12 card"},[a("h4",[t._v(t._s(n+1))]),a("img",{staticStyle:{width:"100%"},attrs:{src:t.imgUrl+e.title+"?token="+t.token}}),a("div",[t._v("【标题】："+t._s(e.title))]),a("div",[t._v("【分类】："+t._s(e.category))]),a("div",[t._v("【时间】："+t._s(e.updatetime))]),a("div",[t._v(" 【简介】： "),a("span",{domProps:{innerHTML:t._s(e.intro.replace("<img","<img class=img-fluid"))}})]),a("div",{staticClass:"cut"},[t._v(" 【xflink】： "),a("ul",t._l(e.xfurl,(function(e,n){return a("li",{key:e},[a("a",{attrs:{href:e}},[t._v(t._s(n+1)+"."+t._s(e))])])})),0)])])})),0)]),a("Searcher",{on:{search:t.handleSearch}}),a("Pager",{attrs:{page:t.page,totalPage:t.totalPage},on:{changePage:t.handleChangePage}}),a("Info",{attrs:{keyword:t.keyword||"全部",page:t.page,totalPage:t.totalPage}})],1)},gt=[],pt={name:"Suduzyz",props:{urlBase:String,token:String},components:{Category:Q,Info:z,Searcher:G,Pager:M},data:function(){return{count:0,keyword:"",page:1,countPerPage:12,docs:[],categories:[]}},computed:{url:function(){return this.urlBase+"/suduzyz"},totalPage:function(){return Math.ceil(this.count/this.countPerPage)},categoryUrl:function(){return this.url+"/category"},countUrl:function(){return this.url+"/count"},imgUrl:function(){return this.url+"/img/"}},created:function(){this.getCategories(),this.getCount(),this.getContent()},methods:{getCategories:function(){var t=this;u.a.get(this.categoryUrl,{token:this.token}).then((function(e){e.success&&(t.categories=e.categories)})).catch((function(t){window.console.log(t)}))},getCount:function(){var t=this;u.a.get("".concat(this.countUrl,"?keyword=").concat(this.keyword),{token:this.token}).then((function(e){e.success&&(t.count=e.count)})).catch((function(t){window.console.log(t)}))},getContent:function(){var t=this;u.a.get("".concat(this.url,"?keyword=").concat(this.keyword,"&page=").concat(this.page,"&countPerPage=").concat(this.countPerPage),{token:this.token}).then((function(e){e.success&&(t.docs=e.docs)})).catch((function(t){window.console.log(t)}))},handleSearch:function(t){this.keyword=t,this.page=1,this.getCount(),this.getContent(),window.scrollTo(0,0)},handleChangePage:function(t){this.page=t,this.getContent(),window.scrollTo(0,0)}}},ft=pt,vt=(a("456c"),Object(g["a"])(ft,dt,gt,!1,null,"5cc2fdda",null)),mt=vt.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btos",staticStyle:{"text-align":"center"}},[a("h1",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{target:"_blank",href:"https://bt-lib.com/"}},[t._v("BT库")])]),a("form",{attrs:{action:"https://btos.pw/search",target:"_blank"}},[a("label",{attrs:{for:"btos"}},[t._v("Btos:")]),a("input",{attrs:{id:"btos",name:"keyword",type:"text"}}),a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"submit"}},[t._v("Search")])]),a("form",{attrs:{action:"https://www.tnbt1.xyz/search",method:"get",target:"_blank"}},[a("label",{attrs:{for:"tnbt"}},[t._v("鸵鸟BT:")]),a("input",{attrs:{id:"tnbt",type:"text",name:"k"}}),a("input",{attrs:{type:"hidden",name:"source",value:"种子搜"}}),a("input",{attrs:{type:"hidden",name:"s",value:"time"}}),a("input",{attrs:{type:"hidden",name:"p",value:"1"}}),a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"submit"}},[t._v("Search")])]),a("form",{attrs:{id:"search-form",action:"http://www.sobt5.pw/",method:"post"}},[a("label",{attrs:{for:"sobt"}},[t._v("SOBT:")]),a("input",{attrs:{type:"text",id:"sobt",name:"q",autocomplete:"off"}}),a("input",{staticClass:"btn btn-success btn-sm",attrs:{type:"submit",id:"btnSearch",value:"Search"}})]),a("form",{attrs:{method:"POST",action:"https://www.ccl.monster/search",target:"_blank"}},[a("label",{attrs:{for:"btcar"}},[t._v("BT-Car:")]),a("select",{staticClass:"select",attrs:{name:"searchType"}},[a("option",{attrs:{value:"0"}},[t._v("模糊搜索")]),a("option",{attrs:{value:"1"}},[t._v("精准搜索")])]),a("input",{attrs:{id:"btcar",name:"key",type:"text",placeholder:"电影、电视剧、动漫、文档、软件，什么都有...",value:""}}),a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"submit"}},[t._v("Search")])]),a("form",{attrs:{method:"POST",action:"https://g69.monster/search",target:"_blank"}},[a("label",[t._v("磁力银行：")]),a("input",{attrs:{name:"key",type:"search",placeholder:"ACG、电影、电视剧、软件，应有尽有...",value:""}}),a("select",{attrs:{name:"searchType"}},[a("option",{attrs:{value:"0"}},[t._v("模糊搜索")]),a("option",{attrs:{value:"1"}},[t._v("精准搜索")])]),a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"submit"}},[t._v("搜索")])]),a("form",{attrs:{method:"POST",action:"https://4r5.xyz/search",target:"_blank"}},[a("label",{attrs:{for:"exampleInputName1"}},[t._v("磁力火：")]),a("input",{attrs:{type:"text",name:"key",id:"exampleInputName1",placeholder:"最火的电影、电视剧、游戏全在这里..."}}),a("select",{staticClass:"demo-default",attrs:{id:"select-category",name:"searchType"}},[a("option",{attrs:{value:"0"}},[t._v("模糊搜索")]),a("option",{attrs:{value:"1"}},[t._v("精准搜索")])]),a("input",{staticClass:"btn btn-success btn-sm",attrs:{type:"submit",id:"submit",name:"send",value:"搜索"}})]),a("form",{attrs:{method:"POST",action:"https://heer.monster/search",target:"_blank"}},[a("label",[t._v("磁力王国：")]),a("input",{attrs:{name:"key",type:"search",placeholder:"ACG、电影、电视剧、软件，应有尽有..."}}),a("select",{attrs:{name:"searchType"}},[a("option",{attrs:{value:"0"}},[t._v("模糊搜索")]),a("option",{attrs:{value:"1"}},[t._v("精准搜索")])]),a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"submit"}},[t._v("搜一搜")])])])}],_t={name:"Btos",props:{},components:{},data:function(){return{}},computed:{},created:function(){},methods:{}},yt=_t,Ct=(a("03e6"),Object(g["a"])(yt,kt,bt,!1,null,"68846787",null)),wt=Ct.exports,Pt={name:"Nutbody",props:{source:String,urlBase:String,token:String},components:{Home:w,Nrenvip:Z,Avzyz:rt,Sezyz:ht,Suduzyz:mt,Btos:wt},data:function(){return{}}},St=Pt,xt=(a("6ddd"),Object(g["a"])(St,v,m,!1,null,"bbe0abba",null)),It=xt.exports,Bt=a("7ba3"),Ut=a.n(Bt),Tt={name:"app",components:{Nutheader:f,Nutbody:It},data:function(){return{source:"Home",token:"",username:"",urlBase:""}},computed:{userUrl:function(){return this.urlBase+"/users"}},watch:{token:function(){this.getUsername()}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ut.a.getItem("token").then((function(t){e.token=t||""}));case 2:return t.next=4,Ut.a.getItem("urlBase").then((function(t){e.urlBase=t||""}));case 4:return t.next=6,this.getUsername();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getUsername:function(){var t=this;u.a.get(this.userUrl,{token:this.token}).then((function(e){e.success?t.username=e.username:t.username=""}))},handleChangeSource:function(t){this.source=t},handleGetToken:function(t){this.token=t,Ut.a.setItem("token",this.token)},handleDropToken:function(){this.token="",Ut.a.setItem("token",this.token)},handleUpdateUrlBase:function(t){this.urlBase=t,Ut.a.setItem("urlBase",this.urlBase)}}},zt=Tt,jt=Object(g["a"])(zt,s,r,!1,null,null,null),Ot=jt.exports;a("ab8b"),a("3e48");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Ot)}}).$mount("#app")},5949:function(t,e,a){},"6be8":function(t,e,a){},"6d59":function(t,e,a){},"6ddd":function(t,e,a){"use strict";var n=a("c680"),s=a.n(n);s.a},"7bd3":function(t,e,a){"use strict";var n=a("5949"),s=a.n(n);s.a},"80dd":function(t,e,a){},"86c9":function(t,e,a){"use strict";var n=a("884e"),s=a.n(n);s.a},"884e":function(t,e,a){},"89b2":function(t,e,a){"use strict";var n=a("6d59"),s=a.n(n);s.a},"8ca6":function(t,e,a){"use strict";var n=a("0c19"),s=a.n(n);s.a},"95db":function(t,e,a){},"97c2":function(t,e,a){"use strict";var n=a("00a3"),s=a.n(n);s.a},bbfc:function(t,e,a){"use strict";var n=a("95db"),s=a.n(n);s.a},c680:function(t,e,a){},d12f:function(t,e,a){"use strict";var n=a("6be8"),s=a.n(n);s.a}});
//# sourceMappingURL=app.5e41ca60.js.map
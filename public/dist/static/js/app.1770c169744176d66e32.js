webpackJsonp([13],{"09yM":function(e,n){},J7SL:function(e,n){},N9P1:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("briU");var o=t("kV13"),a=(t("I29D"),{name:"App",components:{},mounted:function(){document.getElementById("loader").style.display="none"}}),r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var u=t("C7Lr")(a,r,!1,function(e){t("J7SL")},null,null).exports,i=t("YaEn"),c=t("c2Ch"),l=t("48sp");o.default.use(l.a);var m=new l.a.Store({state:{username:"",token:"",auth:""},mutations:{getUsername:function(e,n){e.username=n,localStorage.setItem("username",n)},getToken:function(e,n){(new Date).getTime();e.token=n.token,e.username=n.username,e.auth=n.auth,localStorage.setItem("token",n.token),localStorage.setItem("username",n.username),localStorage.setItem("auth",n.auth)},deleteToken:function(e,n){e.token="",e.username=null,e.auth=null,localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("auth")}}}),s=t("TcQY"),d=t.n(s);t("09yM"),t("N9P1");function h(){var e=document.documentElement.clientWidth||document.body.clientWidth;console.log("屏幕宽度："+e),document.getElementsByTagName("html")[0].style.fontSize=e/20+"px"}o.default.config.productionTip=!1,o.default.prototype.$api=c.b,o.default.use(l.a),o.default.use(d.a),h(),window.onresize=function(){h()},Object(c.c)("valid").then(function(e){return!!e.token||(localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("auth"),!1)}),localStorage.token&&localStorage.username&&(m.state.token=localStorage.token,m.state.username=localStorage.username),i.a.beforeEach(function(e,n,t){e.meta.requireAuth?localStorage.getItem("token")?t():t({path:"/login",query:{redirect:e.fullPath}}):t()});var f=new o.default({router:i.a,store:m,render:function(e){return e(u)}}).$mount("#app");window.App=f;n.default=f},YaEn:function(e,n,t){"use strict";var o=t("kV13"),a=t("5inH"),r=t("IHPB"),u=t.n(r),i=[{path:"/home",redirect:"/home/about",name:"问卷管理",icon:"el-icon-document",component:function(){return t.e(1).then(t.bind(null,"26dS"))},meta:{requireAuth:!0},children:[{path:"about",name:"about",component:function(){return t.e(4).then(t.bind(null,"FBzZ"))},meta:{requireAuth:!0},auth:1,hidden:!0},{path:"list",name:"问卷列表",icon:"el-icon-reading",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"80bi"))},auth:1,meta:{requireAuth:!0}},{path:"create",name:"新建问卷",icon:"el-icon-document-add",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"Kimp"))},auth:1,meta:{requireAuth:!0}},{path:"/edit/:id",name:"编辑问卷",hidden:!0,auth:1,icon:"el-icon-document-add",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"yTGp"))},meta:{requireAuth:!0}}]}],c=[{path:"",redirect:"/home/user",name:"用户管理",icon:"el-icon-user",component:function(){return t.e(1).then(t.bind(null,"26dS"))},meta:{requireAuth:!0},children:[{path:"user",name:"用户列表",icon:"el-icon-user",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"Ql5M"))},meta:{requireAuth:!0},auth:2},{path:"edit",name:"修改密码",icon:"el-icon-reading",auth:1,component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"oekV"))},meta:{requireAuth:!0}}]}],l=[{path:"/",name:"index",meta:{requireAuth:!0},hidden:!0,redirect:"/home"},{path:"/login",name:"login",hidden:!0,component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"Quw4"))}},{path:"/register",name:"登陆",hidden:!0,component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"c2lw"))}},{path:"/naire/:id",name:"问卷调查",hidden:!0,component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"PDza"))}}].concat(u()(i),u()(c),[{path:"*",component:function(){return t.e(6).then(t.bind(null,"+H76"))},name:"404",hidden:!0}]);o.default.use(a.a);var m=new a.a({routes:l,scrollBehavior:function(){return{y:0}},linkActiveClass:"router-active"});n.a=m},c2Ch:function(e,n,t){"use strict";n.c=function(e,n){return new a.a(function(t,o){s.get(e,{params:n}).then(function(e){t(e.data)}).catch(function(e){o(e.data)})})},n.d=function(e,n){return new a.a(function(t,o){s.post(e,c.a.stringify(n)).then(function(e){t(e.data)}).catch(function(e){o(e.data)})})},n.e=function(e,n){return new a.a(function(t,o){s.put(e,c.a.stringify(n)).then(function(e){t(e.data)}).catch(function(e){o(e.data)})})},n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s({method:"delete",url:e,params:n})};var o=t("rVsN"),a=t.n(o),r=t("I29D"),u=t.n(r),i=t("atmG"),c=t.n(i),l=t("YaEn"),m={baseURL:baseURL||"",timeout:1e4,crossDomain:!0,validateStatus:function(e){return e>=200&&e<510}},s=u.a.create(m);s.interceptors.request.use(function(e){return localStorage.token&&(e.headers.Authorization="token "+localStorage.token),e},function(e){return a.a.reject(e)}),s.interceptors.response.use(function(e){return 403==e.status&&(localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("auth"),alert("登录失效,请重新登录"),l.a.push("/login")),e},function(e){return console.log(e),e.response&&e.response.status,a.a.reject(e.response.data)}),n.b=s}},["NHnr"]);
//# sourceMappingURL=app.1770c169744176d66e32.js.map
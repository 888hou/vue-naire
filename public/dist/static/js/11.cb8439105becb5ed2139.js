webpackJsonp([11],{"5Crz":function(t,e){},Ql5M:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("lC5x"),r=a.n(n),o=a("J0Oq"),l=a.n(o),s=a("c2Ch"),c=a("0aFO"),i={data:function(){return{tableData:[],loading:!0}},methods:{getUsers:function(){var t=this;return l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.c)("/admin/user").then(function(e){console.log(e),t.tableData=e,t.loading=!1});case 2:case"end":return e.stop()}},e,t)}))()},modifyStatus:function(t){var e=this;return l()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,a.next=3,Object(s.e)("/admin/user/"+t).then(function(t){0==t.error_code&&setTimeout(function(){e.loading=!1,Object(c.b)("修改状态成功")},500)});case 3:case"end":return a.stop()}},a,e)}))()}},created:function(){var t=this;return l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.getUsers();case 1:case"end":return e.stop()}},e,t)}))()}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"a_username",label:"用户名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"注册时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"last_login_time",label:"最后登录时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"last_login_ip",label:"最后登录IP"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"正常","inactive-text":"封禁"},on:{change:function(a){return t.modifyStatus(e.row.id)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])})],1)],1)},staticRenderFns:[]};var d=a("C7Lr")(i,u,!1,function(t){a("5Crz")},null,null);e.default=d.exports}});
//# sourceMappingURL=11.cb8439105becb5ed2139.js.map
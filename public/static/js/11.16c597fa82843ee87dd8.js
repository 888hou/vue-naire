webpackJsonp([11],{oekV:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("0aFO"),a=r("c2Ch"),s={data:function(){return{form:{a_username:"ausername"}}},methods:{submit:function(){return this.form.a_password&&this.form.checkword?this.form.a_password!=this.form.checkword?Object(o.a)("两次输入不一致"):void Object(a.e)("/pwd",this.form).then(function(e){return e.msg?Object(o.b)(e.msg):Object(o.a)(e)}):Object(o.a)("不能为空")}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"新密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.a_password,callback:function(t){e.$set(e.form,"a_password",t)},expression:"form.a_password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.checkword,callback:function(t){e.$set(e.form,"checkword",t)},expression:"form.checkword"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确认")])],1)],1)],1)},staticRenderFns:[]};var n=r("C7Lr")(s,c,!1,function(e){r("uJCU")},"data-v-1f37f35c",null);t.default=n.exports},uJCU:function(e,t){}});
//# sourceMappingURL=11.16c597fa82843ee87dd8.js.map
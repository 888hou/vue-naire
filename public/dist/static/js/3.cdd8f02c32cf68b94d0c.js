webpackJsonp([3],{"+U5k":function(t,e){},NYHD:function(t,e,n){"use strict";var a=n("R77U"),r=n.n(a),i=n("eImN");var o=function(t){n("+U5k")},c=n("C7Lr")(r.a,i.a,!1,o,"data-v-049cdb1a",null);e.default=c.exports},PDza:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lC5x"),r=n.n(a),i=n("J0Oq"),o=n.n(i),c=n("c2Ch"),s=n("0aFO"),u={components:{thanks:n("NYHD").default},data:function(){return{filled:!1,n_id:"",dataArr:"",questions:"",options:[],selectData:[],answer:[],checkData:[],loading:!0,dData:[],single:[],multiple:[]}},methods:{getQuestion:function(t){var e=this;return o()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.c)("/naire/"+t).then(function(t){return console.log(t),t?0==t.n_status?(Object(s.a)("该问卷已截止"),void e.$router.push("/home/list")):(e.dataArr=t,e.questions=t.questions,void(e.loading=!1)):(Object(s.a)("没有找到此问卷"),void e.$router.push("/*"))});case 2:case"end":return n.stop()}},n,e)}))()},submit:function(){var t=this;return o()(r.a.mark(function e(){var n,a,i,o,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.selectData.filter(function(t){return t}),a=t.checkData.filter(function(t){return t}),i=[],console.log(t.checkData),t.checkData.forEach(function(t,e){i.push(t.q_id)}),o=!0,t.dData.forEach(function(t,e){-1===i.indexOf(t)&&(o=!1)}),console.log(o),!(n.length<t.single.length)&&o){e.next=10;break}return e.abrupt("return",Object(s.a)("请完整填写再提交"));case 10:return u=[],(u=n.concat(a)).forEach(function(e,n){e.o_id=e.id,e.n_id=t.n_id,delete e.id}),console.log(u),e.next=16,Object(c.d)("/naire/answer",u).then(function(e){0===!e.error_code&&Object(s.b)("内部错误"),Object(s.b)("提交成功"),t.filled=!0}).catch(function(t){Object(s.a)(t)});case 16:case"end":return e.stop()}},e,t)}))()},duoxuan:function(){var t=this;this.questions.forEach(function(e,n){"多选"==e.q_type&&(t.multiple.push(e),t.dData.push(e.id)),"单选"==e.q_type&&t.single.push(e)})},status:function(t){0==t&&(Object(s.a)("该问卷已截止"),this.$router.push("/home/list"))},removeEmpty:function(t){var e=[];return t.map(function(t,n){""!==t&&void 0!=t&&e.push(t)}),e}},computed:{singleNum:function(){return this.questions.forEach(function(t,e){"单选"==t.q_type&&1}),0},multipleNum:function(){return this.questions.forEach(function(t,e){"多选"==t.q_type&&1}),0}},created:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.n_id=t.$route.params.id,e.next=3,t.getQuestion(t.$route.params.id);case 3:t.duoxuan(),console.log(t.single);case 5:case"end":return e.stop()}},e,t)}))()},mounted:function(){}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.filled?n("thanks"):n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"container"},[n("div",{staticClass:"title"},[t._v("\n    "+t._s(t.dataArr.n_title)+"\n  ")]),t._v(" "),n("div",{staticClass:"main"},t._l(t.questions,function(e,a){return n("div",{staticClass:"item"},[n("p",[1==e.q_isrequire?n("span",{staticStyle:{color:"red"}},[t._v("*")]):t._e(),t._v(t._s(a+1)+"."+t._s(e.q_content)+"\n        "),n("span",{staticStyle:{color:"f6f6f6!important"}},[t._v("("+t._s(e.q_type)+")")])]),t._v(" "),"单选"==e.q_type?n("el-radio-group",{ref:"radioM",refInFor:!0,model:{value:t.selectData[a],callback:function(e){t.$set(t.selectData,a,e)},expression:"selectData[i]"}},t._l(e.option,function(e,a){return n("div",{staticClass:"opt"},[n("el-radio",{attrs:{label:e}},[t._v(t._s(e.o_value))])],1)}),0):t._e(),t._v(" "),"多选"==e.q_type?n("el-checkbox-group",{ref:"checkbox"+e._id,refInFor:!0,model:{value:t.checkData,callback:function(e){t.checkData=e},expression:"checkData"}},t._l(e.option,function(e,a){return n("div",[n("el-checkbox",{attrs:{label:e}},[t._v(t._s(e.o_value))])],1)}),0):t._e()],1)}),0),t._v(" "),n("el-button",{attrs:{type:"primary",round:""},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)},staticRenderFns:[]};var d=n("C7Lr")(u,l,!1,function(t){n("lrp+")},"data-v-caaad722",null);e.default=d.exports},R77U:function(t,e){},eImN:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",[this._v("感谢参与调查  ^_^")]),this._v(" "),e("div",[e("router-link",{attrs:{to:"/"}},[this._v("\n        去后台\n      ")])],1)])},staticRenderFns:[]};e.a=a},"lrp+":function(t,e){}});
//# sourceMappingURL=3.cdd8f02c32cf68b94d0c.js.map
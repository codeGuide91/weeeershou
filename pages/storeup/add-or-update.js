(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/storeup/add-or-update"],{"24db":function(e,t,r){"use strict";r.r(t);var n=r("af2c"),i=r("5486");for(var u in i)"default"!==u&&function(e){r.d(t,e,(function(){return i[e]}))}(u);r("d30f");var a,o=r("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"61f97bb1",null,!1,n["a"],a);t["default"]=s.exports},4094:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,i,u,a){try{var o=e[u](a),s=o.value}catch(c){return void r(c)}o.done?t(s):Promise.resolve(s).then(n,i)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){u(a,n,i,o,s,"next",e)}function s(e){u(a,n,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("bab1"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{ruleForm:{userid:"",refid:"",tablename:"",name:"",picture:""},user:{},ro:{userid:!1,refid:!1,tablename:!1,name:!1,picture:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=a(n.default.mark((function t(r){var i,u,a,o;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(u=t.sent,this.user=u.data,this.ruleForm.userid=e.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!r.id){t.next=13;break}return this.ruleForm.id=r.id,t.next=11,this.$api.info("storeup",this.ruleForm.id);case 11:u=t.sent,this.ruleForm=u.data;case 13:if(!r.cross){t.next=40;break}a=e.getStorageSync("crossObj"),t.t0=n.default.keys(a);case 16:if((t.t1=t.t0()).done){t.next=40;break}if(o=t.t1.value,"userid"!=o){t.next=22;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,t.abrupt("continue",16);case 22:if("refid"!=o){t.next=26;break}return this.ruleForm.refid=a[o],this.ro.refid=!0,t.abrupt("continue",16);case 26:if("tablename"!=o){t.next=30;break}return this.ruleForm.tablename=a[o],this.ro.tablename=!0,t.abrupt("continue",16);case 30:if("name"!=o){t.next=34;break}return this.ruleForm.name=a[o],this.ro.name=!0,t.abrupt("continue",16);case 34:if("picture"!=o){t.next=38;break}return this.ruleForm.picture=a[o],this.ro.picture=!0,t.abrupt("continue",16);case 38:t.next=16;break;case 40:this.styleChange();case 41:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.userid){e.next=3;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(this.ruleForm.name){e.next=6;break}return this.$utils.msg("收藏名称不能为空"),e.abrupt("return");case 6:if(this.ruleForm.picture){e.next=9;break}return this.$utils.msg("收藏图片不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("storeup",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("storeup",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,r("543d")["default"])},5486:function(e,t,r){"use strict";r.r(t);var n=r("4094"),i=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t["default"]=i.a},"62f8":function(e,t,r){},af2c:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement;e._self._c},u=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return n}))},c716:function(e,t,r){"use strict";(function(e){r("7495"),r("921b");n(r("66fd"));var t=n(r("24db"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},d30f:function(e,t,r){"use strict";var n=r("62f8"),i=r.n(n);i.a}},[["c716","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"232a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){getApp();console.log(this);var t=this.StatusBar,n=this.CustomBar,e=this.bgImage,a="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&(a="".concat(a,"background-image:url(").concat(e,");")),a}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){if(getCurrentPages().length<2&&"undefined"!==typeof __wxConfig){var n="/"+__wxConfig.pages[0];return t.redirectTo({url:n})}t.navigateBack({delta:1})}}};n.default=e}).call(this,e("543d")["default"])},"798c":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"96eb":function(t,n,e){"use strict";e.r(n);var a=e("798c"),u=e("d161");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);var o,c=e("f0c5"),i=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=i.exports},d161:function(t,n,e){"use strict";e.r(n);var a=e("232a"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("96eb"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);

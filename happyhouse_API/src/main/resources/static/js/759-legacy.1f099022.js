"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[759],{44759:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"bv-example-row mt-3"},[a("b-row",[a("b-col",[a("b-alert",{attrs:{show:""}},[a("h3",{staticStyle:{"font-family":"'GowunDodum-Regular'"}},[e._v("글목록")])])],1)],1),a("b-row",[a("b-col",[a("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("삭제처리중...")])],1)],1)],1)},n=[],o=a(75748),s={name:"NoticeDelete",created:function(){var e=this;o.Z["delete"]("/noticeboard/".concat(this.$route.params.articleno)).then((function(t){var a=t.data,r="삭제 처리시 문제가 발생했습니다.";"success"===a&&(r="삭제가 완료되었습니다."),alert(r),e.$router.push({name:"NoticeHome"})}))}},c=s,l=a(1001),u=(0,l.Z)(c,r,n,!1,null,null,null),i=u.exports}}]);
//# sourceMappingURL=759-legacy.1f099022.js.map
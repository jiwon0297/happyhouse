"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[178],{7178:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("h2",{staticStyle:{"text-align":"center","font-family":"'GowunDodum-Regular'"}},[t._v(" 공지사항 ")]),i("hr"),i("div",{staticStyle:{"text-align":"left"}},[i("md-button",{staticClass:"md-success md-simple",staticStyle:{border:"1px solid","text-align":"left"},attrs:{variant:"success"},on:{click:t.listArticle}},[t._v("목록")])],1)]),i("div",{staticStyle:{width:"100%"},attrs:{id:"nav-tabs"}},[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-100"},[i("nav-tabs-card",{attrs:{"no-label":""}},[i("template",{slot:"content"},[i("h3",{staticStyle:{color:"black","font-weight":"bold","font-family":"'GowunDodum-Regular'"}},[t._v(" [공지] "+t._s(t.article.subject)+" ")]),i("p",{staticStyle:{color:"gray","text-align":"right"}},[t._v(" "+t._s(t.article.userid)+" "+t._s(t.article.regtime)+" ")]),i("hr"),i("p",{staticStyle:{"font-size":"15pt"}},[t._v(t._s(t.article.content))]),t.article.savefile?i("div",{staticStyle:{width:"50%",margin:"auto"}},[i("img",{attrs:{src:t.article.savefile}})]):t._e()])],2)],1)])]),i("div",[i("div",{staticStyle:{"text-align":"center"}},["admin"===t.userInfo.userid?i("md-button",{staticClass:"md-default md-simple",staticStyle:{border:"1px solid","margin-right":"1rem"},attrs:{variant:"default"},on:{click:t.moveModifyArticle}},[t._v(" 수정 ")]):t._e(),"admin"===t.userInfo.userid?i("md-button",{staticClass:"md-danger md-simple",staticStyle:{border:"1px solid"},attrs:{variant:"danger"},on:{click:t.deleteArticle}},[t._v(" 삭제 ")]):t._e()],1)])])},r=[],s=i(5748),l=i(480),c=i(4665),n={name:"NoticeDetail",data(){return{article:{}}},components:{NavTabsCard:l.ZN},computed:{...(0,c.rn)(["isLogin","userInfo"]),message(){return this.article.content?this.article.content.split("\n").join("<br>"):""}},created(){s.Z.get(`/noticeboard/${this.$route.params.articleno}`).then((({data:t})=>{this.article=t}))},methods:{listArticle(){this.$router.push({name:"NoticeHome"})},moveModifyArticle(){this.$router.replace({name:"NoticeModify",params:{articleno:this.article.articleno}})},deleteArticle(){confirm("정말로 삭제하시겠습니까?")&&this.$router.replace({name:"NoticeDelete",params:{articleno:this.article.articleno}})}}},o=n,d=i(1001),u=(0,d.Z)(o,a,r,!1,null,null,null),m=u.exports}}]);
//# sourceMappingURL=178.8ecb4004.js.map
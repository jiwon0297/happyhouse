"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[63],{38063:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticStyle:{"text-align":"center"}},[t._v("답변작성")]),i("hr"),i("br"),i("QnAInputItem",{attrs:{type:"qna"}})],1)},r=[],a=i(37547),n={name:"QnAAnswer",components:{QnAInputItem:a.Z}},c=n,o=i(1001),l=(0,o.Z)(c,s,r,!1,null,null,null),u=l.exports},37547:function(t,e,i){i.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-100"},[i("form",{on:{submit:t.onSubmit,reset:t.onReset}},[i("md-field",[i("md-input",{attrs:{type:"hidden",id:"userid",disabled:"",required:"",placeholder:"작성자"},model:{value:t.article.userid,callback:function(e){t.$set(t.article,"userid",e)},expression:"article.userid"}})],1),i("md-field",[i("md-input",{attrs:{id:"subject",type:"text",required:"",placeholder:"제목을 입력하세요."},model:{value:t.article.subject,callback:function(e){t.$set(t.article,"subject",e)},expression:"article.subject"}})],1),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.content,expression:"article.content"}],staticStyle:{"border-color":"lightgray","border-radius":"5px",width:"100%"},attrs:{placeholder:"내용을 입력하세요.",rows:"20",id:"content"},domProps:{value:t.article.content},on:{input:function(e){e.target.composing||t.$set(t.article,"content",e.target.value)}}}),i("div",{staticStyle:{"text-align":"center"}},["register"===this.type?i("md-button",{staticClass:"md-success md-simple",staticStyle:{"margin-top":"22px",border:"1px solid"},attrs:{type:"submit",variant:"success"}},[t._v("작성")]):"qna"===this.type?i("md-button",{staticClass:"md-success md-simple",staticStyle:{"margin-top":"22px",border:"1px solid"},attrs:{type:"submit",variant:"success"}},[t._v("답변등록")]):i("md-button",{staticClass:"md-success md-simple",staticStyle:{"margin-top":"22px",border:"1px solid"},attrs:{type:"submit",variant:"success"}},[t._v("수정")]),i("md-button",{staticClass:"md-default md-simple",staticStyle:{"margin-top":"22px",border:"1px solid","margin-left":"1rem"},attrs:{type:"reset",variant:"default"}},[t._v("취소")])],1)],1)])])])},r=[],a=i(4367),n=i(75748),c=i(34665),o={name:"QnAInputItem",data:function(){return{article:{articleno:0,userid:"",subject:"",content:"",parentno:0}}},props:{type:{type:String}},computed:(0,a.Z)({},(0,c.rn)(["isLogin","userInfo"])),created:function(){var t=this;this.article.userid=this.userInfo.userid,"modify"===this.type?n.Z.get("/qnaboard/".concat(this.$route.params.articleno)).then((function(e){var i=e.data;t.article=i})):"qna"===this.type&&(this.article.parentno=this.$route.params.articleno)},methods:{onSubmit:function(t){t.preventDefault();var e=!0,i="";!this.article.userid&&(i="작성자 입력해주세요",e=!1,this.$refs.userid.focus()),e&&!this.article.subject&&(i="제목 입력해주세요",e=!1,this.$refs.subject.focus()),e&&!this.article.content&&(i="내용 입력해주세요",e=!1,this.$refs.content.focus()),e?"register"===this.type?this.registArticle():"qna"===this.type?this.qnaArticle():this.modifyArticle():alert(i)},onReset:function(t){t.preventDefault(),this.article.articleno=0,this.article.subject="",this.article.content="",this.$router.push({name:"QnAHome"})},registArticle:function(){var t=this;n.Z.post("/qnaboard",{userid:this.article.userid,subject:this.article.subject,content:this.article.content,parentno:0}).then((function(e){var i=e.data,s="등록 처리시 문제가 발생했습니다.";"success"===i&&(s="등록이 완료되었습니다."),alert(s),t.moveList()}))},qnaArticle:function(){var t=this;n.Z.post("/qnaboard",{userid:this.article.userid,subject:this.article.subject,content:this.article.content,parentno:this.article.parentno}).then((function(e){var i=e.data,s="등록 처리시 문제가 발생했습니다.";"success"===i&&(s="등록이 완료되었습니다."),alert(s),t.moveList()}))},modifyArticle:function(){var t=this;n.Z.put("/qnaboard/".concat(this.article.articleno),{articleno:this.article.articleno,userid:this.article.userid,subject:this.article.subject,content:this.article.content}).then((function(e){var i=e.data,s="수정 처리시 문제가 발생했습니다.";"success"===i&&(s="수정이 완료되었습니다."),alert(s),0===t.article.parentno?t.$router.push({name:"QnADetail",params:{articleno:t.article.articleno}}):t.$router.push({name:"QnADetail",params:{articleno:t.article.parentno}})}))},moveList:function(){this.$router.push({name:"QnAHome"})}}},l=o,u=i(1001),d=(0,u.Z)(l,s,r,!1,null,null,null),p=d.exports}}]);
//# sourceMappingURL=63-legacy.15dc02f8.js.map
"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[386],{3386:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",{staticStyle:{"text-align":"center"}},[t._v("글작성")]),s("hr"),s("br"),s("QnAInputItem",{attrs:{type:"register"}})],1)},r=[],a=s(7547),n={name:"QnAWrite",components:{QnAInputItem:a.Z}},c=n,l=s(1001),o=(0,l.Z)(c,i,r,!1,null,null,null),u=o.exports},7547:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"md-layout"},[s("div",{staticClass:"md-layout-item md-size-100"},[s("form",{on:{submit:t.onSubmit,reset:t.onReset}},[s("md-field",[s("md-input",{attrs:{type:"hidden",id:"userid",disabled:"",required:"",placeholder:"작성자"},model:{value:t.article.userid,callback:function(e){t.$set(t.article,"userid",e)},expression:"article.userid"}})],1),s("md-field",[s("md-input",{attrs:{id:"subject",type:"text",required:"",placeholder:"제목을 입력하세요."},model:{value:t.article.subject,callback:function(e){t.$set(t.article,"subject",e)},expression:"article.subject"}})],1),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.content,expression:"article.content"}],staticStyle:{"border-color":"lightgray","border-radius":"5px",width:"100%"},attrs:{placeholder:"내용을 입력하세요.",rows:"20",id:"content"},domProps:{value:t.article.content},on:{input:function(e){e.target.composing||t.$set(t.article,"content",e.target.value)}}}),s("div",{staticStyle:{"text-align":"center"}},["register"===this.type?s("md-button",{staticClass:"md-success md-simple",staticStyle:{"margin-top":"22px",border:"1px solid"},attrs:{type:"submit",variant:"success"}},[t._v("작성")]):"qna"===this.type?s("md-button",{staticClass:"md-success md-simple",staticStyle:{"margin-top":"22px",border:"1px solid"},attrs:{type:"submit",variant:"success"}},[t._v("답변등록")]):s("md-button",{staticClass:"md-success md-simple",staticStyle:{"margin-top":"22px",border:"1px solid"},attrs:{type:"submit",variant:"success"}},[t._v("수정")]),s("md-button",{staticClass:"md-default md-simple",staticStyle:{"margin-top":"22px",border:"1px solid","margin-left":"1rem"},attrs:{type:"reset",variant:"default"}},[t._v("취소")])],1)],1)])])])},r=[],a=s(5748),n=s(4665),c={name:"QnAInputItem",data(){return{article:{articleno:0,userid:"",subject:"",content:"",parentno:0}}},props:{type:{type:String}},computed:{...(0,n.rn)(["isLogin","userInfo"])},created(){this.article.userid=this.userInfo.userid,"modify"===this.type?a.Z.get(`/qnaboard/${this.$route.params.articleno}`).then((({data:t})=>{this.article=t})):"qna"===this.type&&(this.article.parentno=this.$route.params.articleno)},methods:{onSubmit(t){t.preventDefault();let e=!0,s="";!this.article.userid&&(s="작성자 입력해주세요",e=!1,this.$refs.userid.focus()),e&&!this.article.subject&&(s="제목 입력해주세요",e=!1,this.$refs.subject.focus()),e&&!this.article.content&&(s="내용 입력해주세요",e=!1,this.$refs.content.focus()),e?"register"===this.type?this.registArticle():"qna"===this.type?this.qnaArticle():this.modifyArticle():alert(s)},onReset(t){t.preventDefault(),this.article.articleno=0,this.article.subject="",this.article.content="",this.$router.push({name:"QnAHome"})},registArticle(){a.Z.post("/qnaboard",{userid:this.article.userid,subject:this.article.subject,content:this.article.content,parentno:0}).then((({data:t})=>{let e="등록 처리시 문제가 발생했습니다.";"success"===t&&(e="등록이 완료되었습니다."),alert(e),this.moveList()}))},qnaArticle(){a.Z.post("/qnaboard",{userid:this.article.userid,subject:this.article.subject,content:this.article.content,parentno:this.article.parentno}).then((({data:t})=>{let e="등록 처리시 문제가 발생했습니다.";"success"===t&&(e="등록이 완료되었습니다."),alert(e),this.moveList()}))},modifyArticle(){a.Z.put(`/qnaboard/${this.article.articleno}`,{articleno:this.article.articleno,userid:this.article.userid,subject:this.article.subject,content:this.article.content}).then((({data:t})=>{let e="수정 처리시 문제가 발생했습니다.";"success"===t&&(e="수정이 완료되었습니다."),alert(e),0===this.article.parentno?this.$router.push({name:"QnADetail",params:{articleno:this.article.articleno}}):this.$router.push({name:"QnADetail",params:{articleno:this.article.parentno}})}))},moveList(){this.$router.push({name:"QnAHome"})}}},l=c,o=s(1001),u=(0,o.Z)(l,i,r,!1,null,null,null),d=u.exports}}]);
//# sourceMappingURL=386.8c38e515.js.map
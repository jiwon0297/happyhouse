"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[134],{58134:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticStyle:{"text-align":"center"}},[t._v("글수정")]),i("hr"),i("br"),i("CommInputItem",{attrs:{type:"modify"}})],1)},r=[],a=i(70158),n={name:"CommModify",components:{CommInputItem:a.Z}},c=n,l=i(1001),o=(0,l.Z)(c,s,r,!1,null,null,null),u=o.exports},70158:function(t,e,i){i.d(e,{Z:function(){return m}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-100"},[i("form",{on:{submit:t.onSubmit,reset:t.onReset}},[i("md-field",[i("md-input",{attrs:{type:"hidden",id:"userid",disabled:"",required:"",placeholder:"작성자"},model:{value:t.article.userid,callback:function(e){t.$set(t.article,"userid",e)},expression:"article.userid"}})],1),i("md-field",[i("md-input",{attrs:{id:"subject",type:"text",required:"",placeholder:"제목을 입력하세요."},model:{value:t.article.subject,callback:function(e){t.$set(t.article,"subject",e)},expression:"article.subject"}})],1),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.content,expression:"article.content"}],staticStyle:{"border-color":"lightgray","border-radius":"5px",width:"100%"},attrs:{placeholder:"내용을 입력하세요.",rows:"20",id:"content"},domProps:{value:t.article.content},on:{input:function(e){e.target.composing||t.$set(t.article,"content",e.target.value)}}}),i("div",[i("button",{staticStyle:{border:"1px solid","margin-left":"1rem",color:"gray","background-color":"white","border-radius":"7px","margin-right":"4px","margin-top":"1px"},attrs:{type:"button"},on:{click:function(e){return t.selectUploadFile()}}},[t._v(" 이미지 선택 ")]),i("span",[t._v(" "+t._s(""===t.article.savefile?"none":t.article.savefile))]),t.article.savefile?i("span",{staticStyle:{cursor:"pointer"},on:{click:t.deleteimg}},[i("i",{staticClass:"md-icon md-icon-font md-theme-default"},[t._v("close")])]):t._e()]),i("div",{staticStyle:{"text-align":"center"}},["register"===this.type?i("md-button",{staticClass:"md-success md-simple",staticStyle:{"margin-top":"22px",border:"1px solid","margin-left":"1rem"},attrs:{type:"submit",variant:"success"}},[t._v("작성")]):"modify"===this.type?i("md-button",{staticClass:"md-success md-simple",staticStyle:{"margin-top":"22px",border:"1px solid","margin-left":"1rem"},attrs:{type:"submit",variant:"success"}},[t._v("수정")]):t._e(),i("md-button",{staticClass:"md-default md-simple",staticStyle:{"margin-top":"22px",border:"1px solid","margin-left":"1rem"},attrs:{type:"reset",variant:"default"}},[t._v("취소")])],1)],1)])])])},r=[],a=i(4367),n=i(75748),c=i(34665),l={name:"CommInputItem",data:function(){return{article:{articleno:0,userid:"",subject:"",content:"",parentno:0,savefile:""}}},props:{type:{type:String}},computed:(0,a.Z)({},(0,c.rn)(["isLogin","userInfo"])),created:function(){var t=this;this.article.userid=this.userInfo.userid,"modify"===this.type&&n.Z.get("/commboard/".concat(this.$route.params.articleno)).then((function(e){var i=e.data;t.article=i}))},methods:{deleteimg:function(){this.article.savefile=""},selectUploadFile:function(){var t=this,e=document.createElement("input");e.id="image",e.type="file",e.accept="image/*",e.click(),e.onchange=function(){for(var e=new FormData,i=0;i<this.files.length;i++)e.append("fileList",this.files[i]);n.Z.post("/file/upload",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.article.savefile=e.data})).catch((function(e){t.article.savefile=e.message}))}},onSubmit:function(t){t.preventDefault();var e=!0,i="";!this.article.userid&&(i="작성자 입력해주세요",e=!1,this.$refs.userid.focus()),e&&!this.article.subject&&(i="제목 입력해주세요",e=!1,this.$refs.subject.focus()),e&&!this.article.content&&(i="내용 입력해주세요",e=!1,this.$refs.content.focus()),e?"register"===this.type?this.registArticle():"modify"===this.type&&this.modifyArticle():alert(i)},onReset:function(t){t.preventDefault(),this.article.articleno=0,this.article.subject="",this.article.content="",this.article.savefile="",this.$router.push({name:"CommHome"})},registArticle:function(){var t=this;n.Z.post("/commboard",{userid:this.article.userid,subject:this.article.subject,content:this.article.content,savefile:this.article.savefile}).then((function(e){var i=e.data,s="등록 처리시 문제가 발생했습니다.";"success"===i&&(s="등록이 완료되었습니다."),alert(s),t.moveList()}))},modifyArticle:function(){var t=this;n.Z.put("/commboard/".concat(this.article.articleno),{articleno:this.article.articleno,userid:this.article.userid,subject:this.article.subject,content:this.article.content,savefile:this.article.savefile}).then((function(e){var i=e.data,s="수정 처리시 문제가 발생했습니다.";"success"===i&&(s="수정이 완료되었습니다."),alert(s),t.$router.push({name:"CommDetail",params:{articleno:t.article.articleno}})}))},moveList:function(){this.$router.push({name:"CommHome"})}}},o=l,u=i(1001),d=(0,u.Z)(o,s,r,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=134-legacy.96de4583.js.map
"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[383],{3383:function(t,e,i){i.r(e),i.d(e,{default:function(){return _}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("h2",{staticStyle:{"text-align":"center"}},[t._v("지역커뮤니티")]),i("hr"),i("div",[i("md-button",{staticClass:"md-success md-simple",staticStyle:{border:"1px solid","text-align":"left"},attrs:{variant:"success"},on:{click:t.listArticle}},[t._v("목록")])],1)]),i("div",{staticStyle:{width:"100%"},attrs:{id:"nav-tabs"}},[i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-100"},[i("nav-tabs-card",{attrs:{"no-label":""}},[i("template",{slot:"content"},[i("h3",{staticStyle:{color:"black","font-weight":"bold"}},[t._v(" "+t._s(t.article.subject)+" ")]),i("p",{staticStyle:{color:"gray"}},[t._v(" "+t._s(t.article.userid)+" "+t._s(t.article.regtime)+" ")]),t._v(" "+t._s(t.article.content)+" "),t.article.savefile?i("div",[i("img",{attrs:{src:t.article.savefile}})]):t._e()])],2)],1)])]),i("div",[i("div",{staticStyle:{"text-align":"center"}},[t.userInfo.userid===t.article.userid?i("md-button",{staticClass:"md-default md-simple",staticStyle:{border:"1px solid"},attrs:{variant:"default"},on:{click:t.moveModifyArticle}},[t._v(" 수정 ")]):t._e(),t.userInfo.userid===t.article.userid?i("md-button",{staticClass:"md-danger md-simple",staticStyle:{border:"1px solid"},attrs:{variant:"danger"},on:{click:t.deleteArticle}},[t._v(" 삭제 ")]):t._e()],1)]),i("hr"),t.comments.length?i("div",{staticClass:"md-layout",staticStyle:{width:"100%","text-align":"center"}},[i("p",{staticStyle:{"margin-left":"20px"}},[t._v("댓글("+t._s(t.commentNum)+")")]),i("comments-list",{attrs:{comments:t.comments},on:{upup:t.getUpdate,commentmodify:t.modifycom}})],1):i("div",{staticClass:"md-layout",staticStyle:{width:"100%"}},[i("div",{staticClass:"md-layout-item md-size-100"},[i("p",{staticStyle:{"margin-left":"10px"}},[t._v("댓글("+t._s(t.commentNum)+")")]),i("div",{staticClass:"md-layout-item md-size-100",staticStyle:{"text-align":"center"}},[t._v(" 작성된 댓글이 없습니다. ")])])]),t.isUpdate?t._e():i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-100"},[i("form",{on:{submit:t.onSubmit}},[i("md-field",[i("md-input",{attrs:{id:"userid",type:"hidden",required:"",disabled:"",placeholder:"작성자"},model:{value:t.comment.userid,callback:function(e){t.$set(t.comment,"userid",e)},expression:"comment.userid"}})],1),i("div",{staticStyle:{display:"flex"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.comment,expression:"comment.comment"}],staticStyle:{"border-color":"lightgray",margin:"auto","border-radius":"5px",width:"85%"},attrs:{id:"comment",rows:"3",required:"",placeholder:"댓글을 입력하세요."},domProps:{value:t.comment.comment},on:{input:function(e){e.target.composing||t.$set(t.comment,"comment",e.target.value)}}}),i("md-button",{staticClass:"md-default md-simple",staticStyle:{border:"1px solid",float:"right",margin:"auto"},attrs:{type:"submit",variant:"default"}},[t._v("작성")])],1)],1)])]),t.isUpdate?i("div",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item md-size-100"},[i("form",{on:{submit:t.modySubmit}},[i("md-field"),i("div",{staticStyle:{display:"flex"}},[i("div",{staticStyle:{margin:"auto",width:"85%"}},[i("textarea",{staticStyle:{"border-color":"lightgray","border-radius":"5px",width:"100%"},attrs:{id:"comment",rows:"3",required:""},domProps:{value:t.modcomment.comment},on:{input:t.changecomment}})]),i("div",{staticStyle:{float:"right",width:"10%",margin:"0 7px 5px 0"}},[i("md-button",{staticClass:"md-success md-simple md-sm",staticStyle:{border:"1px solid"},attrs:{type:"submit",variant:"success"}},[t._v("수정")]),i("md-button",{staticClass:"md-default md-simple md-sm",staticStyle:{border:"1px solid"},attrs:{type:"button",variant:"default"},on:{click:t.changeupdate}},[t._v("취소")])],1)])],1)])]):t._e()])},a=[],m=i(5748),o=i(480),n=i(4665),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"md-layout-item md-size-100",staticStyle:{"text-align":"center"}},[t._l(t.paginatedData,(function(e){return i("md-table",{key:e.commentno,staticStyle:{"text-align":"center"}},[i("tr",[i("td",{staticStyle:{"text-align":"left","padding-left":"10px","font-weight":"bold"},attrs:{width:"10%"}},[t._v(" "+t._s(e.userid)+" ")]),i("td",{staticStyle:{"text-align":"left"},attrs:{width:"65%"}},[t._v(t._s(e.comment))]),i("td",{staticStyle:{"font-size":"80%",color:"gray"},attrs:{width:"25"}},[t._v(" "+t._s(t._f("dateFormat")(e.regtime))+" ")]),i("td",{staticStyle:{"text-align":"right"},attrs:{width:"5%"}},[e.userid===t.userInfo.userid?i("button",{staticStyle:{"border-style":"none","background-color":"transparent"},on:{click:function(i){return t.commentedit(e)}}},[i("i",{staticClass:"md-icon md-icon-font md-theme-default"},[t._v("edit")])]):t._e()]),i("td",{staticStyle:{"text-align":"right"},attrs:{width:"5%"}},[e.userid===t.userInfo.userid?i("button",{staticStyle:{"border-style":"none","background-color":"transparent"},on:{click:function(i){return t.deleteComment(e)}}},[i("i",{staticClass:"md-icon md-icon-font md-theme-default"},[t._v("delete")])]):t._e()])])])})),t.comments.length?i("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[i("md-button",{staticClass:"md-default md-simple md-sm",staticStyle:{"margin-top":"-3px",border:"1px solid lightgray"},attrs:{disabled:0===t.pageNum},on:{click:t.prevPage}},[t._v(" Prev ")]),i("span",{staticStyle:{"margin-left":"5px","margin-right":"10px"}},[t._v(" "+t._s(t.pageNum+1)+" / "+t._s(t.pageCount))]),i("md-button",{staticClass:"md-default md-simple md-sm",staticStyle:{"margin-top":"-3px",border:"1px solid lightgray"},attrs:{disabled:t.pageNum>=t.pageCount-1},on:{click:t.nextPage}},[t._v(" Next ")])],1):t._e()],2)},l=[],c=i(7133),d=i.n(c),u={name:"CommentsList",data(){return{pageNum:0,isUpdate:!1}},props:{comments:[],pageSize:{type:Number,required:!1,default:5}},methods:{nextPage(){this.pageNum+=1},prevPage(){this.pageNum-=1},deleteComment(t){confirm("정말로 삭제하시겠습니까?")&&m.Z["delete"]("/comments/"+t.commentno).then((({data:e})=>{let i="삭제 처리시 문제가 발생했습니다.";"success"===e&&(i="삭제가 완료되었습니다."),alert(i),this.$router.go({name:"CommDetail",params:{articleno:t.articleno}})}))},editComment(){m.Z.put("/comments/"+this.commetno,{commentno:this.commentno,userid:this.userid,comment:this.comment,regtime:this.regtime,articleno:this.articleno}).then((({data:t})=>{if("success"===t){let t="정보가 수정되었습니다. 다시 로그인해주세요.";alert(t),this.$router.push({name:"comment"})}else{let t="등록 처리시 문제가 발생했습니다.";alert(t)}}))},commentedit(t){this.isUpdate=!0,this.$emit("upup",this.isUpdate),this.$emit("commentmodify",t)}},computed:{...(0,n.rn)(["isLogin","userInfo"]),pageCount(){let t=this.comments.length,e=this.pageSize,i=Math.floor(t/e);return t%e>0&&(i+=1),i},paginatedData(){const t=this.pageNum*this.pageSize,e=t+this.pageSize;return this.comments.slice(t,e)}},filters:{dateFormat(t){return d()(new Date(t)).format("YYYY.MM.DD HH:mm")}}},p=u,h=i(1001),g=(0,h.Z)(p,r,l,!1,null,null,null),y=g.exports,v={name:"CommDetail",data(){return{article:{},comment:{},comments:[],commentNum:Number,modcomment:{},isUpdate:!1,newcomment:String}},props:{type:{type:String}},components:{NavTabsCard:o.ZN,CommentsList:y},computed:{...(0,n.rn)(["isLogin","userInfo"]),message(){return this.article.content?this.article.content.split("\n").join("<br>"):""}},created(){this.comment.userid=this.userInfo.userid,m.Z.get(`/commboard/${this.$route.params.articleno}`).then((({data:t})=>{this.article=t})),m.Z.get(`/comments/${this.$route.params.articleno}`).then((({data:t})=>{this.comments=t})),m.Z.get(`/comments/count/${this.$route.params.articleno}`).then((({data:t})=>{this.commentNum=t}))},methods:{listArticle(){this.$router.push({name:"CommHome"})},moveModifyArticle(){this.$router.replace({name:"CommModify",params:{articleno:this.article.articleno}})},deleteArticle(){confirm("정말로 삭제하시겠습니까?")&&this.$router.replace({name:"CommDelete",params:{articleno:this.article.articleno}})},onSubmit(t){t.preventDefault(),this.registComment()},changecomment(t){t.preventDefault(),this.newcomment=t.target.value},modySubmit(t){t.preventDefault(),this.modifyComment()},modifyComment(){m.Z.put("/comments/"+this.modcomment.commentno,{commentno:this.modcomment.commentno,comment:this.newcomment}).then((({data:t})=>{let e="등록 처리시 문제가 발생했습니다.";"success"===t&&(e="수정이 완료되었습니다.",this.$router.go(0)),alert(e)}))},registComment(){m.Z.post("/comments",{articleno:this.article.articleno,userid:this.comment.userid,comment:this.comment.comment}).then((({data:t})=>{let e="등록 처리시 문제가 발생했습니다.";"success"===t&&(e="등록이 완료되었습니다.",this.$router.go(0)),alert(e)}))},getUpdate(t){this.isUpdate=t},modifycom(t){this.modcomment=t},changeupdate(){this.isUpdate=!1}}},f=v,b=(0,h.Z)(f,s,a,!1,null,null,null),_=b.exports}}]);
//# sourceMappingURL=383.5784b99e.js.map
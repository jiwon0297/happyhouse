"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[655,481],{43655:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",{attrs:{align:"left"}},[a("md-button",{staticClass:"md-default md-simple",staticStyle:{"margin-top":"22px",border:"1px solid"},on:{click:function(e){return t.moveWrite()}}},[t._v("문의하기")])],1),a("div",{attrs:{align:"right"}},[a("md-field",{staticStyle:{width:"200px"}},[a("md-input",{staticStyle:{"margin-top":"8px"},attrs:{placeholder:"검색어를 입력하세요"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("md-button",{staticClass:"md-info md-simple md-just-icon",on:{click:t.searchList}},[a("i",{staticClass:"md-icon md-icon-font md-theme-default"},[t._v("search")])])],1)],1)]),a("QnAList",{attrs:{articles:t.searchlists}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h3",[t._v("문의 목록")]),a("h6",{staticStyle:{color:"gray"}},[t._v("자유롭게 문의해보세요")]),a("hr")])}],s=(a(74916),a(64765),a(41539),a(54747),a(26699),a(32023),a(75748)),n=a(25481),c={name:"QnAHome",components:{QnAList:n["default"]},data:function(){return{originarticles:{type:Array},searchlists:{type:Array},search:""}},created:function(){var t=this;s.Z.get("/qnaboard").then((function(e){var a=e.data;t.originarticles=a,t.searchlists=a}))},methods:{moveWrite:function(){this.$router.push({name:"QnARegister"})},searchList:function(){var t=[],e=this.search;this.originarticles.forEach((function(a){a.subject.includes(e)&&t.push(a)})),this.searchlists=t}}},r=c,d=a(1001),o=(0,d.Z)(r,l,i,!1,null,null,null),u=o.exports},25481:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.articles.length?a("div",[a("md-table",{staticStyle:{"text-align":"center"}},[a("md-table-row",{staticStyle:{"background-color":"#dde7e7","text-align":"center"}},[a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"10%"}},[t._v(" 글번호 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 답변여부 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"30%"}},[t._v(" 제목 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성자 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성일 ")])]),t._l(t.paginatedData,(function(e,l){return a("QnAListItem",t._b({key:l,attrs:{index:t.articles.length-10*t.pageNum-l}},"QnAListItem",e,!1))}))],2)],1):a("div",[a("md-table",{staticStyle:{"text-align":"center"}},[a("md-table-row",{staticStyle:{"background-color":"#dde7e7","text-align":"center"}},[a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"10%"}},[t._v(" 글번호 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 답변여부 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"30%"}},[t._v(" 제목 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성자 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성일 ")])]),a("md-table-row",[a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center"},attrs:{colspan:"5"}},[t._v(" 작성된 글이 없습니다. ")])])],1)],1),t.articles.length?a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("md-button",{staticClass:"md-default md-simple md-sm",staticStyle:{"margin-top":"-3px",border:"1px solid lightgray"},attrs:{disabled:0===t.pageNum},on:{click:t.prevPage}},[t._v(" Prev ")]),a("span",{staticStyle:{"margin-left":"5px","margin-right":"10px"}},[t._v(" "+t._s(t.pageNum+1)+" / "+t._s(t.pageCount))]),a("md-button",{staticClass:"md-default md-simple md-sm",staticStyle:{"margin-top":"-3px",border:"1px solid lightgray"},attrs:{disabled:t.pageNum>=t.pageCount-1},on:{click:t.nextPage}},[t._v(" Next ")])],1):t._e()])},i=[],s=(a(9653),a(47042),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-table-row",{staticStyle:{"text-align":"center"}},[a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center",width:"10%"}},[t._v(" "+t._s(t.index)+" ")]),0===t.replynum?a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center",width:"20%"}},[a("badge",{attrs:{type:"default"}},[t._v("미답변")])],1):a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center",width:"30%"}},[a("badge",{attrs:{type:"success"}},[t._v("답변완료")])],1),a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center",width:"10%"}},[a("router-link",{staticStyle:{color:"darkblue"},attrs:{to:{name:"QnADetail",params:{articleno:t.articleno}}}},[t._v(t._s(t.subject)+" ")])],1),a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center",width:"20%"}},[t._v(" "+t._s(t.userid)+" ")]),a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center",width:"20%"}},[t._v(" "+t._s(t._f("dateFormat")(t.regtime))+" ")])])}),n=[],c=a(75748),r=a(17133),d=a.n(r),o=a(80480),u={name:"QnAListItem",components:{Badge:o.Ct},props:{articleno:Number,userid:String,subject:String,parentno:Number,regtime:String,index:Number},data:function(){return{replynum:Number}},created:function(){var t=this;c.Z.get("/qnaboard/count/"+this.articleno).then((function(e){var a=e.data;t.replynum=a}))},filters:{dateFormat:function(t){return d()(new Date(t)).format("YYYY-MM-DD")}}},m=u,g=a(1001),h=(0,g.Z)(m,s,n,!1,null,null,null),p=h.exports,b={name:"QnAList",components:{QnAListItem:p},data:function(){return{pageNum:0}},props:{articles:[],pageSize:{type:Number,required:!1,default:10}},methods:{nextPage:function(){this.pageNum+=1},prevPage:function(){this.pageNum-=1}},computed:{pageCount:function(){var t=this.articles.length,e=this.pageSize,a=Math.floor(t/e);return t%e>0&&(a+=1),a},paginatedData:function(){var t=this.pageNum*this.pageSize,e=t+this.pageSize;return this.articles.slice(t,e)}}},f=b,v=(0,g.Z)(f,l,i,!1,null,null,null),y=v.exports}}]);
//# sourceMappingURL=655-legacy.9ae5ce22.js.map
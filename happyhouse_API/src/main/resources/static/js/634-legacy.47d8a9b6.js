"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[634,762],{71634:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",{attrs:{align:"left"}},[a("md-button",{staticClass:"md-default md-simple",staticStyle:{"margin-top":"22px",border:"1px solid"},on:{click:function(e){return t.moveWrite()}}},[t._v("글쓰기")])],1),a("div",{attrs:{align:"right"}},[a("md-field",{staticStyle:{width:"200px"}},[a("md-input",{staticStyle:{"margin-top":"8px"},attrs:{placeholder:"검색어를 입력하세요"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("md-button",{staticClass:"md-info md-simple md-just-icon",on:{click:t.searchList}},[a("i",{staticClass:"md-icon md-icon-font md-theme-default"},[t._v("search")])])],1)],1)]),a("CommList",{attrs:{articles:t.searchlists}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h3",{staticStyle:{"font-family":"'GowunDodum-Regular'"}},[t._v("커뮤니티")]),a("h6",{staticStyle:{color:"gray","margin-left":"10px","font-family":"'GowunDodum-Regular'"}},[t._v(" 사람들과 자유롭게 소통해보세요 ")]),a("hr")])}],s=(a(74916),a(64765),a(41539),a(54747),a(26699),a(32023),a(75748)),n=a(54762),r={name:"CommHome",components:{CommList:n["default"]},data:function(){return{originarticles:{type:Array},search:"",searchlists:{type:Array}}},created:function(){var t=this;s.Z.get("/commboard").then((function(e){var a=e.data;t.originarticles=a,t.searchlists=a}))},methods:{moveWrite:function(){this.$router.push({name:"CommRegister"})},searchList:function(){var t=[],e=this.search;this.originarticles.forEach((function(a){a.subject.includes(e)&&t.push(a)})),this.searchlists=t}}},c=r,o=a(1001),d=(0,o.Z)(c,l,i,!1,null,null,null),m=d.exports},54762:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.articles.length?a("div",[a("md-table",{staticStyle:{"text-align":"center"}},[a("md-table-row",{staticStyle:{"background-color":"#dde7e7","text-align":"center"}},[a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"10%"}},[t._v(" 글번호 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"50%"}},[t._v(" 제목 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성자 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성일 ")])]),t._l(t.paginatedData,(function(e,l){return a("CommListItem",t._b({key:l,attrs:{index:t.articles.length-10*t.pageNum-l}},"CommListItem",e,!1))}))],2)],1):a("div",[a("md-table",{staticStyle:{"text-align":"center"}},[a("md-table-row",{staticStyle:{"background-color":"#dde7e7","text-align":"center"}},[a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"10%"}},[t._v(" 글번호 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"50%"}},[t._v(" 제목 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성자 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성일 ")])]),a("md-table-row",[a("td",{staticClass:"md-table-cell",attrs:{colspan:"4"}},[t._v("작성된 글이 없습니다.")])])],1)],1),t.articles.length?a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("md-button",{staticClass:"md-default md-simple md-sm",staticStyle:{"margin-top":"-3px",border:"1px solid lightgray"},attrs:{disabled:0===t.pageNum},on:{click:t.prevPage}},[t._v(" Prev ")]),a("span",{staticStyle:{"margin-left":"5px","margin-right":"10px"}},[t._v(" "+t._s(t.pageNum+1)+" / "+t._s(t.pageCount))]),a("md-button",{staticClass:"md-default md-simple md-sm",staticStyle:{"margin-top":"-3px",border:"1px solid lightgray"},attrs:{disabled:t.pageNum>=t.pageCount-1},on:{click:t.nextPage}},[t._v(" Next ")])],1):t._e()])},i=[],s=(a(9653),a(47042),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-table-row",[a("td",{staticClass:"md-table-cell"},[t._v(t._s(t.index))]),a("td",{staticClass:"md-table-cell"},[a("router-link",{staticStyle:{color:"darkblue"},attrs:{to:{name:"CommDetail",params:{articleno:t.articleno}}}},[t._v(t._s(t.subject)+" ")])],1),a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center"},attrs:{l:""}},[t._v(" "+t._s(t.userid)+" ")]),a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t._f("dateFormat")(t.regtime))+" ")])])}),n=[],r=a(75748),c=a(17133),o=a.n(c),d=a(80480),m={name:"CommListItem",components:{Badge:d.Ct},props:{articleno:Number,userid:String,subject:String,regtime:String,originfile:String,savefile:String,savefolder:String,index:Number},data:function(){return{replynum:Number}},created:function(){var t=this;r.Z.get("/commboard/count/"+this.articleno).then((function(e){var a=e.data;t.replynum=a}))},filters:{dateFormat:function(t){return o()(new Date(t)).format("YY.MM.DD")}}},u=m,g=a(1001),p=(0,g.Z)(u,s,n,!1,null,null,null),h=p.exports,f={name:"CommList",components:{CommListItem:h},data:function(){return{pageNum:0}},props:{articles:[],pageSize:{type:Number,required:!1,default:10}},methods:{nextPage:function(){this.pageNum+=1},prevPage:function(){this.pageNum-=1}},computed:{pageCount:function(){var t=this.articles.length,e=this.pageSize,a=Math.floor(t/e);return t%e>0&&(a+=1),a},paginatedData:function(){var t=this.pageNum*this.pageSize,e=t+this.pageSize;return this.articles.slice(t,e)}}},b=f,v=(0,g.Z)(b,l,i,!1,null,null,null),y=v.exports}}]);
//# sourceMappingURL=634-legacy.47d8a9b6.js.map
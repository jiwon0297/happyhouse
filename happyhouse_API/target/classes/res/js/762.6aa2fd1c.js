"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[762],{4762:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.articles.length?a("div",[a("md-table",{staticStyle:{"text-align":"center"}},[a("md-table-row",{staticStyle:{"background-color":"#dde7e7","text-align":"center"}},[a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"10%"}},[t._v(" 글번호 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"50%"}},[t._v(" 제목 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성자 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성일 ")])]),t._l(t.paginatedData,(function(e,l){return a("CommListItem",t._b({key:l,attrs:{index:t.articles.length-10*t.pageNum-l}},"CommListItem",e,!1))}))],2)],1):a("div",[a("md-table",{staticStyle:{"text-align":"center"}},[a("md-table-row",{staticStyle:{"background-color":"#dde7e7","text-align":"center"}},[a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"10%"}},[t._v(" 글번호 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"50%"}},[t._v(" 제목 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성자 ")]),a("td",{staticClass:"md-table-cell",staticStyle:{color:"black","text-align":"center",width:"20%"}},[t._v(" 작성일 ")])]),a("md-table-row",[a("td",{staticClass:"md-table-cell",attrs:{colspan:"4"}},[t._v("작성된 글이 없습니다.")])])],1)],1),t.articles.length?a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("md-button",{staticClass:"md-default md-simple md-sm",staticStyle:{"margin-top":"-3px",border:"1px solid lightgray"},attrs:{disabled:0===t.pageNum},on:{click:t.prevPage}},[t._v(" Prev ")]),a("span",{staticStyle:{"margin-left":"5px","margin-right":"10px"}},[t._v(" "+t._s(t.pageNum+1)+" / "+t._s(t.pageCount))]),a("md-button",{staticClass:"md-default md-simple md-sm",staticStyle:{"margin-top":"-3px",border:"1px solid lightgray"},attrs:{disabled:t.pageNum>=t.pageCount-1},on:{click:t.nextPage}},[t._v(" Next ")])],1):t._e()])},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-table-row",[a("td",{staticClass:"md-table-cell"},[t._v(t._s(t.index))]),a("td",{staticClass:"md-table-cell"},[a("router-link",{staticStyle:{color:"darkblue"},attrs:{to:{name:"CommDetail",params:{articleno:t.articleno}}}},[t._v(t._s(t.subject)+" ")])],1),a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center"},attrs:{l:""}},[t._v(" "+t._s(t.userid)+" ")]),a("td",{staticClass:"md-table-cell",staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t._f("dateFormat")(t.regtime))+" ")])])},r=[],c=a(5748),n=a(7133),d=a.n(n),m=a(480),o={name:"CommListItem",components:{Badge:m.Ct},props:{articleno:Number,userid:String,subject:String,regtime:String,originfile:String,savefile:String,savefolder:String,index:Number},data(){return{replynum:Number}},created(){c.Z.get("/commboard/count/"+this.articleno).then((({data:t})=>{this.replynum=t}))},filters:{dateFormat(t){return d()(new Date(t)).format("YY.MM.DD")}}},g=o,u=a(1001),p=(0,u.Z)(g,s,r,!1,null,null,null),b=p.exports,h={name:"CommList",components:{CommListItem:b},data(){return{pageNum:0}},props:{articles:[],pageSize:{type:Number,required:!1,default:10}},methods:{nextPage(){this.pageNum+=1},prevPage(){this.pageNum-=1}},computed:{pageCount(){let t=this.articles.length,e=this.pageSize,a=Math.floor(t/e);return t%e>0&&(a+=1),a},paginatedData(){const t=this.pageNum*this.pageSize,e=t+this.pageSize;return this.articles.slice(t,e)}}},x=h,_=(0,u.Z)(x,l,i,!1,null,null,null),S=_.exports}}]);
//# sourceMappingURL=762.6aa2fd1c.js.map
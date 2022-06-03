"use strict";(self["webpackChunkhappyhouse"]=self["webpackChunkhappyhouse"]||[]).push([[854],{854:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"section profile-content"},[s("div",{staticClass:"md-layout"},[s("div",{staticClass:"md-layout-item md-size-50 mx-auto"},[s("div",{staticClass:"profile",staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[s("div",{staticClass:"circle-with-text",staticStyle:{"justify-content":"center","align-items":"center","border-radius":"100%","text-align":"center",display:"flex",width:"160px",height:"160px",color:"white","background-color":"#15524c","font-size":"80px","border-bottom":"15px"},attrs:{id:"profileimage"},domProps:{textContent:e._s(e.userInfo.username.charAt(0).toUpperCase())}})]),s("div",{staticClass:"name",staticStyle:{"text-align":"center"}},[s("h3",{staticClass:"title"},[e._v(e._s(e.userInfo.userid))]),s("h6",[e._v(e._s(e.userInfo.username))])])])]),s("br"),e.isUpdate?e._e():s("div",{staticClass:"md-layout-item",staticStyle:{width:"70%",margin:"auto"}},[s("nav-tabs-card",{attrs:{"no-label":""}},[s("template",{slot:"content"},[s("md-tabs",{staticClass:"md-danger",attrs:{"md-alignment":"left"}},[s("md-tab",{attrs:{id:"tab-home","md-label":"My Info","md-icon":"person"}},[s("h4",[e._v("Email")]),s("p",[e._v(e._s(e.userInfo.email))]),s("h4",[e._v("Address")]),s("p",[e._v(" "+e._s(e.userInfo.sidoName)+" "+e._s(e.userInfo.gugunName)+" "+e._s(e.userInfo.dongName)+" ")]),s("hr"),s("p",{staticStyle:{"font-family":"serif","font-style":"Italic","font-weight":"bold"}},[e._v(" Member Since "+e._s(e._f("dateFormat")(e.userInfo.joindate))+" ")])]),s("md-tab",{attrs:{id:"tab-pages","md-label":"Favorites","md-icon":"favorite"}},[0!=e.interestapts.length?s("div",e._l(e.interestapts,(function(t,i){return s("div",{key:i},[s("button",{class:{"mouse-over-bgcolor":e.isColor},staticStyle:{"border-style":"none","background-color":"transparent"},attrs:{type:"button"},on:{click:function(s){return e.selectApt(t.dongName,t.aptName)},mouseover:function(t){return e.colorChange(!0)},mouseout:function(t){return e.colorChange(!1)}}},[s("i",{staticClass:"md-icon md-icon-font md-theme-default"},[e._v("favorite")]),e._v(" "+e._s(t.dongName)+" | "+e._s(t.aptName)+" ")])])})),0):s("div",[s("h4",[e._v("등록된 관심 매물이 없습니다.")])])])],1)],1)],2)],1),e.isUpdate?s("div",{staticClass:"md-layout-item",staticStyle:{width:"70%",margin:"auto"}},[s("nav-tabs-card",{attrs:{"no-label":""}},[s("template",{slot:"content"},[s("md-tabs",{staticClass:"md-primary",attrs:{"md-alignment":"left"}},[s("md-tab",{attrs:{id:"tab-home","md-label":"My Info","md-icon":"person"}},[s("form",{on:{submit:e.onSubmit}},[s("md-field",[s("md-icon",[e._v("email")]),s("label",[e._v("이메일")]),s("md-input",{attrs:{id:"email",type:"email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("md-field",[s("md-icon",[e._v("lock_outline")]),s("label",[e._v("비밀번호")]),s("md-input",{attrs:{id:"userpwd",type:"password",required:""},model:{value:e.userpwd,callback:function(t){e.userpwd=t},expression:"userpwd"}})],1),s("md-field",{class:[!0===e.pwderr?"md-error":""]},[s("md-icon",[e._v("https")]),s("label",[e._v("비밀번호확인")]),s("md-input",{attrs:{id:"pwdchk",type:"password",required:""},on:{input:function(t){return e.pwdchkFunc(t)}},model:{value:e.pwdchk,callback:function(t){e.pwdchk=t},expression:"pwdchk"}}),e.pwderr?s("p",{staticStyle:{color:"red","margin-right":"40px"}},[e._v(" 비밀번호가 맞지 않습니다. ")]):e._e()],1),s("md-field",[s("md-icon",[e._v("house")]),s("b-form-select",{attrs:{id:"sidoName",options:e.sidos},on:{change:e.gugunList},model:{value:e.sidoCode,callback:function(t){e.sidoCode=t},expression:"sidoCode"}}),s("b-form-select",{attrs:{id:"gugunName",options:e.guguns},on:{change:e.dongList},model:{value:e.gugunCode,callback:function(t){e.gugunCode=t},expression:"gugunCode"}}),s("b-form-select",{attrs:{id:"dongName",options:e.dongs},on:{change:e.selectAdd},model:{value:e.dongCode,callback:function(t){e.dongCode=t},expression:"dongCode"}})],1),s("md-button",{staticClass:"md-success md-simple",staticStyle:{border:"1px solid","margin-right":"1rem"},attrs:{type:"submit",variant:"success"}},[e._v("수정")]),s("md-button",{staticClass:"md-danger md-simple",staticStyle:{border:"1px solid"},attrs:{type:"button",variant:"danger"},on:{click:e.usermodify}},[e._v(" 취소 ")])],1)])],1)],1)],2)],1):e._e(),s("div",{staticStyle:{display:"flex","justify-content":"center"}},[e.isUpdate?e._e():s("md-button",{staticClass:"md-default md-simple",staticStyle:{border:"1px solid","margin-right":"1rem"},attrs:{type:"button",variant:"default"},on:{click:e.usermodify}},[e._v("정보수정")]),s("md-button",{staticClass:"md-default",attrs:{type:"button"},on:{click:e.deleteUser}},[e._v("회원탈퇴")])],1),e.classicModal?s("modal",{on:{close:e.classicModalHide}},[s("template",{slot:"header"},[s("h4",{staticClass:"modal-title"},[e._v("아파트 상세 정보")]),s("md-button",{staticClass:"md-simple md-just-icon md-round modal-default-button",on:{click:e.classicModalHide}},[s("md-icon",[e._v("clear")])],1)],1),s("template",{slot:"body"},[s("house-detail")],1),s("template",{slot:"footer"},[e.isLiked?s("md-button",{staticClass:"md-simple md-just-icon md-rose",on:{click:function(t){return e.likeChange(!1)}}},[s("i",{staticClass:"md-icon md-icon-font md-theme-default"},[e._v("favorite")])]):e._e(),e.isLiked?e._e():s("md-button",{staticClass:"md-simple md-just-icon md-default",on:{click:function(t){return e.likeChange(!0)}}},[s("i",{staticClass:"md-icon md-icon-font md-theme-default"},[e._v("favorite")])]),s("md-button",{staticClass:"md-danger md-simple",on:{click:e.classicModalHide}},[e._v("Close")])],1)],2):e._e()],1)},o=[],a=s(5748),d=s(7133),n=s.n(d),l=s(4665),r=s(480),u=s(4643),m={name:"MemberMyPage",components:{Tabs:r.mQ,NavTabsCard:r.ZN,Modal:r.u_,HouseDetail:u.Z},bodyClass:"profile-page",data(){return{isColor:!1,classicModal:!1,tabPane1:[{image:s(3065)},{image:s(259)},{image:s(9341)},{image:s(3450)}],tabPane2:[{image:s(4510)},{image:s(5640)},{image:s(7487)},{image:s(7462)},{image:s(1555)}],tabPane3:[{image:s(7462)},{image:s(1200)},{image:s(5640)},{image:s(4510)},{image:s(3065)}],isUpdate:!1,userpwd:"",pwdchk:"",email:"",sidoCode:"",gugunCode:"",dongCode:"",sidoName:"",gugunName:"",dongName:"",pwderr:!1,interestapts:[],isLiked:!1,house:Object}},props:{img:{type:String,default:s(8831)}},computed:{...(0,l.rn)(["userInfo","sidos","guguns","dongs","houses"])},filters:{dateFormat(e){return n()(new Date(e)).format("YYYY-MM-DD")}},created(){this.CLEAR_SIDO_LIST(),this.getSido(),this.email=this.userInfo.email,this.userid=this.userInfo.userid,this.sidoName=this.userInfo.sidoName,this.gugunName=this.userInfo.gugunName,this.dongName=this.userInfo.dongName;const e={userid:this.userid};a.Z.get("/interest/apt",{params:e}).then((({data:e})=>{this.interestapts=e})).catch((e=>{console.log(e)}))},methods:{...(0,l.nv)(["getSido","getGugun","getDong","getUserInfo","detailHouse","getHouseList"]),...(0,l.OI)(["CLEAR_SIDO_LIST","CLEAR_GUGUN_LIST","CLEAR_DONG_LIST","SET_IS_LOGIN","SET_USER_INFO"]),selectApt(e,t){const s={userid:this.userInfo.userid,dongName:e,aptName:t};a.Z.get("/interest/apt/count",{params:s}).then((({data:e})=>{"success"===e&&(this.isLiked=!0)})),this.classicModal=!0,a.Z.get("/map/dongcode2/"+e).then((({data:e})=>{this.getHouseList(e.dongCode),this.houses.forEach((e=>{e.아파트===t&&(this.detailHouse(e),this.house=e)}))})).catch((e=>{console.log(e)}))},likeChange(e){if(this.isLiked=e,1==this.isLiked)a.Z.post("/interest/apt",{userid:this.userInfo.userid,dongName:this.house.법정동,aptName:this.house.아파트}).then((({data:e})=>{let t="등록 처리시 문제가 발생했습니다.";"success"===e&&(t="등록이 완료되었습니다.")}));else{const e={userid:this.userInfo.userid,dongName:this.house.법정동,aptName:this.house.아파트};a.Z["delete"]("/interest/apt",{params:e}).then((({data:e})=>{let t="삭제 처리시 문제가 발생했습니다.";"success"===e&&(t="삭제가 완료되었습니다.")}))}},colorChange(e){this.isColor=e},classicModalHide(){this.classicModal=!1,this.isLiked||this.$router.go(0)},gugunList(){console.log(this.sidoCode),this.CLEAR_GUGUN_LIST(),this.gugunCode=null,this.sidoCode&&this.getGugun(this.sidoCode)},dongList(){console.log(this.gugunCode),this.CLEAR_DONG_LIST(),this.dongCode=null,this.gugunCode&&this.getDong(this.gugunCode)},selectAdd(){var e=document.getElementById("sidoName"),t=document.getElementById("gugunName"),s=document.getElementById("dongName");this.sidoName=e.options[e.selectedIndex].text,this.gugunName=t.options[t.selectedIndex].text,this.dongName=s.options[s.selectedIndex].text,console.log(this.sidoName),console.log(this.gugunName),console.log(this.dongName)},onSubmit(e){e.preventDefault(),this.pwderr?alert("다시 확인해주세요."):this.modifyUser()},modifyUser(){a.Z.put("/user/info/"+this.userid,{userid:this.userid,userpwd:this.userpwd,email:this.email,sidoName:this.sidoName,gugunName:this.gugunName,dongName:this.dongName}).then((({data:e})=>{if("success"===e){let e="정보가 수정되었습니다. 다시 로그인해주세요.";alert(e),this.onClickLogout(),this.$router.push({name:"login"})}else{let e="등록 처리시 문제가 발생했습니다.";alert(e)}}))},deleteUser(){confirm("정말로 탈퇴하시겠습니까?")&&a.Z["delete"]("/user/info/"+this.userid).then((({data:e})=>{let t="삭제 처리시 문제가 발생했습니다.";"success"===e?(t="탈퇴처리가 완료되었습니다.",alert(t),this.onClickLogout(),this.$router.push({name:"home"})):alert(t)}))},onClickLogout(){this.SET_IS_LOGIN(!1),this.SET_USER_INFO(null),sessionStorage.removeItem("access-token")},pwdchkFunc(e){this.pwdchk===this.userpwd?this.pwderr=!1:this.pwderr=!0},usermodify(){this.isUpdate=!this.isUpdate}},mounted(){let e="#";const t=["429e5b","425e9e","784676","f595ac","f7d086","74ba54","1e616b","674d94"];e+=t[Math.floor(Math.random()*t.length)],document.getElementById("profileimage").style.backgroundColor=e}},c=m,g=s(1001),h=(0,g.Z)(c,i,o,!1,null,"18e5b798",null),p=h.exports}}]);
//# sourceMappingURL=854.d1f58297.js.map
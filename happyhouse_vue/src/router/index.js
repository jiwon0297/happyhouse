import Vue from "vue";
import Router from "vue-router";
import Index from "../views/Index.vue";
import Home from "../views/HomeView.vue";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import MainNavbar from "../layout/MainNavbar.vue";
import MainFooter from "../layout/MainFooter.vue";
import QnABoardView from "@/views/QnABoardView.vue";
import NoticeBoardView from "@/views/NoticeBoardView.vue";
import CommBoardView from "@/views/CommBoardView.vue";
import HouseView from "@/views/HouseView.vue";
import InterestView from "@/views/InterestView.vue";
import AroundView from "@/views/AroundView.vue";
import MemberView from "@/views/MemberView.vue";
import store from "@/store/index.js";

Vue.use(Router);

// https://router.vuejs.org/kr/guide/advanced/navigation-guards.html
const onlyAuthUser = async (to, from, next) => {
  // console.log(store);
  const checkUserInfo = store.getters["checkUserInfo"];
  const getUserInfo = store._actions["getUserInfo"];
  let token = sessionStorage.getItem("access-token");
  if (checkUserInfo == null && token) {
    await getUserInfo(token);
  }
  if (checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다.");
    next({ name: "login" });
    // router.push({ name: "signIn" });
  } else {
    // console.log("로그인 했다.");
    next();
  }
};

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/user",
      name: "user",
      components: {
        default: MemberView,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
      },
      children: [
        {
          path: "register",
          name: "register",
          component: () => import("@/components/user/MemberRegister.vue"),
        },
        {
          path: "login",
          name: "login",
          component: () => import("@/components/user/MemberLogin.vue"),
        },
        {
          path: "mypage",
          name: "mypage",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/user/MemberMyPage.vue"),
        },
      ],
    },
    {
      path: "/house",
      name: "house",
      beforeEnter: onlyAuthUser,
      components: {
        default: HouseView,
        header: MainNavbar,
        footer: MainFooter,
      },
      //      beforeEnter: onlyAuthUser,
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/around",
      name: "around",
      beforeEnter: onlyAuthUser,
      components: {
        default: AroundView,
        header: MainNavbar,
        footer: MainFooter,
      },
      //      beforeEnter: onlyAuthUser,
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/interest",
      name: "interest",
      beforeEnter: onlyAuthUser,
      components: {
        default: InterestView,
        header: MainNavbar,
        footer: MainFooter,
      },
      //      beforeEnter: onlyAuthUser,
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/qna",
      name: "qna",
      components: {
        default: QnABoardView,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      redirect: "/qna/home",
      children: [
        {
          path: "home",
          name: "QnAHome",
          component: () => import("@/components/qna/QnAHome.vue"),
        },
        {
          path: "list",
          name: "QnAList",
          component: () => import("@/components/qna/QnAList.vue"),
        },
        {
          path: "write",
          name: "QnARegister",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/qna/QnARegister.vue"),
        },
        {
          path: "answer/:articleno",
          name: "QnAAnswer",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/qna/QnAAnswer.vue"),
        },
        {
          path: "detail/:articleno",
          name: "QnADetail",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/qna/QnADetail.vue"),
        },
        {
          path: "modify/:articleno",
          name: "QnAModify",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/qna/QnAModify.vue"),
        },
        {
          path: "delete/:articleno",
          name: "QnADelete",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/qna/QnADelete.vue"),
        },
      ],
    },
    {
      path: "/notice",
      name: "notice",
      components: {
        default: NoticeBoardView,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      redirect: "/notice/home",
      children: [
        {
          path: "home",
          name: "NoticeHome",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/notice/NoticeHome.vue"),
        },
        {
          path: "list",
          name: "NoticeList",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/notice/NoticeList.vue"),
        },
        {
          path: "write",
          name: "NoticeRegister",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/notice/NoticeRegister.vue"),
        },
        {
          path: "detail/:articleno",
          name: "NoticeDetail",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/notice/NoticeDetail.vue"),
        },
        {
          path: "modify/:articleno",
          name: "NoticeModify",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/notice/NoticeModify.vue"),
        },
        {
          path: "delete/:articleno",
          name: "NoticeDelete",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/notice/NoticeDelete.vue"),
        },
      ],
    },
    {
      path: "/comm",
      name: "comm",
      components: {
        default: CommBoardView,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      redirect: "/comm/home",
      children: [
        {
          path: "home",
          name: "CommHome",
          component: () => import("@/components/comm/CommHome.vue"),
        },
        {
          path: "list",
          name: "CommList",
          component: () => import("@/components/comm/CommList.vue"),
        },
        {
          path: "write",
          name: "CommRegister",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/comm/CommRegister.vue"),
        },
        {
          path: "answer/:articleno",
          name: "CommAnswer",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/comm/CommAnswer.vue"),
        },
        {
          path: "detail/:articleno",
          name: "CommDetail",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/comm/CommDetail.vue"),
        },
        {
          path: "modify/:articleno",
          name: "CommModify",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/comm/CommModify.vue"),
        },
        {
          path: "delete/:articleno",
          name: "CommDelete",
          beforeEnter: onlyAuthUser,
          component: () => import("@/components/comm/CommDelete.vue"),
        },
      ],
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

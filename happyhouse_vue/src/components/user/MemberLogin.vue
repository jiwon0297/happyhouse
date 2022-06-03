<template>
  <div style="text-align: center">
    <h3>로그인</h3>
    <b-alert show variant="danger" v-if="loginerror"
      >아이디 또는 비밀번호를 확인하세요.</b-alert
    >
    <br />
    <br />
    <div class="md-layout" style="display: flex">
      <div class="md-layout-item md-size-50" style="margin: 0 auto">
        <form @submit="onSubmit">
          <login-card header-color="green">
            <h4 slot="title" class="card-title">SignIn</h4>
            <md-button
              slot="buttons"
              href="javascript:void(0)"
              class="md-just-icon md-simple md-white"
            >
              <i class="fab fa-facebook-square"></i>
            </md-button>
            <md-button
              slot="buttons"
              href="javascript:void(0)"
              class="md-just-icon md-simple md-white"
            >
              <i class="fab fa-twitter"></i>
            </md-button>
            <md-button
              slot="buttons"
              href="javascript:void(0)"
              class="md-just-icon md-simple md-white"
            >
              <i class="fab fa-google-plus-g"></i>
            </md-button>
            <p slot="description" class="description">사이트로 로그인</p>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>assignment_ind</md-icon>
              <label>아이디</label>
              <md-input
                id="userid"
                v-model="user.userid"
                required
                placeholder="아이디를 입력하세요."
                @keyup.enter="confirm"
              ></md-input>
            </md-field>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>lock_outline</md-icon>
              <label>비밀번호</label>
              <md-input
                type="password"
                id="userpwd"
                v-model="user.userpwd"
                required
                @keyup.enter="confirm"
                placeholder="비밀번호를 입력하세요."
              ></md-input>
            </md-field>
            <md-button
              type="button"
              variant="info"
              slot="footer"
              class="md-simple md-default md-lg"
              @click="movePage"
              >회원가입</md-button
            >
            <md-button
              type="submit"
              variant="info"
              slot="footer"
              class="md-simple md-success md-lg"
              @click="confirm"
              >로그인</md-button
            >
            <md-button
              type="button"
              variant="info"
              slot="footer"
              class="md-simple md-danger md-lg"
              @click="reset"
              >취소</md-button
            >
          </login-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import { mapState, mapActions } from "vuex";
import http from "@/api/http";

export default {
  name: "MemberLogin",
  components: {
    LoginCard,
  },
  data() {
    return {
      user: {
        userid: null,
        userpwd: null,
      },
      loginerror: false,
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["userConfirm", "getUserInfo"]),

    onSubmit(event) {
      event.preventDefault();
      this.confirm();
    },

    async confirm() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      if (this.isLogin) {
        alert("로그인되었습니다. 반갑습니다.");
        await this.getUserInfo(token);
        this.$router.push({ name: "home" });
      } else this.loginerror = true;
    },
    movePage() {
      this.$router.push({ name: "register" });
    },
    removeNotify(e, notifyClass) {
      var target = e.target;
      while (target.className.indexOf(notifyClass) === -1) {
        target = target.parentNode;
      }
      return target.parentNode.removeChild(target);
    },
    reset() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style></style>

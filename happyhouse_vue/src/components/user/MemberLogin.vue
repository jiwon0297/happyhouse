<template>
  <div style="text-align: center">
    <h3 style="font-family: 'GowunDodum-Regular'">로그인</h3>
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
            <br />
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
              class="md-simple md-danger md-lg"
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
              class="md-simple md-success md-lg"
              @click="findpwd"
              >비밀번호찾기</md-button
            >
            <md-button
              type="button"
              variant="info"
              slot="footer"
              class="md-simple md-default md-lg"
              @click="reset"
              >취소</md-button
            >
          </login-card>
        </form>
      </div>
    </div>

    <modal v-if="classicModal" @close="classicModalHide">
      <template slot="header">
        <h4
          class="modal-title"
          style="text-align: center; font-family: 'GowunDodum-Regular'"
        >
          비밀번호 찾기
        </h4>
        <md-button
          class="md-simple md-just-icon md-round modal-default-button"
          @click="classicModalHide"
        >
          <md-icon>clear</md-icon>
        </md-button>
      </template>

      <template slot="body">
        <md-field class="md-form-group" slot="inputs">
          <md-icon>assignment_ind</md-icon>
          <label>아이디</label>
          <md-input
            id="userid"
            v-model="find.userid"
            required
            placeholder="아이디를 입력하세요."
            @keyup.enter="confirm"
          ></md-input>
        </md-field>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>face</md-icon>
          <label>이름</label>
          <md-input
            id="username"
            v-model="find.username"
            required
            placeholder="이름을 입력하세요."
            @keyup.enter="confirm"
          ></md-input>
        </md-field>
        <md-field class="md-form-group" slot="inputs">
          <md-icon>email</md-icon>
          <label>이메일</label>
          <md-input
            id="email"
            v-model="find.email"
            required
            placeholder="이메일을 입력하세요."
            @keyup.enter="confirm"
          ></md-input>
        </md-field>
      </template>

      <template slot="footer">
        <md-button class="md-simple md-success" type="button" @click="pwdgo"
          >find</md-button
        >
        <md-button
          class="md-danger md-simple"
          type="button"
          @click="classicModalHide"
          >Close</md-button
        >
      </template>
    </modal>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import { mapState, mapActions } from "vuex";
import { Modal } from "@/components";
import http from "@/api/http";

export default {
  name: "MemberLogin",
  components: {
    LoginCard,
    Modal,
  },
  data() {
    return {
      user: {
        userid: null,
        userpwd: null,
      },
      find: {
        userid: null,
        username: null,
        email: null,
      },
      loginerror: false,
      classicModal: false,
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["userConfirm", "getUserInfo"]),

    findpwd() {
      this.classicModal = true;
    },

    pwdgo() {
      if (this.find.userid && this.find.email && this.find.username) {
        const params = {
          userid: this.find.userid,
          email: this.find.email,
          username: this.find.username,
        };
        http
          .get(`/user/findpwd`, { params })
          .then(({ data }) => {
            if (!data) {
              alert("찾으시는 사용자 정보가 없습니다.");
              this.find = {};
            } else {
              alert("고객님의 비밀번호는 [" + data + "] 입니다");
              this.find = {};
              this.classicModalHide();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else alert("모두 입력하였는지 확인해주세요.");
    },

    classicModalHide() {
      this.classicModal = false;
    },

    onSubmit(event) {
      event.preventDefault();
      this.confirm();
    },

    async confirm() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      if (this.isLogin) {
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

<template>
  <div style="text-align: center">
    <h3 style="font-family: 'GowunDodum-Regular'">로그인</h3>
    <div class="md-layout">
      <div class="md-layout-item md-size-70" style="margin: 0 auto">
        <form @submit="onSubmit" @reset="onReset">
          <login-card header-color="orange">
            <br />
            <h4 slot="title" class="card-title">Sign Up</h4>
            <br />
            <md-field
              :class="[
                iderr === true ? 'md-form group md-error' : 'md-form group',
              ]"
              slot="inputs"
            >
              <md-icon>assignment_ind</md-icon>
              <label>아이디</label>
              <md-input
                id="userid"
                v-model="userid"
                @input="searchChangeFunc($event)"
                required="required"
              ></md-input>
              <p
                v-if="!iderr && userid.length != 0"
                style="color: green; margin-right: 40px"
              >
                사용 가능한 아이디입니다.
              </p>
              <p
                v-if="iderr && userid.length != 0"
                style="color: red; margin-right: 40px"
              >
                사용불가능한 아이디입니다.
              </p>
            </md-field>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>face</md-icon>
              <label>이름</label>
              <md-input id="username" v-model="username" required></md-input>
            </md-field>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>email</md-icon>
              <label>이메일</label>
              <md-input
                id="email"
                v-model="email"
                type="email"
                required
              ></md-input>
            </md-field>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>lock_outline</md-icon>
              <label>비밀번호</label>
              <md-input
                id="userpwd"
                v-model="userpwd"
                type="password"
                required
              ></md-input>
            </md-field>
            <md-field
              :class="[
                pwderr === true ? 'md-form group md-error' : 'md-form group',
              ]"
              slot="inputs"
            >
              <md-icon>https</md-icon>
              <label>비밀번호확인</label>
              <md-input
                id="pwdchk"
                v-model="pwdchk"
                type="password"
                @input="pwdchkFunc($event)"
                required
              ></md-input>
              <p v-if="pwderr" style="color: red; margin-right: 40px">
                비밀번호가 맞지 않습니다.
              </p>
            </md-field>
            <md-field class="md-form-group" slot="inputs">
              <md-icon>house</md-icon>
              <b-form-select
                id="sidoName"
                v-model="sidoCode"
                :options="sidos"
                @change="gugunList"
              ></b-form-select>
              <b-form-select
                id="gugunName"
                v-model="gugunCode"
                :options="guguns"
                @change="dongList"
              ></b-form-select>
              <b-form-select
                id="dongName"
                v-model="dongCode"
                :options="dongs"
                @change="selectAdd"
              ></b-form-select>
            </md-field>
            <md-button
              type="submit"
              slot="footer"
              class="md-simple md-success md-lg"
            >
              가입하기
            </md-button>
            <md-button
              type="reset"
              slot="footer"
              class="md-simple md-danger md-lg"
            >
              취소
            </md-button>
          </login-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import { LoginCard } from "@/components";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "MemberRegister",
  components: {
    LoginCard,
  },
  bodyClass: "index-page",
  data() {
    return {
      userid: "",
      userpwd: "",
      pwdchk: "",
      username: "",
      email: "",
      sidoCode: "",
      gugunCode: "",
      dongCode: "",
      sidoName: "",
      gugunName: "",
      dongName: "",
      iderr: false,
      pwderr: false,
    };
  },

  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg"),
    },
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.getSido();
  },
  computed: {
    ...mapState(["sidos", "guguns", "dongs"]),

    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods: {
    ...mapActions(["getSido", "getGugun", "getDong"]),
    ...mapMutations(["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST", "CLEAR_DONG_LIST"]),

    gugunList() {
      console.log(this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },

    dongList() {
      console.log(this.gugunCode);
      this.CLEAR_DONG_LIST();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode);
    },

    selectAdd() {
      var target1 = document.getElementById("sidoName");
      var target2 = document.getElementById("gugunName");
      var target3 = document.getElementById("dongName");

      this.sidoName = target1.options[target1.selectedIndex].text;
      this.gugunName = target2.options[target2.selectedIndex].text;
      this.dongName = target3.options[target3.selectedIndex].text;

      console.log(this.sidoName);
      console.log(this.gugunName);
      console.log(this.dongName);
    },

    onSubmit(event) {
      event.preventDefault();
      if (this.iderr || this.pwderr) alert("다시 확인해주세요.");
      else this.registUser();
    },

    onReset(event) {
      event.preventDefault();
      this.userid = "";
      this.userpwd = "";
      this.pwdchk = "";
      this.username = "";
      this.email = "";
    },

    registUser() {
      http
        .post(`/user`, {
          userid: this.userid,
          username: this.username,
          userpwd: this.userpwd,
          email: this.email,
          sidoName: this.sidoName,
          gugunName: this.gugunName,
          dongName: this.dongName,
        })
        .then(({ data }) => {
          if (data === "success") {
            let msg = "등록이 완료되었습니다.";
            alert(msg);
            this.$router.push({ name: "login" });
          } else {
            let msg = "등록 처리시 문제가 발생했습니다.";
            alert(msg);
          }
        });
    },

    searchChangeFunc(event) {
      if (this.userid.length >= 4) {
        http.get(`/user/idcheck/` + this.userid).then(({ data }) => {
          if (data === "success") {
            this.iderr = true;
          } else this.iderr = false;
        });
      } else this.iderr = true;
    },

    pwdchkFunc(event) {
      if (this.pwdchk === this.userpwd) {
        this.pwderr = false;
      } else {
        this.pwderr = true;
      }
    },
  },
};
</script>

<style></style>

<template>
  <div class="section profile-content">
    <div class="md-layout">
      <div class="md-layout-item md-size-50 mx-auto">
        <div
          class="profile"
          style="display: flex; align-items: center; justify-content: center"
        >
          <div
            id="profileimage"
            class="circle-with-text"
            v-text="userInfo.username.charAt(0).toUpperCase()"
            style="
              justify-content: center;
              align-items: center;
              border-radius: 100%;
              text-align: center;
              display: flex;
              width: 160px;
              height: 160px;
              color: white;
              background-color:#15524c
              font-weight: bold;
              font-size: 80px;
              border-bottom: 15px;
            "
          ></div>
          <!-- <div>
            <img
              :src="img"
              alt="Circle Image"
              class="img-raised rounded-circle img-fluid"
              style="margin-top: 3rem"
            />
          </div> -->
        </div>
        <div class="name" style="text-align: center">
          <h3 class="title">{{ userInfo.userid }}</h3>
          <h6>{{ userInfo.username }}</h6>
        </div>
      </div>
    </div>
    <br />
    <div
      class="md-layout-item"
      style="width: 70%; margin: auto"
      v-if="!isUpdate"
    >
      <nav-tabs-card no-label>
        <template slot="content">
          <md-tabs class="md-danger" md-alignment="left">
            <md-tab id="tab-home" md-label="My Info" md-icon="person">
              <h4>Email</h4>
              <p>{{ userInfo.email }}</p>
              <h4>Address</h4>
              <p>
                {{ userInfo.sidoName }} {{ userInfo.gugunName }}
                {{ userInfo.dongName }}
              </p>
              <hr />
              <p
                style="
                  font-family: serif;
                  font-style: Italic;
                  font-weight: bold;
                "
              >
                Member Since {{ userInfo.joindate | dateFormat() }}
              </p>
            </md-tab>

            <md-tab id="tab-pages" md-label="Favorites" md-icon="favorite">
              <div v-if="interestapts.length != 0">
                <div v-for="(apt, index) in interestapts" :key="index">
                  <button
                    type="button"
                    style="border-style: none; background-color: transparent"
                    @click="selectApt(apt.dongName, apt.aptName)"
                    @mouseover="colorChange(true)"
                    @mouseout="colorChange(false)"
                    :class="{ 'mouse-over-bgcolor': isColor }"
                  >
                    <i class="md-icon md-icon-font md-theme-default"
                      >favorite</i
                    >
                    {{ apt.dongName }} | {{ apt.aptName }}
                  </button>
                </div>
              </div>

              <div v-else>
                <h4>등록된 관심 매물이 없습니다.</h4>
              </div>
            </md-tab>
          </md-tabs>
        </template>
      </nav-tabs-card>
    </div>
    <div
      class="md-layout-item"
      style="width: 70%; margin: auto"
      v-if="isUpdate"
    >
      <nav-tabs-card no-label>
        <template slot="content">
          <md-tabs class="md-primary" md-alignment="left">
            <md-tab id="tab-home" md-label="My Info" md-icon="person">
              <form @submit="onSubmit">
                <md-field>
                  <md-icon>email</md-icon>
                  <label>이메일</label>
                  <md-input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  ></md-input>
                </md-field>
                <md-field>
                  <md-icon>lock_outline</md-icon>
                  <label>비밀번호</label>
                  <md-input
                    id="userpwd"
                    v-model="userpwd"
                    type="password"
                    required
                  ></md-input>
                </md-field>
                <md-field :class="[pwderr === true ? 'md-error' : '']">
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
                <md-field>
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
                  variant="success"
                  class="md-success md-simple"
                  style="border: 1px solid; margin-right: 1rem"
                  >수정</md-button
                >
                <md-button
                  type="button"
                  variant="danger"
                  class="md-danger md-simple"
                  style="border: 1px solid"
                  @click="usermodify"
                >
                  취소
                </md-button>
              </form>
            </md-tab>
          </md-tabs>
        </template>
      </nav-tabs-card>
    </div>
    <div style="display: flex; justify-content: center">
      <md-button
        type="button"
        variant="default"
        class="md-default md-simple"
        style="border: 1px solid; margin-right: 1rem"
        @click="usermodify"
        v-if="!isUpdate"
        >정보수정</md-button
      >
      <md-button type="button" class="md-default" @click="deleteUser"
        >회원탈퇴</md-button
      >
    </div>

    <modal v-if="classicModal" @close="classicModalHide">
      <template slot="header">
        <h4 class="modal-title">아파트 상세 정보</h4>
        <md-button
          class="md-simple md-just-icon md-round modal-default-button"
          @click="classicModalHide"
        >
          <md-icon>clear</md-icon>
        </md-button>
      </template>

      <template slot="body">
        <house-detail />
      </template>

      <template slot="footer">
        <md-button
          v-if="isLiked"
          class="md-simple md-just-icon md-rose"
          @click="likeChange(false)"
        >
          <i class="md-icon md-icon-font md-theme-default">favorite</i>
        </md-button>
        <md-button
          v-if="!isLiked"
          class="md-simple md-just-icon md-default"
          @click="likeChange(true)"
        >
          <i class="md-icon md-icon-font md-theme-default">favorite</i>
        </md-button>
        <md-button class="md-danger md-simple" @click="classicModalHide"
          >Close</md-button
        >
      </template>
    </modal>
  </div>
</template>

<script>
import http from "@/api/http";
import moment from "moment";
import { mapState, mapActions, mapMutations } from "vuex";
import { Tabs } from "@/components";
import { NavTabsCard } from "@/components";
import { Modal } from "@/components";
import HouseDetail from "@/components/house/HouseDetail";

export default {
  name: "MemberMyPage",
  components: { Tabs, NavTabsCard, Modal, HouseDetail },
  bodyClass: "profile-page",
  data() {
    return {
      isColor: false,
      classicModal: false,
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") },
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") },
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") },
      ],
      isUpdate: false,
      userpwd: "",
      pwdchk: "",
      email: "",
      sidoCode: "",
      gugunCode: "",
      dongCode: "",
      sidoName: "",
      gugunName: "",
      dongName: "",
      pwderr: false,
      interestapts: [],
      isLiked: false,
      house: Object,
    };
  },
  props: {
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg"),
    },
  },
  computed: {
    ...mapState(["userInfo", "sidos", "guguns", "dongs", "houses"]),
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YYYY-MM-DD");
    },
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.getSido();
    this.email = this.userInfo.email;
    this.userid = this.userInfo.userid;
    this.sidoName = this.userInfo.sidoName;
    this.gugunName = this.userInfo.gugunName;
    this.dongName = this.userInfo.dongName;
    const params = { userid: this.userid };
    http
      .get(`/interest/apt`, { params })
      .then(({ data }) => {
        this.interestapts = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    ...mapActions([
      "getSido",
      "getGugun",
      "getDong",
      "getUserInfo",
      "detailHouse",
      "getHouseList",
    ]),
    ...mapMutations([
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
      "SET_IS_LOGIN",
      "SET_USER_INFO",
    ]),

    selectApt(dongName, aptName) {
      const params = {
        userid: this.userInfo.userid,
        dongName: dongName,
        aptName: aptName,
      };

      http.get(`/interest/apt/count`, { params }).then(({ data }) => {
        if (data === "success") {
          this.isLiked = true;
        }
      });

      this.classicModal = true;
      //∂this.detailStore(this.store);
      http
        .get(`/map/dongcode2/` + dongName)
        .then(({ data }) => {
          this.getHouseList(data.dongCode);
          this.houses.forEach((house) => {
            if (house.아파트 === aptName) {
              this.detailHouse(house);
              this.house = house;
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    likeChange(flag) {
      this.isLiked = flag;
      if (this.isLiked == true) {
        // 유저의 관심매물에 추가
        http
          .post(`/interest/apt`, {
            userid: this.userInfo.userid,
            dongName: this.house.법정동,
            aptName: this.house.아파트,
          })
          .then(({ data }) => {
            let msg = "등록 처리시 문제가 발생했습니다.";
            if (data === "success") {
              msg = "등록이 완료되었습니다.";
            }
          });
      } else {
        // 유저의 관심매물에서 삭제
        const params = {
          userid: this.userInfo.userid,
          dongName: this.house.법정동,
          aptName: this.house.아파트,
        };

        http.delete(`/interest/apt`, { params }).then(({ data }) => {
          let msg = "삭제 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "삭제가 완료되었습니다.";
          }
        });
      }
    },

    colorChange(flag) {
      this.isColor = flag;
    },
    classicModalHide() {
      this.classicModal = false;
      if (!this.isLiked) this.$router.go(0);
    },

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
      if (this.pwderr) alert("다시 확인해주세요.");
      else this.modifyUser();
    },

    modifyUser() {
      http
        .put(`/user/info/` + this.userid, {
          userid: this.userid,
          userpwd: this.userpwd,
          email: this.email,
          sidoName: this.sidoName,
          gugunName: this.gugunName,
          dongName: this.dongName,
        })
        .then(({ data }) => {
          if (data === "success") {
            let msg = "정보가 수정되었습니다. 다시 로그인해주세요.";
            alert(msg);
            this.onClickLogout();
            this.$router.push({ name: "login" });
          } else {
            let msg = "등록 처리시 문제가 발생했습니다.";
            alert(msg);
          }
        });
    },

    deleteUser() {
      if (confirm("정말로 탈퇴하시겠습니까?")) {
        http.delete(`/user/info/` + this.userid).then(({ data }) => {
          let msg = "삭제 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "탈퇴처리가 완료되었습니다.";
            alert(msg);
            this.onClickLogout();
            this.$router.push({ name: "home" });
          } else alert(msg);
        });
      }
    },

    onClickLogout() {
      // console.log("memberStore : ", ms);
      this.SET_IS_LOGIN(false);
      this.SET_USER_INFO(null);
      sessionStorage.removeItem("access-token");
    },

    pwdchkFunc(event) {
      if (this.pwdchk === this.userpwd) {
        this.pwderr = false;
      } else {
        this.pwderr = true;
      }
    },

    usermodify() {
      this.isUpdate = !this.isUpdate;
    },
  },

  mounted() {
    let color = "#";
    const letters = [
      "429e5b",
      "425e9e",
      "784676",
      "f595ac",
      "f7d086",
      "74ba54",
      "1e616b",
      "674d94",
    ];

    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById("profileimage").style.backgroundColor = color;
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>

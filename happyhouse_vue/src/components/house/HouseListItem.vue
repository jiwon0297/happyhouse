<template>
  <div>
    <div>
      <tr
        class="md-table-row"
        @click="selectHouse"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        :class="{ 'mouse-over-bgcolor': isColor }"
      >
        <td>
          <div
            style="
              background-color: #3c84a6;
              color: white;
              width: 20px;
              height: 20px;
              border-radius: 5px;
              text-align: center;
              padding-top: 0.5px;
            "
          >
            {{ index }}
          </div>
        </td>
        <td class="md-table-cell">
          {{ house.아파트 }}
        </td>
      </tr>
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
            @click="likeChange(false, selectHouse.아파트)"
          >
            <i class="md-icon md-icon-font md-theme-default">favorite</i>
          </md-button>
          <md-button
            v-if="!isLiked"
            class="md-simple md-just-icon md-default"
            @click="likeChange(true, selectHouse.아파트)"
          >
            <i class="md-icon md-icon-font md-theme-default">favorite</i>
          </md-button>
          <md-button class="md-danger md-simple" @click="classicModalHide"
            >Close</md-button
          >
        </template>
      </modal>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HouseDetail from "@/components/house/HouseDetail.vue";
import { Modal } from "@/components";
import { mapState } from "vuex";
import http from "@/api/http";

export default {
  name: "HouseListItem",
  components: {
    HouseDetail,
    Modal,
  },
  data() {
    return {
      isColor: false,
      classicModal: false,
      isLiked: false,
    };
  },
  props: {
    house: Object,
    index: Number,
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),
  },
  methods: {
    ...mapActions(["detailHouse"]),
    selectHouse() {
      const params = {
        userid: this.userInfo.userid,
        dongName: this.house.법정동,
        aptName: this.house.아파트,
      };

      http.get(`/interest/apt/count`, { params }).then(({ data }) => {
        if (data === "success") {
          this.isLiked = true;
        }
      });

      console.log("listRow : ", this.house);
      // this.$store.dispatch("getHouse", this.house);
      this.classicModal = true;
      this.detailHouse(this.house);
    },
    colorChange(flag) {
      this.isColor = flag;
    },
    classicModalHide() {
      this.classicModal = false;
    },
    likeChange(flag, aptName) {
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
  },
};
</script>

<style scoped>
.apt {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>

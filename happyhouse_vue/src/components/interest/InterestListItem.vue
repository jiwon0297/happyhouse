<template>
  <div>
    <div>
      <tr
        class="m-2"
        @click="selectApt(interestlist.dongName, interestlist.aptName)"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        :class="{ 'mouse-over-bgcolor': isColor }"
      >
        <td>[{{ interestlist.dongName.trim() }}] {{ interestlist.aptName }}</td>
      </tr>
      <modal v-if="classicModal" @close="classicModalHide">
        <template slot="header">
          <h4 class="modal-title">관심매물 상세 정보</h4>
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HouseDetail from "@/components/house/HouseDetail.vue";
import { Modal } from "@/components";
import { mapState } from "vuex";
import http from "@/api/http";
export default {
  name: "InterestListItem",
  components: {
    HouseDetail,
    Modal,
  },
  data() {
    return {
      isColor: false,
      classicModal: false,
      isLiked: false,
      house: Object,
    };
  },
  props: {
    interestlist: [],
  },
  computed: {
    ...mapState(["isLogin", "userInfo", "houses"]),
  },
  methods: {
    ...mapActions(["detailHouse", "getHouseList"]),

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

    colorChange(flag) {
      this.isColor = flag;
    },
    classicModalHide() {
      this.classicModal = false;
      this.$router.go(0);
    },
  },
  created() {},
};
</script>

<style></style>

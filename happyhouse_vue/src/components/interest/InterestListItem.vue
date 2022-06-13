<template>
  <div>
    <br />
    <table style="text-align: left; height: 100%">
      <tr
        class="colorchange"
        @click="selectApt(interestlist.dongName, interestlist.aptName)"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        :class="{ 'mouse-over-bgcolor': isColor }"
        style="text-align: left"
      >
        <td>❤︎ [{{ interestlist.dongName.trim() }}]</td>
        <td>{{ interestlist.aptName }}아파트</td>
        <td>
          <button
            style="
              border: none;
              background-color: transparent;
              color: gray;
              margin-left: 5px;
            "
            type="button"
            @click="deleteinterest(interestlist)"
          >
            X
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HouseDetail from "@/components/interest/HouseDetail.vue";
import { mapState } from "vuex";
import http from "@/api/http";
export default {
  name: "InterestListItem",
  components: {
    HouseDetail,
  },
  data() {
    return {
      isColor: false,
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

    deleteinterest(interestlist) {
      if (confirm("정말로 삭제하시겠습니까?")) {
        // 유저의 관심매물에서 삭제
        const params = {
          userid: this.userInfo.userid,
          dongName: interestlist.dongName,
          aptName: interestlist.aptName,
        };

        http.delete(`/interest/apt`, { params }).then(({ data }) => {
          let msg = "삭제 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "삭제가 완료되었습니다.";
            alert("삭제가 완료되었습니다.");
            this.$router.go(0);
          }
        });
      }
    },

    colorChange(flag) {
      this.isColor = flag;
    },
  },
  created() {},
};
</script>

<style scoped>
.colorchange:hover {
  font-weight: bold;
}
</style>

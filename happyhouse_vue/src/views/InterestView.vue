<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" id="bg">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1 style="font-size: 60pt">Favorites</h1>
              <h4>관심매물</h4>
              <br />
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised" style="width: 85%; transform: translateX(6%)">
      <div class="section section-basic">
        <div class="container">
          <interest-list :interestlists="interestlists" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { headerStyleObj } from "@/components/modules/utils.js";
import http from "@/api/http";
import InterestList from "@/components/interest/InterestList";
import { mapState } from "vuex";

export default {
  name: "InterestView",
  components: {
    InterestList,
  },
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg"),
    },
  },
  data() {
    return {
      classicModal: false,
      interestlists: [],
    };
  },
  created() {
    const params = { userid: this.userInfo.userid };
    http
      .get(`/interest/apt`, { params })
      .then(({ data }) => {
        this.interestlists = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>
<style scoped>
#bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("@/assets/img/nyc03.jpg");
  height: 500px;
}
</style>

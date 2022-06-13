<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" id="bg">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1 style="font-size: 60pt; font-family: 'GowunDodum-Regular'">
                Apt Service
              </h1>
              <h4 style="font-family: 'GowunDodum-Regular'">
                아파트 실거래가 조회
              </h4>
              <br />
              <house-search-bar @dongname="dongname"></house-search-bar>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised" style="width: 85%; transform: translateX(6%)">
      <div class="section section-basic">
        <div class="container">
          <house-list :dongName="dongName" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HouseSearchBar from "@/components/house/HouseSearchBar.vue";
import HouseList from "@/components/house/HouseList.vue";
import HouseDetail from "@/components/house/HouseDetail.vue";
import { Modal } from "@/components";

export default {
  name: "HouseView",
  components: {
    HouseSearchBar,
    HouseList,
    HouseDetail,
    Modal,
  },
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/nyc01.jpg"),
    },
  },
  data() {
    return {
      classicModal: false,
      dongName: "",
    };
  },

  methods: {
    classicModalHide() {
      this.classicModal = false;
    },

    dongname(data) {
      this.dongName = data;
    },
  },
};
</script>
<style scoped>
#bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("@/assets/img/nyc04.jpg");
  height: 500px;
}
</style>

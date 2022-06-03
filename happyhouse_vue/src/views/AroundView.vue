<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" id="bg">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1 style="font-size: 60pt">Around Service</h1>
              <h4>관심 지역 주변 상점 조회</h4>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised" style="width: 85%; transform: translateX(6%)">
      <div class="section section-basic">
        <div class="container">
          <store-list />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StoreList from "@/components/around/StoreList.vue";
import StoreDetail from "@/components/around/StoreDetail.vue";
import { Modal } from "@/components";
import { headerStyleObj } from "@/components/modules/utils.js";

export default {
  name: "HouseView",
  components: {
    StoreList,
    StoreDetail,
    Modal,
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
    };
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    },
  },
  computed: {},
};
</script>
<style scoped>
#bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("@/assets/img/nyc01.jpg");
  height: 500px;
}
</style>

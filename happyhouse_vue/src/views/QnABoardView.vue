<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" id="bg">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1 style="font-size: 60pt; font-family: 'GowunDodum-Regular'">
                QnA
              </h1>
              <h4 style="font-family: 'GowunDodum-Regular'">
                무엇이든 물어보세요
              </h4>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised" style="width: 85%; transform: translateX(6%)">
      <div class="section section-basic">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "QnABoardView",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg"),
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("@/assets/img/seoul02.jpg");
  height: 500px;
}
</style>

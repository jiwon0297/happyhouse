<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    style="background-color: white"
  >
    <div class="container">
      <div
        class="copyright"
        style="margin: auto; font-family: 'GowunDodum-Regular'"
      >
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by SSAFY
        SEOUL_15_차유진_박지원
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>

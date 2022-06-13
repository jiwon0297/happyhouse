<template>
  <div>
    <br />
    <table
      v-if="house"
      class="bv-example-row"
      style="text-align: left; height: 30vh; margin-left: 5rem"
    >
      <colgroup>
        <col width="80vw" />
        <col width="200vw" />
      </colgroup>
      <tr style="text-align: left">
        <td>일련번호</td>
        <td>{{ house.일련번호 }}</td>
      </tr>
      <tr style="text-align: left">
        <td>아파트명</td>
        <td>{{ house.아파트 }}아파트</td>
      </tr>
      <tr style="text-align: left">
        <td>법정동</td>
        <td>{{ house.법정동 }}</td>
      </tr>
      <tr style="text-align: left">
        <td>층수</td>
        <td>{{ house.층 }}층</td>
      </tr>
      <tr style="text-align: left">
        <td>전용면적</td>
        <td>{{ house.전용면적 }}m²</td>
      </tr>
      <tr style="text-align: left">
        <td>거래일자</td>
        <td>{{ house.년 }}.{{ house.월 }}.{{ house.일 }}</td>
      </tr>
      <tr style="text-align: left">
        <td>거래금액</td>
        <td>{{ house.거래금액 }}만원</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HouseDetail",
  computed: {
    ...mapState(["house", "userInfo"]),
    // house() {
    //   return this.$store.state.house;
    // },
  },
  methods: {},

  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>

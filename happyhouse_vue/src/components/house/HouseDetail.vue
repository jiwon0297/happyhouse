<template>
  <table
    v-if="house"
    class="bv-example-row"
    style="text-align: center; margin: auto"
  >
    <tr>
      <td>
        <h3>{{ house.아파트 }}</h3>
      </td>
    </tr>
    <tr style="text-align: left">
      <td>- 일련번호 : {{ house.일련번호 }}</td>
    </tr>
    <tr style="text-align: left">
      <td>- 아파트 이름 : {{ house.아파트 }}</td>
    </tr>
    <tr style="text-align: left">
      <td>- 법정동 : {{ house.법정동 }}</td>
    </tr>
    <tr style="text-align: left">
      <td>- 층수 : {{ house.층 }}층</td>
    </tr>
    <tr style="text-align: left">
      <td>
        - 거래금액 :
        {{ (parseInt(house.거래금액.replace(",", "")) * 10000) | price }}원
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HouseDetail",
  computed: {
    ...mapState(["house"]),
    // house() {
    //   return this.$store.state.house;
    // },
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>

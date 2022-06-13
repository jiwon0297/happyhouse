<template>
  <table v-if="house" class="bv-example-row" style="margin: auto">
    <colgroup>
      <col width="10%" />
      <col width="30%" />
      <col width="20%" />
      <col width="40%" />
    </colgroup>
    <tr style="text-align: left; width: 100px">
      <td style="text-align: center">-</td>
      <td style="text-align: left">일련번호</td>
      <td style="text-align: center">:</td>
      <td>{{ house.일련번호 }}</td>
    </tr>
    <tr style="text-align: left">
      <td style="text-align: center">-</td>
      <td>아파트명</td>
      <td style="text-align: center">:</td>
      <td>{{ house.아파트 }}</td>
    </tr>
    <tr style="text-align: left">
      <td style="text-align: center">-</td>
      <td>법정동</td>
      <td style="text-align: center">:</td>
      <td>{{ house.법정동 }}</td>
    </tr>
    <tr style="text-align: left">
      <td style="text-align: center">-</td>
      <td>층수</td>
      <td style="text-align: center">:</td>
      <td>{{ house.층 }}층</td>
    </tr>
    <tr style="text-align: left">
      <td style="text-align: center">-</td>
      <td>전용면적</td>
      <td style="text-align: center">:</td>
      <td>{{ house.전용면적 }}m²</td>
    </tr>
    <tr style="text-align: left">
      <td style="text-align: center">-</td>
      <td>거래일자</td>
      <td style="text-align: center">:</td>
      <td>{{ house.년 }}.{{ house.월 }}.{{ house.일 }}</td>
    </tr>
    <tr style="text-align: left">
      <td style="text-align: center">-</td>
      <td>거래금액</td>
      <td style="text-align: center">:</td>
      <td>{{ house.거래금액 }}만원</td>
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

<template>
  <table
    v-if="store"
    class="bv-example-row"
    style="text-align: center; margin: auto"
  >
    <tr>
      <td>
        <h3 style="font-family: 'GowunDodum-Regular'">
          {{ store.bizesNm }} | {{ store.ksicNm }}
        </h3>
      </td>
    </tr>
    <tr class="mb-2 mt-1"></tr>
    <tr style="text-align: left">
      <td>- 대분류 : {{ store.indsLclsNm }}</td>
    </tr>
    <tr style="text-align: left">
      <td>- 중분류 : {{ store.indsMclsNm }}</td>
    </tr>
    <tr style="text-align: left">
      <td>- 소분류 : {{ store.indsSclsNm }}</td>
    </tr>
    <tr style="text-align: left">
      <td>- 주소 : {{ store.rdnmAdr }}</td>
    </tr>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StoreDetail",
  computed: {
    ...mapState(["store"]),
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

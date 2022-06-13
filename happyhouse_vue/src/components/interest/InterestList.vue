<template>
  <div v-if="interestlists.length != 0">
    <tr>
      <interest-list-item
        v-for="(interestlist, index) in interestlists"
        :key="index"
        :interestlist="interestlist"
      />
    </tr>
  </div>
  <div v-else>
    <td
      style="
        font-family: 'GowunDodum-Regular';
        text-align: center;
        margin: auto;
      "
    >
      관심매물이 없습니다.
    </td>
  </div>
</template>

<script>
import InterestListItem from "@/components/interest/InterestListItem";

export default {
  name: "InterestList",
  props: {
    interestlists: [],
  },
  components: {
    InterestListItem,
  },
  data() {
    return {};
  },
  computed: {},

  methods: {},
};
</script>

<style></style>

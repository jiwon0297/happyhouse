<template>
  <div>
    <div v-if="interestlists.length != 0">
      <div>
        <interest-list-item
          v-for="(interestlist, index) in interestlists"
          :key="index"
          :interestlist="interestlist"
        />
      </div>
    </div>
    <div v-else>
      <h4>관심매물이 없습니다.</h4>
    </div>
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

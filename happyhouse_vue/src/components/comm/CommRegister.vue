<template>
  <div>
    <h2 style="text-align: center">글작성</h2>
    <hr />
    <br />
    <CommInputItem type="register" />
  </div>
</template>

<script>
import CommInputItem from "@/components/comm/item/CommInputItem.vue";

export default {
  name: "CommWrite",
  components: {
    CommInputItem,
  },
};
</script>

<style></style>

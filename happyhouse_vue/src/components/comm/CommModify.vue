<template>
  <div>
    <h2 style="text-align: center">글수정</h2>
    <hr />
    <br />
    <CommInputItem type="modify" />
  </div>
</template>

<script>
import CommInputItem from "@/components/comm/item/CommInputItem.vue";

export default {
  name: "CommModify",
  components: {
    CommInputItem,
  },
};
</script>

<style></style>

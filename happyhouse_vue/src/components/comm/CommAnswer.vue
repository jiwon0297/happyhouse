<template>
  <div>
    <h2 style="text-align: center; font-family: 'GowunDodum-Regular'">
      답변작성
    </h2>
    <hr />
    <br />
    <CommInputItem type="comm" />
  </div>
</template>

<script>
import CommInputItem from "@/components/comm/item/CommInputItem.vue";

export default {
  name: "CommAnswer",
  components: {
    CommInputItem,
  },
};
</script>

<style></style>

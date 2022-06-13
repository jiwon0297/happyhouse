<template>
  <div>
    <h2 style="text-align: center; font-family: 'GowunDodum-Regular'">
      글작성
    </h2>
    <hr />
    <br />
    <NoticeInputItem type="register" />
  </div>
</template>

<script>
import NoticeInputItem from "@/components/notice/item/NoticeInputItem.vue";

export default {
  name: "NoticeWrite",
  components: {
    NoticeInputItem,
  },
};
</script>

<style></style>

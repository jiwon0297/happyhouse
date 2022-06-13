<template>
  <div>
    <h2 style="text-align: center; font-family: 'GowunDodum-Regular'">
      글수정
    </h2>
    <hr />
    <br />
    <NoticeInputItem type="modify" />
  </div>
</template>

<script>
import NoticeInputItem from "@/components/notice/item/NoticeInputItem.vue";

export default {
  name: "NoticeModify",
  components: {
    NoticeInputItem,
  },
};
</script>

<style></style>

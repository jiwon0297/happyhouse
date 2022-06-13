<template>
  <div>
    <h2 style="text-align: center; font-family: 'GowunDodum-Regular'">
      글수정
    </h2>
    <hr />
    <br />
    <QnAInputItem type="modify" />
  </div>
</template>

<script>
import QnAInputItem from "@/components/qna/item/QnAInputItem.vue";

export default {
  name: "QnAModify",
  components: {
    QnAInputItem,
  },
};
</script>

<style></style>

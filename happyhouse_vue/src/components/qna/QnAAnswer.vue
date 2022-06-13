<template>
  <div>
    <h2 style="text-align: center; font-family: 'GowunDodum-Regular'">
      답변작성
    </h2>
    <hr />
    <br />
    <QnAInputItem type="qna" />
  </div>
</template>

<script>
import QnAInputItem from "@/components/qna/item/QnAInputItem.vue";

export default {
  name: "QnAAnswer",
  components: {
    QnAInputItem,
  },
};
</script>

<style></style>

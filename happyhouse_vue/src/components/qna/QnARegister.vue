<template>
  <div>
    <h2 style="text-align: center; font-family: 'GowunDodum-Regular'">
      글작성
    </h2>
    <hr />
    <br />
    <QnAInputItem type="register" />
  </div>
</template>

<script>
import QnAInputItem from "@/components/qna/item/QnAInputItem.vue";

export default {
  name: "QnAWrite",
  components: {
    QnAInputItem,
  },
};
</script>

<style></style>

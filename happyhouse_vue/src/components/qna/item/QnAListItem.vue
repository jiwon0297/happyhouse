<template>
  <md-table-row style="text-align: center">
    <td class="md-table-cell" style="text-align: center; width: 10%">
      {{ index }}
    </td>
    <td
      class="md-table-cell"
      style="text-align: center; width: 20%"
      v-if="replynum === 0"
    >
      <badge type="default">미답변</badge>
    </td>
    <td class="md-table-cell" style="text-align: center; width: 30%" v-else>
      <badge type="success">답변완료</badge>
    </td>
    <td class="md-table-cell" style="text-align: center; width: 10%">
      <router-link
        :to="{ name: 'QnADetail', params: { articleno: articleno } }"
        style="color: darkblue"
        >{{ subject }}
      </router-link>
    </td>
    <td class="md-table-cell" style="text-align: center; width: 20%">
      {{ userid }}
    </td>
    <td class="md-table-cell" style="text-align: center; width: 20%">
      {{ regtime | dateFormat() }}
    </td>
  </md-table-row>
</template>

<script>
import http from "@/api/http";
import moment from "moment";
import { Badge } from "@/components";

export default {
  name: "QnAListItem",
  components: {
    Badge,
  },
  props: {
    articleno: Number,
    userid: String,
    subject: String,
    parentno: Number,
    regtime: String,
    index: Number,
  },
  data() {
    return {
      replynum: Number,
    };
  },
  created() {
    http.get(`/qnaboard/count/` + this.articleno).then(({ data }) => {
      this.replynum = data;
    });
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YYYY-MM-DD");
    },
  },
};
</script>

<style></style>

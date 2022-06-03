<template>
  <md-table-row style="text-align: center">
    <td class="md-table-cell" style="text-align: center; width: 20%">
      {{ index }}
    </td>
    <td class="md-table-cell" style="text-align: center; width: 40%">
      <router-link
        :to="{ name: 'NoticeDetail', params: { articleno: articleno } }"
        style="color: darkblue"
        >{{ subject }}
      </router-link>
    </td>
    <td class="md-table-cell" style="text-align: center; width: 30%">
      {{ userid }}
    </td>
    <td class="md-table-cell" style="text-align: center; width: 30%">
      {{ regtime | dateFormat }}
    </td>
  </md-table-row>
</template>

<script>
import http from "@/api/http";
import moment from "moment";
import { Badge } from "@/components";

export default {
  name: "NoticeListItem",
  components: {
    Badge,
  },
  props: {
    articleno: Number,
    userid: String,
    subject: String,
    regtime: String,
    originfile: String,
    savefile: String,
    savefolder: String,
    index: Number,
  },
  data() {
    return {
      replynum: Number,
    };
  },
  created() {
    http.get(`/noticeboard/count/` + this.articleno).then(({ data }) => {
      this.replynum = data;
    });
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YY.MM.DD");
    },
  },
};
</script>

<style></style>

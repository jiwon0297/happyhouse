<template>
  <md-table-row>
    <td class="md-table-cell">{{ index }}</td>
    <td class="md-table-cell">
      <router-link
        :to="{ name: 'CommDetail', params: { articleno: articleno } }"
        style="color: darkblue"
        >{{ subject }}
      </router-link>
    </td>
    <td class="md-table-cell" l style="text-align: center">
      {{ userid }}
    </td>
    <td class="md-table-cell" style="text-align: center">
      {{ regtime | dateFormat() }}
    </td>
  </md-table-row>
</template>

<script>
import http from "@/api/http";
import moment from "moment";
import { Badge } from "@/components";

export default {
  name: "CommListItem",
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
    http.get(`/commboard/count/` + this.articleno).then(({ data }) => {
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

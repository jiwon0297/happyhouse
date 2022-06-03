<template>
  <div class="md-layout-item md-size-100" style="text-align: center">
    <md-table
      style="text-align: center"
      v-for="com in paginatedData"
      :key="com.commentno"
    >
      <tr>
        <td
          width="10%"
          style="text-align: left; padding-left: 10px; font-weight: bold"
        >
          {{ com.userid }}
        </td>
        <td width="65%" style="text-align: left">{{ com.comment }}</td>
        <td width="25" style="font-size: 80%; color: gray">
          {{ com.regtime | dateFormat() }}
        </td>
        <td width="5%" style="text-align: right">
          <button
            v-if="com.userid === userInfo.userid"
            @click="commentedit(com)"
            style="border-style: none; background-color: transparent"
          >
            <i class="md-icon md-icon-font md-theme-default">edit</i>
          </button>
        </td>
        <td width="5%" style="text-align: right">
          <button
            v-if="com.userid === userInfo.userid"
            @click="deleteComment(com)"
            style="border-style: none; background-color: transparent"
          >
            <i class="md-icon md-icon-font md-theme-default">delete</i>
          </button>
        </td>
      </tr>
    </md-table>
    <div style="text-align: center; margin-top: 20px" v-if="comments.length">
      <md-button
        class="md-default md-simple md-sm"
        :disabled="pageNum === 0"
        @click="prevPage"
        style="margin-top: -3px; border: 1px solid lightgray"
      >
        Prev
      </md-button>
      <span style="margin-left: 5px; margin-right: 10px">
        {{ pageNum + 1 }} / {{ pageCount }}</span
      >
      <md-button
        class="md-default md-simple md-sm"
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        style="margin-top: -3px; border: 1px solid lightgray"
      >
        Next
      </md-button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import http from "@/api/http";
import { mapState } from "vuex";

export default {
  name: "CommentsList",
  data() {
    return {
      pageNum: 0,
      isUpdate: false,
    };
  },
  props: {
    comments: [],
    pageSize: {
      type: Number,
      required: false,
      default: 5,
    },
  },

  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    deleteComment(comment) {
      if (confirm("정말로 삭제하시겠습니까?")) {
        http.delete(`/comments/` + comment.commentno).then(({ data }) => {
          let msg = "삭제 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "삭제가 완료되었습니다.";
          }
          alert(msg);
          // 현재 route를 /list로 변경.
          this.$router.go({
            name: "CommDetail",
            params: { articleno: comment.articleno },
          });
        });
      }
    },
    editComment() {
      http
        .put(`/comments/` + this.commetno, {
          commentno: this.commentno,
          userid: this.userid,
          comment: this.comment,
          regtime: this.regtime,
          articleno: this.articleno,
        })
        .then(({ data }) => {
          if (data === "success") {
            let msg = "정보가 수정되었습니다. 다시 로그인해주세요.";
            alert(msg);
            this.$router.push({ name: "comment" });
          } else {
            let msg = "등록 처리시 문제가 발생했습니다.";
            alert(msg);
          }
        });
    },
    commentedit(comment) {
      this.isUpdate = true;
      this.$emit("upup", this.isUpdate);
      this.$emit("commentmodify", comment);
    },
  },

  computed: {
    ...mapState(["isLogin", "userInfo"]),

    pageCount() {
      let listLeng = this.comments.length,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;

      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    paginatedData() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      return this.comments.slice(start, end);
    },
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD HH:mm");
    },
  },
};
</script>

<style></style>

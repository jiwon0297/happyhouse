<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <form @submit="onSubmit" @reset="onReset">
          <md-field>
            <md-input
              type="hidden"
              id="userid"
              disabled
              v-model="article.userid"
              required
              placeholder="작성자"
            ></md-input>
          </md-field>
          <md-field>
            <md-input
              id="subject"
              v-model="article.subject"
              type="text"
              style="text-align: center"
              required
              placeholder="제목을 입력하세요."
            ></md-input>
          </md-field>
          <textarea
            placeholder="내용을 입력하세요."
            rows="20"
            id="content"
            v-model="article.content"
            style="
              border-color: lightgray;
              border-radius: 5px;
              width: 100%;
              text-align: center;
            "
          ></textarea>
          <div style="text-align: center">
            <md-button
              type="submit"
              variant="success"
              class="md-success md-simple"
              style="margin-top: 22px; border: 1px solid"
              v-if="this.type === 'register'"
              >작성</md-button
            >
            <md-button
              type="submit"
              variant="success"
              class="md-success md-simple"
              style="margin-top: 22px; border: 1px solid"
              v-else-if="this.type === 'qna'"
              >답변등록</md-button
            >
            <md-button
              type="submit"
              variant="success"
              class="md-success md-simple"
              style="margin-top: 22px; border: 1px solid"
              v-else
              >수정</md-button
            >

            <md-button
              type="reset"
              variant="default"
              class="md-default md-simple"
              style="margin-top: 22px; border: 1px solid; margin-left: 1rem"
              >취소</md-button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import { mapState } from "vuex";

export default {
  name: "QnAInputItem",
  data() {
    return {
      article: {
        articleno: 0,
        userid: "",
        subject: "",
        content: "",
        parentno: 0,
      },
    };
  },
  props: {
    type: { type: String },
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),
  },
  created() {
    this.article.userid = this.userInfo.userid;
    if (this.type === "modify") {
      http.get(`/qnaboard/${this.$route.params.articleno}`).then(({ data }) => {
        // this.article.articleno = data.article.articleno;
        // this.article.userid = data.article.userid;
        // this.article.subject = data.article.subject;
        // this.article.content = data.article.content;
        this.article = data;
      });
    } else if (this.type === "qna") {
      this.article.parentno = this.$route.params.articleno;
      // this.isUserid = true;
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      let err = true;
      let msg = "";
      !this.article.userid &&
        ((msg = "작성자 입력해주세요"),
        (err = false),
        this.$refs.userid.focus());
      err &&
        !this.article.subject &&
        ((msg = "제목 입력해주세요"),
        (err = false),
        this.$refs.subject.focus());
      err &&
        !this.article.content &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      else if (this.type === "register") this.registArticle();
      else if (this.type === "qna") this.qnaArticle();
      else this.modifyArticle();
    },
    onReset(event) {
      event.preventDefault();
      this.article.articleno = 0;
      this.article.subject = "";
      this.article.content = "";
      this.$router.push({ name: "QnAHome" });
    },
    registArticle() {
      http
        .post(`/qnaboard`, {
          userid: this.article.userid,
          subject: this.article.subject,
          content: this.article.content,
          parentno: 0,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        });
    },
    qnaArticle() {
      http
        .post(`/qnaboard`, {
          userid: this.article.userid,
          subject: this.article.subject,
          content: this.article.content,
          parentno: this.article.parentno,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        });
    },
    modifyArticle() {
      http
        .put(`/qnaboard/${this.article.articleno}`, {
          articleno: this.article.articleno,
          userid: this.article.userid,
          subject: this.article.subject,
          content: this.article.content,
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          if (this.article.parentno === 0) {
            this.$router.push({
              name: "QnADetail",
              params: { articleno: this.article.articleno },
            });
          } else {
            this.$router.push({
              name: "QnADetail",
              params: { articleno: this.article.parentno },
            });
          }
          // 현재 route를 /list로 변경.
        });
    },
    moveList() {
      this.$router.push({ name: "QnAHome" });
    },
  },
};
</script>

<style></style>

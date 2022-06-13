<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <form @submit="onSubmit" @reset="onReset">
          <input
            type="hidden"
            id="userid"
            disabled
            v-model="article.userid"
            required
            placeholder="작성자"
          />
          <md-field>
            <md-input
              id="subject"
              v-model="article.subject"
              type="text"
              required
              style="text-align: center"
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
          <div style="text-align: left">
            <button
              type="button"
              style="
                border: 1px solid;
                margin-left: 1rem;
                color: gray;
                background-color: white;
                border-radius: 7px;
                margin-right: 4px;
                margin-top: 1px;
              "
              @click="selectUploadFile()"
            >
              이미지 선택
            </button>
            <span>
              {{ article.savefile === "" ? "none" : article.savefile }}</span
            >
            <span
              v-if="article.savefile"
              style="cursor: pointer"
              @click="deleteimg"
              ><i class="md-icon md-icon-font md-theme-default">close</i>
            </span>
          </div>
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
              v-else-if="this.type === 'modify'"
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
  name: "NoticeInputItem",
  data() {
    return {
      article: {
        articleno: 0,
        userid: "",
        subject: "",
        content: "",
        parentno: 0,
        savefile: "",
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
    if (this.type === "modify") {
      http
        .get(`/noticeboard/${this.$route.params.articleno}`)
        .then(({ data }) => {
          // this.article.articleno = data.article.articleno;
          // this.article.userid = data.article.userid;
          // this.article.subject = data.article.subject;
          // this.article.content = data.article.content;
          this.article = data;
        });
    } else this.article.userid = this.userInfo.userid;
  },
  methods: {
    deleteimg() {
      this.article.savefile = "";
    },

    selectUploadFile() {
      var vue = this;
      let elem = document.createElement("input");
      // 이미지 파일 업로드 / 동시에 여러 파일 업로드
      elem.id = "image";
      elem.type = "file";
      elem.accept = "image/*";
      // 클릭
      elem.click();
      // 이벤트 감지
      elem.onchange = function () {
        const formData = new FormData();
        for (var index = 0; index < this.files.length; index++) {
          formData.append("fileList", this.files[index]);
        }
        http
          .post("/file/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            vue.article.savefile = response.data;
          })
          .catch((error) => {
            vue.article.savefile = error.message;
          });
      };
    },

    onSubmit(event) {
      event.preventDefault();
      let err = true;
      let msg = "";
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
      else if (this.type === "modify") this.modifyArticle();
    },
    onReset(event) {
      event.preventDefault();
      this.article.articleno = 0;
      this.article.subject = "";
      this.article.content = "";
      this.article.savefile = "";
      this.$router.push({ name: "NoticeHome" });
    },
    registArticle() {
      http
        .post(`/noticeboard`, {
          userid: this.article.userid,
          subject: this.article.subject,
          content: this.article.content,
          savefile: this.article.savefile,
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
        .put(`/noticeboard/${this.article.articleno}`, {
          articleno: this.article.articleno,
          subject: this.article.subject,
          content: this.article.content,
          savefile: this.article.savefile,
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          this.$router.push({
            name: "NoticeDetail",
            params: { articleno: this.article.articleno },
          });
        });
    },
    moveList() {
      this.$router.push({ name: "NoticeHome" });
    },
  },
};
</script>

<style></style>

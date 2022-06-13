<template>
  <div>
    <div>
      <h2 style="text-align: center; font-family: 'GowunDodum-Regular'">
        질문/답변
      </h2>
      <hr />
      <div style="display: flex; justify-content: space-between">
        <md-button
          align="left"
          class="md-default md-simple"
          style="margin-top: 22px; border: 1px solid"
          @click="listArticle"
          >목록</md-button
        >
        <md-button
          align="right"
          class="md-info md-simple"
          style="margin-top: 22px; border: 1px solid; float: right"
          v-if="replynum === 0 && userInfo.userid === 'admin'"
          @click="moveQnAArticle"
        >
          답변하기
        </md-button>
      </div>
    </div>
    <div id="nav-tabs" style="width: 100%">
      <div class="md-layout">
        <div class="md-layout-item md-size-100">
          <nav-tabs-card no-label>
            <template slot="content">
              <h3
                style="
                  color: black;
                  font-weight: bold;
                  font-family: 'GowunDodum-Regular';
                "
              >
                [질문] {{ article.subject }}
              </h3>
              <p style="color: gray">
                {{ article.userid }}
                {{ article.regtime }}
              </p>
              {{ article.content }}
            </template>
          </nav-tabs-card>
        </div>
      </div>
    </div>
    <div style="text-align: center" v-if="userInfo.userid === article.userid">
      <md-button
        @click="moveModifyArticle"
        class="md-success md-simple"
        style="margin-top: 22px; border: 1px solid"
      >
        문의수정
      </md-button>
      <md-button
        @click="deleteArticle"
        class="md-default md-simple"
        style="margin-top: 22px; border: 1px solid; margin-left: 1rem"
      >
        문의삭제
      </md-button>
    </div>
    <div style="text-align: center" v-if="userInfo.userid === 'admin'">
      <md-button
        @click="deleteArticle"
        class="md-danger md-simple"
        style="margin-top: 22px; border: 1px solid"
      >
        문의삭제
      </md-button>
    </div>
    <div>
      <div v-if="replynum === 0" id="nav-tabs">
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <nav-tabs-card no-label>
              <template slot="content">
                <p style="color: black">작성된 답변이 없습니다.</p>
              </template>
            </nav-tabs-card>
          </div>
        </div>
      </div>
      <div v-else id="nav-tabs">
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <nav-tabs-card no-label>
              <template slot="content">
                <h3
                  style="
                    color: black;
                    font-weight: bold;
                    font-family: 'GowunDodum-Regular';
                  "
                >
                  [답변]{{ reply.subject }}
                </h3>
                <p style="color: gray">
                  {{ reply.userid }}
                  {{ reply.regtime }}
                </p>
                {{ reply.content }}
              </template>
            </nav-tabs-card>
          </div>
        </div>
      </div>
      <div
        style="text-align: center"
        v-if="replynum !== 0 && userInfo.userid === 'admin'"
      >
        <md-button
          @click="moveModifyAnswer"
          class="md-success md-simple"
          style="margin-top: 22px; border: 1px solid"
        >
          답변수정
        </md-button>
        <md-button
          @click="deleteAnswer"
          class="md-default md-simple"
          style="margin-top: 22px; border: 1px solid; margin-left: 1rem"
        >
          답변삭제
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
import http from "@/api/http";
import { NavTabsCard } from "@/components";
import { mapState } from "vuex";

export default {
  name: "QnADetail",
  data() {
    return {
      article: {},
      reply: {},
      replynum: Number,
    };
  },
  components: {
    NavTabsCard,
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),

    message() {
      if (this.article.content)
        return this.article.content.split("\n").join("<br>");
      return "";
    },
    replymessage() {
      if (this.reply.content)
        return this.reply.content.split("\n").join("<br>");
      return "";
    },
  },
  created() {
    http.get(`/qnaboard/${this.$route.params.articleno}`).then(({ data }) => {
      this.article = data;
    });
    http
      .get(`/qnaboard/answer/${this.$route.params.articleno}`)
      .then(({ data }) => {
        this.reply = data;
      });
    http
      .get(`/qnaboard/count/${this.$route.params.articleno}`)
      .then(({ data }) => {
        this.replynum = data;
      });
  },
  methods: {
    listArticle() {
      this.$router.push({ name: "QnAHome" });
    },
    moveModifyArticle() {
      this.$router.replace({
        name: "QnAModify",
        params: { articleno: this.article.articleno },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },
    moveModifyAnswer() {
      this.$router.replace({
        name: "QnAModify",
        params: { articleno: this.reply.articleno },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },
    moveQnAArticle() {
      this.$router.replace({
        name: "QnAAnswer",
        params: { articleno: this.article.articleno },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },
    deleteArticle() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.$router.replace({
          name: "QnADelete",
          params: { articleno: this.article.articleno },
        });
      }
    },
    deleteAnswer() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.$router.replace({
          name: "QnADelete",
          params: { articleno: this.reply.articleno },
        });
      }
    },
  },
  // filters: {
  //   dateFormat(regtime) {
  //     return moment(new Date(regtime)).format("YY.MM.DD hh:mm:ss");
  //   },
  // },
};
</script>

<style></style>

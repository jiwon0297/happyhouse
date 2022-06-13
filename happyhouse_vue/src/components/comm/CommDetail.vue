<template>
  <div>
    <div>
      <h2 style="text-align: center; font-family: 'GowunDodum-Regular'">
        커뮤니티 글
      </h2>
      <hr />
      <div style="text-align: left">
        <md-button
          variant="success"
          class="md-success md-simple"
          style="border: 1px solid; text-align: left"
          @click="listArticle"
          >목록</md-button
        >
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
                {{ article.subject }}
              </h3>
              <p style="color: gray; text-align: right">
                {{ article.userid }}
                {{ article.regtime }}
              </p>
              <hr />
              <p style="font-size: 15pt">{{ article.content }}</p>
              <div v-if="article.savefile" style="width: 50%; margin: auto">
                <img :src="article.savefile" />
              </div>
            </template>
          </nav-tabs-card>
        </div>
      </div>
    </div>
    <div>
      <div style="text-align: center">
        <md-button
          variant="default"
          class="md-default md-simple"
          style="border: 1px solid; margin-right: 1rem"
          @click="moveModifyArticle"
          v-if="userInfo.userid === article.userid"
        >
          수정
        </md-button>
        <md-button
          @click="deleteArticle"
          v-if="(userInfo.userid === article.userid)||(userInfo.userid === 'admin')"
          variant="danger"
          class="md-danger md-simple"
          style="border: 1px solid"
        >
          삭제
        </md-button>
      </div>
    </div>
    <hr />
    <!-- 댓글 목록 -->
    <div
      class="md-layout"
      style="width: 100%; text-align: center"
      v-if="comments.length"
    >
      <p style="margin-left: 20px">댓글({{ commentNum }})</p>
      <comments-list
        :comments="comments"
        @upup="getUpdate"
        @commentmodify="modifycom"
      />
    </div>
    <div class="md-layout" style="width: 100%" v-else>
      <div class="md-layout-item md-size-100">
        <p style="margin-left: 10px; text-align: left">
          댓글({{ commentNum }})
        </p>
        <div class="md-layout-item md-size-100" style="text-align: center">
          작성된 댓글이 없습니다.
        </div>
      </div>
    </div>
    <!-- 댓글 목록 끝-->

    <!-- 댓글 입력창 -->
    <div class="md-layout" v-if="!isUpdate">
      <div class="md-layout-item md-size-100">
        <form @submit="onSubmit">
          <md-field>
            <md-input
              id="userid"
              v-model="comment.userid"
              type="hidden"
              required
              disabled
              placeholder="작성자"
            ></md-input>
          </md-field>
          <div style="display: flex">
            <textarea
              id="comment"
              v-model="comment.comment"
              rows="3"
              style="
                border-color: lightgray;
                margin: auto;
                border-radius: 5px;
                width: 85%;
              "
              required
              placeholder="댓글을 입력하세요."
            ></textarea>
            <md-button
              type="submit"
              variant="default"
              class="md-default md-simple"
              style="border: 1px solid; float: right; margin: auto"
              >작성</md-button
            >
          </div>
        </form>
      </div>
    </div>
    <!-- 댓글 입력창 끝 -->

    <!-- 댓글 입력창 -->
    <div class="md-layout" v-if="isUpdate">
      <div class="md-layout-item md-size-100">
        <form @submit="modySubmit">
          <md-field> </md-field>
          <div style="display: flex">
            <div style="margin: auto; width: 85%">
              <textarea
                id="comment"
                :value="modcomment.comment"
                rows="3"
                v-on:input="changecomment"
                style="border-color: lightgray; border-radius: 5px; width: 100%"
                required
              ></textarea>
            </div>
            <div style="float: right; width: 10%; margin: 0 7px 5px 0">
              <md-button
                type="submit"
                variant="success"
                class="md-success md-simple md-sm"
                style="border: 1px solid"
                >수정</md-button
              >
              <md-button
                type="button"
                variant="default"
                class="md-default md-simple md-sm"
                style="border: 1px solid"
                @click="changeupdate"
                >취소</md-button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- 댓글 입력창 끝 -->
  </div>
</template>

<script>
// import moment from "moment";
import http from "@/api/http";
import { NavTabsCard } from "@/components";
import { mapState } from "vuex";
import CommentsList from "@/components/comm/CommentsList";

export default {
  name: "CommDetail",
  data() {
    return {
      article: {},
      comment: {},
      comments: [],
      commentNum: Number,
      modcomment: {},
      isUpdate: false,
      newcomment: String,
    };
  },
  props: {
    type: { type: String },
  },
  components: {
    NavTabsCard,
    CommentsList,
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),

    message() {
      if (this.article.content)
        return this.article.content.split("\n").join("<br>");
      return "";
    },
  },
  created() {
    this.comment.userid = this.userInfo.userid;

    http.get(`/commboard/${this.$route.params.articleno}`).then(({ data }) => {
      this.article = data;
    });

    http.get(`/comments/${this.$route.params.articleno}`).then(({ data }) => {
      this.comments = data;
    });

    http
      .get(`/comments/count/${this.$route.params.articleno}`)
      .then(({ data }) => {
        this.commentNum = data;
      });
  },
  methods: {
    listArticle() {
      this.$router.push({ name: "CommHome" });
    },
    moveModifyArticle() {
      this.$router.replace({
        name: "CommModify",
        params: { articleno: this.article.articleno },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },
    deleteArticle() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.$router.replace({
          name: "CommDelete",
          params: { articleno: this.article.articleno },
        });
      }
    },
    onSubmit(event) {
      event.preventDefault();
      this.registComment();
    },

    changecomment(event) {
      event.preventDefault();
      this.newcomment = event.target.value;
    },

    modySubmit(event) {
      event.preventDefault();
      this.modifyComment();
    },

    modifyComment() {
      http
        .put(`/comments/` + this.modcomment.commentno, {
          commentno: this.modcomment.commentno,
          comment: this.newcomment,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
            this.$router.go(0);
          }
          alert(msg);
        });
    },

    registComment() {
      http
        .post(`/comments`, {
          articleno: this.article.articleno,
          userid: this.comment.userid,
          comment: this.comment.comment,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
            this.$router.go(0);
          }
          alert(msg);
        });
    },

    getUpdate(data) {
      this.isUpdate = data;
    },

    modifycom(data) {
      this.modcomment = data;
    },

    changeupdate() {
      this.isUpdate = false;
    },
  },
};
</script>

<style></style>

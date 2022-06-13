<template>
  <div>
    <div>
      <h2 style="text-align: center; font-family: 'GowunDodum-Regular'">
        공지사항
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
                [공지] {{ article.subject }}
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
          v-if="userInfo.userid === 'admin'"
          @click="moveModifyArticle"
          variant="default"
          class="md-default md-simple"
          style="border: 1px solid; margin-right: 1rem"
        >
          수정
        </md-button>
        <md-button
          v-if="userInfo.userid === 'admin'"
          @click="deleteArticle"
          variant="danger"
          class="md-danger md-simple"
          style="border: 1px solid"
        >
          삭제
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
  name: "NoticeDetail",
  data() {
    return {
      article: {},
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
  },
  created() {
    http
      .get(`/noticeboard/${this.$route.params.articleno}`)
      .then(({ data }) => {
        this.article = data;
      });
  },
  methods: {
    listArticle() {
      this.$router.push({ name: "NoticeHome" });
    },
    moveModifyArticle() {
      this.$router.replace({
        name: "NoticeModify",
        params: { articleno: this.article.articleno },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.articleno}` });
    },
    deleteArticle() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        this.$router.replace({
          name: "NoticeDelete",
          params: { articleno: this.article.articleno },
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

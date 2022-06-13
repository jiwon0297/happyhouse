<template>
  <div>
    <div class="title">
      <h3 style="font-family: 'GowunDodum-Regular'">문의 목록</h3>
      <h6 style="color: gray; font-family: 'GowunDodum-Regular'">
        자유롭게 문의해보세요
      </h6>
      <hr />
    </div>
    <div style="display: flex; justify-content: space-between">
      <div align="left">
        <md-button
          class="md-default md-simple"
          style="margin-top: 22px; border: 1px solid"
          @click="moveWrite()"
          >문의하기</md-button
        >
      </div>
      <div align="right">
        <md-field style="width: 200px"
          ><md-input
            style="margin-top: 8px"
            v-model="search"
            placeholder="검색어를 입력하세요"
          ></md-input>
          <md-button class="md-info md-simple md-just-icon" @click="searchList">
            <i class="md-icon md-icon-font md-theme-default">search</i>
          </md-button>
        </md-field>
      </div>
    </div>
    <QnAList :articles="searchlists"></QnAList>
  </div>
</template>

<script>
import http from "@/api/http";
import QnAList from "@/components/qna/QnAList";

export default {
  name: "QnAHome",
  components: {
    QnAList,
  },
  data() {
    return {
      originarticles: {
        type: Array,
      },
      searchlists: {
        type: Array,
      },
      search: "",
    };
  },
  created() {
    http.get(`/qnaboard`).then(({ data }) => {
      this.originarticles = data;
      this.searchlists = data;
    });
  },

  methods: {
    moveWrite() {
      this.$router.push({ name: "QnARegister" });
    },

    searchList() {
      const searchlist = [];
      let searchword = this.search;
      this.originarticles.forEach(function (ele) {
        if (ele.subject.includes(searchword)) {
          searchlist.push(ele);
        }
      });
      this.searchlists = searchlist;
    },
  },
};
</script>

<style scope>
.tdClass {
  width: 50px;
  text-align: center;
}
.tdSubject {
  width: 300px;
  text-align: left;
}
</style>

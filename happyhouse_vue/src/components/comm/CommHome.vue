<template>
  <div>
    <div class="title">
      <h3>지역커뮤니티</h3>
      <h6 style="color: gray; margin-left: 10px">지역 사람들과 소통하세요</h6>
      <hr />
    </div>
    <div style="display: flex; justify-content: space-between">
      <div align="left">
        <md-button
          class="md-default md-simple"
          style="margin-top: 22px; border: 1px solid"
          @click="moveWrite()"
          >글쓰기</md-button
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
    <CommList :articles="searchlists"></CommList>
  </div>
</template>

<script>
import http from "@/api/http";
import CommList from "@/components/comm/CommList";

export default {
  name: "CommHome",
  components: {
    CommList,
  },
  data() {
    return {
      originarticles: {
        type: Array,
      },
      search: "",
      searchlists: {
        type: Array,
      },
    };
  },
  created() {
    http.get(`/commboard`).then(({ data }) => {
      this.originarticles = data;
      this.searchlists = data;
    });
  },

  methods: {
    moveWrite() {
      this.$router.push({ name: "CommRegister" });
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

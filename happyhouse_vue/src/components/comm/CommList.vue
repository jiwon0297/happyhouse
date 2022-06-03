<template>
  <div>
    <div v-if="articles.length">
      <md-table style="text-align: center">
        <md-table-row style="background-color: #dde7e7; text-align: center">
          <td
            class="md-table-cell"
            style="color: black; text-align: center; width: 10%"
          >
            글번호
          </td>
          <td
            class="md-table-cell"
            style="color: black; text-align: center; width: 50%"
          >
            제목
          </td>
          <td
            class="md-table-cell"
            style="color: black; text-align: center; width: 20%"
          >
            작성자
          </td>
          <td
            class="md-table-cell"
            style="color: black; text-align: center; width: 20%"
          >
            작성일
          </td>
        </md-table-row>
        <!-- 하위 component인 ListRow에 데이터 전달(props) -->
        <CommListItem
          v-for="(article, index) in paginatedData"
          :key="index"
          v-bind="article"
          :index="articles.length - pageNum * 10 - index"
        />
      </md-table>
    </div>

    <div v-else>
      <md-table style="text-align: center">
        <md-table-row style="background-color: #dde7e7; text-align: center">
          <td
            class="md-table-cell"
            style="color: black; text-align: center; width: 10%"
          >
            글번호
          </td>
          <td
            class="md-table-cell"
            style="color: black; text-align: center; width: 50%"
          >
            제목
          </td>
          <td
            class="md-table-cell"
            style="color: black; text-align: center; width: 20%"
          >
            작성자
          </td>
          <td
            class="md-table-cell"
            style="color: black; text-align: center; width: 20%"
          >
            작성일
          </td>
        </md-table-row>
        <!-- 하위 component인 ListRow에 데이터 전달(props) -->
        <md-table-row>
          <td class="md-table-cell" colspan="4">작성된 글이 없습니다.</td>
        </md-table-row>
      </md-table>
    </div>

    <div style="text-align: center; margin-top: 20px" v-if="articles.length">
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
import CommListItem from "@/components/comm/item/CommListItem";

export default {
  name: "CommList",
  components: {
    CommListItem,
  },
  data() {
    return {
      pageNum: 0,
    };
  },
  props: {
    articles: [],
    pageSize: {
      type: Number,
      required: false,
      default: 10,
    },
  },

  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
  },

  computed: {
    pageCount() {
      let listLeng = this.articles.length,
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
      return this.articles.slice(start, end);
    },
  },
};
</script>

<style></style>

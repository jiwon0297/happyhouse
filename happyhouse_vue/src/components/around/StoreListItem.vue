<template>
  <div>
    <div>
      <tr
        class="md-table-row"
        @click="selectStore"
        @mouseover="colorChange(true)"
        @mouseout="colorChange(false)"
        :class="{ 'mouse-over-bgcolor': isColor }"
      >
        <td>
          <div
            style="
              background-color: #299e4c;
              color: white;
              width: 20px;
              height: 20px;
              border-radius: 5px;
              text-align: center;
              padding-top: 0.5px;
            "
          >
            {{ index }}
          </div>
        </td>
        <td class="md-table-cell" v-if="flag">
          {{ store.bizesNm }}
        </td>

        <td class="md-table-cell" v-else>
          [{{ store.indsLclsNm }}] {{ store.bizesNm }}
        </td>
      </tr>
      <modal v-if="classicModal" @close="classicModalHide">
        <template slot="header">
          <h4 class="modal-title">가게 정보</h4>
          <md-button
            class="md-simple md-just-icon md-round modal-default-button"
            @click="classicModalHide"
          >
            <md-icon>clear</md-icon>
          </md-button>
        </template>

        <template slot="body">
          <store-detail />
        </template>

        <template slot="footer">
          <md-button class="md-danger md-simple" @click="classicModalHide"
            >Close</md-button
          >
        </template>
      </modal>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import StoreDetail from "@/components/around/StoreDetail.vue";
import { Modal } from "@/components";

export default {
  name: "StoreListItem",
  components: {
    StoreDetail,
    Modal,
  },
  data() {
    return {
      isColor: false,
      classicModal: false,
    };
  },
  props: {
    store: Object,
    index: Number,
    flag: Boolean,
  },
  methods: {
    ...mapActions(["detailStore"]),
    selectStore() {
      console.log("listRow : ", this.store);
      // this.$store.dispatch("getHouse", this.house);
      this.classicModal = true;
      this.detailStore(this.store);
    },
    colorChange(flag) {
      this.isColor = flag;
    },
    classicModalHide() {
      this.classicModal = false;
    },
  },
  created() {},
};
</script>

<style scoped>
.apt {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>

<template>
  <div>
    <div>
      <h4 style="font-weight: bold">관심 지역 리스트</h4>
      <h6>회원가입시 선택한 주소값은 기본값으로 들어갑니다.</h6>
      <hr />
      <div
        style="
          display: flex;
          vertical-align: middle;
          justify-contents: space-between;
          height: 70px;
          width: 85%;
        "
      >
        <div style="margin: auto; width: 15%">
          <p>관심지역 추가하기 :</p>
        </div>
        <div style="margin: auto; width: 75%">
          <b-row>
            <b-col>
              <b-form-select
                id="interestsido"
                v-model="sidoCode"
                :options="sidos"
                @change="gugunList"
              ></b-form-select>
            </b-col>
            <b-col>
              <b-form-select
                id="interestgugun"
                v-model="gugunCode"
                :options="guguns"
                @change="dongList"
              ></b-form-select>
            </b-col>
            <b-col>
              <b-form-select
                id="interestdong"
                v-model="dongCode"
                :options="dongs"
              ></b-form-select>
            </b-col>
            <button
              type="button"
              @click="addinterest"
              style="
                height: 38px;
                margin-bottom: 10px;
                background-color: transparent;
                border: 1px solid darkgray;
                border-radius: 5px;
                color: darkgray;
              "
            >
              추가
            </button>
          </b-row>
        </div>
      </div>
      <ul>
        <li v-if="userInfo">
          <div
            style="
              width: 250px;
              text-align: left;
              display: flex;
              justify-contents: space-between;
            "
          >
            <div>
              <button
                @click="getStore"
                style="
                  text-decoration: none;
                  background-color: transparent;
                  border-style: none;
                  margin-top: 2.5px;
                "
              >
                {{ userInfo.sidoName }} {{ userInfo.gugunName }}
                {{ userInfo.dongName }}
              </button>
            </div>
          </div>
        </li>
        <div v-if="interests">
          <div
            v-for="(interest, index) in interests"
            :key="index"
            :interest="interest"
          >
            <li>
              <div
                style="
                  width: 250px;
                  text-align: left;
                  display: flex;
                  justify-contents: space-between;
                "
              >
                <div align="left">
                  <button
                    @click="getinterestStore(interest)"
                    style="
                      text-decoration: none;
                      background-color: transparent;
                      border-style: none;
                      margin-top: 2.5px;
                    "
                  >
                    {{ interest.sidoName }} {{ interest.gugunName }}
                    {{ interest.dongName }}
                  </button>
                </div>
                <div align="right">
                  <button
                    @click="deletearea(interest)"
                    style="border-style: none; background-color: transparent"
                  >
                    <i class="md-icon md-icon-font md-theme-default">close</i>
                  </button>
                </div>
              </div>
            </li>
          </div>
        </div>
      </ul>
    </div>
    <br />
    <hr />
    <h3 style="font-weight: bold">{{ infoname }}의 주변상점 정보입니다.</h3>
    <br />
    <div style="display: flex; justify-content: space-between">
      <div align="left" style="width: 52%">
        <nav-tabs-card no-label>
          <template slot="content">
            <md-tabs class="md-success" md-alignment="left">
              <md-tab
                id="tab-home"
                md-label="전체"
                md-icon="apps"
                @click="getall"
              >
                <div v-if="paginatedData.length != 0">
                  <td class="md-table-cell">
                    <store-list-item
                      v-for="(store, index) in paginatedData"
                      :key="index"
                      :store="store"
                      :index="index + 1 + pageNum * 5"
                      :flag="flag"
                    />
                  </td>
                  <div style="text-align: center; margin-top: 20px">
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
                <div v-else>
                  <h4>상점 목록이 없습니다.</h4>
                </div>
              </md-tab>

              <md-tab
                id="tab-page1"
                md-label="음식"
                md-icon="restaurant"
                @click="getfood"
              >
                <div v-if="paginatedData2.length != 0">
                  <td class="md-table-cell">
                    <store-list-item
                      v-for="(store, index) in paginatedData2"
                      :key="index"
                      :store="store"
                      :index="index + 1 + pageNum * 5"
                      :flag="flag"
                    />
                  </td>
                  <div style="text-align: center; margin-top: 20px">
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum === 0"
                      @click="prevPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Prev
                    </md-button>
                    <span style="margin-left: 5px; margin-right: 10px">
                      {{ pageNum + 1 }} / {{ pageCount2 }}</span
                    >
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum >= pageCount2 - 1"
                      @click="nextPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Next
                    </md-button>
                  </div>
                </div>
                <div v-else>
                  <h4>상점 목록이 없습니다.</h4>
                </div>
              </md-tab>

              <md-tab
                id="tab-page2"
                md-label="소매"
                md-icon="store"
                @click="getsomae"
              >
                <div v-if="paginatedData2.length != 0">
                  <td class="md-table-cell">
                    <store-list-item
                      v-for="(store, index) in paginatedData2"
                      :key="index"
                      :store="store"
                      :index="index + 1 + pageNum * 5"
                      :flag="flag"
                    />
                  </td>
                  <div style="text-align: center; margin-top: 20px">
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum === 0"
                      @click="prevPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Prev
                    </md-button>
                    <span style="margin-left: 5px; margin-right: 10px">
                      {{ pageNum + 1 }} / {{ pageCount2 }}</span
                    >
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum >= pageCount2 - 1"
                      @click="nextPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Next
                    </md-button>
                  </div>
                </div>
                <div v-else>
                  <h4>상점 목록이 없습니다.</h4>
                </div>
              </md-tab>

              <md-tab
                id="tab-page3"
                md-label="부동산"
                md-icon="house"
                @click="gethouse"
              >
                <div v-if="paginatedData2.length != 0">
                  <td class="md-table-cell">
                    <store-list-item
                      v-for="(store, index) in paginatedData2"
                      :key="index"
                      :store="store"
                      :index="index + 1 + pageNum * 5"
                      :flag="flag"
                    />
                  </td>
                  <div style="text-align: center; margin-top: 20px">
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum === 0"
                      @click="prevPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Prev
                    </md-button>
                    <span style="margin-left: 5px; margin-right: 10px">
                      {{ pageNum + 1 }} / {{ pageCount2 }}</span
                    >
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum >= pageCount2 - 1"
                      @click="nextPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Next
                    </md-button>
                  </div>
                </div>
                <div v-else>
                  <h4>상점 목록이 없습니다.</h4>
                </div>
              </md-tab>

              <md-tab
                id="tab-page4"
                md-label="생활"
                md-icon="local_mall"
                @click="getcon"
              >
                <div v-if="paginatedData2.length != 0">
                  <td class="md-table-cell">
                    <store-list-item
                      v-for="(store, index) in paginatedData2"
                      :key="index"
                      :store="store"
                      :index="index + 1 + pageNum * 5"
                      :flag="flag"
                    />
                  </td>
                  <div style="text-align: center; margin-top: 20px">
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum === 0"
                      @click="prevPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Prev
                    </md-button>
                    <span style="margin-left: 5px; margin-right: 10px">
                      {{ pageNum + 1 }} / {{ pageCount2 }}</span
                    >
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum >= pageCount2 - 1"
                      @click="nextPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Next
                    </md-button>
                  </div>
                </div>
                <div v-else>
                  <h4>상점 목록이 없습니다.</h4>
                </div>
              </md-tab>

              <md-tab
                id="tab-page5"
                md-label="교육"
                md-icon="book"
                @click="getedu"
              >
                <div v-if="paginatedData2.length != 0">
                  <td class="md-table-cell">
                    <store-list-item
                      v-for="(store, index) in paginatedData2"
                      :key="index"
                      :store="store"
                      :index="index + 1 + pageNum * 5"
                      :flag="flag"
                    />
                  </td>
                  <div style="text-align: center; margin-top: 20px">
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum === 0"
                      @click="prevPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Prev
                    </md-button>
                    <span style="margin-left: 5px; margin-right: 10px">
                      {{ pageNum + 1 }} / {{ pageCount2 }}</span
                    >
                    <md-button
                      class="md-default md-simple md-sm"
                      :disabled="pageNum >= pageCount2 - 1"
                      @click="nextPage"
                      style="margin-top: -3px; border: 1px solid lightgray"
                    >
                      Next
                    </md-button>
                  </div>
                </div>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
      <div id="map" align="right"></div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import StoreListItem from "@/components/around/StoreListItem.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import { Slider } from "@/components";
import { Tabs } from "@/components";
import { NavTabsCard } from "@/components";

export default {
  name: "StoreList",
  components: {
    StoreListItem,
    Slider,
    Tabs,
    NavTabsCard,
  },
  data() {
    return {
      map: null,
      markers: [],
      maxPrice: "",
      sidoName: "",
      gugunName: "",
      userid: "",
      dongName: "",
      sidoCode: "",
      gugunCode: "",
      dongCode: "",
      interestsido: "",
      interestgugun: "",
      interestdong: "",
      interests: [],
      searchstores: [],
      pageNum: 0,
      flag: false,
      infoname: "",
    };
  },
  props: {
    pageSize: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  computed: {
    ...mapState(["sidos", "guguns", "dongs", "stores", "userInfo"]),
    pageCount() {
      let listLeng = this.stores.length,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;

      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    pageCount2() {
      let listLeng = this.searchstores.length,
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
      return this.stores.slice(start, end);
    },

    paginatedData2() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      return this.searchstores.slice(start, end);
    },
  },

  watch: {
    stores(newStore, oldStore) {
      if (newStore !== oldStore) this.initMap();
    },
  },

  methods: {
    ...mapActions([
      "getSido",
      "getGugun",
      "getDong",
      "getUserInfo",
      "getStoreList",
    ]),
    ...mapMutations([
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
      "CLEAR_STORE_LIST",
    ]),

    nextPage() {
      this.pageNum += 1;
      this.initMap();
    },
    prevPage() {
      this.pageNum -= 1;
      this.initMap();
    },

    gugunList() {
      console.log(this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },

    dongList() {
      console.log(this.gugunCode);
      this.CLEAR_DONG_LIST();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode);
    },

    addinterest() {
      var target1 = document.getElementById("interestsido");
      var target2 = document.getElementById("interestgugun");
      var target3 = document.getElementById("interestdong");

      this.interestsido = target1.options[target1.selectedIndex].text;
      this.interestgugun = target2.options[target2.selectedIndex].text;
      this.interestdong = target3.options[target3.selectedIndex].text;

      const params = {
        userid: this.userid,
      };

      http
        .post(`/interest/area`, {
          userid: this.userid,
          dongCode: this.dongCode,
          sidoName: this.interestsido,
          gugunName: this.interestgugun,
          dongName: this.interestdong,
        })
        .then(({ data }) => {
          if (data === "success") {
            http
              .get(`/interest/area`, { params })
              .then(({ data }) => {
                this.interests = data;
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            let msg = "등록 처리시 문제가 발생했습니다.";
            alert(msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    initMap() {
      if (!window.kakao || !window.kakao.maps) {
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?libraries=services&autoload=false&appkey=4051aa6395834ccb3cc8acfef65e4bbe`;
        script.addEventListener("load", () => {
          kakao.maps.load(this.initMap);
        });
        document.head.appendChild(script);
      } else {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 5, // 지도의 확대 레벨
        };
        this.map = new kakao.maps.Map(container, options);

        const markerPositions1 = [];
        if (!this.flag) {
          this.paginatedData.forEach((store) => {
            const arr = {
              title: store.bizesNm,
              address: store.rdnmAdr,
            };
            markerPositions1.push(arr);
          });
        } else {
          this.paginatedData2.forEach((store) => {
            const arr = {
              title: store.bizesNm,
              address: store.rdnmAdr,
            };
            markerPositions1.push(arr);
          });
        }

        this.displayMarker(markerPositions1);
      }
    },

    displayMarker(positions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const mapp = this.map;
      const markerlist = [];
      positions.forEach((position) => {
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(position.address, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            const marker = new kakao.maps.Marker({
              map: mapp,
              position: coords,
              title: position.title,
            });

            const infowindow = new kakao.maps.InfoWindow({
              removable: true,
              content: `<div style="padding: 5px;">${position.title}</div>`,
            });
            kakao.maps.event.addListener(marker, "mouseover", () => {
              infowindow.open(mapp, marker);
            });
            kakao.maps.event.addListener(marker, "mouseout", () => {
              infowindow.close(mapp, marker);
            });
            markerlist.push(marker);

            mapp.setCenter(coords);
          }
        });
      });

      this.markers = markerlist;
    },

    getStore() {
      this.infoname = this.dongName;
      const params = {
        sido: this.sidoName,
        gugun: this.gugunName,
        dong: this.dongName,
      };
      http
        .get(`/map/dongcode`, { params })
        .then(({ data }) => {
          this.getStoreList(data.dongCode);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getall() {
      this.flag = false;
      this.initMap();
    },

    getfood() {
      this.flag = true;
      let keyword = "음식";
      const list = [];
      this.stores.forEach(function (ele) {
        if (ele.indsLclsNm === keyword) {
          list.push(ele);
        }
      });
      this.searchstores = list;
      this.initMap();
    },

    getsomae() {
      this.flag = true;
      let keyword = "소매";
      const list = [];
      this.stores.forEach(function (ele) {
        if (ele.indsLclsNm === keyword) {
          list.push(ele);
        }
      });
      this.searchstores = list;
      this.initMap();
    },

    gethouse() {
      this.flag = true;
      let keyword = "부동산";
      const list = [];
      this.stores.forEach(function (ele) {
        if (ele.indsLclsNm === keyword) {
          list.push(ele);
        }
      });
      this.searchstores = list;
      this.initMap();
    },

    getcon() {
      this.flag = true;
      let keyword = "생활서비스";
      const list = [];
      this.stores.forEach(function (ele) {
        if (ele.indsLclsNm === keyword) {
          list.push(ele);
        }
      });
      this.searchstores = list;
      this.initMap();
    },

    getedu() {
      this.flag = true;
      let keyword = "학문/교육";
      const list = [];
      this.stores.forEach(function (ele) {
        if (ele.indsLclsNm === keyword) {
          list.push(ele);
        }
      });
      this.searchstores = list;
      this.initMap();
    },

    getinterestStore(interest) {
      this.infoname = interest.dongName;
      this.getStoreList(interest.dongCode);
    },

    deletearea(interest) {
      const params = {
        userid: this.userid,
      };

      http
        .delete(`/interest/area/` + interest.no)
        .then(({ data }) => {
          http
            .get(`/interest/area`, { params })
            .then(({ data }) => {
              this.interests = data;
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.initMap();
    this.searchstores = this.stores;
  },

  created() {
    this.CLEAR_SIDO_LIST();
    this.getSido();
    this.userid = this.userInfo.userid;
    this.sidoName = this.userInfo.sidoName;
    this.gugunName = this.userInfo.gugunName;
    this.dongName = this.userInfo.dongName;

    const params = {
      userid: this.userid,
    };

    http
      .get(`/interest/area`, { params })
      .then(({ data }) => {
        this.interests = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#map {
  width: 485px;
  height: 400px;
}
</style>

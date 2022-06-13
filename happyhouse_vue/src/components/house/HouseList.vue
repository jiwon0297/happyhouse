<template>
  <div>
    <h3 style="font-weight: bold; font-family: 'GowunDodum-Regular'">
      {{ dongName }}의 아파트 정보입니다.
    </h3>
    <hr />

    <div
      style="
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 90%;
      "
    >
      <div style="display: flex; justify-content: space-between; width: 40%">
        <div style="width: 30%; margin: auto">
          <p style="margin: auto; text-align: center">아파트명 검색 :</p>
        </div>
        <!-- <div style="line-height: 0px; width: 40%; margin-left: auto"> -->
        <div style="width: 70%; margin-bottom: 10px">
          <md-field>
            <!-- <p style="text-align: left; margin-top: 8px">아파트명 검색</p> -->
            <md-input
              style="margin-top: 8px"
              v-model="search"
              placeholder="아파트명을 입력하세요"
            ></md-input>
            <md-button
              class="md-info md-simple md-just-icon"
              @click="searchList"
            >
              <i class="md-icon md-icon-font md-theme-default">search</i>
            </md-button>
          </md-field>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; width: 60%">
        <div style="width: 18%; margin: auto">
          <p style="margin: auto; text-align: center">
            &nbsp;&nbsp;가격 필터 :
          </p>
        </div>
        <!-- 필터 삽입 -->
        <div id="javascriptComponents" style="width: 60%; margin: auto">
          <div id="sliders">
            <div class="md-layout-item md-xsmall-size-100 md-size-100">
              <slider
                v-model="sliders.rangeSlider"
                type="success"
                :connect="true"
              >
              </slider>
            </div>
          </div>
        </div>
        <div style="width: 18%; margin: auto">
          <md-button class="md-info md-simple" @click="maxPirceLists">
            <i class="md-icon md-icon-font md-theme-default">search</i>검색
          </md-button>
        </div>
      </div>
      <!-- 필터 끝 -->
    </div>
    <hr />
    <div style="display: flex; justify-content: space-between">
      <div align="left">
        <div v-if="houses && houses.length != 0">
          <div v-if="!isSearch">
            <!-- <td class="md-table-cell">{{ index }}</td> -->
            <td class="md-table-cell">
              <house-list-item
                v-for="(house, index) in paginatedData"
                :key="index"
                :house="house"
                :index="index + 1 + pageNum * 5"
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

          <div v-else-if="maxPriceLists.length != 0">
            <td class="md-table-cell">
              <house-list-item
                v-for="(house, index) in paginatedData2"
                :key="index"
                :house="house"
                :index="index + 1 + pageNum * 5"
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
            <h4 style="font-family: 'GowunDodum-Regular'">
              검색 목록이 없습니다.
            </h4>
          </div>
        </div>
        <div v-else>
          <h4 style="font-family: 'GowunDodum-Regular'">
            아파트 목록이 없습니다.
          </h4>
        </div>
      </div>
      <div id="map" align="right"></div>
    </div>
  </div>
</template>

<script>
import HouseListItem from "@/components/house/HouseListItem.vue";
import { mapState, mapMutations } from "vuex";
import { Slider } from "@/components";

export default {
  name: "HouseList",
  components: {
    HouseListItem,
    Slider,
  },
  data() {
    return {
      map: null,
      markers: [],
      search: "",
      maxPrice: "",
      maxPriceLists: {
        type: Array,
      },
      sliders: {
        simple: 40,
        rangeSlider: [0, 500000],
        // rangeSlider: [0, 100],
      },
      isSearch: false,
      pageNum: 0,
    };
  },
  props: {
    pageSize: {
      type: Number,
      required: false,
      default: 5,
    },
    dongName: null,
  },

  computed: {
    ...mapState(["houses"]),

    pageCount() {
      let listLeng = this.houses.length,
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
      return this.houses.slice(start, end);
    },

    pageCount2() {
      let listLeng = this.maxPriceLists.length,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;

      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    paginatedData2() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      return this.maxPriceLists.slice(start, end);
    },
  },

  watch: {
    houses(newHouse, oldHouse) {
      if (oldHouse !== newHouse) this.initMap();
    },
  },

  methods: {
    ...mapMutations(["CLEAR_HOUSE_LIST"]),

    nextPage() {
      this.pageNum += 1;
      this.initMap();
    },
    prevPage() {
      this.pageNum -= 1;
      this.initMap();
    },

    maxPirceLists() {
      let startprice = +this.sliders.rangeSlider[0];
      let endprice = +this.sliders.rangeSlider[1];
      this.isSearch = true;
      const maxPriceList = [];
      this.houses.forEach(function (ele) {
        if (
          startprice <= +ele.거래금액.replace(",", "") &&
          +ele.거래금액.replace(",", "") <= endprice
        ) {
          maxPriceList.push(ele);
        }
      });
      this.maxPriceLists = maxPriceList;
      this.initmap2();
    },

    searchList() {
      let keyword = this.search;
      this.isSearch = true;
      const maxPriceList = [];
      this.houses.forEach(function (ele) {
        if (ele.아파트.includes(keyword)) {
          maxPriceList.push(ele);
        }
      });
      this.maxPriceLists = maxPriceList;
      this.initmap2();
    },

    initMap() {
      this.maxPriceLists = this.houses;
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
          level: 7, // 지도의 확대 레벨
        };
        this.map = new kakao.maps.Map(container, options);

        const markerPositions1 = [];
        if (this.isSearch) {
          this.paginatedData2.forEach((house) => {
            const arr = {
              title: house.아파트,
              address:
                house.도로명 +
                " " +
                house.도로명건물본번호코드 +
                "-" +
                house.도로명건물부번호코드,
              price: house.거래금액 + "만원",
            };
            markerPositions1.push(arr);
          });
        } else {
          this.paginatedData.forEach((house) => {
            const arr = {
              title: house.아파트,
              address:
                house.도로명 +
                " " +
                house.도로명건물본번호코드 +
                "-" +
                house.도로명건물부번호코드,
              price: house.거래금액 + "만원",
            };
            markerPositions1.push(arr);
          });
        }

        this.displayMarker(markerPositions1);
      }
    },

    initmap2() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 7, // 지도의 확대 레벨
      };
      this.map = new kakao.maps.Map(container, options);

      const markerPositions1 = [];
      if (this.isSearch) {
        this.maxPriceLists.forEach((house) => {
          const arr = {
            title: house.아파트,
            address:
              house.도로명 +
              " " +
              house.도로명건물본번호코드 +
              "-" +
              house.도로명건물부번호코드,
            price: house.거래금액 + "만원",
          };
          markerPositions1.push(arr);
        });
      } else {
        this.houses.forEach((house) => {
          const arr = {
            title: house.아파트,
            address:
              house.도로명 +
              " " +
              house.도로명건물본번호코드 +
              "-" +
              house.도로명건물부번호코드,
            price: house.거래금액 + "만원",
          };
          markerPositions1.push(arr);
        });
      }

      this.displayMarker(markerPositions1);
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
            let content = `
            <div style="position: relative; width: 300px; margin:auto; margin-right:30px; margin-top:5px; border-radius: 20px;">
            <div style="margin: 0; padding: 0; font-size: 16px;font-weight: bold; text-align:center">${position.title}</div>
            <ul style="list-style:none; text-align:left">
              <li>
                주소 : ${position.address}
              </li>
              <li>
                최신거래금액 :  ${position.price}
              </li>
            </ul>
            </div>`;
            const infowindow = new kakao.maps.InfoWindow({
              removable: true,
              content: content,
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
  },

  mounted() {
    this.initMap();
    this.maxPriceLists = this.houses;
  },

  created() {},
};
</script>

<style>
#map {
  width: 700px;
  height: 400px;
}
</style>

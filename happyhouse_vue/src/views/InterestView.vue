<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" id="bg">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1 style="font-size: 60pt; font-family: 'GowunDodum-Regular'">
                Favorites
              </h1>
              <h4 style="font-family: 'GowunDodum-Regular'">관심매물</h4>
              <br />
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised" style="width: 85%; transform: translateX(6%)">
      <div class="section section-basic">
        <div
          style="
            width: 90%;
            display: flex;
            justify-content: space-between;
            margin: auto;
          "
        >
          <div style="width: 20%">
            <h4
              style="
                font-family: 'GowunDodum-Regular';
                font-weight: bold;
                text-align: center;
              "
            >
              관심매물 리스트
            </h4>
            <interest-list :interestlists="interestlists" />
          </div>
          <div style="width: 30%; text-align: center">
            <h4 style="font-family: 'GowunDodum-Regular'; font-weight: bold">
              관심매물 상세 정보
            </h4>
            <house-detail />
          </div>
          <div id="map" style="width: 50%; text-align: center"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { headerStyleObj } from "@/components/modules/utils.js";
import http from "@/api/http";
import InterestList from "@/components/interest/InterestList";
import { mapState } from "vuex";
import HouseDetail from "@/components/interest/HouseDetail";
import { Modal } from "@/components";

export default {
  name: "InterestView",
  components: {
    InterestList,
    HouseDetail,
    Modal,
  },

  bodyClass: "index-page",

  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg"),
    },
  },

  data() {
    return {
      interestlists: [],
      map: null,
      markers: [],
    };
  },

  created() {
    const params = { userid: this.userInfo.userid };
    http
      .get(`/interest/apt`, { params })
      .then(({ data }) => {
        this.interestlists = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
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
          level: 3, // 지도의 확대 레벨
        };
        this.map = new kakao.maps.Map(container, options);

        const markerPositions1 = [];

        const arr = {
          title: this.house.아파트,
          address:
            this.house.도로명 +
            " " +
            this.house.도로명건물본번호코드 +
            "-" +
            this.house.도로명건물부번호코드,
        };
        markerPositions1.push(arr);
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
  },

  watch: {
    house(newHouse, oldHouse) {
      if (oldHouse !== newHouse) this.initMap();
    },
  },
  computed: {
    ...mapState(["userInfo", "house"]),
  },
  mounted() {
    this.initMap();
  },
};
</script>
<style scoped>
#bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("@/assets/img/nyc03.jpg");
  height: 500px;
}
</style>

<template>
  <div id="bg" style="text-align: center">
    <div style="color: white; padding-top: 10%">
      <h1 style="font-size: 80px">HAPPY HOUSE</h1>
      <p style="font-size: 30px">나만의 해피하우스를 위한 첫걸음</p>
    </div>
    <br />
    <div>
      <router-link :to="{ name: 'house' }">
        <button
          style="
            border: 3px solid;
            color: white;
            background-color: transparent;
            width: 350px;
            height: 60px;
            border-radius: 15px;
            font-size: 25px;
            font-weight: bold;
            box-shadow: 0 0 15px;
          "
        >
          FIND MY HAPPY HOUSE
        </button>
      </router-link>
    </div>
    <br />
    <br />
    <br />
    <div style="display: flex; justify-content: space-between; height: 55%">
      <div
        align="left"
        style="
          background-color: rgba(0, 0, 0, 0.3);
          text-align: center;
          margin: 0 1% 0 2%;
          padding-top: 20px;
          border-radius: 10px;
          color: white;
          width: 50%;
        "
      >
        <br />
        <br />
        <h2 style="font-weight: bold; font-size: 40px; text-shadow: 0 0 24px">
          오늘의 뉴스
        </h2>
        <br />
        <br />
        <div id="newstitle">
          <div style="width: 80%; margin: auto">
            <a
              :href="news[2]"
              target="_blank"
              rel="noopener noreferrer"
              style="font-size: 25px; color: white"
              @mouseover="hover = true"
              @mouseleave="hover = false"
              :class="{ active: hover }"
              >{{ news[0] }}</a
            >
            <hr />
            <p style="font-size: 16px; color: lightgray">{{ news[1] }}</p>
          </div>
          <br />
          <div style="width: 80%; margin: auto">
            <a
              :href="news[5]"
              target="_blank"
              rel="noopener noreferrer"
              style="font-size: 25px; color: white"
              >{{ news[3] }}</a
            >
            <hr />
            <p style="font-size: 16px; color: lightgray">{{ news[4] }}<br /></p>
          </div>
        </div>
      </div>
      <div
        align="right"
        style="
          background-color: rgba(0, 0, 0, 0.3);
          text-align: center;
          margin: 0 2% 0 1%;
          padding-top: 20px;
          border-radius: 10px;
          color: white;
          width: 50%;
        "
      >
        <br />
        <br />
        <h2 style="font-weight: bold; font-size: 40px; text-shadow: 0 0 24px">
          오늘의 날씨
        </h2>
        <div>
          <div>{{ sidoName }} {{ gugunName }} {{ dongName }} 현재 날씨</div>
          <div>위도 : {{ latitude }} / 경도 : {{ longitude }}</div>
          <div v-for="(hi, index) in wea" :key="index">
            <div v-if="hi.day === '0'">
              오늘 {{ hi.hour }} 시 {{ hi.temp }}도 {{ hi.weather }}
            </div>

            <div v-else-if="hi.day === '1'">
              내일 {{ hi.hour }} 시 {{ hi.temp }}도 {{ hi.weather }}
            </div>

            <div v-else>
              모레 {{ hi.hour }} 시 {{ hi.temp }}도 {{ hi.weather }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import axios from "axios";

export default {
  components: {},
  name: "home",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/nyc01.jpg"),
    },
  },
  data() {
    return {
      news: {},
      hover: false,
      latitude: 0,
      longitude: 0,
      wea: [],
      sidoName: "",
      gugunName: "",
      dongName: "",
    };
  },
  methods: {
    getNews() {
      console.log("aaaa");
      const params = {
        userid: this.userInfo.userid,
        dongName: this.house.법정동,
        aptName: this.house.아파트,
      };

      console.log("listRow : ", this.house);
      // this.$store.dispatch("getHouse", this.house);
      this.classicModal = true;
      this.detailHouse(this.house);
    },

    getWeather(params) {
      //좌표에 따른 날씨 XML데이터로 받아옴
      var strQuery =
        "https://cors-anywhere.herokuapp.com/http://www.kma.go.kr/wid/queryDFS.jsp?gridx=" +
        params.x +
        "&gridy=" +
        params.y;
      console.log(strQuery);

      // var strQuery =
      //   "/wid/queryDFS.jsp?gridx=" + params.x + "&gridy=" + params.y;
      // console.log(strQuery);
      axios
        .get(strQuery)
        .then((response) => {
          console.log(response.data);
          var parser = new DOMParser();
          var xml = parser.parseFromString(response.data, "text/xml");

          var children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[0]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          var children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[0]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          var children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[0]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          var children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[0]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[1]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[1]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[1]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[1]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[2]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[2]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[2]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[2]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[3]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[3]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[3]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[3]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[4]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[4]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[4]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[4]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[5]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[5]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[5]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[5]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[6]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[6]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[6]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[6]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[7]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[7]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[7]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[7]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[8]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[8]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[8]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[8]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[9]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[9]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[9]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[9]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[10]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[10]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[10]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[10]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[11]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[11]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[11]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[11]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[12]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[12]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[12]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[12]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[13]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[13]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[13]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[13]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });

          children = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[14]
            .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          children2 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[14]
            .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          children3 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[14]
            .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          children4 = xml
            .getElementsByTagName("body")[0]
            .getElementsByTagName("data")[14]
            .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          this.wea.push({
            hour: children,
            temp: children3,
            weather: children2,
            day: children4,
          });
        })
        .catch((error) => {
          self.loading = false;
          throw error;
        });
    },

    dfs_xy_conv(code, v1, v2) {
      //<!--
      //
      // LCC DFS 좌표변환을 위한 기초 자료
      //
      var RE = 6371.00877; // 지구 반경(km)
      var GRID = 5.0; // 격자 간격(km)
      var SLAT1 = 30.0; // 투영 위도1(degree)
      var SLAT2 = 60.0; // 투영 위도2(degree)
      var OLON = 126.0; // 기준점 경도(degree)
      var OLAT = 38.0; // 기준점 위도(degree)
      var XO = 43; // 기준점 X좌표(GRID)
      var YO = 136; // 기1준점 Y좌표(GRID)
      //
      // LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
      //

      var DEGRAD = Math.PI / 180.0;
      var RADDEG = 180.0 / Math.PI;

      var re = RE / GRID;
      var slat1 = SLAT1 * DEGRAD;
      var slat2 = SLAT2 * DEGRAD;
      var olon = OLON * DEGRAD;
      var olat = OLAT * DEGRAD;

      var sn =
        Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
        Math.tan(Math.PI * 0.25 + slat1 * 0.5);
      sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
      var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
      sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
      var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
      ro = (re * sf) / Math.pow(ro, sn);
      var rs = {};
      if (code == "toXY") {
        rs["lat"] = v1;
        rs["lng"] = v2;
        var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
        ra = (re * sf) / Math.pow(ra, sn);
        var theta = v2 * DEGRAD - olon;
        if (theta > Math.PI) theta -= 2.0 * Math.PI;
        if (theta < -Math.PI) theta += 2.0 * Math.PI;
        theta *= sn;
        rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
        rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
      } else {
        rs["x"] = v1;
        rs["y"] = v2;
        var xn = v1 - XO;
        var yn = ro - v2 + YO;
        ra = Math.sqrt(xn * xn + yn * yn);
        if (sn < 0.0) -ra;
        var alat = Math.pow((re * sf) / ra, 1.0 / sn);
        alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

        if (Math.abs(xn) <= 0.0) {
          theta = 0.0;
        } else {
          if (Math.abs(yn) <= 0.0) {
            theta = Math.PI * 0.5;
            if (xn < 0.0) -theta;
          } else theta = Math.atan2(xn, yn);
        }
        var alon = theta / sn + olon;
        rs["lat"] = alat * RADDEG;
        rs["lng"] = alon * RADDEG;
      }
      return rs;
    },
  },
  computed: {},
  created() {
    http.get(`/home`).then(({ data }) => {
      this.news = data;
    });

    if (!("geolocation" in navigator)) {
      return;
    }
    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
        var gridXY = this.dfs_xy_conv("toXY", this.latitude, this.longitude);
        axios
          .get(
            "https://dapi.kakao.com/v2/local/geo/coord2address.json?x=" +
              this.longitude +
              "&y=" +
              this.latitude,
            {
              headers: {
                Authorization: "KakaoAK 529810c1a3241399e7bd81f7ceae37ea",
              },
            },
          )
          .then((response) => {
            this.sidoName =
              response.data.documents[0].address.region_1depth_name;
            this.gugunName =
              response.data.documents[0].address.region_2depth_name;
            this.dongName =
              response.data.documents[0].address.region_3depth_name;
          })
          .catch((error) => {
            console.log(error);
          });
        this.getWeather(gridXY);
      },
      (err) => {
        alert(err.message);
      },
    );
  },
};
</script>

<style lang="scss" scoped>
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}

#bg {
  background-image: linear-gradient(to top, #ff000000, rgba(0, 0, 0, 0.5)),
    url("@/assets/img/suburban01.jpg");
  height: 1200px;
  background-size: cover;
  background-position: center;
}

#newstitle a:link {
  text-decoration: none;
  border: rgba(75, 112, 253, 0.3) solid;
  border-width: 0 0 6px 0;
}

#newstitle a:visited {
  text-decoration: none;
  border: #d4ff00 solid;
  border-width: 0 0 6px 0;
  color: white;
}

#newstitle a:hover {
  text-decoration-color: green;
  text-decoration: none;
  color: green;
}
.active {
  background-color: rgba(149, 164, 75, 0.656);
  color: rgb(18, 129, 42);
  border: transparent;
}
</style>

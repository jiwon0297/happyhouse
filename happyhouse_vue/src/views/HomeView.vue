<template>
  <div>
    <div id="bg1" style="text-align: center">
      <div style="color: white; padding-top: 7%">
        <!-- <h1
        style="
          font-size: 300px;
          font-family: 'Abril Fatface', cursive;
          font-style: italic;
          color: rgba(255, 255, 255, 0.3);
        "
      >
        HAPPY HOUSE
      </h1> -->
        <!-- <p style="font-size: 25px; font-family: 'InfinitySans-RegularA1'">
        나만의 해피하우스를 위한 첫걸음
      </p> -->
        <p
          style="
            width: 100%;
            font-size: 20vw;
            text-align: center;
            font-family: 'Abril Fatface', cursive;
            font-style: italic;
            color: rgba(255, 255, 255, 0.3);
            position: absolute;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            word-wrap: break-word;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            line-height: 80%;
          "
          class="test_btn"
        >
          HAPPY HOUSE
        </p>
      </div>
      <br />
      <div>
        <button
          type="button"
          @click="scrolldown"
          style="
            border: 1px solid transparent;
            color: white;
            background-color: rgba(0, 0, 0, 0.1);
            width: 350px;
            height: 60px;
            border-radius: 15px;
            font-size: 25px;
            box-shadow: 0 0 15px white;
            font-family: 'Roboto Flex', sans-serif;
            margin-top: 68vh;
          "
          class="test_obj"
        >
          FIND MY HAPPY HOUSE
        </button>
      </div>
      <div id="bg2" ref="test_obj" style="text-align: center">
        <br />
        <br />
        <br />
        <div
          class="test_obj"
          style="
            display: flex;
            justify-content: space-between;
            height: 75%;
            margin-top: 50px;
          "
        >
          <!-- :class="{ darker: this.flag, lighter: !this.flag }" -->
          <div
            class="news"
            align="left"
            style="
              background-color: rgba(0, 0, 0, 0.7);
              text-align: center;
              margin: 0 1% 0 2%;
              padding-top: 20px;
              border-radius: 10px;
              color: white;
              width: 50%;
              height: 80vh;
            "
          >
            <br />
            <br />
            <h2
              style="
                font-size: 40px;
                text-shadow: 0 0 24px;
                font-family: 'GowunDodum-Regular';
              "
            >
              오늘의 뉴스
            </h2>
            <div>
              <img
                src="@/assets/img/calendar.png"
                width="21px"
                style="margin-bottom: 8px; margin-right: 5px"
              /><span style="font-size: 15pt">{{ date }}</span>
            </div>
            <br />
            <div id="newstitle" style="height: 70%; margin-top: auto">
              <div
                style="
                  width: 80%;
                  margin: auto;
                  border: 1px solid white;
                  height: 25vh;
                "
              >
                <br />
                <a
                  :href="news[2]"
                  id="newstitlehover"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="
                    display: inherit;
                    font-size: 25px;
                    color: white;
                    width: 90%;
                    margin: auto;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal;
                    word-wrap: break-word;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                  "
                  >{{ news[0] }}</a
                >
                <br />
                <p
                  style="
                    font-size: 16px;
                    color: lightgray;
                    width: 90%;
                    margin: auto;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal;
                    word-wrap: break-word;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                  "
                >
                  {{ news[1] }}
                </p>
              </div>
              <br />
              <div
                style="
                  width: 80%;
                  margin: auto;
                  border: 1px solid white;
                  height: 25vh;
                "
              >
                <br />
                <a
                  :href="news[5]"
                  id="newstitlehover"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="
                    font-size: 25px;
                    color: white;
                    width: 90%;
                    margin: auto;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal;
                    word-wrap: break-word;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                  "
                  >{{ news[3] }}</a
                >
                <br />
                <p
                  style="
                    font-size: 16px;
                    color: lightgray;
                    width: 90%;
                    margin: auto;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal;
                    word-wrap: break-word;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                  "
                >
                  {{ news[4] }}<br />
                </p>
              </div>
            </div>
          </div>
          <div
            class="weather"
            align="right"
            style="
              background-color: rgba(0, 0, 0, 0.7);
              text-align: center;
              margin: 0 2% 0 1%;
              padding-top: 20px;
              border-radius: 10px;
              color: white;
              width: 50%;
              height: 80vh;
            "
          >
            <br />
            <br />
            <h2
              style="
                font-size: 40px;
                text-shadow: 0 0 24px;
                font-family: 'GowunDodum-Regular';
              "
            >
              오늘의 날씨
            </h2>
            <div>
              <div>
                <img
                  src="@/assets/img/placeholder.png"
                  width="21px"
                  style="margin-bottom: 5px; margin-right: 5px"
                /><span style="font-size: 15pt"
                  >{{ sidoName }} {{ gugunName }} {{ dongName }}</span
                >
              </div>
              <!-- <div style="text-align: center; font-size: 15pt">
            {{ sidoName }} {{ gugunName }} {{ dongName }}
          </div> -->
              <!-- <div>위도 : {{ latitude }} / 경도 : {{ longitude }}</div> -->

              <!-- <div v-for="(hi, index) in wea" :key="index"> -->
              <br />
              <div style="color: white">
                <table style="margin: auto; width: 90%; height: 90%">
                  <colgroup>
                    <col width="10%" />
                    <col width="20%" />
                    <col width="20%" />
                    <col width="20%" />
                    <col width="30%" />
                    <!-- <col width="20%" /> -->
                  </colgroup>
                  <tr
                    style="
                      height: 3em;
                      border-bottom: 2px solid white;
                      border-top: 2px solid white;
                    "
                  >
                    <th></th>
                    <th>DAY</th>
                    <th>TIME</th>
                    <th>TEMP</th>
                    <th>WEATHER</th>
                  </tr>
                  <tr
                    v-for="(hi, index) in wea"
                    :key="index"
                    style="height: 5vh; border-bottom: 1px solid white"
                  >
                    <td>
                      <img
                        v-if="hi.weather === '맑음'"
                        src="@/assets/img/weather/sunny.png"
                        alt="맑음"
                        width="20px"
                      />
                      <img
                        v-if="hi.weather === '흐림'"
                        src="@/assets/img/weather/partly_cloudy.png"
                        alt="맑음"
                        width="20px"
                      />
                      <img
                        v-if="hi.weather === '구름 많음'"
                        src="@/assets/img/weather/cloud.png"
                        alt="맑음"
                        width="20px"
                      />
                      <img
                        v-if="hi.weather === '비'"
                        src="@/assets/img/weather/rainy.png"
                        alt="맑음"
                        width="20px"
                      />
                      <img
                        v-if="hi.weather === '눈'"
                        src="@/assets/img/weather/snowy.png"
                        alt="맑음"
                        width="20px"
                      />
                    </td>
                    <td v-if="hi.day === '0'">오늘</td>
                    <td v-else-if="hi.day === '1'">내일</td>
                    <td v-else>모레</td>
                    <td>{{ hi.hour }}</td>
                    <td>{{ hi.temp }}°C</td>
                    <td>{{ hi.weather }}</td>
                  </tr>
                </table>
              </div>
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
      latitude: 0,
      longitude: 0,
      wea: [],
      sidoName: "",
      gugunName: "",
      dongName: "",
      week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      date: "",
    };
  },
  methods: {
    scrolldown() {
      var val = this.$refs.test_obj.scrollHeight;
      //var location = document.querySelector("#test_obj").offsetTop;
      window.scrollTo({ top: val, behavior: "smooth" });
    },

    updateTime() {
      var cd = new Date();
      // 날짜 출력
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "/" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "/" +
        this.zeroPadding(cd.getDate(), 2) +
        " " +
        this.week[cd.getDay()];
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },

    getNews() {
      // console.log("aaaa");
      const params = {
        userid: this.userInfo.userid,
        dongName: this.house.법정동,
        aptName: this.house.아파트,
      };

      // console.log("listRow : ", this.house);
      // this.$store.dispatch("getHouse", this.house);
      this.classicModal = true;
      this.detailHouse(this.house);
    },

    getWeather(params) {
      //좌표에 따른 날씨 XML데이터로 받아옴

      // var strQuery =
      //   "/wid/queryDFS.jsp?gridx=" + params.x + "&gridy=" + params.y;
      // console.log(strQuery);

      var strQuery =
        "https://cors-anywhere.herokuapp.com/http://www.kma.go.kr/wid/queryDFS.jsp?gridx=" +
        params.x +
        "&gridy=" +
        params.y;
      // console.log(strQuery);

      axios
        .get(strQuery, { timeout: 5000 })
        .then((response) => {
          // console.log(response.data);
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

          // children = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[9]
          //   .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          // children2 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[9]
          //   .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          // children3 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[9]
          //   .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          // children4 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[9]
          //   .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          // this.wea.push({
          //   hour: children,
          //   temp: children3,
          //   weather: children2,
          //   day: children4,
          // });

          // children = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[10]
          //   .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          // children2 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[10]
          //   .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          // children3 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[10]
          //   .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          // children4 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[10]
          //   .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          // this.wea.push({
          //   hour: children,
          //   temp: children3,
          //   weather: children2,
          //   day: children4,
          // });

          // children = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[11]
          //   .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          // children2 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[11]
          //   .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          // children3 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[11]
          //   .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          // children4 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[11]
          //   .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          // this.wea.push({
          //   hour: children,
          //   temp: children3,
          //   weather: children2,
          //   day: children4,
          // });

          // children = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[12]
          //   .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          // children2 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[12]
          //   .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          // children3 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[12]
          //   .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          // children4 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[12]
          //   .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          // this.wea.push({
          //   hour: children,
          //   temp: children3,
          //   weather: children2,
          //   day: children4,
          // });

          // children = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[13]
          //   .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          // children2 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[13]
          //   .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          // children3 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[13]
          //   .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          // children4 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[13]
          //   .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          // this.wea.push({
          //   hour: children,
          //   temp: children3,
          //   weather: children2,
          //   day: children4,
          // });

          // children = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[14]
          //   .getElementsByTagName("hour")[0].childNodes[0].nodeValue;

          // children2 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[14]
          //   .getElementsByTagName("wfKor")[0].childNodes[0].nodeValue;

          // children3 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[14]
          //   .getElementsByTagName("temp")[0].childNodes[0].nodeValue;

          // children4 = xml
          //   .getElementsByTagName("body")[0]
          //   .getElementsByTagName("data")[14]
          //   .getElementsByTagName("day")[0].childNodes[0].nodeValue;

          // this.wea.push({
          //   hour: children,
          //   temp: children3,
          //   weather: children2,
          //   day: children4,
          // });
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
    this.updateTime();

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
            }
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
      }
    );
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Patua+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
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

#bg1 {
  background-image: linear-gradient(to top, #ff000000, rgba(0, 0, 0, 0.5)),
    url("@/assets/img/suburban01.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
}

#bg2 {
  position: absolute;
  z-index: 999;
  top: 100%;
  background-image: linear-gradient(to top, #ff000000, rgba(0, 0, 0, 0.5)),
    url("@/assets/img/nyc01.jpg");
  width: 100%;
  height: 100vh;
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
  border: rgba(75, 112, 253, 0.3) solid;
  border-width: 0 0 6px 0;
  color: white;
}

#newstitle a:hover {
  text-decoration-color: green;
  text-decoration: none;
  color: green;
}

.news:hover,
.weather:hover {
  background-color: rgba(0, 0, 0, 0.9) !important;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.test_obj {
  position: relative;
  animation: fadeInDown 1s;
}

.test_btn {
  position: relative;
  animation: fadeIn 1s;
}

.darker {
  background-color: rgba(114, 208, 31, 0.5);
}

.lighter {
  background-color: rgba(0, 0, 0, 0.3);
}

#newstitlehover:hover {
  color: skyblue !important;
}
</style>

<template>
  <div>
    <div>현재 위치의 날씨</div>
    <div>위도 : {{ latitude }} / 경도 : {{ longitude }}</div>
    <div v-for="(hi, index) in wea" :key="index">
      <div v-if="hi.day === '0'">
        오늘 {{ hi.hour }} 시 {{ hi.temp }}도 {{ hi.weather }}
      </div>

      <div v-else-if="hi.day === '1'">
        내일 {{ hi.hour }} 시 {{ hi.temp }}도 {{ hi.weather }}
      </div>

      <div v-else>모레 {{ hi.hour }} 시 {{ hi.temp }}도 {{ hi.weather }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "test",
  data() {
    return {
      latitude: 0,
      longitude: 0,
      wea: [],
    };
  },
  created() {
    if (!("geolocation" in navigator)) {
      return;
    }
    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
        console.log(this.latitude);
        console.log(this.longitude);
        var gridXY = this.dfs_xy_conv("toXY", this.latitude, this.longitude);
        console.log(gridXY);
        this.getWeather(gridXY);
      },
      (err) => {
        alert(err.message);
      }
    );
  },
  methods: {
    getWeather(params) {
      //좌표에 따른 날씨 XML데이터로 받아옴

      var strQuery =
        "/wid/queryDFS.jsp?gridx=" + params.x + "&gridy=" + params.y;
      console.log(strQuery);
      axios
        .get(strQuery, { timeout: 5000 })
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
};
</script>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#map {
  width: 400px;
  height: 500px;
  border: 1px #a8a8a8 solid;
}
</style>

<template>
  <div>
    <div id="material-kit">
      <div :class="{ 'nav-open': NavbarStore.showNavbar }">
        <router-view name="header" />
        <div>
          <router-view />
        </div>
        <!-- <router-view name="footer" /> -->
      </div>
    </div>
    <router-view name="footer" />
  </div>
</template>

<style>
@font-face {
  font-family: "GowunDodum-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

#material-kit {
  font-family: "GowunDodum-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

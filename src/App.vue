<template>
  <Home msg="Hi people" />
  <News />
  <Footer />
</template>

<script>
import Home from "./components/Home.vue";
import News from "./components/News.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    News,
    Footer,
  },
  created() {
    document.title = "Fred Soloy - Home";
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 100%);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  /* margin-top: 60px; */
}
</style>

<template>
  <div class="hello" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <img id="logo" alt="Vue logo" src="../assets/logo.png" />
    <div class="welltext">
      <h1 id="typewriter">Hi People!</h1>
      <p class="greet" id="line-1">I'm Fred Soloy 👀</p>
      <p class="greet2" id="line-2">Web Developer</p>
    </div>
    <div class="scroll">
      <a href="#news">
        <h1 class="icon-scroll"></h1>
      </a>
    </div>
  </div>
</template>

<script>
import backgroundUrl from "../assets/bg.webp";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      backgroundUrl,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  margin-top: 5%;
  width: 48px;
}

.hello {
  height: 100vh;
  color: #82ccdd;
  background-position: center;
}

.welltext {
  margin-top: 10%;
  position: absolute;
  left: 42%;
}

.greet {
  padding-top: 5%;
  font-size: 1.5rem;
}

.greet2 {
  padding-top: 3%;
  font-size: 1.5rem;
}

/* ANIMATION ******************/
#typewriter {
  border-right: 1px solid white;
  white-space: nowrap;
  overflow: hidden;
  width: 215px;
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter 2s steps(25) 1s 2 normal both;
}

#line-1 {
  border-right: 1px solid white;
  white-space: nowrap;
  overflow: hidden;
  width: 235px;
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter 3s steps(40) 1s 2 normal both;
  animation-delay: 3.5s;
}

#line-2 {
  border-right: 1px solid white;
  white-space: nowrap;
  overflow: hidden;
  width: 210px;
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter 3s steps(40) 1s 2 normal both;
  animation-delay: 7s;
}

@keyframes typewriter {
  0% {
    width: 0;
    border-right: none;
  }
  0.1% {
    border-right: 1px solid rgb(220, 220, 220);
  }
  99.9% {
    border-right: 1px solid rgb(220, 220, 220);
  }
  100% {
    border: none;
  }
}

a {
  color: #42b983;
}

/* Media Query */
@media (max-width: 640px) {
  .hello {
    padding-top: 10%;
  }
  .welltext {
    left: 22%;
  }
}

/* Scroll down animation */

.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 40px;
  height: 70px;
  margin-left: -20px;
  top: 70%;
  /* margin-top: -35px; */
  margin-top: 5%;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
}
.icon-scroll:before {
  content: "";
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: scroll;
  animation-name: scroll;
}
@-webkit-keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(46px);
    transform: translateY(46px);
  }
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(46px);
    transform: translateY(46px);
  }
}
</style>

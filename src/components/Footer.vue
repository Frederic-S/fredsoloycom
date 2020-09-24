<template>
  <footer class="footer" id="foot">
    <div class="icon-group">
      <a href="https://github.com/Frederic-S" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/fred-soloy/" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/fredericsoloy/" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="legal">
      <span>
        Made with
        <span class="heart">♥</span> by
      </span>
    </div>
    <div class="copy">
      <p>Fred Soloy - &copy; {{ currentYear }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: #6e6967;
  background-color: #d7c2eb;
  border-top: 1px solid #e5e5e5;
  justify-content: space-evenly;
  align-items: baseline;
  background: rgba(0, 0, 0, 0.3);
}

.wrapper > * {
  flex: 1 100%;
}

.icon-group .fab {
  width: 25px;
  padding-left: 5px;
}

.icon-group a {
  padding-left: 10px;
}

.legal {
  display: flex;
  flex-wrap: wrap;
}

.copy {
  display: flex;
  position: relative;
}

.heart {
  color: red;
}

@media (max-width: 652px) {
  #foot {
    flex-direction: column;
    flex-flow: column wrap;
    justify-content: center;
  }
  .icon-group {
    padding-left: 30%;
  }
  .icon-group a {
    padding-left: 10px;
  }
  .legal {
    padding-left: 26%;
    padding-top: 5%;
  }
  .copy {
    padding-left: 21%;
    padding-top: 5%;
  }
}
</style>

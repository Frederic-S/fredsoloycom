<template>
  <footer class="footer" id="foot">
    <div class="icon-group">
      <a href="https://github.com/Frederic-S" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/fred-soloy/" target="_blank">
        <svg
          class="dinlogo"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
          />
        </svg>
      </a>
      <a href="https://www.instagram.com/fredericsoloy/" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="insta"
          width="24"
          height="24"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          />
        </svg>
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

.dinlogo {
  fill: #2273b0;
}

.insta {
  filter: invert(0.8);
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

<template>
  <div class="flex mb-4" id="news">
    <div class="w-1/2 bg-gray-400 h-12"><h1>Rebuilding the site</h1></div>
    <div class="w-2/2 bg-gray-500 h-12"><h2>In progress...</h2></div>
    <p>
      🇫🇷 Site en Français:
      <a
        href="https://fredsoloy.fr"
        target="_blank"
        class="button1"
        style="background-color: #9a4ef1"
        >Fred Soloy</a
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#news {
  margin: 5% 0;
  padding: 0 5%;
}

#news h1,
h2 {
  font-size: 1rem;
}

a {
  text-decoration: none;
}

a.button1 {
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border-radius: 2em;
  border: 0.16em solid rgba(255, 255, 255, 0);
  box-sizing: border-box;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
}

a.button1:hover {
  border-color: rgba(255, 255, 255, 1);
}

@media all and (max-width: 30em) {
  a.button1 {
    display: block;
    margin: 0.2em auto;
  }
}
</style>

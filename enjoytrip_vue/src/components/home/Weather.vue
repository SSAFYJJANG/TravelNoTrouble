<template>
    <hr>
    <div class="container">
      <a
        ref="weatherWidget"
        class="weatherwidget-io mt-3 mb-3"
        href="https://forecast7.com/en/35d91127d77/south-korea/"
        data-label_1="오늘의 날씨"
        data-icons="Climacons Animated"
        data-theme="pure"
        >오늘의 날씨</a
      >
    </div>
  </template>
  
  
  <script setup>
  import { onMounted } from 'vue';
  
  const callWeather = async () => {
    if (!window.weatherWidgetLoaded) {
      const script = document.createElement('script');
      script.id = 'weatherwidget-io-js';
      script.src = 'https://weatherwidget.io/js/widget.min.js';
      script.async = true;
      document.body.appendChild(script);
      window.weatherWidgetLoaded = true;
    }
  };
  
  onMounted(callWeather);
  </script>
  
  
<style scoped>
hr{
    box-sizing: content-box;
    margin: auto;
    width: 80%;
}
</style>
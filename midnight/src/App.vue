<template>
  <div id="app">
    <mainSection />
  </div>
</template>

<script>
import mainSection from './components/main-section.vue'

export default {
  name: 'App',
  components: {
    mainSection
  }
}
</script>

<style>
  :root {
    --blue-primary: #061A40;
    --blue-dark: #031029;
    --blue-secondary: #4D7C8A;
    --blue-light: #D2D6EF;
    --yellow-primary: #EFA00B; 
    --orange-primary: #D65108;

    --font-primary: 'Montserrat', sans-serif;
    --font-secondary: 'Kufam', sans-serif;
  }

  html {
    font-size: 10px;
  }

  * {
     padding: 0;
     margin: 0;
   }

  body {
     display: flex;
     justify-content: center;
     background-image: url('/imgs/sky.jpg');
     background-size: cover;
     background-repeat: no-repeat;
   }

</style>

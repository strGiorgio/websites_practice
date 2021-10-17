<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="router-links">Home</router-link> |
      <router-link to="/dashboard" class="router-links">Dashboard</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  :root {
    --grey-primary: #1C1F23;
    --grey-secondary: #181b1f;
    --blue-primary: #061A40;
    --white-primary: aliceblue; 

    --font-primary: Helvetica, sans-serif; 
  }

  * {
    padding: 0;
    margin: 01;
  }

  html {
    font-size: 10;
  }

  body {
    background-color: var(--grey-primary);
  }

  #app {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .router-links {
    font: 1.3rem var(--font-primary);
    text-decoration: none;
    color: var(--white-primary);
  }

  .router-links:hover {
    text-decoration: underline;
  }
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">About</router-link>
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
    justify-content: center;
  }
</style>

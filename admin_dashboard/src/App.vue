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
    --blue-dark: #1C1F23;
    --yellow-primary: #F4E409;
    --yellow-secondary: #EEBA0B;
  }

  * {
    padding: 0;
    margin: 01;
  }

  html {
    font-size: 10;
  }

  body {
    background-color: var(--blue-dark);
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

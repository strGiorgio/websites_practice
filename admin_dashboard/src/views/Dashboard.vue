<template>
  <div class="dashboard">
    <h1>This is an dashboard page</h1>
    <mainDashboard />
  </div>
</template>

<script>
import mainDashboard from '../components/dashboard-comps/main-dashboard.vue'

export default {
  name: 'dashboard',
  components: {
    mainDashboard
  }
}
</script>

<style scoped>
  h1 {
    font: 3rem Helvetica, sans-serif;
    color: var(--white-primary);
  }
</style>

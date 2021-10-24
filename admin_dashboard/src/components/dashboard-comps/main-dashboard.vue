<template>
    <div class="main-dashboard">
        <p v-if="this.$store.state.isAdmin">Se você for admin, verá essa mensagem</p>
        <p v-else>Caso não seja admin, verá essa mensagem!</p>
    </div>
</template>

<script>
export default {
    name: 'mainDashboard'    
}
</script>

<style scoped>
    p {
        color: var(--white-primary);
    }
</style>
<template>
    <div class="main-section">
        <mainBanner />
    </div>
</template>

<script>
import mainBanner from './main-banner.vue'

export default {
    name: 'mainSection',
    components: {
        mainBanner
    }
}
</script>

<style scoped>
    .main-section {
        width: 100vw;
        max-width: 1920px;
        height: 100vh;
        max-height: 1080px;
        background-color: var(--blue-primary);
        display: flex;
        flex-direction: column;
    } 
</style>
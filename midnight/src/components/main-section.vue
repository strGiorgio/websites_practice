<template>
    <div class="main-section">
        <mainHeader />
        <mainBanner />
    </div>
</template>

<script>
import mainHeader from './main-header.vue'
import mainBanner from './main-banner.vue'

export default {
    name: 'mainSection',
    components: {
        mainHeader,
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
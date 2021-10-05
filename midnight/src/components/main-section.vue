<template>
    <div class="container">
        <mainHeader />
    </div>
</template>

<script>
import mainHeader from './main-header.vue'

export default {
    name: 'mainSection',
    components: {
        mainHeader
    }
}
</script>

<style scoped>
    .container {
        width: 100vw;
        max-width: 1920px;
        height: 100vh;
        max-height: 1080px;
        background-color: var(--blue-primary);
        border-radius: 30px;
    } 
</style>
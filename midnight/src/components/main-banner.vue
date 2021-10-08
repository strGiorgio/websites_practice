<template>
    <div class="main-banner">
        <sectionAbout v-show="getAbout" />
        <sectionContact />
        <h1>Midnight</h1>
        <img src="/imgs/moon.png" alt="">
    </div>
</template>

<script>
import sectionAbout from './section-about.vue'
import sectionContact from './section-contact.vue'

export default {
    name: 'mainBanner',
    data() {
        return {
            getAbout: this.$store.state.showAbout
        }
    },
    components: {
        sectionAbout,
        sectionContact
    }
}
</script>

<style scoped>
    .main-banner {
        width: 100%;
        max-width: 1920px;
        height: 100vh;
        position: relative;
        padding: 100px;
    }

    .main-banner h1 {
        font: 10rem var(--font-secondary);
        font-weight: bold;
        color: var(--blue-light);
        position: absolute;
        z-index: 10;
        left: 50%;
        top: 500px;
        text-shadow: 5px 5px 10px var(--blue-dark);
    }

    .main-banner img {
        position: absolute;
        width: 500px;
        height: 500px;
        left: 60%;
        top: 150px;
    }

</style>
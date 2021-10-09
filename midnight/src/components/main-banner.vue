<template>
        <div class="main-banner">
            <div class="wrapper-header">
                <mainHeader @aboutClicked="change('about')" @contactsClicked="change('contacts')"/>
            </div>
            <sectionAbout v-show="showAbout"/>
            <sectionContact v-show="showContacts"/>
            <h1>Midnight</h1>
            <img src="/imgs/moon.png" alt="">
        </div>
</template>

<script>
import mainHeader from './main-header.vue'
import sectionAbout from './section-about.vue'
import sectionContact from './section-contact.vue'

export default {
    name: 'mainBanner',
    data() {
        return {
            showAbout: true,
            showContacts: false
        }
    },
    components: {
        mainHeader,
        sectionAbout,
        sectionContact
    },
    methods: {
        change(element) {
            if (element == 'about') {
                this.showAbout = true;
                this.showContacts = false;
            } else if (element == 'contacts') {
                this.showAbout = false;
                this.showContacts = true;
            }
        }
    }
}
</script>

<style scoped>
    .main-banner {
        width: 100%;
        max-width: 1920px;
        height: 100vh;
        position: relative;
        padding: 200px 100px;
    }

    .main-banner .wrapper-header {
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
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
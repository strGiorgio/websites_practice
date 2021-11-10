<template>
        <div class="main-banner">
            <div class="wrapper-header">
                <mainHeader @aboutClicked="change('about')" @contactsClicked="change('contacts')" 
                @homeClicked="change('home')"/>
            </div>

            <div v-show="this.$store.state.isDay">
                <sectionAbout v-show="showAbout"/>
                <sectionContact v-show="showContacts"/>
            
                <h1>Midnight</h1>
                <img src="/imgs/moon.png" alt="">

                <mainFooter />
            </div>
        </div>
</template>

<script>
import mainHeader from './main-header.vue'
import sectionAbout from './section-about.vue'
import sectionContact from './section-contact.vue'
import mainFooter from './main-footer.vue'

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
        sectionContact,
        mainFooter
    },
    methods: {
        change(element) {
            if (element == 'about') {
                this.showAbout = true;
                this.showContacts = false;
            } else if (element == 'contacts') {
                this.showAbout = false;
                this.showContacts = true;
            } else {
                this.showAbout = false;
                this.showContacts = false;
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
        padding: 100px 100px;
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
        transform: translateX(450px);
        animation: slideToLeft 1s forwards;
    }

    @keyframes slideToLeft {
        to {
            transform: translateX(0);
        }
    }

    .main-banner img {
        position: absolute;
        width: 500px;
        height: 500px;
        left: 60%;
        top: 150px;
        transform: translateY(-200px);
        animation: slideToBottom 5s forwards;
        z-index: 0;
    }

    @keyframes slideToBottom {
        to {
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .main-banner {
            display: flex;
            padding: 800px 100px 600px;
        }

        .main-banner h1 {
            font-size: 7rem;
            top: 580px;
            left: 300px;
        }

        .main-banner img {
            position: absolute;
            left: 120px;
            top: 210px;
        }
    }

    @media (max-width: 640px) {
        .main-banner {
            padding: 800px 100px 0;
        }

        .main-banner h1 {
            font-size: 6rem;
            top: 580px;
            left: 190px;
        }

        .main-banner img {
            position: absolute;
            left: 80px;
            top: 210px;
        }
    }

    @media (max-width: 480px) {
        .main-banner h1 {
            font-size: 6rem;
            top: 580px;
            left: 100px;
        }

        .main-banner img {
            position: absolute;
            left: 80px;
            top: 210px;
        }
    }

    @media (max-width: 380px) {
        .main-banner h1 {
            font-size: 6rem;
            top: 580px;
            left: 50px;
        }

        .main-banner img {
            position: absolute;
            left: 80px;
            top: 210px;
        }
    }

</style>
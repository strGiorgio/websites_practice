<template>
    <header>
        <nav>
            <ul>
                <li @click="$emit('homeClicked')"><a href="#">Home</a></li>
                <li @click="$emit('aboutClicked')"><a href="#">About Us</a></li>
                <li @click="$emit('contactsClicked')"><a href="#">Contacts</a></li>
            </ul>
        </nav>

        <div class="wrapper-logo">
            <h1>Midnight</h1>
        </div>

        <div class="wrapper-checkbox">
            <input type="checkbox" v-model="valueC" @click="show">
            <span class="buttonC"></span>
        </div>

    </header>
</template>

<script>
export default {
    name: 'mainHeader',
    data() {
        return {
            valueC: this.$store.state.isNight
        }
    },
    emits: ['aboutClicked', 'contactsClicked', 'homeClicked'],
    methods: {
        show() {
            setTimeout(() => {this.$store.commit('changeNight')}, 300)
            
        },

        change(element) {
            this.$store.commit('change', element);
        }
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        padding: 10px;
        border-radius: 30px 30px 0 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        z-index: 10;
    }

    nav ul {
        list-style-type: none;
        font: 2rem var(--font-primary);
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }   

    nav ul li {
        padding: 10px 30px;
        border-radius: 20px;
        position: relative;
        cursor: pointer;
    }

    nav ul li:hover {
        background-color: var(--blue-light);
    }

    nav ul li:hover a {
        color: var(--blue-dark);
    }

    nav ul li:hover::after {
        content: "";
        width: 45px;
        height: 5px;
        border-radius: 5px;
        background-color: var(--blue-primary);
        position: absolute;
        right: -20px;
        top: 10px;
        z-index: 5;
    }

    nav ul li:hover::before {
        content: "";
        width: 45px;
        height: 5px;
        border-radius: 5px;
        background-color: var(--blue-primary);
        position: absolute;
        right: -30px;
        top: 20px;
        z-index: 5;
    }

    nav ul li a {
        text-decoration: none;
        color: var(--blue-light);
    }

    .wrapper-logo h1 {
        font: 3rem var(--font-secondary);
        font-weight: bold;
        color: var(--blue-light);
        cursor: pointer;
        padding: 10px 0;
        text-align: center;
    }

    .wrapper-checkbox {
        padding: 10px 0;
        display: flex;
        justify-content: center;
    }

    input[type="checkbox"] {
        width: 60px;
        height: 30px;
        background-color: var(--blue-light);
        border-radius: 20px;  
        -webkit-appearance: none;
        position: relative;
        transition: .5s;
        cursor: pointer;
    }

    input:checked[type="checkbox"] {
        background-color: var(--yellow-primary);
    }

    input[type="checkbox"]::before {
        content: "";
        background-color: var(--blue-dark);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 0;
        transition: .5s;
    }

    input:checked[type="checkbox"]::before {
        transform: translateX(30px);
    }

    @media (max-width: 768px) {
        header {
            display: flex;
            flex-direction: column;
            padding-top: 20px;
        }
    }

    @media (max-width: 480px) {
        nav ul li {
            font-size: 1.1rem;
        }
    }

</style>
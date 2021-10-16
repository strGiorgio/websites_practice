<template>
    <form class="form">
        <div class="login-wrapper" v-show="showLogin">
            <label for="name">Name:</label>
            <input id="name" type="text"  v-model="name" maxlength="24" minlength="2" required>

            <label for="passwd">Password:</label>
            <input id="passwd" type="password" v-model="passwd" maxlength="24" minlength="4" required>

            <button>Submit</button>
            <a href="#">Sign Up</a>
        </div>

        <div class="signUp-wrapper" v-show="showSignUp">
            <label for="name">Name:</label>
            <input id="name" type="text"  v-model="name" maxlength="24" minlength="2" required>

            <label for="email">Email:</label>
            <input id="email" type="text"  v-model="email">

            <label for="passwd">Password:</label>
            <input id="passwd" type="password" v-model="passwd" maxlength="24" minlength="4" required>

            <button>Sign Up</button>
            <a href="#">Login</a>
        </div>

    </form>
</template>

<script>
export default {
    name: 'mainForm',
    data() {
        return {
            showLogin: true,
            showSignUp: false
        }
    },
    methods: {
        
    }

}
</script>

<style scoped>
    .form {
        border: 2px solid var(--blue-primary);
        width: 20%;
        display: flex;
        flex-direction: column;
        padding: 40px;
        border-radius: 30px;
        box-shadow: 10px 10px 10px var(--grey-secondary);
        margin: 0 auto;
        background: linear-gradient(var(--grey-primary), 75%, var(--grey-secondary));
    }

    .form .login-wrapper {
    }

    .form label {
        font: 1.5rem var(--font-primary);
        color: var(--white-primary);
        padding: 5px 10px;
    }

    .form input {
        margin-bottom: 20px;
        height: 30px;
        font: 1.2rem var(--font-primary);
        border: none;
        border-radius: 20px;
        width: 100%;
    }

    .form button {
        width: 100%;
        padding: 5px 0;
        border-radius: 20px;
        border: none;
        box-shadow: 5px 5px 5px var(--grey-secondary);
        font: 1.3rem var(--font-primary);
        color: var(--white-primary);
        background-color: var(--blue-primary);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: 1s;
    }

    .form button::after {
        content: "";
        width: 20px;
        height: 60px;
        background-color: #fff;
        position: absolute;
        top: -10px;
        right: -30px;
        transform: rotate(-30deg);
        opacity: 30%;
        transition: 1s;
    }

    .form button:hover::after {
        transform: translate(-400px);
    }

    .form button:hover {
        transform: scale(1.03);
    }

    .form a {
        color: var(--white-primary);
        margin: 0 auto;
        text-decoration: none;
        padding: 10px 0 0 0;
        font: 1rem var(--font-primary);
        float:right;
    }

    .form a:hover {
        text-decoration: underline;
    }

    @media (max-width: 1200px) {
        .form {
            width: 50%;
        }
    }

    @media (max-width: 540px) {
        .form {
            width: 70%;
        }
    }
</style>
<template>
    <form class="form">
        <label for="name">Name:</label>
        <input id="name" type="text"  v-model="name">

        <label for="passwd">Password:</label>
        <input id="passwd" type="passwd" v-model="passwd">
    </form>
</template>

<script>
export default {
    name: 'mainForm'
}
</script>

<style scoped>
    .form {
        border: 2px solid var(--yellow-primary);
        width: 30%;
        display: flex;
        flex-direction: column;
        padding: 40px;
        border-radius: 30px;
        box-shadow: 10px 10px 10px var(--grey-secondary);
    }

    .form label {
        font: 1.5rem var(--font-primary);
        color: var(--white-primary);
        padding: 5px 10px;
    }

    .form input {
        margin-bottom: 20px;
        height: 30px;
        font: 1.3rem var(--font-primary);
        padding: 0 10px;
        border-radius: 20px;
    }
</style>
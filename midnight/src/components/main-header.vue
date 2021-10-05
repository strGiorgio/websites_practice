<template>
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'mainHeader'
}
</script>

<style scoped>
    header {
        width: 100%;
        padding: 10px;
        border-radius: 30px 30px 0 0;
    }

    nav {
        width: 30%;
    }

    nav ul {
        list-style-type: none;
        font: 2rem var(--font-primary);
        margin: 0;
        display: flex;
        justify-content: space-between;
        
    }   

    nav ul li {
        padding: 10px 30px;
        border-radius: 20px;
        position: relative;
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

</style>
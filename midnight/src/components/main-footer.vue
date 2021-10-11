<template>
    <div class="main-footer">
        <p>strGiorgio &copy; 2021</p>
    </div>    
</template>

<script>
export default {
    name: 'mainFooter'
}
</script>

<style scoped>
    .main-footer {
        position: absolute;
        bottom: 10px;
        margin: o auto;
        left: calc(50% - 100px);
    }

    .main-footer p {
        color: var(--blue-light);
        font: 1.5rem var(--font-primary);
    }
</style>
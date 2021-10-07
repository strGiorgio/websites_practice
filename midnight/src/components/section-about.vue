<template>
    <div class="section-about">
        <h2>About us</h2>
        <p>Nós somos uma comunidade de programadores, desenvolvedores, designers e diversas outras areas de tecnologia.
            Nosso maior foco é compartilhar conhecimento, desde o mais básico nivel até o mais avançado.
        </p>
    </div>
</template>

<script>
export default {
    name: 'sectionAbout'
}
</script>

<style scoped>
    .section-about {
        width: 30%;
    }

    .section-about h2 {
        font: 2rem var(--font-primary);
        color: var(--blue-light);
        margin-bottom: 50px;
    }

    .section-about p {
        font: 1.5rem var(--font-primary);
        color: var(--blue-light);
        line-height: 3rem;
    }
</style>
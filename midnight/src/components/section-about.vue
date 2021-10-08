<template>
    <div class="section-about">
        <h2>About us<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"/>
        </svg></h2>
        <p>Nós somos uma comunidade de programadores, desenvolvedores, designers e diversas outras areas de tecnologia.
            Nosso maior foco é compartilhar conhecimento, desde o mais básico nivel até o mais avançado.
        </p>
        <p>Para fazer parte de nossa comunidade não é nada difícil, basta apenas nos seguir em nossas redes sociais, e começar a interagir com nossos membros, que estarão lhe esperando para responder dúvidas e ajudar no seu processo de aprendizagem!</p>
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
        font: 3.5rem var(--font-primary);
        color: var(--blue-light);
        margin-bottom: 50px;
        position: relative;
    }

    .section-about h2 svg {
        transform: rotate(90deg);
        position: absolute;
        top: 20px;
        left: 170px;
    }

    .section-about p {
        font: 2rem var(--font-primary);
        color: var(--blue-light);
        line-height: 3rem;
    }
</style>
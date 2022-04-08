

<script>

import Title from '$lib/title.svelte'
import BackButton from '$lib/BackButton.svelte'
import '../styles/global.scss'
</script>

<header>
    <BackButton />
    <Title />
</header>
<main>
    <slot></slot>
</main>
<footer class="first-color">
    <a href="/home">
        <button class="btn">
            <span class="material-icons md-18">home</span>
            <div>inicio</div>
        </button>
    </a>
    <a href="/category">
        <button class="btn">
            <span class="material-icons md-18">list</span>
            <div>categoria</div>
        </button>
    </a>
    <a href="/features">
        <button class="btn">
            <span class="material-icons md-18">favorite_border</span>
            <div>favorito</div>
        </button>
    </a>
    <a href="/profile">
        <button class="btn">
            <span class="material-icons md-18">account_circle</span>
            <div>perfil</div>
        </button>
    </a>
  
</footer>
<style lang="scss">
    header{
        display: flex;
        justify-content: center;
        background: white;
        border-bottom-right-radius: 20px;
    }
    main{
        max-width: 960px;
        margin: 20px 0px;
    }
    footer{
        border-top-left-radius: 20px;
        display: flex;
        position: fixed;
        justify-content: space-around;
        bottom: 0px;
        left: 0px;
        text-align: center;
        width: 100%;
    }

    footer .btn{
        background-color: transparent;
        color: white;
        border: none;
        margin: 10px;
    }
</style>
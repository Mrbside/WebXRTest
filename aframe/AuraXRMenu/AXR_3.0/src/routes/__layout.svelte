<script>
import Title from '$lib/title.svelte'
import '../styles/global.css'
</script>

<header>
    <Title title="Holaaaa"/>
</header>
<main>
    <slot></slot>
</main>
<footer>
    <p>Copyright 2022 AuraXR</p>
</footer>
<style>
    header{
        display: flex;
        justify-content: center;
        background: darkgrey;
    }
    main{
        max-width: 960px;
        margin: 20px auto;
    }
    footer{
        text-align: center;
        background: darkgrey;
    }
</style>
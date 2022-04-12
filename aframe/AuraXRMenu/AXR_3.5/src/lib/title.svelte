<script>
    import { headerTitle } from '../store'
    // export let title = "Home Page"
</script>

<div class="title">
    <h2>{$headerTitle}</h2>
</div>

<style lang="scss">
    .title{
        display: flex;
    }
    .title h2{
        margin-left: 10px;
    }
</style>
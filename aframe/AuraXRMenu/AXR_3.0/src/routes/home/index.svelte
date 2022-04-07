<script context="module">
    export async function load({fetch}) {
     const res =  await fetch('data.json')
     const data = await res.json()
     const store = data.store
     if(res.ok) {
         return {
             props: {
                 store
             }
         }
     }
     return {
         status: res.status,
         error: new Error('Could not fetch the categories')
     }
    }
</script>

<script>
    import { headerTitle } from '../../store'
    import Featured from '$lib/Featured.svelte'
    import CategoryNav from "$lib/CategoryNav.svelte";
    $headerTitle = "HOMEEE"
    export let store
</script>

<div class="home">
    
    <CategoryNav store={store} />
    <Featured store={store} />
</div>

<style lang="scss">
    .home{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>
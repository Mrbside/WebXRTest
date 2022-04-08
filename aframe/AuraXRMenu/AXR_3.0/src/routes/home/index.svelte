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
    import { headerTitle, breadcrumb } from '../../store.js'
    import Featured from '$lib/Featured.svelte'
    import FeaturedGrid from '$lib/FeaturedGrid.svelte'
    import CategoryNav from "$lib/CategoryNav.svelte";
    $headerTitle = "HOMEEE"
    $breadcrumb = "/"
    export let store
</script>

<div class="home">
    
    <CategoryNav store={store} />
    <Featured store={store} />
    <FeaturedGrid store={store} />
    <div class="spacer"></div>
</div>

<style lang="scss">
    .home{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>
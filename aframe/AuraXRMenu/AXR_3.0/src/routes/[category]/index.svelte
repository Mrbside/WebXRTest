<script context="module">
    export async function load({params, fetch}) {
        const category = params.category
        const res =  await fetch('data.json')
        const data = await res.json()
        const store = data.store
     
        if(res.ok) {
            return {
                props: {
                    store,
                    category
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
    import ProductList from '$lib/ProductList.svelte'
    import ProductListSubcategory from '$lib/ProductListSubcategory.svelte'
    import { headerTitle } from "../../store.js"
    $headerTitle = "Category"
    export let store
    export let category
    export const storeData = []
    store.forEach(element => {
        if(category == element.category) storeData.push(element)
    });

</script>

<div class="category">
    <ProductListSubcategory store={store} category={category} />
    <ProductList store={store} category={category}/>
</div>

<style lang="scss">
    .category{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>
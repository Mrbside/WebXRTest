<script context="module">
    export async function load({params, fetch}) {
        const id = params.id
     const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     const category = await res.json()

     if(res.ok) {
         return {
             props: {
                 category
             }
         }
     }
     return {
         status: 301,
         redirect: '/home'
     }
    }
</script>

<script>
    export let category
</script>

<div class="category">
    <h2>{category.title}</h2>
    <p>{category.body}</p>
</div>

<style lang="scss">
    .category {
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgb(95, 95, 95);
    }
</style>
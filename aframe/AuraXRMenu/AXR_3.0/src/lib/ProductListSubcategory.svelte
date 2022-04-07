

    
<script>
    export let store
    export let category
    export const categoryElements = []
    store.forEach(element => {
        if(category == element.category) categoryElements.push(element)
    });


    const categoryData = []
    
    categoryElements.forEach(element => categoryData.push(element.subcategory));
    export const subcategories = [...new Set(categoryData)]
    
</script>

<div class="product-list-subcategory">
    <h1>{category}</h1>
    <ul>
        {#each subcategories as subcategory}
        <h1>{subcategory}</h1>
            {#each categoryElements as item}
                {#if item.subcategory == subcategory}
                <li>
                    <a sveltekit:prefetch href={`/${item.category}/${item.id}`}>
                        <div class="container">
                            <div class="img" style={`background-image: url('${item.assets.imageThumbnail}');`}></div>
                        <div class="content third-color">
                                <div>{item.title}</div>
                                <div>{item.info.price}</div>
                            </div>
                        
                        </div>
                    </a>
                </li>
                {/if}
            {/each}
        {/each}
    </ul>
</div>

<style lang="scss">
    .product-list-subcategory{
        text-align: center;
        display: block;
        margin: 20px auto;

        ul {
            padding: 0px;
            display: flex;
            flex-direction: column;
            list-style: none;
            width: calc(100% - 40px);
            position: relative;
            left: 0px;
            right: 0px;
            li {
                margin: 10px 20px;
                height: 100px;
                width: 100%;
                box-shadow: 1px 1px 8px 1px #ddd;
                border-radius: 10px;
                a {
                    width: inherit;
                    height: inherit;
                    text-transform: capitalize;
                    text-decoration: none;
                    color: black;
                
                    .container {
                        width: inherit;
                        height: inherit;
                        padding: 10px 10px;
                        position: relative;
                        display: flex;
                        .img{
                            background-image: url(/hugs-HOMBRE-1200x1815.png);
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: contain;
                            width: 30%;
                            height: inherit;
                            position: relative;
                            top: 0px;
                        }

                        .content {
                            font-size: 12px;
                            position: relative;
                            height: 40px;
                            width: 60%;
                            border-radius: 10px;
                            padding-top: 10px;
                        }
                    }
                }
                
            }
        }
    }

</style>
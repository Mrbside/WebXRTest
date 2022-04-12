

    
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
    <h3>{category}</h3>
    <ul>
        {#each subcategories as subcategory}
        <h3>{subcategory}</h3>
            {#each categoryElements as item}
                {#if item.subcategory == subcategory}
                <li>
                    <a sveltekit:prefetch href={`/${item.category}/${item.id}`}>
                        <div class="container">
                            <div class="img" style={`background-image: url('${item.assets.imageThumbnail}');`}></div>
                        <div class="content fifth-color">
                                <div class="title">{item.title}</div>
                                <div>$ {item.info.price}</div>
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
        text-align: left;
        display: block;
        margin: 20px 20px;
        h3 {
            font-weight: bold;
            line-height: 0;
        }
        ul {
            padding: 0px;
            display: flex;
            flex-direction: column;
            list-style: none;
            width: 100%;
            position: relative;
            left: 0px;
            right: 0px;
            h3 {
                font-weight: 400;
            }
            li {
                margin: 10px 0px;
                height: 100px;
                width: 100%;
                box-shadow: 1px 1px 8px 1px #ddd;
                border-radius: 10px;
                background-color: white;
                a {
                    width: inherit;
                    height: inherit;
                    text-transform: capitalize;
                    text-decoration: none;
                    color: black;
                
                    .container {
                        width: inherit;
                        height: inherit;
                        position: relative;
                        display: flex;
                        .img{
                            background-image: url(/hugs-HOMBRE-1200x1815.png);
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                            border-radius: 10px;
                            width: 30%;
                            height: inherit;
                            position: relative;
                            top: 0px;
                        }
                        .img:after {
                            content: "";
                            border: 5px solid white;
                            width: -webkit-fill-available;
                            height: -webkit-fill-available;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            border-radius: 10px;

                        }
                        .content {
                            display: flex;
                            justify-content: space-between;
                            top: 20px;
                            padding: 10px;
                            font-size: 12px;
                            position: relative;
                            height: 40px;
                            width: 60%;
                            border-radius: 10px;
                            padding-top: 10px;
                            margin: 0 20px;

                            .title {
                                font-weight: 500;
                            }
                        }
                    }
                }
                
            }
        }
    }

</style>
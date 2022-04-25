

    
<script>
    export let store
    const storeData = []
    export const categoryElements = {}
    store.forEach(element => storeData.push(element.category));
    export const categories = [...new Set(storeData)]

    categories.forEach(category => {
        categoryElements[category] = 0
        store.forEach(element => {
            if(element.category == category) categoryElements[category]++
        });
    })

    export const ctgryIcons = { 
        desayunos: "breakfast_dining",
        comida: "dinner_dining",
        postres: "rocket_launch",
        bebidas: "emoji_food_beverage"
    }
    
</script>

<div class="category-nav">
    <h3>Categorias</h3>
    <p>Seleccion de categorias</p>
   
    <ul>
        {#each  categories as item}
            <li>
                <a sveltekit:prefetch href={`/${item}`}>
                    <div class="container">
                        <span class="material-icons md-18 first-color-font">{`${ctgryIcons[item]}`}</span>
                        <div>
                            {item}
                            <div class="stock-text">Stock: {categoryElements[item]}pz</div>
                        </div>
                    </div>
                </a>
               
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .category-nav{
        text-align: left;
        display: block;
        margin: 20px 20px;
        h3 {
            font-weight: bold;
        }
        p{
            line-height: 0;
            color: #666;
        }
    }
    ul {
        display: flex;
        list-style: none;
        overflow: scroll;
        padding-top: 10px;
        height: 80px;
        li {
            /* text-align: center; */
            margin: 0 10px;
            height: 60px;
            min-width: 160px;
            box-shadow: 1px 1px 4px 1px #ddd;
            border-radius: 10px;
            background-color: white;
            a {
                text-transform: capitalize;
                text-decoration: none;
                color: black;

                .container {
                    padding: 10px 10px;
                    display: flex;
                    justify-content: space-around;
                    span {
                        padding-top: 8px;
                    }

                    .stock-text {
                        font-size: 0.8em;
                        color: #666;
                    }
                }
                
            }

            
        }
    }
</style>
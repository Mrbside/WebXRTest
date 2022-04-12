

    
<script>
    export let store
    const storeData = []
    // export const categoryElements = {}
    store.forEach(element => storeData.push(element.category));
    export const categories = [...new Set(storeData)]

    // categories.forEach(category => {
    //     categoryElements[category] = 0
    //     store.forEach(element => {
    //         if(element.category == category) categoryElements[category]++
    //     });
    // })

    export const ctgryIcons = { 
        desayunos: "breakfast_dining",
        comida: "dinner_dining",
        postres: "rocket_launch",
        bebidas: "emoji_food_beverage"
    }
    
</script>

<div class="category-list">
    <h3>Menu</h3>
    <p>¿Que se le antoja hoy?</p>
   
    <ul>
        {#each  categories as item}
            <li>
                <a sveltekit:prefetch href={`/${item}`}>
                    <div class="container">
                        <span class="material-icons md-48 first-color-font">{`${ctgryIcons[item]}`}</span>
                        <div>
                            {item}
                            <!-- <div class="stock-text">Stock: {categoryElements[item]}pz</div> -->
                        </div>
                    </div>
                </a>
               
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .category-list{
        text-align: center;
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
        flex-direction: column;
        list-style: none;
        padding-top: 10px;
        li {
            /* text-align: center; */
            margin: 10px 10px;
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
                    font-size: 2em;
                    span {
                        font-size: 36px;
                        margin: 0px 20px 0 10px;
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
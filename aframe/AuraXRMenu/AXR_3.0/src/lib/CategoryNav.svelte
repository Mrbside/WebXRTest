

    
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
        deportes: "sports_tennis",
        jugueteria: "toys"
    }
    
</script>

<div class="category-nav">
    <h1>Categorias</h1>
    <p>Seleccion de categorias</p>
   
    <ul>
        {#each  categories as item}
            <li>
                <a sveltekit:prefetch href={`/${item}`}>
                    <div class="container">
                        <span class="material-icons md-18 first-color-font">{`${ctgryIcons[item]}`}</span>
                        <div>
                            {item}
                            <div>{categoryElements[item]}</div>
                        </div>
                    </div>
                </a>
               
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .category-nav{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
    ul {
        display: flex;
        list-style: none;
        overflow: scroll;
        padding-top: 10px;
        height: 70px;
        li {
            margin: 0 10px;
            height: 60px;
            width: 160px;
            box-shadow: 1px 1px 8px 1px #ddd;
            border-radius: 10px;
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
                }
                
            }

            
        }
    }
</style>
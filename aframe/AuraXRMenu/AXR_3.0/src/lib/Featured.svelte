

    
<script>
    export let store
    export const storeData = []
    store.forEach(element => {
        if(element.info.feature) storeData.push(element)
    });

</script>

<div class="featured">
    <h1>Fearured</h1>
    <ul>
        {#each storeData as item}
            <li>
                <!-- <a sveltekit:prefetch href={`/${item.category}/${item.id}`}>{item.title}</a> -->
                <a sveltekit:prefetch href={`/${item.category}/${item.id}`}>
                    <div class="container">
                        <div class="img" style={`background-image: url('${item.assets.imageThumbnail}');`}></div>
                        <!-- <img src={`${item.assets.imageThumbnail}`} alt="site logo"> -->
                        <div class="content third-color">
                            <div>{item.title}</div>
                            <div>{item.info.price}</div>
                        </div>
                     
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .featured{
        text-align: center;
        display: block;
        margin: 20px auto;
    }

    ul {
        padding-top: 10px;
        display: flex;
        list-style: none;
        overflow: scroll;
        height: 200px;
        li {
            margin: 0 20px;
            height: 180px;
            width: 160px;
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
                    .img{
                        background-image: url(/hugs-HOMBRE-1200x1815.png);
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: contain;

                        width: 60%;
                        height: inherit;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        right: 16px;
                        margin: 0 auto;
                    }

                    .content {
                        font-size: 12px;
                        position: absolute;
                        bottom: 30px;
                        height: 40px;
                        width: 140px;
                        border-radius: 10px;
                        padding-top: 10px;
                    }
                }
            }
            
        }
    }
</style>
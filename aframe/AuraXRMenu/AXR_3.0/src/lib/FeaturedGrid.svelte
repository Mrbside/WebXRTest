

    
<script>
    export let store
    export const storeData = []
    store.forEach(element => {
        if(element.info.feature) storeData.push(element)
    });

</script>

<div class="featured">
    <h3>Destacados</h3>
    <p>No pierdas de vista estos productos</p>
    <ul>
        {#each storeData as item}
            <li class=" second-color">
                <!-- <a sveltekit:prefetch href={`/${item.category}/${item.id}`}>{item.title}</a> -->
                <a sveltekit:prefetch href={`/${item.category}/${item.id}`} >
                    <div class="container">
                        <div class="img" style={`background-image: url('${item.assets.imageThumbnail}');`}></div>
                        <!-- <img src={`${item.assets.imageThumbnail}`} alt="site logo"> -->
                        <div class="content third-color">
                            <div class="title">{item.title}</div>
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
        text-align: left;
        display: block;
        margin: 20px 20px;

        h3 {
            font-weight: bold;
        }
        p {
            line-height: 0;
            color: #666;
            font-size: 00.9em;
        }
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        list-style: none;
        padding: 0px;
        li {
            text-align: center;
            /* margin: 14px 14px; */
            height: 180px;
            width: 160px;
            box-shadow: 1px 1px 8px 1px #ddd;
            border-radius: 10px;
            margin: 5px auto;

            a {
                width: inherit;
                height: inherit;
                text-transform: capitalize;
                text-decoration: none;
                color: black;
               
                .container {
                    width: inherit;
                    height: inherit;
                    padding: 10px 0px;
                    position: relative;
                    background-color: transparent;
                    .img{
                        background-image: url(/hugs-HOMBRE-1200x1815.png);
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: contain;

                        width: 100%;
                        height: inherit;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        right: 0px;
                        margin: 0 auto;
                    }

                    .content {
                        font-size: 12px;
                        position: absolute;
                        bottom: 30px;
                        height: 40px;
                        width: 140px;
                        left: 0px;
                        right: 0px;
                        border-radius: 10px;
                        padding-top: 10px;
                        margin: 0 auto;
                        .title{
                            font-weight: 600;
                        }
                    }
                }
            }
            
        }
    }
</style>
<script context="module">
    export async function load({params, fetch}) {
        const productId = params.productId
        const res =  await fetch('data.json')
        const data = await res.json()
        const store = data.store
     
        if(res.ok) {
            return {
                props: {
                    store,
                    productId
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
    import { breadcrumb } from "../../store.js";
    export let store
    export let productId
    export let storeData = {}
    store.forEach(element => {
        if(productId == element.id) storeData = element
    });

    $breadcrumb = "/" + storeData.category 
</script>

<div class="product">
    <div class="img" style={`background-image: url('${storeData.assets.imageA}');`}></div>
       
    <div class="container first-color-l">
        <h1>{storeData.title}</h1>
        <p>{storeData.subtitle}</p>
        <p class="info">Info: {storeData.body}</p>
        <div class="segment">
            <p>Price: ${storeData.info.price}</p>
        </div>

        <div class="btn">
            <!-- <a 
            sveltekit:prefetch 
            href={`/${storeData.category}/arview/${storeData.id}`}
            class="btn second-color-d"
            >AR View</a> -->
            <a 
            href={`https://shopxr-test.netlify.app/?model=${storeData.assets.vectorFile}&product=${storeData.title}&url_back=${storeData.category}/`}
            class="btn second-color-d"
            >AR View</a>
        </div>
    </div>

   <div class="spacer"></div>
</div>

<style lang="scss">
    .product{
        text-align: center;
        display: block;
        margin: 20px auto;

        .container{
            margin: 20px;
            padding: 10px;
            border-radius: 20px;
            .info {
                /* color: rgb(156, 156, 156); */
                font-weight: 100;
                font-size: 0.9em;
            }
            .segment {
                display: grid;
                grid-auto-flow: column;
                font-size: 0.8em;
                /* text-align: left; */
            }
            
           
            .btn {
                
                left: 0px;
                right: 0px;
                width: 300px;
                margin:  30px auto;
                text-decoration: none;
                color: white;
                position: relative;
                
                a{
                    padding: 10px 20px;
                    border: none;
                    border-radius: 50px;
                }
            }
        }
        .img{
            position: relative;
            background-image: url(/hugs-HOMBRE-1200x1815.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 240px;
            position: relative;
            top: 0px;
            margin: 0 20px;
            border-radius: 20px;
        }

        
    }
</style>
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
       
    <div class="container second-color">
        <h1>{storeData.title}</h1>
        <p>{storeData.subtitle}</p>
        <p class="info">Info: {storeData.body}</p>
        <div class="segment">
            <p>Price: ${storeData.info.price}</p>
            <p>Qty: {storeData.info.quantity}</p>
        </div>
        <div class="segment">
            <div>
                <p>Marca: {storeData.info.band}</p>
                <p>Modelo: {storeData.info.model}</p>
            </div>
            <div>
                <p>Tamaño: {storeData.info.size}</p>
                <p>Sexo: {storeData.info.gender}</p>
            </div>
        </div>
        <p class="tags first-color-l">Tags:{storeData.info.tags}</p>

        <div class="btn">
            <a 
            sveltekit:prefetch 
            href={`/${storeData.category}/arview/${storeData.id}`}
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
            
            .tags {
                padding: 10px;
                border-radius: 10px;
                font-size: 0.8em;
                margin: 10px 20px;
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
            background-size: contain;
            width: 100%;
            height: 240px;
            position: relative;
            top: 0px;
        }

        
    }
</style>
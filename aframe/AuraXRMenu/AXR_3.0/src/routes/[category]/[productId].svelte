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
    export let store
    export let productId
    export let storeData = {}
    store.forEach(element => {
        if(productId == element.id) storeData = element
    });

</script>

<div class="product">
    <div class="img" style={`background-image: url('${storeData.assets.imageA}');`}></div>
    <h1>{storeData.title}</h1>
    <p>{storeData.subtitle}</p>
    <p>Info: {storeData.body}</p>
    <p>Price: ${storeData.info.price}</p>
    <p>Qty: {storeData.info.quantity}</p>
    <p>Marca: {storeData.info.band}</p>
    <p>Modelo: {storeData.info.model}</p>
    <p>Tamaño: {storeData.info.size}</p>
    <p>Sexo: {storeData.info.gender}</p>
    <p>Tags:{storeData.info.tags}</p>

    <a sveltekit:prefetch href={`/${storeData.category}/arview/${storeData.id}`}>AR View</a>
   
</div>

<style lang="scss">
    .product{
        text-align: center;
        display: block;
        margin: 20px auto;

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
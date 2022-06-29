<svelte:head>
    <title>{"Visor AR"}</title>
    <meta name="description" content="A todo list app" />
</svelte:head>
<script>
	import Loader from "$lib/Loader.svelte";
	import {typeStorage, itemStorage} from "$lib/Store.js";

	let producto = {}, tipo = "3D";
	// typeStorage.subscribe((value) => {
	// 	debugger;
	// 	 tipo = value;
	// });
	// itemStorage.subscribe((value) => {
	// 	debugger;
	// 	 producto = value;
	// });
	let showLoad = false;

	function timedLoad(milli){
		setTimeout(() => {
			showLoad = false;
		}, milli);
	}
	// timedLoad(2000);


</script>
<body class="products-body" style="">
	{#if showLoad}
		<Loader/>
	{/if}
	<div class="product_name">
		Pizza de pimientos
	</div>
	{"TIPO:"+$typeStorage}
	{"ITEM:"+JSON.stringify($itemStorage)}
	<iframe title="viewer" allowvr="yes" height="100%" width="100%" allowfullscreen={true} src={true ? '/src/routes/productos/viewer.html' : '/productos/viewer3D'}></iframe>
</body>
<style>
body {
    margin: 0;
    padding: 0;
    background:none;
}

iframe {
    display: block;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    margin: 0;
    padding: 0;
    border: 0 none;
    box-sizing: border-box;
}
.product_name {
    text-align: center;
    padding-bottom: 10px;
    background: #f6ad33;
    color: white;
    padding-top: 10px;
    border-radius: 30px 30px 0 0;
}
</style>
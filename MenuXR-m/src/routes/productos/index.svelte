<svelte:head>
    <title>{"Visor AR"}</title>
    <meta name="description" content="A todo list app" />
</svelte:head>
<script>
	import Loader from "$lib/Loader.svelte";
	// import { get } from 'svelte/store';
	import {typeStorage, itemStorage, getStoreVariable} from "$lib/Store.js";
	import { onMount, beforeUpdate } from 'svelte';

	let showLoad = false;
	function timedLoad(milli){
		setTimeout(() => {
			showLoad = false;
		}, milli);
	}
	beforeUpdate(()=>{
		$typeStorage = getStoreVariable("typeStorage");
		$itemStorage = typeof JSON.parse(getStoreVariable("itemStorage")) == "object" ? JSON.parse(getStoreVariable("itemStorage")) : {title:"Visor"};
		
		// debugger;
	})
	onMount(()=>{
		timedLoad(1000);
	})
	// timedLoad(2000);
	

</script>
<body class="products-body" style="">
	<select class="searchSelect visorSelect" value={$typeStorage} on:change="{(e) => {$typeStorage=e.target.value}}">
		<option value="AR">Realidad Aumentada</option>
		<option value="3D" >Visor 3D</option>
	</select>
	{#if showLoad}
		<Loader/>
	{/if}
	<div class="product_name">
		{$itemStorage.title || "Visor"}
	</div>
	<iframe title="viewer" allowvr="yes" height="100%" width="100%" allowfullscreen={true} src={$typeStorage=="" || $typeStorage=="AR" ? '/viewer.html' : '/productos/viewer3D'}></iframe>
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
select.searchSelect.visorSelect {
    position: absolute;
    top: 5px;
    right: 10px;
    width: 210px;
    height: 40px;
    padding: 0px 20px;
    background: #ffffff;
    border: 2px solid #f6ad33;
    font-size:15px;
    font-weight:500;
    color: #f6ad33;
    border-radius: 10px;
	outline: none;
}
</style>
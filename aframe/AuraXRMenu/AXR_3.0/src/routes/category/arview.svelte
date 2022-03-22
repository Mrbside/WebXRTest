<script>
//   import 'aframe';
//     import 'aframe-extras';
//    let AFRAME = require('aframe');
    // require('aframe-extras');
</script>

<div class="arview">
    <!-- <a-scene embedded ar class="a-frame">
        <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
        <a-marker-camera preset='hiro'></a-marker-camera>
      </a-scene> -->

      <script>
		
		//componente para sombra en camera background
		AFRAME.registerComponent("apply-shadowmaterial", {
			init: function() {
			  // grab the mesh
			  let mesh = this.el.getObject3D("mesh");
			  // keep the reference to the old material
			  let tmp = mesh.material;
			  // assign the new material
			  mesh.material = new THREE.ShadowMaterial({ opacity: 0.1 });
			  mesh.receiveShadow = true;
			  // free memory
			  tmp.dispose();
			}
		  });
	
    
			let entradaPosition = 0;
			let platilloPosition = -1;
			let platillos = [
				{
					name : 'Hombre',
					glb : 'Black',
					price : 500.0, 
					
				},
				{
					name : 'Mujer',
					glb : 'Orange',
					price : 500.0,
					
				},
				{
					name : 'Deportes',
					glb : 'Blue',
					price : 500.0,
					
				}
			]
			let categories = [
				{
					name: 'ENTRADAS',
					platillos : platillos
				}
			]

			function backPlatillo() {
				if(platilloPosition > 0)
				platilloPosition = platilloPosition -1;
				let platillo = categories[entradaPosition].platillos[platilloPosition];
				
				let text = document.getElementById('platilloName');
				text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
				cambiaplatillo(platillo.glb)
			}
			function nextPlatillo() {
				if(platilloPosition < 2)
				platilloPosition = platilloPosition + 1;
				console.log(platilloPosition);
				let platillo = categories[entradaPosition].platillos[platilloPosition];
				
				let text = document.getElementById('platilloName');
				text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
				cambiaplatillo(platillo.glb)
			}

			
			function cambiaplatillo (Newmodel) {
				var platotest = document.querySelector('#plato');
				//var paneltest = document.querySelector('#panelinfo');
					//start animation
				platotest.emit('pos')
				platotest.emit('scale')
				platotest.addEventListener("animationcomplete__scale", e => {
					// resent values when animation is finished
					platotest.setAttribute('position','0 0 0')
					//cambia modelo platillo
					platotest.setAttribute('gltf-model','/'+Newmodel+'.glb')
					platotest.setAttribute('scale','0.1 0.1 0.1')
				  }, {once : true});
				//cambia panel de informacion
				//paneltest.setAttribute('src','#'+Newmodel)
				
			};



	</script>
	<!-- <body style='margin : 0px; overflow: hidden;'>  -->
	<!-- <div class="a-frame"> -->
		<a-scene id="escena" class="a-frame" gesture-detector physicallyCorrectLights="true" vr-mode-ui="enabled: false" embedded arjs ="sourceType: webcam; trackingMethod: best; detectionMode: mono; sourceWidth:2048; sourceHeight:1536; displayWidth: 2048; displayHeight: 1536" always-fullscreen renderer="precision: high; antialias: false; logarithmicDepthBuffer:true; colorManagement: true" loading-screen="dotsColor: #DBDADA; backgroundColor: #282828">
			<a-assets>
				<a-asset-item id="blackM" src="/Black.glb"></a-asset-item>
				<a-asset-item id="blueM" src="/Blue.glb"></a-asset-item>
				<a-asset-item id="orangeM" src="/Orange.glb"></a-asset-item>
			</a-assets>
			<a-entity id="luzdirectional" light="type: directional; color: #DDD; groundColor: #DDD; intensity: 0.2; castShadow:true; target:#marcador; shadowCameraBottom:-6.0; shadowCameraTop:6.0; shadowCameraLeft:-6.0; shadowCameraRight:6.0; " position="-5.0 6.520 5.127">	
			</a-entity>
			<a-marker id="marcador" raycaster="objects: .clickable" emitevents="true" cursor="fuse: false; rayOrigin: mouse;" type='pattern' url='/HUG.patt' smooth='true' smoothCount='3' smoothTolerance='0.01' smoothThreshold='2'>
				<a-plane id="planosombras" position="0 -0.2 0" height="500" width="500" rotation="-90 0 0" apply-shadowmaterial></a-plane>
				<a-entity 
				id="plato"
				position="0 0 0"
				rotation="0 60 0"
				scale="0.1 0.1 0.1"
				gltf-model="/Black.glb"
				shadow="receive: true; cast: true"
				animation__pos="property:position; from:0 0 0; to:-6 0 0; dur: 1000; startEvents:pos" 
				animation__scale="property:scale; from:0.1 0.1 0.1; to:0 0 0; dur: 1000; startEvents:scale"
				class="clickable"
      			gesture-handler
				>
				</a-entity>
			</a-marker>
			<a-entity id="camera" camera="far:10000.00; fov:80.00; near:0.005">
			</a-entity>
			<a-entity id="luz" light="type: ambient; color: #DDD; groundColor: #DDD; intensity: 0.6" position="0 2 0">	
			</a-entity>
		</a-scene>
		<!-- </div> -->
		<div class="nav">
			<button class="btn left" onclick="backPlatillo()">&#10094;</button>
			<button class="btn right" onclick="nextPlatillo()">&#10095;</button>
			<div class="prod-name" id="platilloName">Hombre</div>
		</div>
</div>
<style>
    .arview{
        /* text-align: center; */
        /* display: block; */
        margin: 20px auto;
        overflow: hidden;
    }

    .nav{
			position: absolute;
			bottom: 80px;
			height: auto;
			width: 100%;
		}

		.nav .btn{
			color: black;
			margin: 20px;
			font-size: 20px;
			position: relative;
			display: inline-block;
			width: 50px;
			height: 50px;
			background-color: white;
			border: 8px solid #ededed;
			border-radius: 50px;
			padding: 0px 5px;
		}

		.nav .right{
			float: right;
		}

		.nav .prod-name{
			position: absolute;
			margin: 0 auto;
			left: 0px;
			right: 0px;
			width: 100px;
			height: 50px;
			bottom: 10px;
			color: white;
			font-size: 24px;
			font-weight: 800;
			text-shadow: 1px 1px 1px black;
			width: 140px;
			text-align: center;
			font-family: 'MontserratMedium';
		}
</style>
	<head>
  		<title>MenuXR</title>
		<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
		<script src="/src/routes/productos/Scripts/aframe-ar.js"></script>
		<script src="/src/routes/productos/Scripts/aframe-extras.min.js"></script>
		<script>
		//master mas reciente de aframe: https://aframe.io/aframe/dist/aframe-master.js
		//ultima version estable aframe: https://aframe.io/releases/1.2.0/aframe.min.js
		// mejorar calidad de video al final: arjs ="sourceType: webcam; sourceWidth:1280; sourceHeight:720; displayWidth: 1280; displayHeight: 720"
		AFRAME.registerComponent('jitterix', {
    	init: function () {
    	// Code here.
      	var canvasEl = document.getElementById(this.data.cid);
		this.renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true, canvas: canvasEl } );
		this.renderer= new THREE.PerspectiveCamera();
    	}
  		});
		</script>
		<script>function myFunction(){
		var plato1 = document.querySelector('#plato');
		//plato1.addEventListener('click', myFunction() {
		plato1.object3D.visible = false;}
		</script>
		<script>
		//componente para sombra en camera background
		AFRAME.registerComponent("apply-shadowmaterial", {
			init: function() {
			  // grab the mesh
			  let mesh = this.el.getObject3D("mesh");
			  // keep the reference to the old material
			  let tmp = mesh.material;
			  // assign the new material
			  mesh.material = new THREE.ShadowMaterial({ opacity: 0.6 });
			  mesh.receiveShadow = true;
			  // free memory
			  tmp.dispose();
			}
		  });
		</script>
		<script>/* 
			document.addEventListener('DOMContentLoaded', () => {
            const start = async() => 
            {
                SetDishAndInfo();
            }
            });


			function SetDishAndInfo()
            {	
				var platotest = document.querySelector('#plato');
				var paneltest = document.querySelector('#panelinfo');
                var currentDish
                var currentInfo
				  
				platotest.setAttribute('gltf-model', '/Productos/3DModels/'+ currentDish +'.glb')
				paneltest.setAttribute('src','/Productos/PanelPlatillo/'+ currentInfo +'.png')
						
			}*/
		</script>

	</head>
	    <style>
		body
        {
            background: none !important;
        }
	    </style>
	<body style='margin : 0px; overflow: hidden;'> 
		<a-scene id="escena" physicallyCorrectLights="true"vr-mode-ui="enabled: false" embedded arjs ="sourceType: webcam; trackingMethod: best; detectionMode: mono; sourceWidth:2048; sourceHeight:1536; displayWidth: 2048; displayHeight: 1536" always-fullscreen renderer="precision: high; antialias: false; logarithmicDepthBuffer:true; colorManagement: true" loading-screen="dotsColor: #DBDADA; backgroundColor: #282828">
			<a-assets>
			
			</a-assets>
			<a-marker id="marcador" type='pattern' url='/src/routes/productos/markers/aurawebxr.patt' smooth='true' smoothCount='3' smoothTolerance='0.01' smoothThreshold='2'>
				<a-entity id="luzdirectional" light="type: directional; color: #DDD; groundColor: #DDD; intensity: 0.6; castShadow:true; target:#marcador; shadowCameraBottom:-6.0; shadowCameraTop:6.0; shadowCameraLeft:-6.0; shadowCameraRight:6.0; " position="-0.24 4.520 5.127">	
				</a-entity>
				<a-plane id="planosombras" position="0 -1.0 0" height="500" width="500" rotation="-90 0 0" apply-shadowmaterial></a-plane>
				<a-image id="panelinfo" src="/src/routes/productos/PanelPlatillo/bbq.png" height="7" width="3" scale="1 1 1" position="2.907 2.076 -6.101" rotation="-30.0 -11.302 0" transparent="false" shadow="cast: true"></a-image>
				<a-entity 
				id="chef"
            	position="-4.138 -1.10 -4.797"
    		    rotation="0 31.0 0"
            	scale="0.02 0.02 0.02"
            	gltf-model="/src/routes/productos/3DModels/chef.gltf"
            	animation-mixer="clip: clip; loop:repeat; repetitions:infinity"
            	shadow="receive: true; cast: true"
				>
            	</a-entity>
				<a-entity 
				id="plato"
            	position="0 0 0"
            	rotation="0 0 0"
            	scale="0.1 0.1 0.1"
            	gltf-model="/src/routes/productos/3DModels/toast.glb"
            	shadow="receive: true; cast: true"
				animation__pos="property:position; from:0 0 0; to:-6 0 0; dur: 1000; startEvents:pos" 
				animation__scale="property:scale; from:0.1 0.1 0.1; to:0 0 0; dur: 1000; startEvents:scale"
				>
            	</a-entity>
			</a-marker>
			<a-entity id="camera" camera="far:10000.00; fov:80.00; near:0.005">
			</a-entity>
			<a-entity id="luz" light="type: ambient; color: #DDD; groundColor: #DDD; intensity: 0.6" position="0 2 0">	
			</a-entity>
		</a-scene>
	</body>

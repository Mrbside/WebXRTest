<script context="module">
    export async function load({params, fetch}) {
        const id = params.id
        const res =  await fetch('/data.json')
        const data = await res.json()
        const store = data.store
     
        if(res.ok) {
            return {
                props: {
                    store,
                    id
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
    export let id
    export let storeData = {}
    store.forEach(element => {
        if(id == element.id) storeData = element
    });

</script>

<div class="arview">
  

<script>
	
      AFRAME.registerComponent('jitterix', {
        init: function () {
          var canvasEl = document.getElementById(this.data.cid);
      this.renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true, canvas: canvasEl } );
      this.renderer= new THREE.PerspectiveCamera();
        }
        });
      
    
      AFRAME.registerComponent("apply-shadowmaterial", {
        init: function() {
          let mesh = this.el.getObject3D("mesh");
          let tmp = mesh.material;
          mesh.material = new THREE.ShadowMaterial({ opacity: 0.1 });
          mesh.receiveShadow = true;
          tmp.dispose();
        }
        });
      AFRAME.registerComponent("audiomanager", {
        init: function() {
          var entity = document.querySelector('#niña');

          this.el.sceneEl.addEventListener("markerFound", (e) => {
          entity.components.sound.playSound();
          this.isVisible = true;
          });

          this.el.sceneEl.addEventListener("markerLost", (e) => {
          entity.components.sound.pauseSound();
          });
          var focus=true;
    
          window.addEventListener( 'blur', () => {
            focus=false;
            entity.components.sound.pauseSound();
          });

          window.addEventListener( 'focus', () => {
            focus=true;
            //entity.components.sound.playSound();
          }); 
        }
    });

</script>
<body style='margin : 0px; overflow: hidden;'>
  
  <a-scene id="escena" shadow="type: pcfsoft" gesture-detector physicallyCorrectLights="true"vr-mode-ui="enabled: false" embedded arjs ="sourceType: webcam; trackingMethod: best; detectionMode: mono; sourceWidth:2048; sourceHeight:1536; displayWidth: 2048; displayHeight: 1536" always-fullscreen renderer="precision: high; antialias: false; logarithmicDepthBuffer:true; colorManagement: true" loading-screen="dotsColor: #ffffff; backgroundColor: #502a74">
    <a-assets>
      <a-asset-item id="niñabox" src="Boxer.gltf"></a-asset-item>
      <audio id="audioniña" src="fatima.mp3" preload="auto"></audio>
    </a-assets>
    <a-marker id="marcador" raycaster="objects: .clickable" emitevents="true" cursor="fuse: false; rayOrigin: mouse;" type='pattern' url='box2color.patt' smooth='true' smoothCount='5' smoothTolerance='0.01' smoothThreshold='2'>
      <a-entity id="luzdirectional" light="type: directional; color: #DDD; groundColor: #DDD; intensity: 0.6; castShadow:true; target:#marcador; shadowCameraBottom:-6.0; shadowCameraTop:6.0; shadowCameraLeft:-6.0; shadowCameraRight:6.0; " position="-0.70 4.520 5.127">
      </a-entity>
      <a-plane id="planosombras" position="0 -0.007 0" height="500" width="500" rotation="-90 0 0" apply-shadowmaterial>
      </a-plane>
      <a-entity
      id="niña"
      position="0 0 0"
      rotation="0 0 0"
      scale="0.02 0.02 0.02" 
      gltf-model="Boxer.gltf"
      animation-mixer="clip: idle; loop:repeat; repetitions:infinity"
      shadow="receive: true; cast: true"
      class="clickable"
      sound="src: url(fatima.mp3); autoplay: false"
      gesture-handler
      audiomanager>
      </a-entity>
    </a-marker>
    <a-entity id="camera" camera="far:10000.00; fov:80.00; near:0.005">
    </a-entity>
    <a-entity id="luz" light="type: ambient; color: #DDD; groundColor: #DDD; intensity: 0.6" position="0 2 0">	
    </a-entity>
   
  </a-scene>
  
</body>


<!-- <a-scene id="escena" shadow="type: pcfsoft" gesture-detector physicallyCorrectLights="true"vr-mode-ui="enabled: false" embedded arjs ="sourceType: webcam; trackingMethod: best; detectionMode: mono; sourceWidth:2048; sourceHeight:1536; displayWidth: 2048; displayHeight: 1536" always-fullscreen renderer="precision: high; antialias: false; logarithmicDepthBuffer:true; colorManagement: true" loading-screen="dotsColor: #ffffff; backgroundColor: #502a74">
	<a-assets>
	  <a-asset-item id="niñabox" src="Boxer.gltf"></a-asset-item>
	</a-assets>
	<a-marker id="marcador" raycaster="objects: .clickable" emitevents="true" cursor="fuse: false; rayOrigin: mouse;" type='pattern' url='box2color.patt' smooth='true' smoothCount='5' smoothTolerance='0.01' smoothThreshold='2'>
	  <a-entity id="luzdirectional" light="type: directional; color: #DDD; groundColor: #DDD; intensity: 0.6; castShadow:true; target:#marcador; shadowCameraBottom:-6.0; shadowCameraTop:6.0; shadowCameraLeft:-6.0; shadowCameraRight:6.0; " position="-0.70 4.520 5.127">
	  </a-entity>
	  <a-plane id="planosombras" position="0 -0.007 0" height="500" width="500" rotation="-90 0 0" apply-shadowmaterial>
	  </a-plane>
	  <a-entity
	  id="niña"
	  position="0 0 0"
	  rotation="0 0 0"
	  scale="0.02 0.02 0.02" 
	  gltf-model="Boxer.gltf"
	  animation-mixer="clip: idle; loop:repeat; repetitions:infinity"
	  shadow="receive: true; cast: true"
	  class="clickable"
		gesture-handler
	  >
	  </a-entity>
	</a-marker>
	<a-entity id="camera" camera="far:10000.00; fov:80.00; near:0.005">
	</a-entity>
	<a-entity id="luz" light="type: ambient; color: #DDD; groundColor: #DDD; intensity: 0.6" position="0 2 0">	
		  </a-entity>
   
  </a-scene> -->

		<div class="nav">
			<div class="prod-name" id="platilloName">{storeData.title}</div>
		</div>
</div>
<style lang="scss">
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

		/* .nav .btn{
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
		} */

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
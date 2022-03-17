<script>
//   import 'aframe';
//     import 'aframe-extras';
    // require('aframe');
    // require('aframe-extras');
</script>

<div class="arview">

    <head>
       
      <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
      <script src="../../build/aframe-ar.js"></script>
      <script src="../../../A-FrameAddons/js/aframe-extras.min.js"></script>
      <script src="https://raw.githack.com/fcor/arjs-gestures/master/dist/gestures.js"></script>
      <script>
      //master mas reciente de aframe: https://aframe.io/aframe/dist/aframe-master.js
      //ultima version estable aframe: https://aframe.io/releases/1.2.0/aframe.min.js
      //best arjs settings smoothCount='3' smoothTolerance='0.01' smoothThreshold='2'
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
            mesh.material = new THREE.ShadowMaterial({ opacity: 0.1 });
            mesh.receiveShadow = true;
            // free memory
            tmp.dispose();
          }
        });
      </script>
      <script>
          let entradaPosition = 0;
          let platilloPosition = -1;
          let path = "https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/"
          let glbs = [
              'tacos.glb',
              'sand.glb'
          ]
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
          let orders = []
          let quantity = 0;

          function plus() {
              quantity = quantity + 1;
              let el = document.getElementById('quantity')
              let el2 = document.getElementById('quantity2')
              el.innerHTML = ""+quantity
              el2.innerHTML = ""+quantity
              let amountPlatillo = categories[entradaPosition].platillos[platilloPosition].price * quantity;
              el = document.getElementById('addAmount')
              el2 = document.getElementById('addAmount2')
              el.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
              el2.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
          }
          function minus() {
              if(quantity > 0) {
                  quantity = quantity - 1;
                  let amountPlatillo = categories[entradaPosition].platillos[platilloPosition].price * quantity;
                  let el = document.getElementById('addAmount')
                  let el2 = document.getElementById('addAmount2')
                  el.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
                  el2.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
              }
              let el = document.getElementById('quantity')
              let el2 = document.getElementById('quantity')
              el.innerHTML = ""+quantity
              el2.innerHTML = ""+quantity
          }

          function addOrder() {
              let amountPlatillo = categories[entradaPosition].platillos[platilloPosition].price * quantity;
              orders.push({
                  category : categories[entradaPosition],
                  platillo : platillos[platilloPosition],
                  amount : parseFloat(amountPlatillo).toFixed(2)
              })
              let el = document.getElementById('receipt');
              let el2 = document.getElementById('receipt2');
              el.innerHTML = ""+orders.length
              el2.innerHTML = ""+orders.length
              el = document.getElementById('orderAmount')
              el2 = document.getElementById('orderAmount')
              let amount = 0;
              orders.forEach((element) => {
                  amount = element.amount
              } )
              el.innerHTML = "$"+parseFloat(amount).toFixed(2)
              el2.innerHTML = "$"+parseFloat(amount).toFixed(2)
          }

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

          function platilloDeMenu(param) {
              platilloPosition = param + "";
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              
              
              let text = document.getElementById('platilloName');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              cambiaplatillo(platillo.glb)
              
          }

          function nextCategory() {
              entradaPosition = entradaPosition + 1;
              platilloPosition = 0;

              let platillo = categories[entradaPosition].platillos[platilloPosition]
              let text = document.getElementById('platilloName');
              // let text3 = document.getElementById('platilloName2');
              // let text2 = document.getElementById('categoryName');
              // let text4 = document.getElementById('categoryName2');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              // text2.innerHTML  = categories[entradaPosition].name
              // text3.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              // text4.innerHTML  = categories[entradaPosition].name
              cambiaplatillo(platillo.glb)
          }
          function backCategory() {
              entradaPosition = entradaPosition + -1;
              platilloPosition = 0;
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              let text = document.getElementById('platilloName');
              let text3 = document.getElementById('platilloName2');
              let text2 = document.getElementById('categoryName');
              let text4 = document.getElementById('categoryName2');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              text2.innerHTML  = categories[entradaPosition].name
              text3.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              text4.innerHTML  = categories[entradaPosition].name
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
                  platotest.setAttribute('gltf-model','https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/'+Newmodel+'.glb')
                  platotest.setAttribute('scale','0.1 0.1 0.1')
                }, {once : true});
              //cambia panel de informacion
              //paneltest.setAttribute('src','#'+Newmodel)
              
          };
      </script>
  </head>
 
    <div class="AR">
		<a-scene id="escena" gesture-detector physicallyCorrectLights="true" vr-mode-ui="enabled: false" embedded arjs ="sourceType: webcam; trackingMethod: best; detectionMode: mono; sourceWidth:2048; sourceHeight:1536; displayWidth: 2048; displayHeight: 1536" always-fullscreen renderer="precision: high; antialias: false; logarithmicDepthBuffer:true; colorManagement: true" loading-screen="dotsColor: #DBDADA; backgroundColor: #282828">
			<a-assets>
				<a-asset-item id="blackM" src="https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/Black.glb"></a-asset-item>
				<a-asset-item id="blueM" src="https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/Blue.glb"></a-asset-item>
				<a-asset-item id="orangeM" src="https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/Orange.glb"></a-asset-item>
			</a-assets>
			<a-entity id="luzdirectional" light="type: directional; color: #DDD; groundColor: #DDD; intensity: 0.2; castShadow:true; target:#marcador; shadowCameraBottom:-6.0; shadowCameraTop:6.0; shadowCameraLeft:-6.0; shadowCameraRight:6.0; " position="-5.0 6.520 5.127">	
			</a-entity>
			<a-marker id="marcador" raycaster="objects: .clickable" emitevents="true" cursor="fuse: false; rayOrigin: mouse;" type='pattern' url='HUG.patt' smooth='true' smoothCount='3' smoothTolerance='0.01' smoothThreshold='2'>
				<a-plane id="planosombras" position="0 -0.2 0" height="500" width="500" rotation="-90 0 0" apply-shadowmaterial></a-plane>
				<a-entity 
				id="plato"
				position="0 0 0"
				rotation="0 60 0"
				scale="0.1 0.1 0.1"
				gltf-model="Black.glb"
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
		</div>
   
</div>

<style>
    .arview{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>

<head>
    <title>MenuXR</title>
  <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script> 
  <script src="/Scripts/aframe-ar.js"></script>
  <script src="/Scripts/aframe-extras.min.js"></script>
  <script>
    import { onMount } from 'svelte';

    let Thing;
        
    onMount(async () => {
        Thing = (await import('./Thing.svelte')).default;
    });
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
</head>
<body class="viewer-body">
    <script>
    AFRAME.registerComponent('modify-materials', {
        init: function () {
        // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
            if (node.name.indexOf('ship') !== -1) {
                node.material.color.set('red');
            }
            });
        });
        }
    });
    </script>
    <a-scene vr-mode-ui="enabled: false" renderer="logarithmicDepthBuffer: true;" arjs='sourceType: none;'>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9">
        </a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E">
        </a-sphere>
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D">
        </a-cylinder>
        <a-plane id="planosombras" position="0 -1.0 0" height="500" width="500" rotation="-90 0 0" apply-shadowmaterial></a-plane>
        <!-- <a-image id="panelinfo" src="#toast" height="7" width="3" scale="1 1 1" position="2.907 2.076 -6.101" rotation="-30.0 -11.302 0" transparent="false" shadow="cast: true"></a-image> -->
        <a-entity 
        id="chef"
        position="0 1.25 -5"
        rotation="0 31.0 0"
        scale="0.02 0.02 0.02"
        gltf-model="/3DModels/chef.gltf"
        animation-mixer="clip: clip; loop:repeat; repetitions:infinity"
        shadow="receive: true; cast: true"
        >
        </a-entity>
        <a-entity 
        id="plato"
        position="0 1.25 -5"
        rotation="0 0 0"
        scale="0.01 0.01 0.01"
        gltf-model="/3DModels/toast.glb"
        shadow="receive: true; cast: true"
        animation__pos="property:position; from:0 0 0; to:-6 0 0; dur: 1000; startEvents:pos" 
        animation__scale="property:scale; from:0.1 0.1 0.1; to:0 0 0; dur: 1000; startEvents:scale"
        >
        </a-entity>
        <a-sky color="#ECECEC"></a-sky>
        <a-entity camera look-controls>
            <a-entity cursor="fuse: true; fuseTimeout: 500"
                position="0 0 -0.6"
                geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                material="color: blue; shader: flat">
            </a-entity>
        </a-entity>
    </a-scene>
</body>

<style>
    body {
    margin: 0;
    padding: 0;
    background:none !important;
}

</style>
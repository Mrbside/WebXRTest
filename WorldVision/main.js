import {loadGLTF, loadVideo} from "../libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'WVTARGET.mind',
    });
    const {renderer, scene, camera} = mindarThree;
    
    document.querySelector(".splash-bg").style.display = "none";
    document.querySelector(".splash-btn").style.display = "none";
    document.querySelector(".logo").style.display = "none";
    
    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1.7 );
    scene.add(light);
  
  //carga assets
    const cutout = await loadGLTF("Cutout.gltf");
    cutout.scene.scale.set(0.1,0.1,0.1);
    cutout.scene.position.set(0, 0, 0);
    cutout.scene.rotation.set(0, 0, 0);
    const mixer = new THREE.AnimationMixer(cutout.scene);
    const action = mixer.clipAction(cutout.animations[0]);
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
    action.enable = true;
    
    const derecha = await loadGLTF("s01.gltf");
    derecha.scene.scale.set(0.1,0.1,0.1);
    derecha.scene.position.set(0.0, 0.0, 0.0);
    derecha.scene.rotation.set(0, 0, 0);
    const mixerderecha = new THREE.AnimationMixer(derecha.scene);
    const actionderecha = mixerderecha.clipAction(derecha.animations[0]);
    actionderecha.setLoop(THREE.LoopOnce);
    actionderecha.clampWhenFinished = true;
    actionderecha.enable = true;

    const izquierda = await loadGLTF("s03.gltf");
    izquierda.scene.scale.set(0.1,0.1,0.1);
    izquierda.scene.position.set(0.0, 0.0, 0.0);
    izquierda.scene.rotation.set(0, 0, 0);
    const mixerizquierda = new THREE.AnimationMixer(izquierda.scene);
    const actionizquierda = mixerizquierda.clipAction(izquierda.animations[0]);
    actionizquierda.setLoop(THREE.LoopOnce);
    actionizquierda.clampWhenFinished = true;
    actionizquierda.enable = true;

    const arriba = await loadGLTF("s02.gltf");
    arriba.scene.scale.set(0.1,0.1,0.1);
    arriba.scene.position.set(0.0, 0.0, 0.0);
    arriba.scene.rotation.set(0, 0, 0);
    const mixerarriba = new THREE.AnimationMixer(arriba.scene);
    const actionarriba = mixerarriba.clipAction(arriba.animations[0]);
    actionarriba.setLoop(THREE.LoopOnce);
    actionarriba.clampWhenFinished = true;
    actionarriba.enable = true;

    const abajo = await loadGLTF("s04.gltf");
    abajo.scene.scale.set(0.1,0.1,0.1);
    abajo.scene.position.set(0.0, 0.0, 0.0);
    abajo.scene.rotation.set(0, 0, 0);
    const mixerabajo = new THREE.AnimationMixer(abajo.scene);
    const actionabajo = mixerabajo.clipAction(abajo.animations[0]);
    actionabajo.setLoop(THREE.LoopOnce);
    actionabajo.clampWhenFinished = true;
    actionabajo.enable = true;

    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('audio.mp3', function(buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(1.0);
    });    
  //
  //ARAnchor
    const geometry = new THREE.PlaneGeometry();
    const material = new THREE.MeshBasicMaterial();
    material.opacity = 0.0;
    material.transparent = true;
    const plane = new THREE.Mesh(geometry, material);
    plane.scale.set(0.45, 0.45, 0.45);

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(plane);
    plane.add(cutout.scene);
    plane.add(abajo.scene);
    plane.add(arriba.scene);
    plane.add(derecha.scene);
    plane.add(izquierda.scene);
  //

  var isplaying=false; 
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame( animate );
      var delta = clock.getDelta();
      if ( mixer ) mixer.update( delta*1);
      if ( mixerabajo ) mixerabajo.update( delta*1);
      if ( mixerarriba ) mixerarriba.update( delta*1);
      if ( mixerizquierda ) mixerizquierda.update( delta*1);
      if ( mixerderecha ) mixerderecha.update( delta*1);
      renderer.render( scene, camera );
    }
    
  
  
  
    
    
    anchor.onTargetFound = () => {
      
      isplaying = true;
      sound.play();
      cutout.scene.visible=true;
      arriba.scene.visible=true;
      abajo.scene.visible=true;
      derecha.scene.visible=true;
      izquierda.scene.visible=true;
      animate();
      action.play();
      
      actionabajo.play();
      actionarriba.play();
      actionderecha.play();
      actionizquierda.play();
    }
    
    anchor.onTargetLost = () => {

      isplaying = false;
      sound.pause();

    }

    window.addEventListener( 'blur', () => {
      sound.pause();
      
    });

    window.addEventListener( 'focus', () => {
      if(isplaying)
        sound.play();
    }); 

    

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    

  }

  var startButton = document.querySelector("button");
  startButton = addEventListener("click", () => {
    console.log('I run only once!');
    start();
  }, { once: true });

});

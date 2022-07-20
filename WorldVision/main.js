import {loadGLTF, loadVideo} from "../libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'WVTARGET.mind',
    });
    const {renderer, scene, camera} = mindarThree;
    
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
    
    document.querySelector(".splash-bg").style.display = "none";
    document.querySelector(".splash-btn").style.display = "none";
    document.querySelector(".logo").style.display = "none";
    
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

    const fam = await loadGLTF("fam1.gltf");
    fam.scene.scale.set(0.1,0.1,0.1);
    fam.scene.position.set(0.0, 0.0, 0.0);
    fam.scene.rotation.set(0, 0, 0);
    const mixerfam = new THREE.AnimationMixer(fam.scene);
    const actionfamintro = mixerfam.clipAction(fam.animations[0]);
    actionfamintro.setLoop(THREE.LoopOnce);
    actionfamintro.clampWhenFinished = true;
    actionfamintro.enable = true;

    const fam2 = await loadGLTF("fam2.gltf");
    fam2.scene.scale.set(0.1,0.1,0.1);
    fam2.scene.position.set(0.0, 0.0, 0.0);
    fam2.scene.rotation.set(0, 0, 0);
    const mixerfam2 = new THREE.AnimationMixer(fam2.scene);
    const actionfam2 = mixerfam2.clipAction(fam2.animations[0]);
    actionfam2.setLoop(THREE.PingPong);
    actionfam2.enable = true;
    

    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('audio.mp3', function(buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(1.0);
    });    
  //colliders
    const boxgeometry = new THREE.BoxGeometry( 0.4, 0.4, 0.4 );
    const boxmaterial = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
    boxmaterial.opacity = 0.0;
    boxmaterial.transparent = true;

    const collider_derecha = new THREE.Mesh( boxgeometry, boxmaterial );
    collider_derecha.position.set(0.65, -0.6, 1.2);
    collider_derecha.userData.clickable = true;
    
    const collider_izquierda = new THREE.Mesh( boxgeometry, boxmaterial );
    collider_izquierda.position.set(-1.0, -0.5, 0.8);
    collider_izquierda.scale.set(1.9, 1.1, 1);
    collider_izquierda.userData.clickable = true;

    const collider_abajo = new THREE.Mesh( boxgeometry, boxmaterial );
    collider_abajo.position.set(0, -0.7, 1.2);
    collider_abajo.scale.set(1.9, 1.1, 1);
    collider_abajo.userData.clickable = true;

    const collider_arriba = new THREE.Mesh( boxgeometry, boxmaterial );
    collider_arriba.position.set(0, -0.2, 0.8);
    collider_arriba.scale.set(1.9, 1.1, 0.7);
    collider_arriba.userData.clickable = true;
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
    plane.add(fam.scene);
    plane.add(fam2.scene);
    plane.add(collider_derecha);
    plane.add(collider_izquierda);
    plane.add(collider_abajo);
    plane.add(collider_arriba);
  //

    var focus = true;
    var ended = false;
    var isplaying = false; 
    var der_flag = false;
    var izq_flag = false;
    var down_flag = false;
    var up_flag = false;

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame( animate );
      var delta = clock.getDelta();
      if ( mixer ) mixer.update( delta*1);
      if ( mixerabajo ) mixerabajo.update( delta*1);
      if ( mixerarriba ) mixerarriba.update( delta*1);
      if ( mixerizquierda ) mixerizquierda.update( delta*1);
      if ( mixerderecha ) mixerderecha.update( delta*1);
      if ( mixerfam ) mixerfam.update( delta*1);
      if ( mixerfam2 ) mixerfam2.update( delta*1);
      renderer.render( scene, camera );
    }
    
    //events
    anchor.onTargetFound = () => {
      
      isplaying = true;
      sound.play();
      cutout.scene.visible=true;
      arriba.scene.visible=true;
      abajo.scene.visible=true;
      derecha.scene.visible=true;
      izquierda.scene.visible=true;
      fam.scene.visible=true;
      animate();
      action.play();
      actionfamintro.play();
      setTimeout(ChangeFamAnim, 1000);
      
    }
    
    anchor.onTargetLost = () => {

      isplaying = false;
      sound.pause();

    }

    window.addEventListener( 'blur', () => {
      sound.pause();
      focus = false;
      
    });

    window.addEventListener( 'focus', () => {
      focus = true;
      if(isplaying)
        sound.play();
    }); 
    
    document.body.addEventListener('click', (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      const mouse = new THREE.Vector2(mouseX, mouseY);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        let o = intersects[0].object; 
        while (o.parent && !o.userData.clickable){
          o = o.parent;
        }
        if (o.userData.clickable)
        {
          if(o === collider_derecha)
            {
              der_flag = true;
              actionderecha.play();
            }
          else if(o === collider_izquierda)
            {
              izq_flag = true;
              actionizquierda.play();
            }
          else if(o === collider_abajo)
            {
              down_flag = true;
              actionabajo.play();
            }
          else if(o === collider_arriba)
            {
              up_flag = true;
              actionarriba.play();
            }
        }
      }
    });
    //
    //update func
    function UpdateFunc()
    {
      if(up_flag && down_flag && izq_flag && der_flag)
        ended = true;
      
      if(ended & isplaying & focus)
        setTimeout(Redirect, 8000);

      setTimeout(UpdateFunc, 1000);
    }

    function Redirect()
    { if(isplaying & focus)
        window.location.replace("info.html");
    }

    function ChangeFamAnim()
    {
      fam.scene.visible=false;
      fam2.scene.visible=true;
      actionfamintro.stop();
      actionfam2.play();
    }
    

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    UpdateFunc();
  }

  var startButton = document.querySelector("button");
  startButton = addEventListener("click", () => {
    console.log('I run only once!');
    start();
  }, { once: true });

});

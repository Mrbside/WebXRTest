import {loadGLTF, loadVideo} from "../libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'blanc.mind',
    });
    const {renderer, scene, camera} = mindarThree;
    
    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);
    
    const video = await loadVideo("blanc.mp4");
    const texture = new THREE.VideoTexture(video);

    const first3D = await loadGLTF("plano.gltf");
    first3D.scene.scale.set(0.017, 0.017, 0.017);
    first3D.scene.position.set(-0.02, -0.04, -0.05);
    first3D.scene.rotation.set(89.5, 0, 0);
    const mixer = new THREE.AnimationMixer(first3D.scene);
    const action = mixer.clipAction(first3D.animations[0]);
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
    action.enable = true;
    
    const second3D = await loadGLTF("cube.gltf");
    second3D.scene.scale.set(0.004, 0.004, 0.0041);
    second3D.scene.position.set(0.0, -0.07, 0.005);
    second3D.scene.rotation.set(89.5, 0, 0);
    const mixer2 = new THREE.AnimationMixer(second3D.scene);
    const action2 = mixer2.clipAction(second3D.animations[0]);
    action2.setLoop(THREE.LoopOnce);
    action2.clampWhenFinished = true;
    action2.enable = true;

    document.querySelector(".splash-bg").style.display = "none";
    document.querySelector(".splash-btn").style.display = "none";
    document.querySelector(".logo").style.display = "none";

    const geometry = new THREE.PlaneGeometry(1, .57);
    const material = new THREE.MeshBasicMaterial({map: texture});
    const plane = new THREE.Mesh(geometry, material);

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(plane);
    plane.add(first3D.scene);
    plane.add(second3D.scene);

    var isplaying=false; 
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame( animate );
      var delta = clock.getDelta();
      if ( mixer ) mixer.update( delta*1.1 );
      if ( mixer2 ) mixer2.update( delta*1.91 );
      renderer.render( scene, camera );
    }

  function UpdateFunc(){
    console.log('I run every second');
    console.log(video.currentTime);

    if(video.currentTime>0 && video.currentTime<1){
      first3D.scene.visible=false;
      second3D.scene.visible=false;
      action.stop();
      action2.stop();
    }
    if(video.currentTime>23 && video.currentTime<24){
      first3D.scene.visible=true;
      animate();
      action.play();
    }
    if(video.currentTime>29 && video.currentTime<30){
      first3D.scene.visible=false;
      action.stop();
    }
    if(video.currentTime>41 && video.currentTime<42){
      second3D.scene.visible=true;
      animate();
      action2.play();
    }
    if(video.currentTime>46 && video.currentTime<47){
      second3D.scene.visible=false;
      action2.stop();
    }
    setTimeout(UpdateFunc, 1000);
  }

    video.addEventListener('pause', () => {
      if(isplaying){
       window.location.replace("https://www.auraxr.com/blancxr/");}
    });
    anchor.onTargetFound = () => {
      isplaying=true;
      first3D.scene.visible=false;
      second3D.scene.visible=false;
      video.play();
    }
    anchor.onTargetLost = () => {
      isplaying=false;
      first3D.visible=false;
      second3D.visible=false;
      video.pause();
      action.stop();
      action2.stop();
      video.currentTime = 0;
    }
    video.addEventListener( 'play', () => {
      //video.currentTime = 0;
    });

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

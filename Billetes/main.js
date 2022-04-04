import {loadGLTF, loadVideo} from "../libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'billete.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    const video = await loadVideo("billete.mp4");
    const texture = new THREE.VideoTexture(video);
    texture.encoding = THREE.sRGBEncoding;

    const geometry = new THREE.PlaneGeometry(1, .57);
    const material = new THREE.MeshBasicMaterial({map: texture});
    const plane = new THREE.Mesh(geometry, material);

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(plane);
    //var scanerOn=false;
    var isplaying=false; 

    document.querySelector(".splash-bg").style.display = "none";
    document.querySelector(".splash-btn").style.display = "none";
    document.querySelector(".logo").style.display = "none";
   

    video.addEventListener('pause', () => {
      if(isplaying && focus){
       window.location.replace("https://www.auraxr.com/heritage-xr/");}
    });
    anchor.onTargetFound = () => {
      isplaying=true;
      video.play();
    }
    anchor.onTargetLost = () => {
      isplaying=false;
      video.pause();
    }
    video.addEventListener( 'play', () => {
      video.currentTime = 0;
    });

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    var focus=true;
    
    window.addEventListener( 'blur', () => {
      focus=false;
    });

    window.addEventListener( 'focus', () => {
      focus=true;
    });

  }

  var startButton = document.querySelector("button");
  //startButton = addEventListener("click",start);

  startButton = addEventListener("click", () => {
    console.log('I run only once!');
    start();
  }, { once: true });
  
  /*const startButton = document.createElement("button");
  startButton.textContent = "Enable Augemented Reality";
  startButton.addEventListener("click", start);
  document.body.appendChild(startButton);*/

  //start(); window.location.replace("https://www.auraxr.com/");
});

import {loadGLTF, loadVideo} from "../libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'billete.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    // const video = await loadVideo("billetevideo.mp4");
    const video = document.createElement("video");
    video.src = await preloadVideo("billetevideo.mp4");

    const texture = new THREE.VideoTexture(video);

    const geometry = new THREE.PlaneGeometry(1, .67);
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
      if(isplaying){
       window.location.replace("https://www.auraxr.com/hxr-2/");}
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
  }

  async function preloadVideo(src) {
    const res = await fetch(src);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
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

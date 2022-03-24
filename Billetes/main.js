import {loadGLTF, loadVideo} from "../libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  console.log('11111');
  const start = async() => {
    console.log('22222');
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'billete.mind',
    });
    console.log('3333');
    const {renderer, scene, camera} = mindarThree;
    console.log('4444');
    const video = await loadVideo("billetevideo.mp4");
    const texture = new THREE.VideoTexture(video);
    console.log('55555');
    const geometry = new THREE.PlaneGeometry(1, .67);
    const material = new THREE.MeshBasicMaterial({map: texture});
    const plane = new THREE.Mesh(geometry, material);
    console.log('66666');
    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(plane);
    var isplaying=false; 
    console.log('77777');
    document.querySelector(".splash-bg").style.display = "none";
    document.querySelector(".splash-btn").style.display = "none";
    document.querySelector(".logo").style.display = "none";
   
    console.log('88888');
    video.addEventListener('pause', () => { console.log('99999');
      if(isplaying){
       window.location.replace("https://www.auraxr.com/");}
    });
    anchor.onTargetFound = () => { console.log('10101010');
      isplaying=true;
      video.play();
    }
    anchor.onTargetLost = () => { console.log('once');
      isplaying=false;
      video.pause();
    }
    video.addEventListener( 'play', () => { console.log('1212121');
      video.currentTime = 0;
    });

    await mindarThree.start();
    renderer.setAnimationLoop(() => { console.log('13131313');
      renderer.render(scene, camera);
    });
  }

  var startButton = document.querySelector("button");
  startButton = addEventListener("click",start);
  
  /*const startButton = document.createElement("button");
  startButton.textContent = "Enable Augemented Reality";
  startButton.addEventListener("click", start);
  document.body.appendChild(startButton);*/

  //start(); window.location.replace("https://www.auraxr.com/");
});

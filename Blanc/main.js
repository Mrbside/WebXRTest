document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    
        let y = 0;
        const blancVideo = document.querySelector("#blancvideo");
        const firstModel = document.querySelector("#plano3D");
        const secondModel = document.querySelector("#cube3D");

      var isplaying=false; 
      document.querySelector(".splash-bg").style.display = "none";
      document.querySelector(".splash-btn").style.display = "none";
      document.querySelector(".logo").style.display = "none";
      
      AFRAME.registerComponent('mytarget', {
        init: function () {
          this.el.addEventListener('targetFound', event => {
            isplaying=true;
            blancVideo.play();
          });
          this.el.addEventListener('targetLost', event => {
            isplaying=false;
            blancVideo.pause();
          });
          
          blancVideo.addEventListener('play', () => {
            blancVideo.currentTime = 0;
          });
          blancVideo.addEventListener('pause', () => {
            if(isplaying){
             window.location.replace("https://www.auraxr.com/blancxr/");}
          });
        } 
      });

  }

  var startButton = document.querySelector("button");
  startButton = addEventListener("click", () => {
    console.log('I run only once!');
    start();
  },{ once: true });

});
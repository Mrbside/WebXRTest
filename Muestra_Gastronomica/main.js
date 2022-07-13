document.addEventListener('DOMContentLoaded', () => {
        const start = async() => {
          document.querySelector(".splash-bg").style.display = "none";
          document.querySelector(".splash-btn").style.display = "none";
          document.querySelector(".logo").style.display = "none";
        }
        
        var startButton = document.querySelector(".splash-btn");
        startButton = addEventListener("click", () => {
        console.log('I run only once!');
        start();
        }, { once: true });
      
      
    
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

        AFRAME.registerComponent('video-controls', {
	
          init: function()
          {
            
            let video = document.querySelector("#video");
            video.playsInline = true;
            video.muted = true;
            let videoBorder  = document.querySelector("#video-border");
    

          this.el.addEventListener('model-loaded', function(ev){
            console.log("model loaded");
            
            let videoDisplay = document.querySelector("#video-border");
            let videomesh  = videoDisplay.getObject3D("mesh");
            console.log(videomesh);
          
            videomesh.traverse(function(node){
              if (node.isMesh){  
                console.log("mod material");
                const texture = new THREE.VideoTexture(video);
                let mat = new THREE.MeshBasicMaterial({map: texture});
                node.material = mat; 
              }
            });
          });

          
          this.el.sceneEl.addEventListener("markerFound", (e) => {
            
              video.muted = false;
              video.play();
            
          });
          
          this.el.sceneEl.addEventListener("markerLost", (e) => {
              
              video.pause();
            
          });
            
          }
          
        });

});


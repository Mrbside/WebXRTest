
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
      });
      
    
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
      AFRAME.registerComponent("audiomanager", {
        init: function() {
          var entity = document.querySelector('#niña');
          var soundended=false;

          this.el.sceneEl.addEventListener("markerFound", (e) => {
          if(!soundended)
          {
            entity.components.sound.playSound();
            entity.setAttribute('animation-mixer', {timeScale: 1.0});
            this.isVisible = true;
          }
          });

          this.el.sceneEl.addEventListener("markerLost", (e) => {
            entity.components.sound.pauseSound();
            entity.setAttribute('animation-mixer', {timeScale: 0.0});
          
          });
          var focus=true;
          
          entity.addEventListener("sound-ended", (e) => {
            //aqui puedes meter la accion de sacar el boton/panel que nos lleva al formulario
            document.querySelector(".texto-aviso").style.display = "block";
            soundended=true;
          });


          window.addEventListener( 'blur', () => {
            focus=false;
            entity.components.sound.pauseSound();
            entity.setAttribute('animation-mixer', {timeScale: 0.0});
          });

          window.addEventListener( 'focus', () => {
            focus=true;
            //entity.components.sound.playSound();
          }); 
        }
        });

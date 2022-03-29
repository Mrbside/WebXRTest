document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const showInfo = () => {
        let y = 0;
        const blancVideo = document.querySelector("#blancvideo");
        const firstModel = document.querySelector("#plano3D");
        const secondModel = document.querySelector("#cube3D");


      }

      const showPortfolio = (done) => {
        const portfolio = document.querySelector("#portfolio-panel");
        const portfolioLeftButton = document.querySelector("#portfolio-left-button");
        const portfolioRightButton = document.querySelector("#portfolio-right-button");
        const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");

        let y = 0;
        let currentItem = 0;

        portfolio.setAttribute("visible", true);

        const showPortfolioItem = (item) => {
          for (let i = 0; i <= 2; i++) {
            document.querySelector("#portfolio-item" + i).setAttribute("visible", i === item);
          }
        }
        const id = setInterval(() => {
          y += 0.008;
          if (y >= 0.6) {
            clearInterval(id);
            portfolioLeftButton.setAttribute("visible", true);
            portfolioRightButton.setAttribute("visible", true);
            portfolioLeftButton.addEventListener('click', () => {
              currentItem = (currentItem + 1) % 3;
              showPortfolioItem(currentItem);
            });
            portfolioRightButton.addEventListener('click', () => {
              currentItem = (currentItem - 1 + 3) % 3;
              showPortfolioItem(currentItem);
            });

            paintandquestPreviewButton.addEventListener('click', () => {
              paintandquestPreviewButton.setAttribute("visible", false);
              const testVideo = document.createElement( "video" );
              const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
              if (canplayWebm == "") {
                document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
                document.querySelector("#paintandquest-video-mp4").play();
              } else {
                document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
                document.querySelector("#paintandquest-video-webm").play();
              }
            });

            setTimeout(() => {
              done();
            }, 500);
          }
          portfolio.setAttribute("position", "0 " + y + " -0.01");
        }, 10);
      }

      const showAvatar = (onDone) => {
        const avatar = document.querySelector("#avatar");
        let z = -0.3;
        const id = setInterval(() => {
          z += 0.008;
          if (z >= 0.3) {
            clearInterval(id);
            onDone();
          }
          avatar.setAttribute("position", "0 -0.25 " + z);
        }, 10);
      }
      var isplaying=false; 
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
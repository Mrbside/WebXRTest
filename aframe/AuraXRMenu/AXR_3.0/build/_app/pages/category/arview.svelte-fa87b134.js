import{S as qt,i as Ft,s as Nt,e as a,t as k,k as c,c as l,a as o,h as j,d as n,m as d,F as T,b as v,M as t,g as St,G as e,H as mt}from"../../chunks/vendor-1049dac4.js";function Ct(Mt){let u,r,q,$,W,M,ct,O,x,dt,Y,A,pt,G,I,ut,z,F,V,K,N,U,J,S,Q,Z,C,tt,et,B,H,i,y,P,gt,nt,f,ht,at,E,yt,lt,b,ot,m,g,it,p,rt,L,st,_;return{c(){u=a("div"),r=a("head"),q=a("title"),$=k("MenuXR 2.0"),W=c(),M=a("script"),O=c(),x=a("script"),Y=c(),A=a("script"),G=c(),I=a("script"),z=c(),F=a("script"),V=k(`//master mas reciente de aframe: https://aframe.io/aframe/dist/aframe-master.js
      //ultima version estable aframe: https://aframe.io/releases/1.2.0/aframe.min.js
      //best arjs settings smoothCount='3' smoothTolerance='0.01' smoothThreshold='2'
      AFRAME.registerComponent('jitterix', {
      init: function () {
      // Code here.
        var canvasEl = document.getElementById(this.data.cid);
      this.renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true, canvas: canvasEl } );
      this.renderer= new THREE.PerspectiveCamera();
      }
        });`),K=c(),N=a("script"),U=k(`function myFunction(){
      var plato1 = document.querySelector('#plato');
      //plato1.addEventListener('click', myFunction() {
      plato1.object3D.visible = false;}`),J=c(),S=a("script"),Q=k(`//componente para sombra en camera background
      AFRAME.registerComponent("apply-shadowmaterial", {
          init: function() {
            // grab the mesh
            let mesh = this.el.getObject3D("mesh");
            // keep the reference to the old material
            let tmp = mesh.material;
            // assign the new material
            mesh.material = new THREE.ShadowMaterial({ opacity: 0.1 });
            mesh.receiveShadow = true;
            // free memory
            tmp.dispose();
          }
        });`),Z=c(),C=a("script"),tt=k(`let entradaPosition = 0;
          let platilloPosition = -1;
          let path = "https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/"
          let glbs = [
              'tacos.glb',
              'sand.glb'
          ]
          let platillos = [
              {
                  name : 'Hombre',
                  glb : 'Black',
                  price : 500.0, 
                  
              },
              {
                  name : 'Mujer',
                  glb : 'Orange',
                  price : 500.0,
                  
              },
              {
                  name : 'Deportes',
                  glb : 'Blue',
                  price : 500.0,
                  
              }
          ]
          let categories = [
              {
                  name: 'ENTRADAS',
                  platillos : platillos
              }
          ]
          let orders = []
          let quantity = 0;

          function plus() {
              quantity = quantity + 1;
              let el = document.getElementById('quantity')
              let el2 = document.getElementById('quantity2')
              el.innerHTML = ""+quantity
              el2.innerHTML = ""+quantity
              let amountPlatillo = categories[entradaPosition].platillos[platilloPosition].price * quantity;
              el = document.getElementById('addAmount')
              el2 = document.getElementById('addAmount2')
              el.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
              el2.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
          }
          function minus() {
              if(quantity > 0) {
                  quantity = quantity - 1;
                  let amountPlatillo = categories[entradaPosition].platillos[platilloPosition].price * quantity;
                  let el = document.getElementById('addAmount')
                  let el2 = document.getElementById('addAmount2')
                  el.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
                  el2.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
              }
              let el = document.getElementById('quantity')
              let el2 = document.getElementById('quantity')
              el.innerHTML = ""+quantity
              el2.innerHTML = ""+quantity
          }

          function addOrder() {
              let amountPlatillo = categories[entradaPosition].platillos[platilloPosition].price * quantity;
              orders.push({
                  category : categories[entradaPosition],
                  platillo : platillos[platilloPosition],
                  amount : parseFloat(amountPlatillo).toFixed(2)
              })
              let el = document.getElementById('receipt');
              let el2 = document.getElementById('receipt2');
              el.innerHTML = ""+orders.length
              el2.innerHTML = ""+orders.length
              el = document.getElementById('orderAmount')
              el2 = document.getElementById('orderAmount')
              let amount = 0;
              orders.forEach((element) => {
                  amount = element.amount
              } )
              el.innerHTML = "$"+parseFloat(amount).toFixed(2)
              el2.innerHTML = "$"+parseFloat(amount).toFixed(2)
          }

          function backPlatillo() {
              if(platilloPosition > 0)
              platilloPosition = platilloPosition -1;
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              
              let text = document.getElementById('platilloName');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              cambiaplatillo(platillo.glb)
          }
          function nextPlatillo() {
              if(platilloPosition < 2)
              platilloPosition = platilloPosition + 1;
              console.log(platilloPosition);
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              
              let text = document.getElementById('platilloName');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              cambiaplatillo(platillo.glb)
          }

          function platilloDeMenu(param) {
              platilloPosition = param + "";
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              
              
              let text = document.getElementById('platilloName');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              cambiaplatillo(platillo.glb)
              
          }

          function nextCategory() {
              entradaPosition = entradaPosition + 1;
              platilloPosition = 0;

              let platillo = categories[entradaPosition].platillos[platilloPosition]
              let text = document.getElementById('platilloName');
              // let text3 = document.getElementById('platilloName2');
              // let text2 = document.getElementById('categoryName');
              // let text4 = document.getElementById('categoryName2');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              // text2.innerHTML  = categories[entradaPosition].name
              // text3.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              // text4.innerHTML  = categories[entradaPosition].name
              cambiaplatillo(platillo.glb)
          }
          function backCategory() {
              entradaPosition = entradaPosition + -1;
              platilloPosition = 0;
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              let text = document.getElementById('platilloName');
              let text3 = document.getElementById('platilloName2');
              let text2 = document.getElementById('categoryName');
              let text4 = document.getElementById('categoryName2');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              text2.innerHTML  = categories[entradaPosition].name
              text3.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              text4.innerHTML  = categories[entradaPosition].name
              cambiaplatillo(platillo.glb)
          }
          function cambiaplatillo (Newmodel) {
              var platotest = document.querySelector('#plato');
              //var paneltest = document.querySelector('#panelinfo');
                  //start animation
              platotest.emit('pos')
              platotest.emit('scale')
              platotest.addEventListener("animationcomplete__scale", e => {
                  // resent values when animation is finished
                  platotest.setAttribute('position','0 0 0')
                  //cambia modelo platillo
                  platotest.setAttribute('gltf-model','https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/'+Newmodel+'.glb')
                  platotest.setAttribute('scale','0.1 0.1 0.1')
                }, {once : true});
              //cambia panel de informacion
              //paneltest.setAttribute('src','#'+Newmodel)
              
          };`),et=c(),B=a("body"),H=a("div"),i=a("a-scene"),y=a("a-assets"),P=a("a-asset-item"),nt=c(),f=a("a-asset-item"),at=c(),E=a("a-asset-item"),lt=c(),b=a("a-entity"),ot=c(),m=a("a-marker"),g=a("a-plane"),it=c(),p=a("a-entity"),rt=c(),L=a("a-entity"),st=c(),_=a("a-entity"),this.h()},l(D){u=l(D,"DIV",{class:!0});var R=o(u);r=l(R,"HEAD",{});var s=o(r);q=l(s,"TITLE",{});var Pt=o(q);$=j(Pt,"MenuXR 2.0"),Pt.forEach(n),W=d(s),M=l(s,"SCRIPT",{src:!0});var xt=o(M);xt.forEach(n),O=d(s),x=l(s,"SCRIPT",{src:!0});var At=o(x);At.forEach(n),Y=d(s),A=l(s,"SCRIPT",{src:!0});var It=o(A);It.forEach(n),G=d(s),I=l(s,"SCRIPT",{src:!0});var Bt=o(I);Bt.forEach(n),z=d(s),F=l(s,"SCRIPT",{});var ft=o(F);V=j(ft,`//master mas reciente de aframe: https://aframe.io/aframe/dist/aframe-master.js
      //ultima version estable aframe: https://aframe.io/releases/1.2.0/aframe.min.js
      //best arjs settings smoothCount='3' smoothTolerance='0.01' smoothThreshold='2'
      AFRAME.registerComponent('jitterix', {
      init: function () {
      // Code here.
        var canvasEl = document.getElementById(this.data.cid);
      this.renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true, canvas: canvasEl } );
      this.renderer= new THREE.PerspectiveCamera();
      }
        });`),ft.forEach(n),K=d(s),N=l(s,"SCRIPT",{});var Et=o(N);U=j(Et,`function myFunction(){
      var plato1 = document.querySelector('#plato');
      //plato1.addEventListener('click', myFunction() {
      plato1.object3D.visible = false;}`),Et.forEach(n),J=d(s),S=l(s,"SCRIPT",{});var bt=o(S);Q=j(bt,`//componente para sombra en camera background
      AFRAME.registerComponent("apply-shadowmaterial", {
          init: function() {
            // grab the mesh
            let mesh = this.el.getObject3D("mesh");
            // keep the reference to the old material
            let tmp = mesh.material;
            // assign the new material
            mesh.material = new THREE.ShadowMaterial({ opacity: 0.1 });
            mesh.receiveShadow = true;
            // free memory
            tmp.dispose();
          }
        });`),bt.forEach(n),Z=d(s),C=l(s,"SCRIPT",{});var _t=o(C);tt=j(_t,`let entradaPosition = 0;
          let platilloPosition = -1;
          let path = "https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/"
          let glbs = [
              'tacos.glb',
              'sand.glb'
          ]
          let platillos = [
              {
                  name : 'Hombre',
                  glb : 'Black',
                  price : 500.0, 
                  
              },
              {
                  name : 'Mujer',
                  glb : 'Orange',
                  price : 500.0,
                  
              },
              {
                  name : 'Deportes',
                  glb : 'Blue',
                  price : 500.0,
                  
              }
          ]
          let categories = [
              {
                  name: 'ENTRADAS',
                  platillos : platillos
              }
          ]
          let orders = []
          let quantity = 0;

          function plus() {
              quantity = quantity + 1;
              let el = document.getElementById('quantity')
              let el2 = document.getElementById('quantity2')
              el.innerHTML = ""+quantity
              el2.innerHTML = ""+quantity
              let amountPlatillo = categories[entradaPosition].platillos[platilloPosition].price * quantity;
              el = document.getElementById('addAmount')
              el2 = document.getElementById('addAmount2')
              el.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
              el2.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
          }
          function minus() {
              if(quantity > 0) {
                  quantity = quantity - 1;
                  let amountPlatillo = categories[entradaPosition].platillos[platilloPosition].price * quantity;
                  let el = document.getElementById('addAmount')
                  let el2 = document.getElementById('addAmount2')
                  el.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
                  el2.innerHTML = "$"+parseFloat(amountPlatillo).toFixed(2)
              }
              let el = document.getElementById('quantity')
              let el2 = document.getElementById('quantity')
              el.innerHTML = ""+quantity
              el2.innerHTML = ""+quantity
          }

          function addOrder() {
              let amountPlatillo = categories[entradaPosition].platillos[platilloPosition].price * quantity;
              orders.push({
                  category : categories[entradaPosition],
                  platillo : platillos[platilloPosition],
                  amount : parseFloat(amountPlatillo).toFixed(2)
              })
              let el = document.getElementById('receipt');
              let el2 = document.getElementById('receipt2');
              el.innerHTML = ""+orders.length
              el2.innerHTML = ""+orders.length
              el = document.getElementById('orderAmount')
              el2 = document.getElementById('orderAmount')
              let amount = 0;
              orders.forEach((element) => {
                  amount = element.amount
              } )
              el.innerHTML = "$"+parseFloat(amount).toFixed(2)
              el2.innerHTML = "$"+parseFloat(amount).toFixed(2)
          }

          function backPlatillo() {
              if(platilloPosition > 0)
              platilloPosition = platilloPosition -1;
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              
              let text = document.getElementById('platilloName');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              cambiaplatillo(platillo.glb)
          }
          function nextPlatillo() {
              if(platilloPosition < 2)
              platilloPosition = platilloPosition + 1;
              console.log(platilloPosition);
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              
              let text = document.getElementById('platilloName');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              cambiaplatillo(platillo.glb)
          }

          function platilloDeMenu(param) {
              platilloPosition = param + "";
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              
              
              let text = document.getElementById('platilloName');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              cambiaplatillo(platillo.glb)
              
          }

          function nextCategory() {
              entradaPosition = entradaPosition + 1;
              platilloPosition = 0;

              let platillo = categories[entradaPosition].platillos[platilloPosition]
              let text = document.getElementById('platilloName');
              // let text3 = document.getElementById('platilloName2');
              // let text2 = document.getElementById('categoryName');
              // let text4 = document.getElementById('categoryName2');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              // text2.innerHTML  = categories[entradaPosition].name
              // text3.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              // text4.innerHTML  = categories[entradaPosition].name
              cambiaplatillo(platillo.glb)
          }
          function backCategory() {
              entradaPosition = entradaPosition + -1;
              platilloPosition = 0;
              let platillo = categories[entradaPosition].platillos[platilloPosition];
              let text = document.getElementById('platilloName');
              let text3 = document.getElementById('platilloName2');
              let text2 = document.getElementById('categoryName');
              let text4 = document.getElementById('categoryName2');
              text.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              text2.innerHTML  = categories[entradaPosition].name
              text3.innerHTML  = categories[entradaPosition].platillos[platilloPosition].name
              text4.innerHTML  = categories[entradaPosition].name
              cambiaplatillo(platillo.glb)
          }
          function cambiaplatillo (Newmodel) {
              var platotest = document.querySelector('#plato');
              //var paneltest = document.querySelector('#panelinfo');
                  //start animation
              platotest.emit('pos')
              platotest.emit('scale')
              platotest.addEventListener("animationcomplete__scale", e => {
                  // resent values when animation is finished
                  platotest.setAttribute('position','0 0 0')
                  //cambia modelo platillo
                  platotest.setAttribute('gltf-model','https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/'+Newmodel+'.glb')
                  platotest.setAttribute('scale','0.1 0.1 0.1')
                }, {once : true});
              //cambia panel de informacion
              //paneltest.setAttribute('src','#'+Newmodel)
              
          };`),_t.forEach(n),s.forEach(n),et=d(R),B=l(R,"BODY",{style:!0});var Tt=o(B);H=l(Tt,"DIV",{class:!0});var vt=o(H);i=l(vt,"A-SCENE",{id:!0,"gesture-detector":!0,physicallycorrectlights:!0,"vr-mode-ui":!0,embedded:!0,arjs:!0,"always-fullscreen":!0,renderer:!0,"loading-screen":!0});var h=o(i);y=l(h,"A-ASSETS",{});var w=o(y);P=l(w,"A-ASSET-ITEM",{id:!0,src:!0}),o(P).forEach(n),nt=d(w),f=l(w,"A-ASSET-ITEM",{id:!0,src:!0}),o(f).forEach(n),at=d(w),E=l(w,"A-ASSET-ITEM",{id:!0,src:!0}),o(E).forEach(n),w.forEach(n),lt=d(h),b=l(h,"A-ENTITY",{id:!0,light:!0,position:!0});var Ht=o(b);Ht.forEach(n),ot=d(h),m=l(h,"A-MARKER",{id:!0,raycaster:!0,emitevents:!0,cursor:!0,type:!0,url:!0,smooth:!0,smoothcount:!0,smoothtolerance:!0,smooththreshold:!0});var X=o(m);g=l(X,"A-PLANE",{id:!0,position:!0,height:!0,width:!0,rotation:!0,"apply-shadowmaterial":!0}),o(g).forEach(n),it=d(X),p=l(X,"A-ENTITY",{id:!0,position:!0,rotation:!0,scale:!0,"gltf-model":!0,shadow:!0,animation__pos:!0,animation__scale:!0,class:!0,"gesture-handler":!0});var Lt=o(p);Lt.forEach(n),X.forEach(n),rt=d(h),L=l(h,"A-ENTITY",{id:!0,camera:!0});var Rt=o(L);Rt.forEach(n),st=d(h),_=l(h,"A-ENTITY",{id:!0,light:!0,position:!0});var wt=o(_);wt.forEach(n),h.forEach(n),vt.forEach(n),Tt.forEach(n),R.forEach(n),this.h()},h(){T(M.src,ct="https://aframe.io/releases/1.2.0/aframe.min.js")||v(M,"src",ct),T(x.src,dt="../../build/aframe-ar.js")||v(x,"src",dt),T(A.src,pt="../../../A-FrameAddons/js/aframe-extras.min.js")||v(A,"src",pt),T(I.src,ut="https://raw.githack.com/fcor/arjs-gestures/master/dist/gestures.js")||v(I,"src",ut),t(P,"id","blackM"),T(P.src,gt="https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/Black.glb")||t(P,"src",gt),t(f,"id","blueM"),T(f.src,ht="https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/Blue.glb")||t(f,"src",ht),t(E,"id","orangeM"),T(E.src,yt="https://mrbside.github.io/WebXRTest/aframe/AuraXRMenu/AXR_2.0/Orange.glb")||t(E,"src",yt),t(b,"id","luzdirectional"),t(b,"light","type: directional; color: #DDD; groundColor: #DDD; intensity: 0.2; castShadow:true; target:#marcador; shadowCameraBottom:-6.0; shadowCameraTop:6.0; shadowCameraLeft:-6.0; shadowCameraRight:6.0; "),t(b,"position","-5.0 6.520 5.127"),t(g,"id","planosombras"),t(g,"position","0 -0.2 0"),t(g,"height","500"),t(g,"width","500"),t(g,"rotation","-90 0 0"),t(g,"apply-shadowmaterial",""),t(p,"id","plato"),t(p,"position","0 0 0"),t(p,"rotation","0 60 0"),t(p,"scale","0.1 0.1 0.1"),t(p,"gltf-model","Black.glb"),t(p,"shadow","receive: true; cast: true"),t(p,"animation__pos","property:position; from:0 0 0; to:-6 0 0; dur: 1000; startEvents:pos"),t(p,"animation__scale","property:scale; from:0.1 0.1 0.1; to:0 0 0; dur: 1000; startEvents:scale"),t(p,"class","clickable"),t(p,"gesture-handler",""),t(m,"id","marcador"),t(m,"raycaster","objects: .clickable"),t(m,"emitevents","true"),t(m,"cursor","fuse: false; rayOrigin: mouse;"),t(m,"type","pattern"),t(m,"url","HUG.patt"),t(m,"smooth","true"),t(m,"smoothcount","3"),t(m,"smoothtolerance","0.01"),t(m,"smooththreshold","2"),t(L,"id","camera"),t(L,"camera","far:10000.00; fov:80.00; near:0.005"),t(_,"id","luz"),t(_,"light","type: ambient; color: #DDD; groundColor: #DDD; intensity: 0.6"),t(_,"position","0 2 0"),t(i,"id","escena"),t(i,"gesture-detector",""),t(i,"physicallycorrectlights","true"),t(i,"vr-mode-ui","enabled: false"),t(i,"embedded",""),t(i,"arjs","sourceType: webcam; trackingMethod: best; detectionMode: mono; sourceWidth:2048; sourceHeight:1536; displayWidth: 2048; displayHeight: 1536"),t(i,"always-fullscreen",""),t(i,"renderer","precision: high; antialias: false; logarithmicDepthBuffer:true; colorManagement: true"),t(i,"loading-screen","dotsColor: #DBDADA; backgroundColor: #282828"),v(H,"class","AR"),v(B,"style","margin : 0px; overflow: hidden;"),v(u,"class","arview svelte-d0hadc")},m(D,R){St(D,u,R),e(u,r),e(r,q),e(q,$),e(r,W),e(r,M),e(r,O),e(r,x),e(r,Y),e(r,A),e(r,G),e(r,I),e(r,z),e(r,F),e(F,V),e(r,K),e(r,N),e(N,U),e(r,J),e(r,S),e(S,Q),e(r,Z),e(r,C),e(C,tt),e(u,et),e(u,B),e(B,H),e(H,i),e(i,y),e(y,P),e(y,nt),e(y,f),e(y,at),e(y,E),e(i,lt),e(i,b),e(i,ot),e(i,m),e(m,g),e(m,it),e(m,p),e(i,rt),e(i,L),e(i,st),e(i,_)},p:mt,i:mt,o:mt,d(D){D&&n(u)}}}class kt extends qt{constructor(u){super();Ft(this,u,null,Ct,Nt,{})}}export{kt as default};

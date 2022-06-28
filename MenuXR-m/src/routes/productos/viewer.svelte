<body class="viewer-body">
<script>
AFRAME.registerComponent("fit", {
    init: function() {
    const plane = document.querySelector("a-plane")
    const distance = this.el.object3D.position.distanceTo(plane.object3D.position)
    var height = plane.getAttribute("geometry").height
    var newFov = 2 * Math.atan((height / 2) / distance) * (180 / Math.PI); // in degrees
    this.el.sceneEl.camera.fov = newFov
    }
})
</script>
    <a-scene embedded arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;" >
        <a-box position='0 0.5 0' material='opacity: 1;'></a-box>
        <a-marker-camera preset='hiro'></a-marker-camera>
        <a-camera fov="100" look-controls></a-camera>
    </a-scene>
</body>

<style>
    body {
    margin: 0;
    padding: 0;
    background:none !important;
}

</style>
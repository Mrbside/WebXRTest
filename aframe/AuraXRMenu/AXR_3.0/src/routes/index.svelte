<script>
     import { headerTitle } from "../store";
     $headerTitle = "INDEX"
</script>

<div class="index">
    <div class="container">
        <img src="/menuxr_h.png" alt="site logo">
        <h3>Aura XR 3.0</h3>
        <p>Version Template</p>
    </div>
    <a href="/home">
        <button class="btn third-color">Enter</button>
    </a>
   
</div>

<style lang="scss">
    .index{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
    .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 50px;
        position: absolute;
        bottom: 20vh;
        left: 0px;
        right: 0px;
        width: 300px;
        margin:  0 auto;
    }

    .index img{
        display: block;
        width: 200px;
    }

    .index .container{
        left: 0px;
        right: 0px;
        margin: 0 auto;
        position: absolute;
        top: 30vh;
        display: block;
        width: 200px;
    }

</style>
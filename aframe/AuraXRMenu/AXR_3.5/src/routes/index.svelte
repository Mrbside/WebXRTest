<script>
     import { headerTitle } from "../store.js";
     $headerTitle = "INDEX"
     
</script>

<div class="index">
    <div class="container">
        <div class="spacer"></div>
        <img src="/logo-vertivcal-100-color.png" alt="site logo" class="logo">
        <h4>by</h4>
        <img src="/menuxr_h.png" alt="site logo" class="logo aura">
        <a href="/home">
            <button class="btn third-color">Enter</button>
        </a>
        <div class="spacer"></div>
        <div class="spacer"></div>
    </div>
    
   
</div>

<style lang="scss">
    .index{
        text-align: center;
        display: block;
        margin: 20px auto;

        .container{
            left: 0px;
            right: 0px;
            margin: 0 auto;
            position: absolute;
            top: 0vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: 100%;
            height: 100%;

            h4 {
                bottom: 38vh;
                left: 0px;
                right: 0px;
                margin: 0 auto;
            }
            img{
                display: block;
                width: 200px;
            }
            .logo {
                padding: 10px 0px;
                /* top: 15vh; */
                left: 0px;
                right: 0px;
                width: 200px;
                margin:  0 auto;
            }
            .aura {
                bottom: 30vh !important;
                width: 150px;
                top: unset;
            }
            
            .btn {
                padding: 10px 20px;
                border: none;
                border-radius: 50px;
                position: absolute;
                /* bottom: 20vh; */
                left: 0px;
                right: 0px;
                width: 180px;
                margin:  0 auto;
            }
        }

        
    }

</style>
<script>
    import { breadcrumb } from '../store'
</script>

<div id="backbutton">
    <a href={$breadcrumb}>
        <button class="btn first-color">
            <span class="material-icons md-18">arrow_back</span>
            <!-- <span class="material-icons-outlined">arrow_back_ios</span> -->
        </button>
    </a>
</div>

<style lang="scss">
    .btn {
        /* background-color: gray; */
        left: 20px;
        top: 20px;
        font-size: 30px;
        color: white;
        position: absolute;
        padding: 5px 8px 3px 8px;
        border: none;
        border-radius: 50%;
    }
</style>
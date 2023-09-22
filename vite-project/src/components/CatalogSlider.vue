<template>
    <div class="cs w-full flex relative">
        <img src="../assets/Logo/A.png" class="absolute ss" style="right: -100px;" alt="">
        <div class="title">
            <h1>The most famous products</h1>
        </div>
        <Clider />
    </div>
</template>
<script>
import Clider from '../components/Clider.vue'
export default {
    components:{
        Clider
    }
}
</script>
<style scoped>
.cs {
    width: 1440px;
    /* height: 860px; */
    margin-top: 55px;
    padding: 0 0 50px 0;
    flex-direction: column;
    justify-content: flex-start;
}
h1{
    width: 560px;
}
.title{
    margin: 50px 0 100px 0;
}
@media (max-width: 1440px) {
    .cs {
        width: 100%;
    }
    .title{
        padding: 0 0 0 55px;
    }
}
@media screen and (min-width: 860px) and (max-width: 960px) {
    .title{
        padding: 0 0 0 30px;
    }
}
@media screen and (min-width: 600px) and (max-width: 800px) {
    h1{
        font-size: 40px;
        width: auto !important;
    }
}
@media screen and (min-width: 500px) and (max-width: 600px) {
    .title{
        margin: 25px 0 50px 0 !important;
        padding: 0;
    }
    h1{
        text-align: center;
        font-size: 45px !important;
        width: auto !important;
    }
}
@media screen and (min-width: 0) and (max-width: 500px){
    .title{
        margin: 15px 0 20px 0 !important;
        padding: 0 0 0 15px;
    }
    h1{
        width: auto;
    }
}

@media (max-width: 576px){
    h1{
        font-size: 35px;
    }
}
</style>
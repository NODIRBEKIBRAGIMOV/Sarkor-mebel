<template>
    <div class="cs border border-slate-700 w-full flex relative">
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
    height: 860px;
    margin-top: 55px;
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
}
@media (max-width: 576px){
    h1{
        font-size: 35px;
    }
}
</style>
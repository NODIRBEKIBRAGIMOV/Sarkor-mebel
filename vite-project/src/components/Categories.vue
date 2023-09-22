<template>
    <div class="categories">
        <div class="title">
            <h1>Furniture Categories</h1>
        </div>
        <div class="blok w-full flex flex-wrap">
            <div class="bloks">
                <div class="span"><img src="../assets/Logo/office m.svg" alt="foto"></div>
                <p>Офисная мебель</p>
            </div>
            <div class="bloks">
                <div class="span"><img src="../assets/Logo/hotel m.svg" alt="foto"></div>
                <p>Мебель для HoReCa (Hotel,Restaurant,Cafe)</p>
            </div>
            <div class="bloks">
                <div class="span"><img src="../assets/Logo/doma m.svg" alt="foto"></div>
                <p>Мебель для дома</p>
            </div>
            <div class="bloks">
                <div class="span"><img src="../assets/Logo/aksesuar.svg" alt="foto"></div>
                <p>Аксессуары, декоры, арт мебель и прочее</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.categories {
    width: 1440px;
    margin: 50px 0 0 0;
}

.title {
    margin: 0 0 65px 0;
}

.bloks {
    text-align: center;
    width: 296.666px;
}
.blok{
    justify-content: space-around;
}
.bloks p {
    color: #3E3E3E;
    font-family: sans-serif;
    font-size: 24.843px;
    font-style: normal;
    font-weight: 500;
    line-height: 37.083px;
    margin-top: 25px;
}

.bloks .span {
    width: 296.666px !important;
    height: 296.666px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15.301px;
    background: #FFF;
    box-shadow: 0px 0px 16.48146px 0px rgba(0, 0, 0, 0.15);
}
.span img:hover{
    transform: scale(1.1);
    transition: 0.5s;
}
@media (max-width: 1440px) {
    .categories {
        width: 100%;
    }
    .title{
        padding: 0 0 0 55px;
    }
}
@media (max-width: 600px){
    h1{
        text-align: center;
        font-size: 45px !important;
    }
    .blok{
        gap: 45px;
    }
    .title{
        padding: 0 !important;
    }
}
@media (max-width: 800px){
    h1{
        font-size: 65px;
        text-align: center;
    }
}

</style>
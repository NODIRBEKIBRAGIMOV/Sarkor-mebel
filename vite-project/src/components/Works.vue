<template>
    <div class="works w-full">
        <div class="top">
            <h1>360</h1>
            <h5>You can observe our works in 360 showrooms</h5>
        </div>
        <div class="bottom">
            <i class='bx bx-down-arrow-alt text-5xl text-white'></i>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.works {
    height: 1034px;
    background-image: url(../assets/Logo/HeroBackground.svg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.top{
    text-align: center;
    font-family: sans-serif;
}
.top h1 {
    color: #FFF;
    font-size: 263.544px;
    font-style: normal;
    font-weight: 800;
    line-height: 464.269px;
    margin: 0;
}

.top h5 {
    width: 565px;
    color: #FFF;
    font-size: 42.667px;
    font-style: normal;
    font-weight: 400;
    line-height: 59.733px;
    margin: 0 auto;
}
.bottom{
    display: flex;
    align-items: center;
    margin: 55px 0;
}
.bottom i{
    margin: 0 auto;
    border-radius: 100%;
    border: 2px solid white;
    cursor: pointer;
}
.bottom i:hover{
    color: #156963;
    border: 2px solid #156963;
    background: white;
}
@media screen and (min-width: 577px) and (max-width: 777px) {
    .works{
        height: 750px;
    }
    .top h1{
        font-size: 220px;
        line-height: 300px;
    }
}
@media (max-width: 576px){
    .works{
        height: 850px;
    }
    .top h1{
        font-size: 150px;
        line-height: 300px;
    }
    .top h5{
        width: 100%;
    }
}
</style>
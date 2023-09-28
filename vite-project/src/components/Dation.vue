<template>
    <div class="dation">
        <div class="dation-blok flex justify-between items-start">
            <div class="text">
                <h2>Recommendatiion of the day $15</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>
            </div>
            <img src="../assets/Logo/kursi.svg" alt="">
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.dation {
    width: 100%;
    height: 388px;
    background: #156963;
}

.dation-blok {
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding: 30px 80px 0 0;
}

.text h2 {
    color: #FFF;
    font-family: sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 61.333px;
}

.text p {
    width: 500px;
    color: #FFF;
    font-family: Libre Franklin;
    font-size: 21.333px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
}

@media (max-width: 1440px) {
    .dation-blok {
        width: 100%;
        padding: 30px 80px 0 15px;
    }
}
@media (max-width: 855px){
    
    .dation{
        height: auto;
    }
    .dation-blok{
        display: flex;
        flex-direction: column !important;
        height: auto !important;
    }
}
@media (max-width: 500px){
    .text h2{
        font-size: 30px;
        line-height: 45px;
    }
    .text p{
        width: auto;
        font-size: 16px;
    }
    .dation-blok{
        padding: 30px 30px 0 15px;
    }
}
</style>
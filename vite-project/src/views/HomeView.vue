<template>
    <div class="home flex flex-col items-center">
        <Homeslider />
        <Tips />
        <CatalogSlider />
    </div>
</template>
<script>
import {CatalogSlider, Homeslider, Tips} from '../components/component';

export default {
    components: { Homeslider, Tips, CatalogSlider}
}
</script>
<style scoped>
.home{
    width: 100%;
    margin: 0 auto;
}
@media (max-width: 1440px){
    .home{
        width: 100% !important;
    }
}
</style>
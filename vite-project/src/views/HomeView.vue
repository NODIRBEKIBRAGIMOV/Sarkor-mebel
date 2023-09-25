<template>
    <div class="home flex flex-col items-center">
        <Homeslider />
        <Tips />
        <CatalogSlider />
        <Categories />
        <AboutBlog />
    </div>
</template>
<script>
import {AboutBlog, CatalogSlider, Categories, Homeslider, Tips} from '../components/component';

export default {
    components: { Homeslider, Tips, CatalogSlider, Categories, AboutBlog }
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
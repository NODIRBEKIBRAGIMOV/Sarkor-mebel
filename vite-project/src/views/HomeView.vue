<template>
    <div class="home flex flex-col items-center">
        <Homeslider />
        <Tips />
        <CatalogSlider />
        <Categories />
        <AboutBlog />
        <Works />
        <Dation />
        <Channel />
    </div>
</template>
<script>
import {AboutBlog, CatalogSlider, Categories, Dation, Homeslider, Tips, Works, Channel} from '../components/component';

export default {
    components: { Homeslider, Tips, CatalogSlider, Categories, AboutBlog, Works, Dation, Channel }
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
<template>
    <div class="border w-full">
        <swiper :slidesPerView="4" :spaceBetween="40" :freeMode="true" :pagination="{ clickable: true, }" :modules="modules"
            class="mySwiper w-full h-full">
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-rose-600"></span>
                            <span class="w-5 h-5 border rounded-full"></span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo2.svg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/yostiq.svg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo2.svg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/yostiq.svg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [FreeMode, Pagination],
        };
    },
    data() {
        return {

        }
    },
};
</script>

<style scoped>
.card {
    width: 312px;
    height: 418px;
    border-radius: 5px;
    padding: 24px;
    background: #FFF;
    position: relative;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
}
i{
    font-size: 25px;
    position: absolute;
    top: 24px;
    right: 24px;
    color: rgb(158, 154, 154);
    cursor: pointer;
}
i:hover{
    color: red;
}
</style>
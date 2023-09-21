<template>
    <div class="border w-full slide1">
        <swiper :slidesPerView="4" :spaceBetween="40" :freeMode="true" :pagination="{ clickable: true, }" :modules="modules"
            class="mySwiper w-full h-full">
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo2.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple</p>
                        <h4>789,35$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/yostiq.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers">
                        <p class="h-10">Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches</p>
                        <h4>43,23$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo2.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple</p>
                        <h4>789,35$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/yostiq.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers">
                        <p class="h-10">Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches</p>
                        <h4>43,23$</h4>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="border w-full slide2">
        <swiper :slidesPerView="3" :spaceBetween="30" :freeMode="true" :pagination="{ clickable: true, }" :modules="modules"
            class="mySwiper w-full h-full">
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo2.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple</p>
                        <h4>789,35$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/yostiq.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers">
                        <p class="h-10">Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches</p>
                        <h4>43,23$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo2.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple</p>
                        <h4>789,35$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/yostiq.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers">
                        <p class="h-10">Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches</p>
                        <h4>43,23$</h4>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="border w-full slide3">
        <swiper :slidesPerView="2" :spaceBetween="20" :freeMode="true" :pagination="{ clickable: true, }" :modules="modules"
            class="mySwiper w-full h-full">
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo2.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple</p>
                        <h4>789,35$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/yostiq.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers">
                        <p class="h-10">Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches</p>
                        <h4>43,23$</h4>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="border w-full slide4">
        <swiper :slidesPerView="1" :spaceBetween="20" :freeMode="true" :pagination="{ clickable: true, }" :modules="modules"
            class="mySwiper w-full h-full">
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo2.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple</p>
                        <h4>789,35$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/yostiq.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers">
                        <p class="h-10">Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches</p>
                        <h4>43,23$</h4>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/kreslo.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-blue-900"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Vonna Neva Walnut Sandalye Chair</p>
                        <h4>195,15$</h4>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <i class='bx bxs-heart'></i>
                    <div class="foto">
                        <img src="../assets/Logo/lampa.svg" alt="">
                    </div>
                    <div class="colors w-full">
                        <p>Colors</p>
                        <div class="spans flex gap-2">
                            <span class="w-5 h-5 border rounded-full bg-red-600"></span>
                            <span class="w-5 h-5 border rounded-full bg-yellow-500"></span>
                            <span class="w-5 h-5 border rounded-full bg-green-300"></span>
                            <span class="w-5 h-5 border rounded-full bg-blue-300"></span>
                        </div>
                    </div>
                    <div class="name-vers w-full">
                        <p class="h-10">Wood lamp, Floor Lamp, Lambader, Decorative</p>
                        <h4>465,20$</h4>
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
.slide3 {
    display: none;
}
.slide4{
    display: none;
}
@media (max-width:1600px) {
    .slide2 {
        display: none;
    }
}

@media screen and (min-width: 1080px) and (max-width: 1150px) {
    .slide2 {
        padding: 0 15px !important;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1080px) {
    .slide2 {
        padding: 0 15px !important;
    }

    .slide2 .card {
        width: 310px !important;
    }
}

@media screen and (min-width: 960px) and (max-width: 1000px) {

    .slide2 .card {
        width: 310px !important;
        padding: 15px;
        height: auto;
    }

    .slide2 {
        padding: 0 10px !important;
        display: block;
    }
}

@media screen and (min-width: 860px) and (max-width: 960px) {
    .slide2 {
        display: none !important;
    }

    .slide3 {
        display: block;
        padding: 0 40px;
    }

    .slide3 .card {
        width: 370px !important;
    }
}

@media screen and (min-width: 760px) and (max-width: 860px) {
    .slide2 {
        display: none !important;
    }

    .slide3 {
        display: block;
        padding: 0 25px;
    }
}

@media screen and (min-width: 660px) and (max-width: 760px) {
    .slide2 {
        display: none !important;
    }

    .slide3 {
        display: block;
        padding: 0 20px !important;
    }

    .slide3 .card {
        width: 300px !important;
        height: auto;
    }

    .name-vers h4 {
        margin: 3px 0 0 0 !important;
    }
}
@media screen and (min-width: 600px) and (max-width: 660px) {
    .slide2{
        display: none !important;
    }
    .slide3{
        display: block;
        padding: 0 12px;
    }
    .slide3 .card{
        width: 280px !important;
        height: auto;
        padding: 15px;
    }
}
@media screen and (min-width: 500px) and (max-width: 600px) {
    .slide2{
        display: none !important;
    }
    .slide3{
        display: block !important;
        padding: 0 13px;
    }
    .slide3 .card{
        width: 230px !important;
        height: auto;
        padding: 13px;
    }
}
@media screen and (min-width: 0px) and (max-width: 500px){
    .slide2,.slide3{
        display: none !important;
    }
    .slide4{
        display: block;
        padding: 0 20px;
    }
    .slide4 .card{
        width: 100% !important;
        border: 1px solid darkgray;
    }
}
@media (max-width: 1310px) {
    .slide1 {
        padding: 0 10px;
        display: none;
    }

    .slide2 {
        padding: 0 20px 0 50px;
        box-sizing: border-box;
        display: block;
    }

    .card {
        width: 350px !important;
    }
}

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

i {
    font-size: 25px;
    position: absolute;
    top: 24px;
    right: 24px;
    color: rgb(158, 154, 154);
    cursor: pointer;
}

i:hover {
    color: red;
}

.spans {
    margin: 8px 0 25px 0;
}

.name-vers p {
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}

.name-vers h4 {
    margin: 20px 0 0 0;
    font-size: 18px;
}</style>
<template>
    <div class="relative w-full flex justify-center">
        <div class="channel relative w-full">
            <div class="text">
                <h1>Wes have also lamination production channel</h1>
                <p>Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et similique ullam et. Ipsum
                    ipsam
                    temporibus quo ea natus enim quae officia nulla. Debitis ea dicta ea eum laboriosam quis dolore
                    repudiandae.
                    Est hic quod et similique ullam et. Ipsum ipsam temporibus quo ea natus enim quae officia nulla. Debitis
                    ea
                    dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et similique ullam et. Ipsum ipsam
                    temporibus
                    quo ea natus enim quae officia nulla. Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est
                    hic
                    quod et similique ullam et. Ipsum ipsam temporibus quo ea natus enim quae officia nulla. </p>
                <div class="btns">
                    <RouterLink :to="{ name: 'contact' }">
                        <button>Contact Us</button>
                    </RouterLink>
                    <button>Catalogue</button>
                </div>
            </div>
            <img src="../assets/Logo/K.png" alt="" class="absolute right-6">
        </div>
        <img src="../assets/Logo/katalogd.svg" alt="" class="katalogd">
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.channel {
    width: 1440px;
    height: 1024px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 0 55px;
}

@media (max-width: 1440px) {
    .channel {
        width: 100%;
    }
}

@media (max-width: 1220px) {
    .channel {
        height: auto !important;
        margin: 105px 5px;
        padding: 0 15px;
    }
}

@media (max-width: 965px) {
    .channel {
        height: auto;
        margin: 105px 5px;
        padding: 0 15px;
    }

    .text p {
        padding: 25px 0;
    }
}

@media (max-width: 765px) {
    .channel {
        height: auto;
        margin: 105px 5px;
        padding: 0 15px;
    }

    .text h1 {
        font-size: 50px;
        line-height: 50px;
    }

    .text p {
        padding: 15px 0;
    }
}

@media (max-width: 576px) {
    .channel {
        height: auto;
        margin: 105px 5px;
        padding: 0 15px;
    }

    .text h1 {
        font-size: 35px;
        line-height: 42px;
    }

    .text p {
        width: 100% !important;
        padding: 15px 0;
    }

    .katalogd {
        top: -300px !important;
        right: -200px !important;
    }
}

@media (max-width: 400px) {
    .btns {
        flex-direction: column;
    }
}

.text {
    width: 756px;
    z-index: 11;
}

.text p {
    width: 480px;
    color: #156963;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding: 15px 0;
}

.btns {
    gap: 25px;
    display: flex;
}

.btns button {
    padding: 20px 38px;
    border-radius: 63px;
    font-weight: 600;
    font-family: sans-serif;
    color: white;
    background-color: #156963;
    border: 1px solid white;
}

.btns button:hover {
    background-color: white;
    color: #156963;
    border: 1px solid #156963
}

.btns button:nth-child(2) {
    background: white;
    color: #156963;
    border: 1px solid #156963;
}

.btns button:nth-child(2):hover {
    color: white;
    background-color: #156963;
    border: 1px solid white;
}

.katalogd {
    position: absolute !important;
    right: 0;
    top: -85px;
}

@media screen and (max-width: 1900px) {
    .katalogd {
        right: -350px;
    }
}</style>
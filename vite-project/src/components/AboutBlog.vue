<template>
    <div class="w-full border relative Blog" style="height: 800px; margin-top: 165px; background: #156963;">
        <div class="about-blok flex flex-col items-center z-50">
            <div class="about-top flex">
                <div class="about-top-left">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ibg7pBt45K0?si=xHLPTPGAV36dYX_-"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <div class="about-top-right">
                    <h1>About us</h1>
                    <p>Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et similique ullam et. Ipsum
                        ipsam temporibus quo ea natus enim quae officia nulla. Debitis ea dicta ea eum laboriosam quis
                        dolore repudiandae. Est hic quod et similique ullam et. Ipsum ipsam temporibus quo ea natus enim
                        quae officia nulla. Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et
                        similique ullam et. Ipsum ipsam temporibus quo ea natus enim quae officia nulla. Debitis ea dicta ea
                        eum laboriosam quis dolore repudiandae. Est hic quod et similique ullam et. Ipsum ipsam temporibus
                        quo ea natus enim quae officia nulla. </p>
                    <div class="btns">
                        <RouterLink :to="{ name: 'contact' }">
                            <button>Contact Us</button>
                        </RouterLink>
                        <button>Play Our Video</button>
                    </div>
                </div>
            </div>
            <div class="about-bottom">
                <img src="../assets/Logo/about-bottom-bir.svg" alt="">
                <img src="../assets/Logo/about-bottom-ikki.svg" alt="">
                <img src="../assets/Logo/about-bottom-uch.svg" alt="">
                <img src="../assets/Logo/about-bottom-tort.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.about-blok {
    width: 1440px;
    height: 100%;
    justify-content: space-around;
    margin: 0 auto;
    z-index: 100px !important;
}

.about-top {
    gap: 55px;
}

.about-top-left {
    width: 717px;
    height: 463px;
    border-radius: 15px;
    overflow: hidden;
}

.about-top-right {
    width: 538px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.about-top-right h1 {
    color: #FFF;
    font-family: Helvetica;
    font-size: 66.415px;
    font-style: normal;
    font-weight: 700;
    line-height: 66.419px;
}

.about-top-right p {
    width: auto;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
}

.about-top-right .btns {
    gap: 25px;
    display: flex;
}

.about-top-right .btns button {
    padding: 20px 38px;
    border-radius: 63px;
    font-weight: 600;
    font-family: sans-serif;
    color: white;
    border: 1px solid white;
}

.about-top-right .btns button:hover {
    background-color: white;
    color: #156963;
}

.about-top-right .btns button:nth-child(1) {
    background: white;
    color: #156963;
    border: 1px solid #156963;
}

.about-top-right .btns button:nth-child(1):hover {
    color: white;
    background-color: #156963;
    border: 1px solid white;
}

.about-bottom {
    display: flex;
    width: 1128px;
    height: 155px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 32px;
}

@media (max-width: 1128px) {
    .about-bottom {
        width: 100%;
    }
}

@media (max-width: 1440px) {
    .Blog {
        height: auto;
    }

    .about-blok {
        width: 100%;
        padding: 0 15px;
    }

    .about-top-left {
        width: 48% !important;
        height: 100%;
        overflow: auto !important;
    }

    .about-top-right {
        width: 48%;
    }

    .about-bottom {
        height: auto !important;
    }
}

@media (max-width: 865px) {
    .Blog {
        height: auto !important;
        padding: 35px 0px;
    }

    .about-blok {
        gap: 50px;
    }

    .about-top {
        flex-direction: column;
    }

    .about-top-left {
        width: 100% !important;
        height: 420px;
    }

    .about-top-right {
        width: 100% !important;
    }
}

@media (max-width: 576px) {
    .about-top-left {
        height: 350px;
    }

    .about-top-right h1 {
        font-size: 45px;
    }

}
@media (max-width: 470px){
.about-top-right .btns {
    flex-direction: column;
    align-items: flex-start;
}
}
</style>
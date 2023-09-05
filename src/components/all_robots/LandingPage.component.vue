<template>
    <section class="landingPage">
        <div class="container">
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="0"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }"
                :loop="true"
                :pagination="true"
                :scrollbar="{ draggable: true }"
            >
                <swiper-slide>
                    <div class="image">
                        <img
                            src="../../assets/robots/carosal.png"
                            alt=""
                        /></div
                ></swiper-slide>
                <swiper-slide>
                    <div class="image">
                        <img
                            src="../../assets/robots/carosal.png"
                            alt=""
                        /></div
                ></swiper-slide>
                <swiper-slide>
                    <div class="image">
                        <img
                            src="../../assets/robots/carosal.png"
                            alt=""
                        /></div
                ></swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.landingPage {
    padding: 50px 0;
    .image {
        height: 600px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>

<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
const modules = [Pagination];
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default {
    name: "LandingPageComponent",
    components: { Swiper, SwiperSlide },
};
</script>

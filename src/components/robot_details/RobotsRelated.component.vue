<template>
    <section class="robot_related">
        <div class="container">
            <swiper
                :breakpoints="{
                    400: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                    1500: { slidesPerView: 5 },
                }"
                :modules="modules"
                :slides-per-view="5"
                :space-between="20"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }"
                :loop="true"
                navigation
                :rtl="true"
            >
                <swiper-slide
                    v-for="(ele, index) in [1, 2, 3, 4, 5, 6]"
                    :key="index"
                >
                    <div class="">
                        <div class="item">
                            <div class="image">
                                <img
                                    src="../../assets/robots/element.png"
                                    alt=""
                                />
                            </div>
                            <div class="body">
                                <router-link to="/"
                                    >روبوت روبونيوم Ai</router-link
                                >
                                <span>2500 ر.س</span>
                            </div>
                            <div class="foot d-flex">
                                <div class="rate">
                                    <i class="fa-regular fa-star active"></i>
                                    <i class="fa-regular fa-star active"></i>
                                    <i class="fa-regular fa-star active"></i>
                                    <i class="fa-regular fa-star active"></i>
                                    <i class="fa-regular fa-star active"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <div class="cart">
                                    <span>اضف الي العربه</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 18 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M15.8575 7.32383L17.1651 15.8238C17.3412 16.9679 16.4559 17.9998 15.2983 17.9998H2.70177C1.54411 17.9998 0.658837 16.9679 0.83487 15.8238L2.14254 7.32383C2.28431 6.40237 3.07717 5.72217 4.00946 5.72217H13.9906C14.9228 5.72217 15.7157 6.40237 15.8575 7.32383Z"
                                            stroke="#0F8AC8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M10.8888 2.88887C10.8888 1.84568 10.0432 1 8.99995 1C7.95673 1 7.11108 1.84568 7.11108 2.88887"
                                            stroke="#0F8AC8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M6.1593 12.3333H8.99262M8.99262 12.3333H11.8259M8.99262 12.3333V9.5M8.99262 12.3333V15.1666"
                                            stroke="#F5911E"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles

export default {
    name: "RobotsRelatedComponent",
    components: { Swiper, SwiperSlide },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "swiper/css";

.swiper-button-prev,
.swiper-button-next {
    position: absolute;
    top: 95px;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f69926;
    font-weight: 900;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
    left: var(--swiper-navigation-sides-offset, 10px);
    right: 79px;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
    right: var(--swiper-navigation-sides-offset, 10px);
    left: auto;
}

.robot_related {
    overflow: hidden;
    .item {
        background: white;
        border-radius: 25px;
        overflow: hidden;
        padding: 20px;

        margin-bottom: 20px;
        .image {
            width: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            margin-bottom: 15px;
        }

        .body {
            a {
                display: block;
                color: #767676;
                font-size: 18px;
            }
            span {
                color: #0f8ac8;
                font-size: 15px;
            }
            margin-bottom: 15px;
        }
        .foot {
            align-items: center;
            justify-content: space-between;
            .rate {
                svg {
                    color: #ffd600;
                    font-size: 12px;
                }
            }
            .cart {
                cursor: pointer;
                span {
                    font-size: 13px;
                    color: #f5911e;
                    text-decoration: underline;
                    margin-left: 10px;
                }
                svg {
                    padding: 5px;
                    border-radius: 10px;
                    border: 1px solid #f5911e;
                }
            }
        }
    }
}

.swiper {
    padding: 150px 0 100px;
    .swiper-rtl .swiper-button-next {
        top: 55px !important;
    }
}
@media (max-width: 1500px) {
}

@media (max-width: 1000px) {
}

@media (max-width: 700px) {
}
@media (max-width: 400px) {
}
</style>

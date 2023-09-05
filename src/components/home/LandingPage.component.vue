<template>
    <section class="landing_page" :style="{ height: getLandingPageHeight() }">
        <div class="video">
            <video
                autoplay
                loop
                muted
                src="../../assets/home/video/SAUDIVIDEO.mp4"
            ></video>
        </div>
        <div class="over">
            <div class="content">
                <h1>
                    روبوتيرا <br />
                    نحوا عصر الروبوتات
                </h1>
                <div class="img">
                    <img src="../../assets/home/images/Vector7.png" alt="" />
                </div>
                <p>
                    نتواكب مع تطلعات المملكه نحو الرياده في كل المجالات من بينها
                    الروبوت و الذكاء<br class="d-lg-block d-none" />
                    الاصطناعي
                </p>
            </div>
        </div>
        <div class="image_left image">
            <img src="../../assets/home/images/Frame1.png" alt="" />
        </div>
        <div class="image_right image">
            <img src="../../assets/home/images/Frame2.png" alt="" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.landing_page {
    overflow: hidden;
    width: 100%;
    position: relative;
    .video {
        overflow: hidden;
        height: 100%;
        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .over {
        background: linear-gradient(
            to right,
            rgba(15, 138, 200, 0.6) 0%,
            rgba(12, 52, 97, 0.6) 100%
        );
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .content {
            position: absolute;
            z-index: 60;
            width: 30%;
            display: flex;
            flex-direction: column;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            h1 {
                font-size: 61px;
                font-weight: 700;
                color: $white-color;
                line-height: 1.4;
            }
            .img {
                width: 50%;
                margin-right: auto;
                img {
                    width: 100%;
                }
            }
            p {
                margin-top: -10px;
                font-size: 23px;
                color: $yellow-color;
                font-weight: 600;
                width: 90%;
                opacity: 0.9;
            }
        }
    }
    .image {
        position: absolute;
        width: 50%;
        aspect-ratio: 1/0.8;

        img {
            width: 100%;
            height: 100%;
        }
        z-index: 50;
    }
    .image_left {
        left: 0;
        top: 0;
    }
    .image_right {
        right: 0;
        bottom: 0;
    }
}

@media (max-width: 1700px) {
    .landing_page .over .content {
        width: 39% !important;
    }
    .landing_page .over .content h1 {
        font-size: 55px !important;
    }
    .landing_page .over .content p {
        font-size: 22px;
    }
}
@media (max-width: 1300px) {
    .landing_page .over .content {
        width: 50% !important;
    }
}
@media (max-width: 992px) {
    .landing_page {
        .image {
            width: 55% !important;
        }
    }
    .landing_page .over .content {
        width: 70% !important;
    }
}
@media (max-width: 700px) {
    .landing_page .over .content {
        width: 80% !important;
    }
    .landing_page .over .content h1 {
        font-size: 39px !important;
    }
    .landing_page .over .content p {
        width: 100% !important;
        font-size: 18px;
    }
    .landing_page {
        .image {
            width: 95% !important;
        }
    }
}
@media (max-width: 400px) {
    .landing_page .over .content h1 {
        font-size: 34px !important;
    }
    .landing_page .over .content p {
        font-size: 19px !important;
    }
    .landing_page {
        .image {
            width: 100% !important;
        }
    }
}
</style>

<script>
export default {
    name: "LandingPageComponent",
    data() {
        return {
            navHeight: 0,
        };
    },
    props: ["name"],
    methods: {
        getLandingPageHeight() {
            const navHeight = document.querySelector("nav").offsetHeight;
            const windowHeight = window.innerHeight;
            return windowHeight - navHeight + "px";
        },
    },
};
</script>

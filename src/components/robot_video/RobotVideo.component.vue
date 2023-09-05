<template>
    <section class="robot_video">
        <div class="image">
            <img src="../../assets/robotDetails/Rectangle.png" alt="" />
        </div>
        <dis class="over">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="left">
                            <h4>روبونيوم AI</h4>
                            <div class="image">
                                <img
                                    src="../../assets/robotDetails/Layer_1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="right">
                            <div class="image">
                                <img
                                    src="../../assets/robotDetails/Render.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dis>
        <div class="video_wrapper">
            <div class="container">
                <div class="video">
                    <video
                        src="../../assets/robotDetails/RN_AI.mp4"
                        autoplay
                        loop
                        muted
                    ></video>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.robot_video {
    position: relative;
    padding: 0px 70px 140px;
    > .image {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .over {
        position: relative;
        z-index: 3;
        padding: 80px 0;
        .row {
            align-items: center;
            .right {
                .image {
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
            }
            .left {
                h4 {
                    color: #f9ae3b;
                    padding: 8px 18px;
                    border: 2px solid #f9ae3b;
                    font-size: 16px;
                    font-weight: 600;
                    border-radius: 13px;
                    display: inline-block;
                    margin-bottom: 50px;
                }
                .image {
                    width: 80%;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
    .video_wrapper {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, 90%);
        width: 100%;
        height: 80%;
        z-index: 200;
        .container {
            height: 100%;
            .video {
                width: 100%;
                height: 100%;
                video {
                    border-radius: 30px;
                    width: 100%;
                    height: 100% !important;
                    object-fit: fill;
                }
            }
        }
    }
}
@media (max-width: 1500px) {
}

@media (max-width: 1300px) {
}

@media (max-width: 1000px) {
    .robot_video .video_wrapper {
        transform: translate(-50%, 75%);
    }
    .robot_video .video_wrapper .container .video video {
        object-fit: cover;
    }
    .robot_video .video_wrapper {
        height: 85%;
    }
    .robot_video .over .row .left h4 {
        margin-bottom: 35px;
    }
    .robot_video .over .row .left .image {
        width: 95%;
    }
}

@media (max-width: 750px) {
    .robot_video {
        padding: 50px 70px 140px;
    }
    .robot_video .video_wrapper {
        transform: translate(-50%, 75%);
    }
    .robot_video .video_wrapper .container .video video {
        object-fit: fill;
        border-radius: 20px;
    }
    .robot_video .video_wrapper {
        height: 65%;
        transform: translate(-50%, 115%);
    }
    .robot_video .video_wrapper .container {
        max-width: 100% !important;
    }
    .robot_video .over .row .left h4 {
        margin-bottom: 35px;
    }
    .robot_video .over .row .left {
        text-align: center;
    }
    .robot_video .over .row .left .image {
        width: 75%;
        margin: auto;
    }
}

@media (max-width: 400px) {
    .robot_video .video_wrapper .container {
        max-width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
}
</style>

<script>
export default {
    name: "RobotVideoComponent",
};
</script>

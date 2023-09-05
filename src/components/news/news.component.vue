<template>
    <section class="news_wrapper">
        <div class="container">
            <header class="d-flex">
                <router-link to="/"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="8"
                        viewBox="0 0 6 8"
                        fill="none"
                    >
                        <path
                            d="M-1.74846e-07 4L6 0.535898L6 7.4641L-1.74846e-07 4Z"
                            fill="#F8AC39"
                        />
                    </svg>
                    <span>الرئيسيه</span></router-link
                >
                <router-link to="/news"> <span>الاخبار</span></router-link>
            </header>
            <div class="row">
                <div class="col-lg-12">
                    <div class="news">
                        <div class="image">
                            <img src="../../assets/news/news2.png" alt="" />
                        </div>
                        <div class="over">
                            <div class="content">
                                <h5>الاخبار</h5>
                                <h2>
                                    السعودية تحقق
                                    <br class="d-none d-lg-block" />المركز الأول
                                    في<br />
                                    جائزة مشروع <br />الابتكار
                                </h2>
                                <div class="foot d-flex">
                                    <div class="calender">
                                        <i class="fa-regular fa-calendar"></i>
                                        <span>الثلاثاء 13 / 4 / 2023</span>
                                    </div>
                                    <div class="link">
                                        <router-link to="/news/1"
                                            >المزيد...</router-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="news">
                        <div class="image">
                            <img src="../../assets/news/news1.png" alt="" />
                        </div>
                        <div class="over">
                            <div class="content">
                                <h2>
                                    السعودية تحقق المركز الأول في جائزة مشروع
                                    الابتكار في جائزة مشروع الابتكار
                                </h2>

                                <div class="foot d-flex">
                                    <div class="calender">
                                        <i class="fa-regular fa-calendar"></i>
                                        <span>الثلاثاء 13 / 4 / 2023</span>
                                    </div>
                                    <div class="link">
                                        <router-link to="/news/1"
                                            >المزيد...</router-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="news">
                        <div class="image">
                            <img
                                src="../../assets/news/Frame237820.png"
                                alt=""
                            />
                        </div>
                        <div class="over">
                            <div class="content">
                                <h2>
                                    السعودية تحقق المركز الأول في جائزة مشروع
                                    الابتكار في جائزة مشروع الابتكار
                                </h2>
                                <div class="foot d-flex">
                                    <div class="calender">
                                        <i class="fa-regular fa-calendar"></i>
                                        <span>الثلاثاء 13 / 4 / 2023</span>
                                    </div>
                                    <div class="link">
                                        <router-link to="/news/1"
                                            >المزيد...</router-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="news">
                        <div class="image">
                            <img src="../../assets/news/news1.png" alt="" />
                        </div>
                        <div class="over">
                            <div class="content">
                                <h2>
                                    السعودية تحقق المركز الأول في جائزة مشروع
                                    الابتكار في جائزة مشروع الابتكار
                                </h2>

                                <div class="foot d-flex">
                                    <div class="calender">
                                        <i class="fa-regular fa-calendar"></i>
                                        <span>الثلاثاء 13 / 4 / 2023</span>
                                    </div>
                                    <div class="link">
                                        <router-link to="/news/1"
                                            >المزيد...</router-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="news">
                        <div class="image">
                            <img
                                src="../../assets/news/Frame237820.png"
                                alt=""
                            />
                        </div>
                        <div class="over">
                            <div class="content">
                                <h2>
                                    السعودية تحقق المركز الأول في جائزة مشروع
                                    الابتكار في جائزة مشروع الابتكار
                                </h2>
                                <div class="foot d-flex">
                                    <div class="calender">
                                        <i class="fa-regular fa-calendar"></i>
                                        <span>الثلاثاء 13 / 4 / 2023</span>
                                    </div>
                                    <div class="link">
                                        <router-link to="/news/1"
                                            >المزيد...</router-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import "../../scss/variables.scss";

.news_wrapper {
    padding: 50px 0 100px;
    header {
        margin: 0 12.5px 30px 0;
        a {
            &:nth-of-type(1) {
                margin-left: 15px;
            }
            text-decoration: none;
            display: flex;
            align-items: center;
            svg {
                color: #f8ac39;
                margin-left: 20px;
            }
            span {
                color: #949494;
                font-size: 15px;
                font-weight: 400;
            }
        }
    }
    .row > div:nth-of-type(1) {
        margin-bottom: 25px;
        .over {
            padding: 0 70px 40px;
            min-height: 460px;
            background: linear-gradient(
                180deg,
                rgba(73, 154, 229, 0.57) 0%,
                rgba(15, 8, 46, 0.57) 100%
            );
        }
    }

    .row > div:not(:first-of-type) {
        margin-bottom: 25px;
        .over {
            min-height: 250px;
            padding: 0 30px 30px;
            background: linear-gradient(
                180deg,
                rgba(246, 153, 38, 0.57) 0%,
                rgba(15, 8, 46, 0.57) 100%
            );
            .content {
                h2 {
                    font-size: 25px !important;
                    width: 90%;
                    margin-bottom: 10px;
                }
            }
        }
    }

    .news {
        border-radius: 20px;
        position: relative;
        overflow: hidden;
        .image {
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .over {
            display: flex;
            align-items: end;
            position: relative;
            z-index: 3;
            width: 100%;
            .content {
                width: 100%;
                h5 {
                    font-size: 14px;
                    color: white;
                    padding-bottom: 10px;
                    display: inline-block;
                    position: relative;
                    margin-bottom: 20px;
                    &::before {
                        content: "";
                        width: 80%;
                        height: 1.2px;
                        background: white;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                    }
                }
                h2 {
                    font-weight: 700;
                    color: white;
                    font-size: 40px;
                    line-height: 1.3;
                    margin-bottom: 25px;
                }
            }
            .foot {
                align-items: center;
                justify-content: space-between;
                svg {
                    color: #fabe62;
                    font-size: 17px;
                    margin-left: 10px;
                }
                .calender {
                    span {
                        color: #fabe62;
                        font-size: 12px;
                    }
                }
                .link {
                    a {
                        color: #f69926;
                        font-size: 16px;
                    }
                }
            }
        }
    }
}

@media (max-width: 1500px) {
    .news_wrapper .news .over .content h2 {
        font-size: 35px !important;
    }
    .news_wrapper .row > div:not(:first-of-type) {
        margin-bottom: 25px;
    }
}
@media (max-width: 1300px) {
}

@media (max-width: 1000px) {
}

@media (max-width: 700px) {
    .news_wrapper .row > div:nth-of-type(1) .over {
        min-height: 388px;
    }
    .news_wrapper .news .over .content h2 {
        font-size: 30px !important;
    }
    .news_wrapper .row > div:not(:first-of-type) .over .content h2 {
        font-size: 25px;
    }
}
@media (max-width: 400px) {
}
</style>
<script>
export default {
    name: "NewsComponent",
};
</script>

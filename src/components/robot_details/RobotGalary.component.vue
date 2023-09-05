<template>
    <section class="robotGalary">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="show">
                        <div class="images">
                            <div
                                :class="[
                                    'image',
                                    counter == index ? 'active' : '',
                                ]"
                                v-for="(ele, index) in robotImage"
                                :key="index"
                            >
                                <img
                                    :src="
                                        require('../../assets/robotDescription/' +
                                            ele)
                                    "
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="controlle">
                            <ul>
                                <li
                                    v-for="(ele, index) in robotImage"
                                    :class="counter == index ? 'active' : ''"
                                    :key="index"
                                    @click="moveImage(index)"
                                >
                                    <img
                                        :src="
                                            require('../../assets/robotDescription/' +
                                                ele)
                                        "
                                        alt=""
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="description">
                        <h2>روبوت روبونيوم Ai</h2>
                        <span class="price">2500 ر.س</span>
                        <div class="rate">
                            <i class="fa-regular fa-star active"></i>
                            <i class="fa-regular fa-star active"></i>
                            <i class="fa-regular fa-star active"></i>
                            <i class="fa-regular fa-star active"></i>
                            <i class="fa-regular fa-star active"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <p>
                            روبوت يمكن مستخدمه من تعلم واختبار المفاهيم الاساسية
                            في تصميم وبرمجة الروبوت
                        </p>
                        <div class="cart d-flex">
                            <button>
                                <span>أضف إلى السلة</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                >
                                    <path
                                        d="M16.3575 7.32383L17.6651 15.8238C17.8412 16.9679 16.9559 17.9998 15.7983 17.9998H3.20177C2.04411 17.9998 1.15884 16.9679 1.33487 15.8238L2.64254 7.32383C2.78431 6.40237 3.57717 5.72217 4.50946 5.72217H14.4906C15.4228 5.72217 16.2157 6.40237 16.3575 7.32383Z"
                                        stroke="white"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M11.3888 2.88887C11.3888 1.84568 10.5432 1 9.49995 1C8.45673 1 7.61108 1.84568 7.61108 2.88887"
                                        stroke="white"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6.65942 12.3333H9.49274M9.49274 12.3333H12.326M9.49274 12.3333V9.5M9.49274 12.3333V15.1666"
                                        stroke="#F5B91E"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                            <div class="love">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.robotGalary {
    padding: 70px 100px;
    overflow: hidden;
    .show {
        padding-left: 50px;
        .images {
            width: 100%;
            margin-bottom: 15px;
            position: relative;
            aspect-ratio: 1/0.7;
            .image {
                width: 100%;
                height: 100%;
                position: absolute;
                visibility: hidden;
                opacity: 0;
                transition: 0.4s;
                top: 0;
                left: 0;
                border-radius: 20px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                &.active {
                    visibility: visible;
                    opacity: 1;
                }
            }
        }
        .controlle {
            ul {
                display: flex;
                justify-content: center;
                li {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 3px solid #fff;
                    margin: 0 5px;
                    cursor: pointer;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                    transition: 0.3s;
                    &.active {
                        transform: scale(1.1);
                        border-color: #f5911e;
                    }
                }
            }
        }
    }
    .description {
        padding-top: 50px;
        h2 {
            color: #285282;
            font-size: 35px;
            margin-bottom: 10px;
            font-weight: 700;
        }
        > span {
            color: #0f8ac8;
            font-size: 17px;
            margin-bottom: 10px;
            display: block;
            text-decoration: underline;
            font-weight: 700;
        }
        .rate {
            display: flex;
            svg {
                margin: 0 1px;
                font-size: 14px;
                color: #bfbfbf;
                &.active {
                    color: #ffd600;
                }
            }
            margin-bottom: 15px;
        }
        p {
            color: #818286;
            font-size: 20px;
            margin-bottom: 25px;
            width: 80%;
        }
        .cart {
            button {
                background: #0f8ac8;
                color: white;
                padding: 10px 32px;
                border-radius: 12px;
                border: none;
                outline: none;
                margin-left: 15px;
                span {
                    margin-left: 10px;
                    font-size: 15px;
                    font-weight: 400;
                }
            }
            .love {
                background: white;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                cursor: pointer;
                > svg {
                    padding: 0 15px;
                    color: #f8a936;
                    display: block;
                    font-size: 22px;
                }
            }
        }
    }
}
@media (max-width: 1500px) {
    .robotGalary {
        padding: 70px 0;
    }
}

@media (max-width: 1000px) {
    .robotGalary .description p {
        font-size: 18px;
        width: 100%;
    }
    .robotGalary .show {
        padding-left: 0;
    }
    .robotGalary .description {
        text-align: center;
        padding-top: 22px;
    }
    .robotGalary .description .rate {
        justify-content: center;
    }
    .robotGalary .description .cart {
        justify-content: center;
    }
}

@media (max-width: 700px) {
}
@media (max-width: 400px) {
}
</style>

<script>
export default {
    name: "RobotGalaryComponent",
    data() {
        return {
            counter: 0,
            robotImage: [
                "news2.png",
                "Frame637781.png",
                "carosal.png",
                "show.png",
            ],
        };
    },
    methods: {
        moveImage(index) {
            this.counter = index;
        },
        increment() {
            if (this.counter == this.robotImage.length - 1) {
                return (this.counter = 0);
            }
            this.counter++;
        },
    },

    created() {
        setInterval(() => {
            this.increment();
        }, 3000);
    },
};
</script>

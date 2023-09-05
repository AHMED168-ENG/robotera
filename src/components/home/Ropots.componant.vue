<template>
    <section class="robots">
        <div class="robotera_wrapper">
            <div class="back">
                <div class="image">
                    <img src="../../assets/home/images/Vector.png" alt="" />
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container">
                <div class="over">
                    <div class="show">
                        <div class="image">
                            <img
                                :class="[counter == index ? 'active' : '']"
                                v-for="(ele, index) in robots"
                                :key="index"
                                :src="
                                    require(`../../assets/home/images/${ele.image}`)
                                "
                                alt=""
                            />
                        </div>
                        <ul class="list-unstyled">
                            <li
                                v-for="(ele, index) in robots"
                                :key="index"
                                :class="[counter == index ? 'active' : '']"
                                @click="moveImage(index)"
                            >
                                <img
                                    :src="
                                        require(`../../assets/home/images/${ele.image}`)
                                    "
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                    <div class="content">
                        <h5>{{ robots[counter].content.title }}</h5>
                        <h2>{{ robots[counter].content.header }}</h2>
                        <div class="image">
                            <img
                                src="../../assets/home/images/Vector7.png"
                                alt=""
                            />
                        </div>
                        <p>
                            {{ robots[counter].content.body }}
                        </p>
                    </div>
                    <div class="nav">
                        <div class="icon">
                            <div @click="decrement">
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                            <div @click="increment">
                                <i class="fa-solid fa-chevron-left"></i>
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
.robots {
    overflow: hidden;
    padding: 200px 0 250px;

    .robotera_wrapper {
        position: relative;
    }
    .back {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span {
            transform: translateX(28%) rotate(-11deg);
            background: #f6af26;
            width: 150%;
            &:nth-of-type(1) {
                height: 26%;
            }
            &:not(:nth-of-type(1)) {
                height: 12.5%;
            }
            &:nth-of-type(2) {
                opacity: 0.8;
            }
            &:nth-of-type(3) {
                opacity: 0.6;
            }
            &:nth-of-type(4) {
                opacity: 0.4;
            }
            &:nth-of-type(4) {
                opacity: 0.2;
            }
            &:nth-of-type(5) {
                opacity: 0.1;
            }
        }
        .image {
            position: absolute;
            top: -15%;
            right: 0;
            width: 50%;
            z-index: 5;
            img {
                width: 100%;
            }
        }
    }
    .over {
        position: relative;
        z-index: 2;
        .show {
            width: 100%;
            height: 550px;
            .image {
                width: 100%;
                height: 100%;
                border-radius: 25px;
                overflow: hidden;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    transition: 0.7s;
                    visibility: hidden;
                    opacity: 0;
                    &.active {
                        visibility: visible;
                        opacity: 1;
                    }
                }
            }
            ul {
                position: absolute;
                bottom: 0px;
                left: 0;
                display: flex;
                transform: translate(50%, 50%);
                li {
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 3px solid white;
                    margin: 0 3px;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                    &.active {
                        border-color: #f69926;
                    }
                }
            }
        }
        .content {
            box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
            background: white;
            position: absolute;
            bottom: 0;
            right: 50px;
            padding: 30px;
            border-radius: 20px;
            transform: translateY(50%);
            width: 55%;
            h5 {
                color: #f69926;
                padding-bottom: 10px;
                font-size: 15px;
                display: inline-block;
                position: relative;
                &::after {
                    content: "";
                    width: 80%;
                    height: 1px;
                    background: $blue-color-dark;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
            .image {
                width: 27%;
                margin-left: auto;
                img {
                    width: 100%;
                    height: 100%;
                }
                margin-bottom: 10px;
            }
            h2 {
                color: #285282;
                font-size: 50px;
                font-weight: 700;
                margin-bottom: 15px;
            }
            p {
                color: #0e2d50;
                font-size: 18px;
                font-weight: 600;
            }
        }
        .nav {
            display: flex;
            justify-content: end;
            position: absolute;
            width: 100%;
            bottom: -20%;
            left: 1%;
            .icon {
                width: 5%;
                display: flex;
                justify-content: space-between;
                svg {
                    font-size: 30px;
                    margin: 0 1px;
                    color: #f69926;
                    cursor: pointer;
                }
            }
        }
    }
}
@media (max-width: 1500px) {
    .robots {
        padding: 120px 0 225px;
    }
}
@media (max-width: 1300px) {
    .robots {
        padding: 120px 0 225px;
    }
}

@media (max-width: 1000px) {
    .robots {
        padding: 100px 0 180px;
    }
    .robots .over .content h2 {
        font-size: 28px;
    }
    .robots .over .content .image {
        width: 33%;
    }
    .robots .over .content p {
        font-size: 14px;
    }
    .robots .over .nav .icon {
        width: 10%;
    }
    .robots .over .nav {
        bottom: -14%;
    }
    .robots .over .content {
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
        background: white;
        position: absolute;
        top: 0;
        transform: translate(0);
        bottom: auto;
        right: 0;
        padding: 30px;
        border-radius: 20px;
        width: 100%;
        opacity: 0.9;
    }
    .robots .over .show {
        height: 500px;
    }
}

@media (max-width: 700px) {
    .robots .over .nav .icon {
        width: 14%;
    }
}
@media (max-width: 400px) {
}
</style>

<script>
export default {
    name: "RobotsComponent",
    data() {
        return {
            counter: 0,
            robots: [
                {
                    image: "Frame637781.png",
                    content: {
                        title: "صور",
                        header: "روبوتيرا في صور",
                        body: "نعمل مع شركائنا من الجهات ذات العلاقة لدعم الجهود المبذولة في توطين التقنيات الحديثة في مجالات الذكاء الاصطناعي والروبوتات للوصول إلى أفضل الحلول والمنتجات",
                    },
                },
                {
                    image: "Frame637781.png",
                    content: {
                        title: "صور",
                        header: "روبوتيرا في صور",
                        body: "نعمل مع شركائنا من الجهات ذات العلاقة لدعم الجهود المبذولة في توطين التقنيات الحديثة في مجالات الذكاء الاصطناعي والروبوتات للوصول إلى أفضل الحلول والمنتجات",
                    },
                },
                {
                    image: "Frame637781.png",
                    content: {
                        title: "صور",
                        header: "روبوتيرا في صور",
                        body: "نعمل مع شركائنا من الجهات ذات العلاقة لدعم الجهود المبذولة في توطين التقنيات الحديثة في مجالات الذكاء الاصطناعي والروبوتات للوصول إلى أفضل الحلول والمنتجات",
                    },
                },
                {
                    image: "Frame237820.png",
                    content: {
                        title: "صور",
                        header: "روبوتيرا في صور",
                        body: "نعمل مع شركائنا من الجهات ذات العلاقة لدعم الجهود المبذولة في توطين التقنيات الحديثة في مجالات الذكاء الاصطناعي والروبوتات للوصول إلى أفضل الحلول والمنتجات",
                    },
                },
            ],
        };
    },
    methods: {
        moveImage(index) {
            this.counter = index;
        },
        increment() {
            if (this.counter == this.robots.length - 1) {
                return (this.counter = 0);
            }
            this.counter++;
        },

        decrement() {
            if (this.counter == 0) {
                return (this.counter = this.robots.length - 1);
            }
            this.counter--;
        },
    },
    created() {
        setInterval(() => {
            this.increment();
        }, 3000);
    },
};
</script>

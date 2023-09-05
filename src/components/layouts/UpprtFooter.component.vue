<template>
    <div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="logo">
                            <img
                                src="../../assets/footer/images/footerLogo.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="categorys">
                            <h4>أقسام الموقع</h4>
                            <ul class="list-unstyled">
                                <li>
                                    <router-link to="/">الرئيسية</router-link>
                                </li>
                                <li>
                                    <router-link to="/"
                                        >عن روبوتيرا</router-link
                                    >
                                </li>
                                <li>
                                    <router-link to="/">منتجاتنا</router-link>
                                </li>
                                <li>
                                    <router-link to="/">المتجر</router-link>
                                </li>
                                <li>
                                    <router-link to="/">اتصل بنا</router-link>
                                </li>
                                <li>
                                    <router-link to="/">الرئيسية</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="address">
                            <h4>
                                <i class="fa-solid fa-location-dot"></i> العنوان
                            </h4>
                            <p>
                                المملكة العربية السعودية - الرياض - طريق عثمان
                                ابن عفان - حي الإزدهار, 7375
                            </p>
                            <h4>
                                <i class="fa-solid fa-phone-volume"></i> الهاتف
                            </h4>
                            <p>+966531577796</p>
                            <h4>
                                <i class="fa-solid fa-envelope"></i> البريد
                                الإلكتروني
                            </h4>
                            <p>Info@robotera.com.sa</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="email">
                            <div class="inner">
                                <div class="input">
                                    <input
                                        type="text"
                                        placeholder="البريد الالكتروني"
                                    />
                                </div>
                                <div class="info d-flex">
                                    <div class="right d-flex">
                                        <div class="image">
                                            <img
                                                src="../../assets/footer/images/icon_send_mail.png"
                                                alt=""
                                            />
                                        </div>
                                        <div class="content">
                                            <p>
                                                <span> ادخل</span>
                                                بريدك الإلكتروني ليصلك كل جديد
                                            </p>
                                        </div>
                                    </div>
                                    <div class="left">
                                        <button>
                                            <i
                                                class="fa-regular fa-circle-left"
                                            ></i>
                                            <span>ارسال</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <LowerFooterComponent></LowerFooterComponent>
    </div>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
footer {
    position: relative;
    padding: 50px 0;
    background: var(
        --unnamed,
        linear-gradient(247deg, #0c3461 0%, #0f8ac8 100%)
    );

    .logo {
        height: 100%;
        display: flex;
        align-items: center;
        width: 60%;
        img {
            width: 100%;
        }
    }

    .categorys {
        h4 {
            color: #0f98d5;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        ul {
            li {
                a {
                    color: white;
                    font-size: 12px;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
    .address {
        h4 {
            color: #0f98d5;
            font-size: 14px;
            font-weight: 600;
            svg {
                color: #82d4f7;
                margin-left: 10px;
            }
        }
        p {
            font-size: 12px;
            color: white;
        }
    }
    .email {
        padding-top: 30px;
        display: flex;
        justify-content: end;
        .inner {
            width: 80%;
            .input {
                width: 100%;
                margin-bottom: 20px;
                input {
                    width: 100%;
                    padding: 10px 15px;
                    font-size: 20px;
                    border: 0;
                    outline: none;
                    border-radius: 20px;
                    &::placeholder {
                        font-size: 14px;
                    }
                }
            }
            .info {
                align-items: center;
                .right {
                    align-items: center;
                    .image {
                        margin-left: 10px;
                        img {
                            width: 35px;
                        }
                    }
                    .content {
                        p {
                            font-weight: 600;
                            margin: 0;
                            font-size: 16px;
                            color: white;
                            span {
                                color: #f69926;
                            }
                            width: 70%;
                        }
                    }
                }
                .left {
                    button {
                        background: #f69926;
                        border: 0;
                        outline: none;
                        color: white;
                        padding: 7px 15px;
                        border-radius: 5px;
                        svg {
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 1500px) {
}
@media (max-width: 1200px) {
    footer .logo {
        width: 80%;
    }
    footer .email .inner {
        width: 100%;
    }
    footer .email .inner .info .right .content p {
        width: 100%;
    }
    footer .categorys {
        margin: 20px 0;
    }
    footer .email .inner .info {
        justify-content: space-between;
    }
}
@media (max-width: 992px) {
    footer .logo {
        width: 25%;
        margin-bottom: 20px;
    }
}
@media (max-width: 600px) {
    footer .logo {
        width: 40%;
    }
}
@media (max-width: 375px) {
}
</style>

<script>
import LowerFooterComponent from "@/components/layouts/LowerFooter.component.vue";
export default {
    name: "UpperFooterComponent",
    components: {
        LowerFooterComponent,
    },
};
</script>

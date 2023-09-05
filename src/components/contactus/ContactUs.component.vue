<template>
    <section class="contact_us">
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
                    <span>الرئيسي</span></router-link
                >
                <router-link to="/contact">
                    <span class="active">اتصل بنا</span></router-link
                >
            </header>
            <div class="wrapper">
                <div class="back">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="contact">
                    <div class="image">
                        <img
                            src="../../assets/contactus/Rectangle.png"
                            alt=""
                        />
                    </div>
                    <div class="content">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="inputs">
                                    <div class="input">
                                        <input
                                            type="text"
                                            class="form-controll"
                                            placeholder="الاسم ثلاثي"
                                        />
                                    </div>
                                    <div class="main d-flex">
                                        <div class="input">
                                            <input
                                                type="text"
                                                class="form-controll"
                                                placeholder="العمر"
                                            />
                                        </div>
                                        <div class="input">
                                            <input
                                                type="text"
                                                class="form-controll"
                                                placeholder="رقم الهاتف"
                                            />
                                        </div>
                                    </div>

                                    <div class="input">
                                        <input
                                            type="text"
                                            class="form-controll"
                                            placeholder="عنوان الرساله"
                                        />
                                    </div>
                                    <div class="input">
                                        <textarea
                                            type="text"
                                            class="form-controll"
                                            placeholder="نص الرساله"
                                        ></textarea>
                                    </div>
                                </div>
                                <button>ارسال</button>
                            </div>
                            <div class="col-lg-6">
                                <div class="address">
                                    <h4>
                                        <i class="fa-solid fa-location-dot"></i>
                                        العنوان
                                    </h4>
                                    <p>
                                        المملكة العربية السعودية - الرياض - طريق
                                        عثمان ابن عفان - حي الإزدهار, 7375
                                    </p>
                                    <h4>
                                        <i class="fa-solid fa-phone-volume"></i>
                                        الهاتف
                                    </h4>
                                    <p>+966531577796</p>
                                    <h4>
                                        <i class="fa-solid fa-envelope"></i>
                                        البريد الإلكتروني
                                    </h4>
                                    <p>Info@robotera.com.sa</p>
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
.contact_us {
    padding: 50px 0 150px;
    overflow: hidden;
    header {
        margin: 0 12.5px 250px 0;
        a {
            &:nth-of-type(1) {
                margin-left: 15px;
            }
            display: flex;
            align-items: center;
            svg {
                color: #949494;
                margin-left: 10px;
            }
            span {
                color: #949494;
                font-size: 15px;
                font-weight: 400;
                padding-bottom: 3px;
                border-bottom: 1px solid #949494;
            }
            &.active {
                span {
                    border-color: #f8ac39;
                    color: #f8ac39;
                }
            }
        }
    }
    .wrapper {
        position: relative;
        .contact {
            position: relative;
            z-index: 6;
            padding: 20px 100px;
            background: white;
            border-radius: 25px;
            .image {
                margin-top: -15%;
                margin-bottom: 40px;
                width: 100%;
                height: 400px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .content {
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
                        color: #9f9f9f;
                        padding-right: 25px;
                    }
                }
                .inputs {
                    textarea {
                        min-height: 300px;
                    }
                    input,
                    textarea {
                        margin-bottom: 20px;
                        width: 100%;
                        padding: 12px 15px;
                        border-radius: 10px;
                        border: 1px solid #d8d8d8;
                        outline: none;
                        box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
                        font-size: 17px;
                        &::-webkit-input-placeholder {
                            color: #306386;
                            text-align: right;
                            font-family: Cairo;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                        }
                    }

                    .main {
                        justify-content: space-between;
                        .input:nth-of-type(1) {
                            width: 28%;
                        }
                        .input:nth-of-type(2) {
                            width: 70%;
                        }
                    }
                }
                button {
                    width: 45%;
                    padding: 10px 0;
                    color: white;
                    background: #f7a633;
                    border-radius: 15px;
                    border: 0;
                    outline: 0;
                }
            }
        }
        .back {
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            span {
                transform: translateX(28%) rotate(-11deg);
                margin-bottom: 40px;
                background: #f6af26;
                width: 180%;
                &:nth-of-type(1) {
                    height: 9%;
                }
                &:not(:nth-of-type(1)) {
                    height: 9%;
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
        }
    }
}
@media (max-width: 1500px) {
}
@media (max-width: 1300px) {
    .contact_us header {
        margin: 0 12.5px 200px 0;
    }
    .contact_us .wrapper .contact {
        padding: 20px;
    }
    .contact_us .row > div:nth-of-type(1) {
        margin-bottom: 25px;
    }
    .contact_us .wrapper .contact .content button {
        width: 100%;
    }
}

@media (max-width: 1000px) {
    .contact_us header {
        margin: 0 12.5px 150px 0;
    }
}

@media (max-width: 700px) {
    .contact_us header {
        margin: 0 12.5px 100px 0;
    }
}
@media (max-width: 400px) {
}
</style>

<script>
export default {
    name: "ContactUsComponent",
};
</script>

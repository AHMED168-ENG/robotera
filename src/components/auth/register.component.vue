<template>
    <section class="register">
        <div class="container">
            <div class="wrapper">
                <div class="back">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="content">
                    <header>
                        <h4>مرحبا اهلا بك</h4>
                    </header>
                    <div class="inputs">
                        <label for="FName">الاسم الاول </label>
                        <div class="input">
                            <input type="FName" to="FName" />
                        </div>
                        <label for="lName">الاسم الاخير </label>
                        <div class="input">
                            <input type="lName" to="lName" />
                        </div>
                        <label for="email">البريد الالكتروني</label>
                        <div class="input">
                            <input type="email" to="email" />
                        </div>
                        <label for="password">الرقم السري</label>
                        <div class="input">
                            <input type="password" to="password" />
                        </div>
                        <router-link to="/">هل نسيت كلمه السر؟</router-link>
                    </div>
                    <button>انشاء حساب</button>
                    <div class="or"><span>او</span></div>
                    <div class="social d-flex">
                        <i class="fa-brands fa-apple"></i>
                        <i class="fa-brands fa-facebook"></i
                        ><i class="fa-brands fa-google"></i>
                    </div>
                    <div class="register">
                        <router-link to="/register">ليس لديك حساب؟</router-link>
                        <router-link to="/register"> انشاء حساب؟</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.register {
    background: #fefefe;
    padding: 150px 0;
    position: relative;
    overflow: hidden;

    .wrapper {
        overflow: hidden;
    }
    .back {
        padding-top: 7%;
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

    .content {
        width: 33.3333%;
        position: relative;
        z-index: 30;
        margin: auto;
        padding: 30px;
        background: #fff;
        box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1);
        header {
            h4 {
                font-size: 20px;
                text-align: center;
            }
            margin-bottom: 40px;
        }
        .inputs {
            label {
                font-size: 14px;
                margin-bottom: 8px;
            }
            .input {
                margin-bottom: 15px;
                position: relative;
                input {
                    width: 100%;
                    padding: 7px 40px 7px 15px;
                    font-size: 17px;
                    border: 1px solid gray;
                }
                svg {
                    position: absolute;
                    top: 50%;
                    right: 15px;
                    transform: translateY(-50%);
                    color: gray;
                }
            }
            > a {
                font-size: 12px;
                font-weight: 600;
                margin-bottom: 20px;
                color: #000;
                display: block;
            }
        }
        > button {
            display: block;
            width: 100%;
            background: #f6921e;
            color: white;
            padding: 5px;
            border: 0;
            outline: none;
            transition: 0.5s;
            border: 1px solid #f6921e;
            margin-bottom: 20px;
            &:hover {
                color: #f6921e;
                border-color: #f6921e;
                background: transparent;
            }
        }
        .or {
            margin-bottom: 30px;
            position: relative;
            border-bottom: 1px solid #222;
            span {
                position: absolute;
                left: 50%;
                transform: translate(-50%, -50%);
                top: 0;
                width: 50px;
                text-align: center;
                background: white;
            }
        }
        .social {
            justify-content: center;
            svg {
                border: 1px solid gray;
                font-size: 22px;
                cursor: pointer;
                margin: 0 5px;
                padding: 6px;
            }
            svg:nth-of-type(1) {
                color: gray;
            }
            svg:nth-of-type(2) {
                color: #149cf1;
            }
            svg:nth-of-type(3) {
                color: #d33026;
            }
        }
        .register {
            display: flex;
            padding: 20px 0;
            justify-content: center;
            a {
                font-size: 14px;
                color: #222;
            }
        }
    }
}
@media (max-width: 1500px) {
}
@media (max-width: 1300px) {
    .register .content {
        width: 50%;
    }
}

@media (max-width: 1000px) {
    .register .content {
        width: 70%;
    }
}

@media (max-width: 700px) {
    .register .content {
        width: 90%;
    }
}
@media (max-width: 400px) {
}
</style>

<script>
export default {
    name: "RegisterComponent",
};
</script>

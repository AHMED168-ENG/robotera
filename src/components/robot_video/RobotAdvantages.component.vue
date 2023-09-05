<template>
    <section class="robot_advantages">
        <div class="container">
            <header>
                <h2>مميزات الروبوت</h2>
                <div class="image">
                    <img src="../../assets/robotDetails/Vector10.png" alt="" />
                </div>
            </header>
            <div class="advantages">
                <ul class="list-unstyled">
                    <li v-for="(ele, index) in robotAdvantages" :key="index">
                        <i class="fa-regular fa-circle-check"></i>
                        <span>{{ ele }}</span>
                    </li>
                </ul>
            </div>
            <div class="pay">
                <router-link to="/"
                    ><span>شراء المنتج</span>
                    <i class="fa-solid fa-arrow-left"></i
                ></router-link>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.robot_advantages {
    margin-top: -270px;
}
header {
    margin-bottom: 30px;
    padding: 0 90px 0 0;
    h2 {
        font-size: 55px;
        color: #285282;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .image {
        width: 15%;
        margin-left: auto;
        img {
            width: 100%;
        }
    }
}
.advantages {
    padding: 90px 90px 90px 0;
    background: white;
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    ul {
        margin: 0;
        li:not(:last-of-type) {
            margin-bottom: 20px;
        }
        li {
            display: flex;
            align-items: center;

            svg {
                color: #22c045;
                font-size: 38px;
                margin-left: 15px;
            }
            span {
                color: #9f9f9f;
                font-size: 22px;
            }
        }
    }
}
.pay {
    text-align: center;
    padding: 100px 0;
    a {
        background: #f69926;
        display: inline-flex;
        align-items: center;
        padding: 8px 25px;
        border-radius: 10px;
        color: white;
        font-size: 20px;
        justify-content: space-between;
        width: 184px;
        font-weight: 600;
    }
}
@media (max-width: 1500px) {
}

@media (max-width: 1300px) {
    .advantages ul li svg {
        font-size: 35px;
    }
    .advantages ul li span {
        font-size: 20px;
    }
}

@media (max-width: 1000px) {
    header .image {
        width: 33%;
    }
    header h2 {
        font-size: 44px;
    }
    .advantages ul li span {
        font-size: 16px;
    }
    .advantages {
        padding: 70px 70px 70px 0;
    }
    .robot_advantages {
        margin-top: -150px;
    }
}

@media (max-width: 750px) {
}

@media (max-width: 400px) {
}
</style>

<script>
export default {
    name: "robotAdvantagesComponent",
    data() {
        return {
            robotAdvantages: [
                "كاميرا ذكاء اصطناعي مزودة ببرامج متعددة، بما في ذلك التعرف على الوجوه والعلامات والألوان وتعقب الأجسام وتتبع الخط.",
                "ثلاث حساسات لقياس المسافة من ثلاث اتجاهات.",
                "حساس للتعرف على اللون لتتبع الخط.",
                "شاشة عرض تفاعلية لعرض الكاميرا والتحكم في البرامج.",
                " محرك سيرفو للتحكم في اتجاه الروبوت.",
                "نظام ديفرنس لنقل الحركة من محرك واحد إلى عجلتين.",
                "هيكل خفيف من الألمنيوم.",
                "بطارية ليثيوم قابلة لإعادة الشحن 12 فولت.",
                "لوحة تحكم متوافقة مع أردوينو.",
                "لوحة تحكم منفصلة للمحرك.",
                "محرك بسرعة 100 دورة في الدقيقة.",
                "عجل مطاطي عريض.",
            ],
        };
    },
};
</script>

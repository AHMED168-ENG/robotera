<template>
    <section class="news_details">
        <div class="container">
            <header class="d-flex">
                <router-link to="/" class="active"
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
                <router-link to="/news">
                    <span class="active">الاخبار</span></router-link
                >
            </header>
            <div class="news">
                <div class="image">
                    <img src="../../assets/newsDetails/news2.png" alt="" />
                </div>
                <div class="over">
                    <h2>
                        السعودية تحقق المركز الأول في جائزة مشروع الابتكار الأول
                        في جائزة مشروع الابتكار
                    </h2>
                    <div class="date">
                        <i class="fa-regular fa-calendar"></i>
                        <span>الثلاثاء 13 / 4 / 2023</span>
                    </div>
                </div>
            </div>
            <div class="text">
                <div class="wrapper">
                    <div class="back">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="over">
                        <p>
                            حصل المنتخب السعودي للروبوت على المركز الأول في
                            جائزة مشروع الابتكار”innovation project” ببطولة
                            الفيرست ليغو الدولية المفتوحة 2023 متفوقاً على 66
                            فريقاً من أكثر من 50 دولة, في المنافسات التي اختتمت
                            أمس في المغرب وأقيمت على مدار 4 أيام.
                        </p>
                        <p>
                            وأدار الفريق السعودي المشارك في البطولة الاتحاد
                            السعودي للروبوت والرياضات اللاسلكية، بالشراكة مع
                            وزارة التعليم، والهيئة الملكية بالجبيل وينبع, حيث
                            شارك الفريق في المسابقة العالمية التي تستهدف إظهار
                            إبداعات الشباب في الفئة العمرية من 9 إلى 16 عاماً في
                            مجالات الروبوت والذكاء الاصطناعي والبرمجة بمنهجية
                            STEM. يذكر أن التصفيات المحلية بدأت عبر التسجيل
                            للفرق في تاريخ 14 فبراير 2023، وتمت التصفيات في
                            المناطق خلال الفترة من 12 – 14 مارس الماضي، فيما
                            أقيمت التصفيات النهائية في مركز الملك عبدالله
                            الحضاري بمدينة الجبيل الصناعية خلال الفترة من 18 إلى
                            20 مارس، وتنافس فيها المشاركون في ثلاث فئات مختلفة.
                        </p>
                        <p>
                            حصل المنتخب السعودي للروبوت على المركز الأول في
                            جائزة مشروع الابتكار”innovation project” ببطولة
                            الفيرست ليغو الدولية المفتوحة 2023 متفوقاً على 66
                            فريقاً من أكثر من 50 دولة, في المنافسات التي اختتمت
                            أمس في المغرب وأقيمت على مدار 4 أيام.
                        </p>
                        <p>
                            وأدار الفريق السعودي المشارك في البطولة الاتحاد
                            السعودي للروبوت والرياضات اللاسلكية، بالشراكة مع
                            وزارة التعليم، والهيئة الملكية بالجبيل وينبع, حيث
                            شارك الفريق في المسابقة العالمية التي تستهدف إظهار
                            إبداعات الشباب في الفئة العمرية من 9 إلى 16 عاماً في
                            مجالات الروبوت والذكاء الاصطناعي والبرمجة بمنهجية
                            STEM. يذكر أن التصفيات المحلية بدأت عبر التسجيل
                            للفرق في تاريخ 14 فبراير 2023، وتمت التصفيات في
                            المناطق خلال الفترة من 12 – 14 مارس الماضي، فيما
                            أقيمت التصفيات النهائية في مركز الملك عبدالله
                            الحضاري بمدينة الجبيل الصناعية خلال الفترة من 18 إلى
                            20 مارس، وتنافس فيها المشاركون في ثلاث فئات مختلفة.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.news_details {
    padding: 50px 0;
    header {
        margin: 0 12.5px 30px 0;
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
    .news {
        position: relative;
        .image {
            width: 100%;
            height: 600px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .over {
            width: 70%;
            background: #0f8ac8;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 60%);
            z-index: 60;
            padding: 40px 30px;
            h2 {
                color: white;
                font-size: 35px;
                font-weight: 700;
                margin-bottom: 25px;
            }
            .date {
                svg {
                    color: #fabe62;
                    margin-left: 15px;
                    font-size: 23px;
                }
                span {
                    color: #fabe62;
                    font-size: 14px;
                }
            }
        }
    }
    .text {
        padding-top: 100px;
        .wrapper {
            position: relative;

            .back {
                padding-top: 150px;
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                span {
                    margin-bottom: 25px;
                    transform: translateX(28%) rotate(-11deg);
                    background: #f6af26;
                    width: 170%;
                    &:nth-of-type(1) {
                        height: 10%;
                    }
                    &:not(:nth-of-type(1)) {
                        height: 10%;
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
                border-radius: 25px;
                position: relative;
                z-index: 2;
                background: white;
                padding: 130px 60px;
                min-height: 1000px;
                p {
                    font-size: 20px;
                    color: #9f9f9f;
                    margin-bottom: 30px;
                }
            }
        }
    }
}
@media (max-width: 1500px) {
    .news_details .news .over {
        width: 90%;
    }
    .news_details .news .over h2 {
        font-size: 25px;
    }
    .news_details .news .image {
        height: 500px;
    }
    .news_details .text .wrapper .over {
        padding: 100px 60px;
    }
    .news_details .text .wrapper .over p {
        font-size: 19px;
    }
    .news_details .text .wrapper .over {
        min-height: 600px;
    }
}
@media (max-width: 1000px) {
}
@media (max-width: 700px) {
    .news_details .news .over {
        width: 90%;
    }
    .news_details .news .over h2 {
        font-size: 25px;
    }
    .news_details .news .image {
        height: 500px;
    }
    .news_details .text .wrapper .over {
        padding: 100px 60px;
    }
    .news_details .text .wrapper .over p {
        font-size: 15px;
    }
    .news_details .text .wrapper .over {
        min-height: 600px;
    }
}
@media (max-width: 400px) {
}
</style>

<script>
export default {
    name: "NewsDetails",
};
</script>

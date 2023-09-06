<template>
  <section class="company_fields" id="company_fields">
    <div class="container">
      <header>
        <h5>عن روبوتيرا</h5>
        <h2>
          ماهي مجالات عملنا<br />
          في روبوتيرا
        </h2>
        <div class="image">
          <img src="../../assets/home/images/Vector7.png" alt="" />
        </div>
        <p>
          نعمل مع شركائنا من الجهات ذات العلاقة لدعم الجهود المبذولة في توطين
          التقنيات الحديثة في <br />مجالات الذكاء الاصطناعي والروبوتات للوصول
          إلى أفضل الحلول والمنتجات
        </p>
        <div class="header_image">
          <img src="../../assets/home/images/Isolation_Mode.png" alt="" />
        </div>
      </header>
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div :class="[!upperSection ? 'col-xl-8' : 'col-xl-4']">
            <div class="block">
              <div class="head-block">
                <div class="image-left">
                  <img src="../../assets/home/images/Layer_1.png" />
                </div>
                <div class="image-right" @click="upperSectionToggle">
                  <img src="../../assets/home/images/arrowDown.png" />
                </div>
              </div>
              <div class="body-block">
                <h3>التشغيل و الدعم</h3>
                <p>
                  يمثل التطوير المستمر لأفضل تطبيقات الذكاء الاصطناعي الأساس في
                  استراتيجيتنا لخدمة عملائنا واختيار أفضل التجارب الممكنة لتقديم
                  حلول مبتكرة بما يتناسب مع تطلعات الشركاء والعملاء في تنفيذ
                  خدمات الذكاء الاصطناعي.
                </p>
              </div>
            </div>
          </div>
          <div :class="[upperSection ? 'col-xl-8' : 'col-xl-4']">
            <div class="block">
              <div class="head-block">
                <div class="image-left">
                  <img src="../../assets/home/images/Layer_1.png" />
                </div>
                <div class="image-right" @click="upperSectionToggle">
                  <img src="../../assets/home/images/arrowUp.png" />
                </div>
              </div>
              <div class="body-block">
                <h3>الذكاء الاصطناعي وتطبيقاته</h3>
                <p>
                  يمثل التطوير المستمر لأفضل تطبيقات الذكاء الاصطناعي الأساس في
                  استراتيجيتنا لخدمة عملائنا واختيار أفضل التجارب الممكنة لتقديم
                  حلول مبتكرة بما يتناسب مع تطلعات الشركاء والعملاء في تنفيذ
                  خدمات الذكاء الاصطناعي.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div :class="[lowerSection ? 'col-xl-8' : 'col-xl-4']">
            <div class="block">
              <div class="head-block">
                <div class="image-left">
                  <img src="../../assets/home/images/Layer_1.png" />
                </div>
                <div class="image-right" @click="lowerSectionToggle">
                  <img src="../../assets/home/images/arrowUp.png" />
                </div>
              </div>
              <div class="body-block">
                <h3>تصنيع الروبوت</h3>
                <p>
                  نعتمد في رؤيتنا على توطين صناعة الروبوتات التعليمية والرياضية
                  والخدمية من خلال فريق الشركة وبالتكامل مع أفضل شركات الروبوت
                  العالمية وفق أحدث ما وصلت إليه التقنية وعملت عليه بيوت الخبرة
                  والمنظمات العالمية.التجارب
                </p>
              </div>
            </div>
          </div>
          <div :class="[!lowerSection ? 'col-xl-8' : 'col-xl-4']">
            <div class="block">
              <div class="head-block">
                <div class="image-left">
                  <img src="../../assets/home/images/Layer_1.png" />
                </div>
                <div class="image-right" @click="lowerSectionToggle">
                  <img src="../../assets/home/images/arrowDown.png" />
                </div>
              </div>
              <div class="body-block">
                <h3>الذكاء الاصطناعي وتطبيقاته</h3>
                <p>
                  يمثل التطوير المستمر لأفضل تطبيقات الذكاء الاصطناعي الأساس في
                  استراتيجيتنا لخدمة عملائنا واختيار أفضل التجارب الممكنة لتقديم
                  حلول مبتكرة بما يتناسب مع تطلعات الشركاء والعملاء في تنفيذ
                  خدمات الذكاء الاصطناعي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="image-bottom">
        <img src="../../assets/home/images/bottom.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.company_fields {
  .row {
    > div {
      transition: 0.5s;
    }
  }
  overflow: hidden;
  padding: 70px 0 50px;
  header {
    position: relative;
    text-align: center;
    h5 {
      color: $yellow-color;
      font-size: 16px;
      position: relative;
      display: inline-block;
      padding-bottom: 15px;
      margin-bottom: 15px;
      &::after {
        content: "";
        width: 30%;
        height: 2px;
        background: $blue-color;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    h2 {
      font-size: 54px;
      font-weight: 700;
      color: $blue-color-dark;
      margin-bottom: 15px;
    }
    .image {
      width: 17%;
      margin: auto;
      img {
        width: 100%;
      }
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      color: $gray-color;
    }
    .header_image {
      position: absolute;
      top: -65%;
      right: -12%;
      width: 20%;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  .content {
    position: relative;
    padding: 60px 0 60px;
    &::after {
      content: "";
      background: rgba(252, 206, 136, 0.3);
      filter: blur(50px);
      border-radius: 940px;
      width: 40%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
    }
    &::before {
      content: "";
      background: #fdeed7;
      width: 17%;
      aspect-ratio: 1/1;
      position: absolute;
      top: -5%;
      left: 2%;
      z-index: 10;
      border-radius: 50%;
    }

    .block {
      position: relative;
      z-index: 20;
      border-radius: 20px;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.04);
      border: 2px solid #eee;
      padding: 30px;
      background: white;
      .head-block {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-between;
        .image-left {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ddd;
          img {
            width: 60%;
          }
        }
        .image-right {
          cursor: pointer;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 70%;
          }
        }
      }
      .body-block {
        h3 {
          color: #285282;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 25px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 1; /* number of lines to show */
          line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        p {
          color: $gray-color;
          font-size: 16px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* number of lines to show */
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    .row:nth-of-type(1) {
      margin-bottom: 25px !important;
    }
    .row:nth-of-type(1) {
      > div:nth-of-type(1) {
        .image-left {
          background: #fabe62;
        }
      }
      > div:nth-of-type(2) {
        .image-left {
          background: #00c9b7;
        }
      }
    }
    .row:nth-of-type(2) {
      > div:nth-of-type(1) {
        .image-left {
          background: #0f8ac8;
        }
      }
      > div:nth-of-type(2) {
        .image-left {
          background: #ff5959;
        }
      }
    }
    .image-bottom {
      position: absolute;
      bottom: -7%;
      width: 200px;
      left: -1%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media (max-width: 1500px) {
  .company_fields .content::before {
    width: 17% !important;
    top: -5%;
    left: 1%;
  }
  .company_fields header h2 {
    font-size: 55px !important;
  }

  .company_fields .content .block .body-block h3 {
    font-size: 24px;
  }
  .company_fields .content .block .body-block p {
    font-size: 17px;
  }
  .company_fields .content .row > div:not(:last-of-type) {
    margin-bottom: 25px;
  }
  .company_fields .row {
    margin: 0 !important;
  }
  .company_fields .content .image-bottom {
    position: absolute;
    bottom: -1%;
    left: 0%;
  }
}
@media (max-width: 1300px) {
  .company_fields .content .image-bottom {
    bottom: -3%;
    left: -5%;
  }
  .company_fields .content::before {
    width: 17% !important;
    top: -1%;
    left: 7%;
  }
}

@media (max-width: 1000px) {
  .company_fields .conten::before {
    width: 18% !important;
    top: -5% !important;
    left: 2% !important;
  }
  .company_fields .content .image-bottom {
    bottom: -3%;
    left: -2%;
  }
  .company_fields .content::before {
    width: 17% !important;
    top: 2%;
    left: 1%;
  }
  .company_fields header h2 {
    font-size: 51px !important;
  }
  .company_fields header p {
    font-size: 17px !important;
  }

  .company_fields header .image {
    width: 28%;
  }
  .company_fields .content .block .head-block .image-right {
    width: 55px;
    height: 55px;
  }
}

@media (max-width: 700px) {
  .company_fields header p {
    font-size: 13px !important;
  }
  .company_fields header h2 {
    font-size: 38px !important;
  }
  .company_fields .content .block {
    padding: 20px !important;
  }
  .company_fields .content .block .body-block h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  .company_fields .content .block .body-block p {
    font-size: 15px;
  }
  .company_fields .content .block .head-block {
    margin-bottom: 20px;
  }
  .company_fields .content {
    padding: 60px 0 40px;
  }
  .company_fields .content .image-bottom {
    bottom: -4%;
    left: -8%;
  }
}
@media (max-width: 400px) {
  .company_fields .conten::before {
    width: 18% !important;
    top: -5% !important;
    left: 2% !important;
  }
  .company_fields .content .image-bottom {
    bottom: -1%;
    left: -22%;
  }
  .company_fields .content::before {
    width: 17% !important;
    top: 2%;
    left: 1%;
  }
  .company_fields header h2 {
    font-size: 30px !important;
  }
  .company_fields header p {
    font-size: 15px !important;
  }

  .company_fields header .image {
    width: 30%;
    margin-bottom: 2px;
  }
  .company_fields .content .block {
    padding: 15px;
  }
  .company_fields .content {
    padding: 40px 0 60px;
  }
}
</style>

<script>
export default {
  name: "CompanyFieldsComponant",
  data() {
    return {
      upperSection: 1,
      lowerSection: 1,
    };
  },
  methods: {
    upperSectionToggle() {
      this.upperSection = !this.upperSection;
    },
    lowerSectionToggle() {
      this.lowerSection = !this.lowerSection;
    },
  },
};
</script>

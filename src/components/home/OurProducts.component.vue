<template>
  <section class="our_products" id="our_products">
    <div class="over">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="info">
              <h5>خدماتنا</h5>
              <h2>منتجاتنا متنوعة <br />وفريدة</h2>
              <div class="image">
                <img src="../../assets/home/images/Vector7.png" alt="" />
              </div>
              <p>
                نعمل مع شركائنا من الجهات ذات العلاقة لدعم الجهود المبذولة في
                توطين التقنيات الحديثة في مجالات الذكاء الاصطناعي والروبوتات
                للوصول إلى أفضل الحلول والمنتجات
              </p>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="faqs">
              <div
                :class="['faq', ele.isOpen ? 'active' : '']"
                v-for="(ele, index) in faqs"
                :key="index"
              >
                <div
                  class="faq_header d-flex align-items-center"
                  @click="toggelFaq(index)"
                >
                  <div class="title d-flex">
                    <div class="image">
                      <img src="../../assets/home/images/roobot.png" alt="" />
                    </div>
                    <h4>{{ ele.head }}</h4>
                  </div>
                  <div class="icon">
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
                <div class="faq_body">
                  <p>
                    {{ ele.body }}
                  </p>
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

.our_products {
  background-image: url("../../assets/home/images/Frame237820.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .over {
    padding: 70px 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      #82d4f7 0%,
      rgba(255, 255, 255, 0.76) 39.58%,
      #fff 100%
    );
    .info {
      padding-top: 100px;
      h5 {
        color: #5c575a;
        font-size: 18px;
        font-weight: 400;

        display: inline-block;
        position: relative;
        padding-bottom: 10px;
        margin-bottom: 15px;
        &::before {
          content: "";
          width: 50%;
          background: $blue-color-dark;
          height: 2px;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
      h2 {
        color: $blue-color-dark;
        font-size: 50px;
        font-weight: 700;
      }
      .image {
        width: 44%;
        margin-left: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: 17px;
        color: #0e2d50;
        width: 65%;
        font-weight: 600;
      }
    }
  }
  .faqs {
    .faq {
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
      &.active {
        .icon {
          svg {
            color: #f8c98f !important;
            transform: rotate(180deg);
          }
        }
        .faq_body {
          max-height: 300px;
          padding: 0 20px 20px;
        }
      }
      background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
      border: 1px solid $yellow-color;
      border-radius: 20px;
      .faq_header {
        cursor: pointer;
        padding: 20px;
        justify-content: space-between;
        .title {
          .image {
            margin-left: 10px;
            width: 25px;
            height: 25px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          h4 {
            color: #306386;
            font-size: 23px;
            font-weight: 700;
          }
        }
        .icon {
          svg {
            transition: 0.5s;
            font-size: 28px;
            color: #306386;
          }
        }
      }
      .faq_body {
        overflow: hidden;
        transition: 0.5s ease-in-out;
        max-height: 0;
        padding: 0 20px 0px;
        p {
          color: #9f9f9f;
          font-size: 17px;
          margin: 0;
        }
      }
    }
  }
}

@media (max-width: 1500px) {
}
@media (max-width: 1300px) {
  .our_products .over .info {
    width: 100%;
  }
}

@media (max-width: 1000px) {
}

@media (max-width: 700px) {
  .our_products .over .info p {
    width: 100%;
  }
  .our_products .over .info h2 {
    font-size: 34px;
  }
  .our_products .over .info p {
    font-size: 14px;
  }
  .our_products .faqs .faq .faq_header .title h4 {
    font-size: 17px;
  }
  .our_products .faqs .faq .faq_header .icon svg {
    font-size: 22px;
  }
  .our_products .faqs .faq .faq_body p {
    font-size: 13px;
  }
  .our_products .over .info {
    padding: 0;
  }
}
@media (max-width: 400px) {
}
</style>

<script>
export default {
  name: "OurProductsComponent",
  data() {
    return {
      faqs: [
        {
          head: "الروبوتات التعليمية ",
          body: "نعتمد في رؤيتنا على توطين صناعة الروبوتات التعليمية والرياضية والخدمية من خلال فريق الشركة وبالتكامل مع أفضل شركات الروبوت العالمية وفق أحدث ما وصلت إليه التقنية وعملت عليه بيوت الخبرة والمنظمات العالمية.",
          isOpen: true,
        },
        {
          head: "الروبوتات الرياضية",
          body: "نعتمد في رؤيتنا على توطين صناعة الروبوتات التعليمية والرياضية والخدمية من خلال فريق الشركة وبالتكامل مع أفضل شركات الروبوت العالمية وفق أحدث ما وصلت إليه التقنية وعملت عليه بيوت الخبرة والمنظمات العالمية.",
          isOpen: false,
        },
        {
          head: "الروبوتات الخدمية",
          body: "نعتمد في رؤيتنا على توطين صناعة الروبوتات التعليمية والرياضية والخدمية من خلال فريق الشركة وبالتكامل مع أفضل شركات الروبوت العالمية وفق أحدث ما وصلت إليه التقنية وعملت عليه بيوت الخبرة والمنظمات العالمية.",
          isOpen: false,
        },
        {
          head: "تقنيات الذكاء الاصطناعي",
          body: "نعتمد في رؤيتنا على توطين صناعة الروبوتات التعليمية والرياضية والخدمية من خلال فريق الشركة وبالتكامل مع أفضل شركات الروبوت العالمية وفق أحدث ما وصلت إليه التقنية وعملت عليه بيوت الخبرة والمنظمات العالمية.",
          isOpen: false,
        },
        {
          head: "محاكي الروبوت الافتراضي",
          body: "نعتمد في رؤيتنا على توطين صناعة الروبوتات التعليمية والرياضية والخدمية من خلال فريق الشركة وبالتكامل مع أفضل شركات الروبوت العالمية وفق أحدث ما وصلت إليه التقنية وعملت عليه بيوت الخبرة والمنظمات العالمية.",
          isOpen: false,
        },
        {
          head: "تنظيم فعاليات الروبوت",
          body: "نعتمد في رؤيتنا على توطين صناعة الروبوتات التعليمية والرياضية والخدمية من خلال فريق الشركة وبالتكامل مع أفضل شركات الروبوت العالمية وفق أحدث ما وصلت إليه التقنية وعملت عليه بيوت الخبرة والمنظمات العالمية.",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggelFaq(number) {
      this.faqs.forEach((element, index) => {
        if (number == index) {
          element.isOpen = true;
        } else {
          element.isOpen = false;
        }
      });
    },
  },
};
</script>

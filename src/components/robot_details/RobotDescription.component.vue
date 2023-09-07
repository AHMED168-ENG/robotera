<template>
  <section class="robotDescription">
    <div class="wrapper">
      <div class="back">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="over">
        <div class="container">
          <header>
            <button @click="changePage(0)" :class="[page == 0 ? 'active' : '']">
              وصف المنتج
            </button>
            <button :class="[page == 1 ? 'active' : '']" @click="changePage(1)">
              التقيم
            </button>
          </header>
          <div class="pairant">
            <div :class="['full_description', page == 0 ? 'active' : '']">
              <p>
                هو روبوت يمكن مستخدمه من تعلم واختبار المفاهيم الاساسية في تصميم
                وبرمجة الروبوت وذلك بإعتماد على هيكله والقطع المكانيكة مثل
                الموتور والقطع الالكترونية مثل الحساسات والكاميرا واهمها وحدة
                التحكم الرئيسية لهذا الروبوت وهي Arduino
              </p>
              <h4>مميزات الروبوت</h4>
              <div class="image">
                <img src="../../assets/robotDetails/Vector99.png" alt="" />
              </div>
              <div class="advantages">
                <ul class="list-unstyled">
                  <li v-for="(ele, index) in robotAdvantages" :key="index">
                    <i class="fa-regular fa-circle-check"></i>
                    <span>{{ ele }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="['full_description', page == 1 ? 'active' : '']">
              <p>
                هو روبوت يمكن مستخدمه من تعلم واختبار المفاهيم الاساسية في تصميم
                وبرمجة الروبوت وذلك بإعتماد على هيكله والقطع المكانيكة مثل
                الموتور والقطع الالكترونية مثل الحساسات والكاميرا واهمها وحدة
                التحكم الرئيسية لهذا الروبوت وهي Arduino
              </p>
              <h4>التقيم الروبوت</h4>
              <div class="image">
                <img src="../../assets/robotDetails/Vector99.png" alt="" />
              </div>
              <div class="advantages">
                <ul class="list-unstyled">
                  <li v-for="(ele, index) in robotAdvantages" :key="index">
                    <i class="fa-regular fa-circle-check"></i>
                    <span>{{ ele }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.robotDescription {
  overflow: hidden;
  .wrapper {
    .back {
      padding-top: 200px;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      span {
        transform: translateX(28%) rotate(-11deg);
        background: #f6af26;
        width: 150%;
        margin-bottom: 60px;
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
    position: relative;
    .over {
      position: relative;
      z-index: 50;
      header {
        padding-right: 40px;
        button {
          padding: 13px 50px;
          background: transparent;
          color: #285282;
          border: 0;
          font-size: 23px;
          outline: 0;
          font-weight: 700;
          &.active {
            background: #fff;
          }
        }
      }
      .pairant {
        background: white;
        padding: 60px 80px;
        border-radius: 25px;

        .full_description {
          opacity: 0;
          visibility: hidden;
          transition: 0.7s;
          position: absolute;
          &.active {
            opacity: 1;
            position: relative;
            visibility: visible;
          }
          p {
            color: #9f9f9f;
            font-size: 24px;
            margin-bottom: 40px;
          }
          h4 {
            font-size: 30px;
            font-weight: 700;
            color: #285282;
          }
          .image {
            width: 10%;
            img {
              width: 100%;
            }
          }
          .advantages {
            padding: 40px 0 90px 0;
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
        }
      }
    }
  }
}

@media (max-width: 1500px) {
}

@media (max-width: 1000px) {
  .robotDescription .wrapper .over .pairant .full_description p {
    color: #9f9f9f;
    font-size: 14px;
    margin-bottom: 15px;
  }
  .robotDescription .wrapper .over .pairant {
    background: white;
    padding: 33px 29px;
    border-radius: 25px;
  }
  .robotDescription .wrapper .over header button {
    font-size: 17px;
  }
  .robotDescription .wrapper .over .pairant .full_description .image {
    width: 25%;
  }
  .robotDescription .wrapper .over .pairant .full_description .advantages {
    padding: 25px 0 90px 0;
    border-radius: 30px;
  }
  .robotDescription
    .wrapper
    .over
    .pairant
    .full_description
    .advantages
    ul
    li:not(:last-of-type) {
    margin-bottom: 10px;
  }
  .robotDescription
    .wrapper
    .over
    .pairant
    .full_description
    .advantages
    ul
    li
    span {
    font-size: 18px;
  }
  .robotDescription
    .wrapper
    .over
    .pairant
    .full_description
    .advantages
    ul
    li
    svg {
    font-size: 30px;
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
      page: 0,
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
  methods: {
    changePage(index) {
      this.page = index;
    },
  },
};
</script>

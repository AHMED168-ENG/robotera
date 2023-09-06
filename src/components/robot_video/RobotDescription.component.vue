<template>
  <section class="robot_description">
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
          <div class="row">
            <div class="col-md-6">
              <div class="content">
                <h2>روبونيوم Ai</h2>
                <div class="image">
                  <img src="../../assets/robotDetails/Vector99.png" alt="" />
                </div>
                <p>
                  هو روبوت يمكن مستخدمه من تعلم واختبار المفاهيم الاساسية في
                  تصميم وبرمجة الروبوت وذلك بإعتماد على هيكله والقطع المكانيكة
                  مثل الموتور والقطع الالكترونية مثل الحساسات والكاميرا واهمها
                  وحدة التحكم الرئيسية لهذا الروبوت وهي Arduino
                </p>
                <a href="" @click="openPdf('/catalog.pdf')">عرض الكاتالوج </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="show">
                <div class="image">
                  <img src="../../assets/robotDetails/test.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_image">
      <img src="../../assets/robotDetails/Isolation_Mode.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.robot_description {
  overflow: hidden;
  padding: 500px 0 300px;
  position: relative;
  &::before {
    content: "";
    background: #fdeed7;
    width: 17%;
    aspect-ratio: 1/1;
    position: absolute;
    top: 18%;
    left: 0%;
    z-index: 10;
    border-radius: 50%;
  }
  .wrapper {
    position: relative;
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

    .back {
      position: absolute;
      z-index: 15;
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
      z-index: 30;
      .content {
        padding: 100px 40px 70px 10%;
        width: 120%;
        background: white;
        border-radius: 25px;
        box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1),
          -10px -10px 15px rgba(0, 0, 0, 0.04);
        h2 {
          font-size: 50px;
          color: #f6af26;
          margin-bottom: 20px;
          font-weight: 700;
        }
        a {
          display: inline-block;
          padding: 9px 17px;
          border-radius: 10px;
          font-size: 20px;
          font-weight: 700;
          color: #f6af26;
          text-transform: capitalize;
          background: none;
          border: 2px solid #f6af26;
          outline: none;
        }
        .image {
          width: 36%;
          img {
            width: 100%;
          }
          margin-bottom: 20px;
        }
        p {
          color: #9f9f9f;
          font-size: 20px;
          width: 80%;
          font-weight: 600;
        }
      }
      .show {
        padding-top: 100px;
        direction: ltr;
        .image {
          width: 110%;
          img {
            width: 100%;
            aspect-ratio: 1/0.64;
            object-fit: fill;
          }
        }
      }
    }
  }
  .bottom_image {
    position: absolute;
    bottom: 1%;
    left: -2%;
    width: 14%;
    z-index: 20;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1500px) {
  .robot_description {
    padding: 430px 0 300px;
  }
  .robot_description .wrapper .over .content h2 {
    font-size: 45px;
  }
  .robot_description .wrapper .over .content p {
    font-size: 16px;
  }
  .robot_description .bottom_image {
    position: absolute;
    bottom: 6%;
    left: -1%;
    width: 14%;
    z-index: 20;
  }
}

@media (max-width: 1300px) {
  .robot_description {
    padding: 400px 0 300px;
  }
  .robot_description .wrapper .over .content h2 {
    font-size: 45px;
  }
  .robot_description .wrapper .over .content p {
    font-size: 16px;
  }
  .robot_description .bottom_image {
    position: absolute;
    bottom: 8%;
    left: -1%;
    width: 14%;
    z-index: 20;
  }
  .robot_description .wrapper .over .content {
    padding: 75px 40px 70px 10%;
  }
}

@media (max-width: 1000px) {
  .robot_description {
    padding: 280px 0 300px;
  }
  .robot_description .wrapper .over .content h2 {
    font-size: 36px;
  }
  .robot_description .wrapper .over .content p {
    font-size: 14px;
  }
  .robot_description .bottom_image {
    position: absolute;
    bottom: 15%;
    left: -1%;
    width: 14%;
    z-index: 20;
  }
  .robot_description .wrapper .over .content {
    padding: 30px 40px 30px 10%;
  }
}

@media (max-width: 750px) {
  .robot_description {
    padding: 300px 0 300px;
  }
  .robot_description .wrapper .over .content h2 {
    font-size: 36px;
  }

  .robot_description .wrapper .over .content .image {
    margin: auto;
    width: 40%;
  }
  .robot_description .wrapper .over .content p {
    font-size: 14px;
    width: 100%;
  }
  .robot_description .bottom_image {
    position: absolute;
    bottom: 15%;
    left: -5%;
    width: 25%;
    z-index: 20;
  }
  .robot_description .wrapper .over .content {
    padding: 30px 40px 30px 10%;
    text-align: center;
    width: 100%;
  }
  .robot_description .wrapper .over .show {
    padding: 0;
    .image {
      width: 90%;
      margin: -7% auto 0;
    }
  }
  .robot_description::before {
    width: 25%;
    top: 21%;
  }
}

@media (max-width: 400px) {
  .robot_description {
    padding: 250px 0 300px;
  }
  .robot_description .wrapper .over .content h2 {
    font-size: 36px;
  }

  .robot_description .wrapper .over .content .image {
    margin: auto;
    width: 40%;
  }
  .robot_description .wrapper .over .content p {
    font-size: 14px;
    width: 100%;
  }
  .robot_description .bottom_image {
    position: absolute;
    bottom: 17%;
    left: -6%;
    width: 30%;
    z-index: 20;
  }
  .robot_description .wrapper .over .content {
    padding: 30px 40px 30px 10%;
    text-align: center;
    width: 100%;
  }
  .robot_description .wrapper .over .show {
    padding: 0;
    .image {
      width: 100%;
      margin: -7% auto 0;
    }
  }
  .robot_description::before {
    width: 25%;
    top: 21%;
  }
}
</style>

<script>
export default {
  name: "RobotDescriptionComponent",
  methods: {
    openPdf(src) {
      window.open(src, "_blank");
    },
  },
};
</script>

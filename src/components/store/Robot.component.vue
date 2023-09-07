<template>
  <section class="robots">
    <div class="back">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container">
      <header>
        <h2>المتجر</h2>
        <div class="image">
          <img src="../../assets/store/Vector99.png" alt="" />
        </div>
      </header>
      <div class="robots_wrapper">
        <div class="robot">
          <div class="row">
            <div class="col-lg-7">
              <div class="content">
                <h2>روبوت روبونيوم Ai</h2>
                <p>
                  روبوت يمكن مستخدمه من تعلم واختبار المفاهيم الاساسية في تصميم
                  وبرمجة الروبوت روبوت يمكن مستخدمه من تعلم واختبار المفاهيم
                  الاساسية في تصميم وبرمجة الروبوتروبوت يمكن مستخدمه من تعلم
                  واختبار المفاهيم الاساسية في تصميم وبرمجة الروبوت روبوت يمكن
                  مستخدمه من تعلم واختبار المفاهيم الاساسية في تصميم وبرمجة
                  الروبوت
                </p>
                <router-link to="/robots/1"
                  >المزيد<i class="fa-solid fa-arrow-left"></i
                ></router-link>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="image">
                <img src="../../assets/store/tow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="robot">
          <div class="over">
            <div class="content">
              <i class="fas fa-spinner fa-spin"></i>
              <span>قريباً</span>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-7">
              <div class="content">
                <h2>روبوت روبونيوم Ai</h2>
                <p>
                  روبوت يمكن مستخدمه من تعلم واختبار المفاهيم الاساسية في تصميم
                  وبرمجة الروبوت روبوت يمكن مستخدمه من تعلم واختبار المفاهيم
                  الاساسية في تصميم وبرمجة الروبوتروبوت يمكن مستخدمه من تعلم
                  واختبار المفاهيم الاساسية في تصميم وبرمجة الروبوت روبوت يمكن
                  مستخدمه من تعلم واختبار المفاهيم الاساسية في تصميم وبرمجة
                  الروبوت
                </p>
                <router-link to="/robots/1"
                  >المزيد<i class="fa-solid fa-arrow-left"></i
                ></router-link>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="image">
                <img src="../../assets/store/one.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.robots {
  overflow: hidden;
  position: relative;
  .back {
    padding-top: 30%;
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
  .container {
    position: relative;
    z-index: 20;
  }
  header {
    text-align: center;
    padding: 100px 0;
    h2 {
      font-size: 45px;
      color: #285282;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .image {
      margin: auto;
      width: 15%;
      margin-left: auto;
      img {
        width: 100%;
      }
    }
  }
  .robots_wrapper {
    padding-bottom: 200px;
    .robot:not(:last-of-type) {
      margin-bottom: 20px;
    }
    .robot {
      overflow: hidden;
      position: relative;
      .over {
        display: flex;
        position: absolute;
        backdrop-filter: blur(5px);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: center;
        .content {
          background: rgb(238, 238, 238, 0.7);
          padding: 25px;
          width: 20%;
          display: flex;
          flex-direction: column;
          border-radius: 15px;
          svg {
            font-size: 120px;
            color: #ffb164;
            margin-bottom: 20px;
          }
          span {
            text-align: center;
            color: #ffb164;
            font-weight: 700;
            font-size: 20px;
          }
        }
      }
      .row {
        align-items: center;
      }
      background: white;
      padding: 50px 30px;
      border-radius: 30px;
      .content {
        h2 {
          color: #285282;
          font-size: 35px;
          margin-bottom: 20px;
          font-weight: 600;
        }
        p {
          color: #818286;
          width: 80%;
          font-size: 15px;
          margin-bottom: 15px;
        }
        a {
          color: white;
          background: #f69926;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 25px;
          border: 0;
          outline: 0;
          border-radius: 10px;
          svg {
            margin-right: 10px;
          }
        }
      }
      .image {
        width: 100%;
        img {
          width: 100%;
          aspect-ratio: 1/0.6;
          object-fit: contain;
        }
      }
    }
  }
}

@media (max-width: 1500px) {
}

@media (max-width: 1300px) {
}

@media (max-width: 1000px) {
  .robots .back {
    padding-top: 100%;
  }
  .robots .robots_wrapper .robot .content p {
    width: 100%;
  }
  .robots .robots_wrapper .robot .content a {
    width: 100%;
    margin-bottom: 10px;
  }
  .robots header {
    padding: 50px 0;
  }
  .robots header .image {
    width: 40%;
  }
  .robots .robots_wrapper .robot .over .content {
    width: 60%;
  }
}

@media (max-width: 750px) {
  .robots .robots_wrapper .robot .content h2 {
    font-size: 30px;
  }
  .robots .robots_wrapper .robot .content a {
    padding: 8px 25px;
  }
  .robots .robots_wrapper .robot {
    border-radius: 25px;
  }
  .robots .robots_wrapper {
    padding-bottom: 100px;
  }
  .robots .robots_wrapper .robot .over .content {
    width: 70%;
  }
}

@media (max-width: 400px) {
}
</style>

<script>
export default {
  name: "robotAdvantagesComponent",
  data() {
    return {};
  },
};
</script>

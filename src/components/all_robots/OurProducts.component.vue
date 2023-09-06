<template>
  <section class="our_products">
    <div class="content">
      <div class="back">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="over">
        <div class="container">
          <header>
            <h2>منتجاتنا</h2>
            <div class="image">
              <img src="../../assets/robots/Vector7.png" alt="" />
            </div>
          </header>
          <div class="row">
            <div
              class="col-md-4 col-lg-3 col-sm-6"
              v-for="(ele, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, , , , , ,]"
              :key="index"
            >
              <div class="item">
                <div class="image">
                  <img src="../../assets/robots/element.png" alt="" />
                </div>
                <div class="body">
                  <router-link to="/robot/details/1"
                    >روبوت روبونيوم Ai</router-link
                  >
                  <span>2500 ر.س</span>
                </div>
                <div class="foot d-flex">
                  <div class="rate">
                    <i class="fa-regular fa-star active"></i>
                    <i class="fa-regular fa-star active"></i>
                    <i class="fa-regular fa-star active"></i>
                    <i class="fa-regular fa-star active"></i>
                    <i class="fa-regular fa-star active"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <div class="cart">
                    <span>اضف الي العربه</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M15.8575 7.32383L17.1651 15.8238C17.3412 16.9679 16.4559 17.9998 15.2983 17.9998H2.70177C1.54411 17.9998 0.658837 16.9679 0.83487 15.8238L2.14254 7.32383C2.28431 6.40237 3.07717 5.72217 4.00946 5.72217H13.9906C14.9228 5.72217 15.7157 6.40237 15.8575 7.32383Z"
                        stroke="#0F8AC8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.8888 2.88887C10.8888 1.84568 10.0432 1 8.99995 1C7.95673 1 7.11108 1.84568 7.11108 2.88887"
                        stroke="#0F8AC8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.1593 12.3333H8.99262M8.99262 12.3333H11.8259M8.99262 12.3333V9.5M8.99262 12.3333V15.1666"
                        stroke="#F5911E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
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
.our_products {
  overflow: hidden;
  position: relative;
  padding: 30px 0 300px;
  .content {
    position: relative;
    .back {
      padding-top: 300px;

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
          height: 11.5%;
        }
        &:not(:nth-of-type(1)) {
          height: 11.5%;
          opacity: 0.9;
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
        &:nth-of-type(5) {
          opacity: 0.2;
        }
        &:nth-of-type(6) {
          opacity: 0.1;
        }
        &:nth-of-type(7) {
          opacity: 0.05;
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
      header {
        h2 {
          color: #285282;
          font-weight: 700;
          font-size: 30px;
        }
        .image {
          width: 13%;
          margin: 0 0 50px auto;
          direction: ltr !important;
          margin-right: -70px;
          img {
            width: 100%;
          }
        }
      }
      position: relative;
      z-index: 20;
      .item {
        background: white;
        border-radius: 25px;
        overflow: hidden;
        padding: 20px;
        box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1),
          -10px -10px 15px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        .image {
          width: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          margin-bottom: 15px;
        }
      }
      .body {
        a {
          display: block;
          color: #767676;
          font-size: 18px;
        }
        span {
          color: #0f8ac8;
          font-size: 15px;
        }
        margin-bottom: 15px;
      }
      .foot {
        align-items: center;
        justify-content: space-between;
        .rate {
          svg {
            color: #ffd600;
            font-size: 12px;
          }
        }
        .cart {
          cursor: pointer;
          span {
            font-size: 13px;
            color: #f5911e;
            text-decoration: underline;
            margin-left: 10px;
          }
          svg {
            padding: 5px;
            border-radius: 10px;
            border: 1px solid #f5911e;
          }
        }
      }
    }
  }
}
@media (max-width: 1500px) {
  .our_products .content .over header .image {
    margin-right: -15px;
    width: 18%;
  }
}

@media (max-width: 1000px) {
}

@media (max-width: 700px) {
  .our_products .content .over header .image {
    width: 40%;
  }
}
@media (max-width: 400px) {
}
</style>

<script>
export default {
  name: "OurProductCompany",
};
</script>

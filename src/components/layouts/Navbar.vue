<template>
  <nav :class="['navbar', isFixed ? 'active' : '']">
    <div class="container">
      <div class="navbar_wrapper">
        <div class="row align-items-center">
          <div class="col-lg-3 col-6">
            <div class="logo">
              <router-link to="/">
                <div class="logo_wrapper">
                  <img src="../../assets/navbar/Layer_1.png" alt="" /></div
              ></router-link>
            </div>
          </div>
          <div class="col-lg-6 d-lg-block d-none">
            <div class="links">
              <div class="nav_wrapper">
                <ul class="list-unstyled d-flex">
                  <li>
                    <router-link to="/">
                      <div class="link d-flex">
                        <div class="image">
                          <img src="../../assets/navbar/home.png" alt="" />
                        </div>
                        <span>الرئيسية</span>
                      </div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/robots/1">
                      <div class="link d-flex">
                        <div class="image">
                          <img src="../../assets//navbar/about.png" alt="" />
                        </div>
                        <span>عن روبوتيرا</span>
                      </div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/robot/details/1">
                      <div class="link d-flex">
                        <div class="image">
                          <img src="../../assets//navbar/products.png" alt="" />
                        </div>
                        <span>منتجاتنا</span>
                      </div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/robots">
                      <div class="link d-flex">
                        <div class="image">
                          <img src="../../assets//navbar/shop.png" alt="" />
                        </div>
                        <span>المتجر</span>
                      </div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/news">
                      <div class="link d-flex">
                        <div class="image">
                          <img src="../../assets//navbar/news.png" alt="" />
                        </div>
                        <span>الاخبار</span>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-lg-block d-none">
            <div class="contact">
              <div class="contact_wrapper">
                <router-link to="/contact">
                  <div class="image">
                    <img src="../../assets/navbar/contact.png" alt="" />
                  </div>
                  <span>اتصل بنا</span>
                </router-link>
                <router-link to="/login">
                  <span>دخول </span>
                </router-link>
                <router-link to="/register">
                  <span> تسجيل</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-6 d-block d-lg-none">
            <div class="menue_icon" @click="changeToggel">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div :class="['menue d-block d-lg-none', isTaggle ? 'active' : '']">
            <ul class="list-unstyled d-flex flex-column">
              <li>
                <router-link to="/" @click="changeToggel">
                  <div class="link d-flex flex-column">
                    <div class="image">
                      <img src="../../assets/navbar/home.png" alt="" />
                    </div>
                    <span>الرئيسية</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/robots/1" @click="changeToggel">
                  <div class="link d-flex flex-column">
                    <div class="image">
                      <img src="../../assets//navbar/about.png" alt="" />
                    </div>
                    <span>عن روبوتيرا</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/robot/details/1" @click="changeToggel">
                  <div class="link d-flex flex-column">
                    <div class="image">
                      <img src="../../assets//navbar/products.png" alt="" />
                    </div>
                    <span>منتجاتنا</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/robots" @click="changeToggel">
                  <div class="link d-flex flex-column">
                    <div class="image">
                      <img src="../../assets//navbar/shop.png" alt="" />
                    </div>
                    <span>المتجر</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/contact" @click="changeToggel">
                  <div class="link d-flex flex-column">
                    <div class="image">
                      <img src="../../assets//navbar/contact.png" alt="" />
                    </div>
                    <span>اتصل بنا</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/news " @click="changeToggel">
                  <div class="link d-flex flex-column">
                    <div class="image">
                      <img src="../../assets//navbar/news.png" alt="" />
                    </div>
                    <span>الاخبار</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/login" @click="changeToggel">
                  <div class="link d-flex flex-column">
                    <span> تسجيل الدخول</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/login" @click="changeToggel">
                  <div class="link d-flex flex-column">
                    <span> انشاء حساب</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.navbar {
  a.router-link-exact-active {
    .link {
      flex-direction: column;
      .image {
        width: 43px !important;
      }
    }
    span {
      color: #f7a633 !important;
    }
  }

  &.active {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  background: white;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 500;
  .container {
    .navbar_wrapper {
      padding: 5px 0;
      ul {
        align-items: center;
      }
      .logo {
        .logo_wrapper {
          width: 60%;
          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
      .links {
        .nav_wrapper {
          ul {
            justify-content: center;
            li {
              margin: 0 18px;
              a {
                .link {
                  .image {
                    width: 33px;
                    margin-left: 5px;
                  }
                  align-items: center;
                  justify-content: center;
                  .image {
                    img {
                      width: 100%;
                      aspect-ratio: 1/1;
                      object-fit: contain;
                    }
                  }
                  span {
                    color: #3fa1d3;
                    font-family: Cairo;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                  }
                }
              }
            }
          }
        }
      }
      .contact {
        .contact_wrapper {
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: center;
          a:nth-of-type(1) {
            display: inline-flex;
            align-items: center;
            color: $yellow-color;
            // border: 1px solid $yellow-color;
            // border-radius: 20px;
            padding: 3px 0px 3px 25px;
            align-items: center;
            justify-content: space-between;

            .image {
              margin-left: 10px;
              width: 23px;
              height: 23px;
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                width: 100%;
                height: 100%;
              }
            }
            span {
              font-weight: 600;
              font-size: 13px;
            }
          }
          a:nth-of-type(3) {
            background: #0f8ac8 !important;
            color: #fff !important;
            border-color: #0f8ac8 !important;
          }
          a:nth-of-type(2) {
            background: #fff !important;
            color: #0f8ac8 !important;
            border-color: #0f8ac8 !important;
          }
          a:not(:first-of-type) {
            margin: 0 5px;
            font-size: 14px;
            background: transparent;
            color: $yellow-color;
            padding: 3px 0;
            border-radius: 20px;
            display: flex;
            align-items: center;
            flex: 1;
            border: 1px solid $yellow-color;
            transition: 0.4s;
            justify-content: center;
            font-weight: 600;
            &:hover {
              background: #fff !important;
              color: $yellow-color !important;
              border-color: $yellow-color !important;
            }
          }
          a:not(:first-of-type).router-link-exact-active {
            background: white !important;
            border: 1px solid $yellow-color !important;
            span {
              color: $yellow-color !important;
            }
          }
        }
      }
      .menue_icon {
        text-align: left;
        svg {
          font-size: 33px;
          cursor: pointer;
          opacity: 0.8;
          color: $menue-color;
        }
      }
      .menue {
        padding: 0 !important;
        overflow: visible !important;
        width: 99%;
        transition: 0.5s;
        &.active {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        position: absolute;
        top: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
        background: white;
        border: 1px solid #ddd;
        ul {
          padding: 10px;
          li {
            &:not(:last-of-type) {
              a {
                border-bottom: 1px solid #ddd;
              }
            }
            a {
              &:hover {
                background: #eee;
              }
              transition: 0.4s;
              padding: 10px 0;
              display: block;
              .link {
                .image {
                  width: 40px;
                }
                align-items: center;
                justify-content: center;
                .image {
                  img {
                    width: 100%;
                    aspect-ratio: 1/1;
                    object-fit: contain;
                  }
                }
                span {
                  color: $blue-color;
                  font-family: Cairo;
                  font-size: 15px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
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
  .navbar
    .container
    .navbar_wrapper
    .contact
    .contact_wrapper
    a:not(:first-of-type) {
    font-size: 10px;
    padding: 5px 5px;
  }
  .navbar
    .container
    .navbar_wrapper
    .contact
    .contact_wrapper
    a:nth-of-type(1)
    .image {
    margin-left: 10px;
  }
  .navbar {
    .logo_wrapper {
      width: 80% !important;
    }
  }
  .navbar .container .navbar_wrapper .links .nav_wrapper ul li a .link .image {
    width: 37px;
  }
}
@media (max-width: 1200px) {
  .navbar_wrapper .row > div:nth-of-type(3) {
    padding: 0;
  }
  .navbar
    .container
    .navbar_wrapper
    .contact
    .contact_wrapper
    a:not(:first-of-type) {
    font-size: 10px;
  }
  .navbar {
    .container .navbar_wrapper .contact {
      padding-left: 10px !important;
    }
    .logo_wrapper {
      width: 98% !important;
    }
  }
  .navbar .container .navbar_wrapper .links .nav_wrapper ul li a .link .image {
    width: 33px;
  }

  .navbar .container .navbar_wrapper .links .nav_wrapper ul li {
    margin: 0 15px;
  }
}
@media (max-width: 992px) {
  .navbar .container .navbar_wrapper ul {
    align-items: inherit;
  }
  .navbar {
    .link {
      .image {
        width: 37px;
      }
    }
    .container .navbar_wrapper .links .nav_wrapper ul li a .link span {
      font-size: 14px !important;
    }
    .navbar_wrapper {
      padding: 10px 0 !important;
    }
    .menue_icon {
      svg {
        font-size: 26px !important;
      }
    }
    .logo_wrapper {
      width: 57% !important;
    }
  }
}
@media (max-width: 600px) {
  .navbar {
    .logo_wrapper {
      width: 90% !important;
    }
    .menue_icon {
      svg {
        font-size: 25px !important;
      }
    }
  }
}
@media (max-width: 375px) {
  .navbar {
  }
}
</style>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      isTaggle: false,
      isFixed: false,
    };
  },
  methods: {
    changeToggel() {
      this.isTaggle = !this.isTaggle;
    },
    navScrole() {
      window.onscroll = () => {
        let navHeight = window.document.querySelector("nav").offsetHeight;
        let scrollY = window.scrollY;
        if (scrollY > 500) {
          this.isFixed = true;
          document.body.setAttribute(
            "style",
            "padding-top:" + navHeight + "px"
          );
        } else {
          document.body.setAttribute("style", "padding-top:" + 0);
          this.isFixed = false;
        }
      };
    },
  },
  created() {
    this.navScrole();
  },
};
</script>

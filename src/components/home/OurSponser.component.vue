<template>
    <section class="OurSponser">
        <div class="container">
            <header>
                <h5>شركائنا</h5>
                <h2>نعتز ونفتخر بشراكاتنا المتنوعة والفريدة</h2>
            </header>
            <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="logo">
                        <router-link to="/">
                            <img
                                src="../../assets/home/images/logos/one.png"
                                alt=""
                        /></router-link>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="logo">
                        <router-link to="/">
                            <img
                                src="../../assets/home/images/logos/tow.png"
                                alt=""
                        /></router-link>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="logo">
                        <router-link to="/">
                            <img
                                src="../../assets/home/images/logos/three.png"
                                alt=""
                        /></router-link>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="logo">
                        <router-link to="/">
                            <img
                                src="../../assets/home/images/logos/four.png"
                                alt=""
                        /></router-link>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="logo">
                        <router-link to="/">
                            <img
                                src="../../assets/home/images/logos/fif.png"
                                alt=""
                        /></router-link>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div class="logo">
                        <router-link to="/">
                            <img
                                src="../../assets/home/images/logos/sex.png"
                                alt=""
                        /></router-link>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                    <div class="logo">
                        <router-link to="/">
                            <img
                                src="../../assets/home/images/logos/seven.png"
                                alt=""
                        /></router-link>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-6">
                    <div class="logo">
                        <router-link to="/">
                            <img
                                src="../../assets/home/images/logos/eight.png"
                                alt=""
                        /></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.OurSponser {
    .row {
        justify-content: center;
        > div {
            margin-bottom: 15px;
            padding: 0 !important;
        }
    }
    padding-bottom: 90px;
    header {
        text-align: center;
        margin-bottom: 100px;
        h5 {
            color: #f9ae3b;
            font-size: 15px;
            position: relative;
            display: inline-block;
            padding-bottom: 10px;
            position: relative;
            margin-bottom: 30px;
            &:before {
                content: "";
                width: 80%;
                height: 2px;
                background: #f9ae3b;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        h2 {
            color: #9f9f9f;
            font-size: 27px;
        }
    }
    .logo {
        width: 100%;
        a {
            width: 90%;
            display: block;
            img {
                object-fit: contain;
                aspect-ratio: 1 / 0.5;
                width: 100%;
            }
        }
    }
}

@media (max-width: 1500px) {
    .OurSponser header {
        margin-bottom: 70px;
    }
}
@media (max-width: 1300px) {
    .OurSponser header {
        margin-bottom: 50px;
    }
}

@media (max-width: 1000px) {
    .OurSponser .row > div {
        margin-bottom: 25px;
    }
}

@media (max-width: 700px) {
    .OurSponser header h2 {
        font-size: 27px;
    }
}
@media (max-width: 400px) {
}
</style>

<script>
export default {
    name: "OurSponserComponent",
};
</script>

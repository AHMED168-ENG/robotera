<template>
  <div class="home">
    <LandingPageComponent></LandingPageComponent>
    <CompanyFieldsComponant></CompanyFieldsComponant>
    <OurProductsComponent></OurProductsComponent>
    <NewsComponent></NewsComponent>
    <RobotsComponent></RobotsComponent>
    <OurSponserComponent></OurSponserComponent>
    <UpperFooterComponent></UpperFooterComponent>
  </div>
</template>

<script>
import LandingPageComponent from "@/components/home/LandingPage.component.vue";
import CompanyFieldsComponant from "@/components/home/CompanyFields.componant.vue";
import OurProductsComponent from "@/components/home/OurProducts.component.vue";
import NewsComponent from "@/components/home/News.component.vue";
import RobotsComponent from "@/components/home/Ropots.componant.vue";
import OurSponserComponent from "@/components/home/OurSponser.component.vue";
import UpperFooterComponent from "@/components/layouts/UpprtFooter.component.vue";

export default {
  name: "HomeView",
  components: {
    LandingPageComponent,
    CompanyFieldsComponant,
    OurProductsComponent,
    NewsComponent,
    RobotsComponent,
    OurSponserComponent,
    UpperFooterComponent,
  },
  created() {
    this.$store.commit("setPage", "home");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
};
</script>
